import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { Ingredient } from './ingredients.model';

export const url : string = 'http://localhost:3001/ingredients'
export const configuration : AxiosRequestConfig = { headers : { 'Content-Type' : 'application/json' } }

export const getAllIngredients = async () : Promise<AxiosResponse<Ingredient[]>> =>
    (await axios.get(url, configuration)).data

export const addIngredient = async (ingredient : Ingredient) : Promise<AxiosResponse<Ingredient>> =>
    (await axios.post(url, ingredient, configuration)).data

export const updateIngredient = async (ingredient: Ingredient) : Promise<AxiosResponse<Ingredient>> =>
    (await axios.put(`${url}/${ingredient.id}`, ingredient, configuration)).data

export const removeIngredient = async (id : string) : Promise<AxiosResponse<Ingredient>> =>
    (await axios.delete(`${url}/${id}`, configuration)).data