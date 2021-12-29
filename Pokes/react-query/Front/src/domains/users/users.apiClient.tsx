import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { IUser } from './users.model'

export const url : string = 'http://localhost:3001/users'
export const configuration : AxiosRequestConfig = { headers : { 'Content-Type' : 'application/json' } }

export const getAllUsers = async () : Promise<IUser[]> =>
    (await axios.get(url, configuration)).data

export const addUser = async (user : IUser) : Promise<AxiosResponse<IUser>> =>
    (await axios.post(url, user, configuration)).data

export const updateUser = async (user : IUser) : Promise<AxiosResponse<IUser>> =>
    (await axios.put(`${url}/${user.id}`, user, configuration)).data

export const removeUser = async (id : string) : Promise<AxiosResponse<IUser>> =>
    (await axios.delete(`${url}/${id}`, configuration)).data;