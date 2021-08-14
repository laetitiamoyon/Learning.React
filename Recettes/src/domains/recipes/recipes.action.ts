import { Recipe } from "./recipes.model"

export enum RecipeAction
{
    ADD_RECIPE = "recipes/ADD_RECIPE",
    UPDATE_RECIPE = "recipes/UPDATE_RECIPE",
    REMOVE_RECIPE = "recipes/REMOVE_RECIPE",
}

export interface AddRecipeAction
{ 
    type: RecipeAction.ADD_RECIPE
    payload : Recipe
}

export interface UpdateRecipeAction
{ 
    type: RecipeAction.UPDATE_RECIPE
    payload : Recipe
}

export interface RemoveRecipeAction
{ 
    type: RecipeAction.REMOVE_RECIPE
    payload : { id : string }
}

export const addRecipeAction = (payload : Recipe) : AddRecipeAction => ({
    type : RecipeAction.ADD_RECIPE,
    payload
})

export const updateRecipeAction = (payload : Recipe) : UpdateRecipeAction => ({
    type : RecipeAction.UPDATE_RECIPE,
    payload
})

export const removeRecipeAction = (id: string) : RemoveRecipeAction => ({ 
    type: RecipeAction.REMOVE_RECIPE,
    payload : { id } 
})

export type RecipeActions = 
    AddRecipeAction |
    RemoveRecipeAction |
    UpdateRecipeAction