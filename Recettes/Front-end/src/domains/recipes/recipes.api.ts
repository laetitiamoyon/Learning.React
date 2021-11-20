import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { Recipe } from './recipes.model'

export const url : string = 'http://localhost:3001/recipes'
export const configuration : AxiosRequestConfig = { headers : { 'Content-Type' : 'application/json' } }


export const getAllRecipes = async () : Promise<AxiosResponse<Recipe[]>> =>
    (await axios.get(url, configuration)).data

export const addRecipe = async (recipe : Recipe) : Promise<AxiosResponse<Recipe>> =>
    (await axios.post(url, recipe, configuration)).data

export const updateRecipe = async (recipe : Recipe) : Promise<AxiosResponse<Recipe>> => 
    (await axios.put(`${url}/${recipe.id}`, recipe, configuration)).data

export const removeRecipe = async (id : string) : Promise<AxiosResponse<Recipe>> =>
    (await axios.delete(`${url}/${id}`, configuration)).data