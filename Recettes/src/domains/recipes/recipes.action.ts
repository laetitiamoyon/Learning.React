import { Ingredient } from '../ingredients/ingredients.model';
import { Recipe } from './recipes.model';

export enum RecipeAction
{
    ADD_RECIPE = "recipes/ADD_RECIPE",
    UPDATE_RECIPE = "recipes/UPDATE_RECIPE",
    UPDATE_RECIPE_INGREDIENT = "recipes/UPDATE_RECIPE_INGREDIENT",
    REMOVE_RECIPE = "recipes/REMOVE_RECIPE",
    REMOVE_RECIPE_INGREDIENT = "recipes/REMOVE_RECIPES_INGREDIENT"
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

export interface UpdateIngredientRecipeAction
{ 
    type: RecipeAction.UPDATE_RECIPE_INGREDIENT
    payload : Ingredient
}

export interface RemoveRecipeAction
{ 
    type: RecipeAction.REMOVE_RECIPE
    payload : { id : string }
}

export interface RemoveIngredientRecipeAction
{ 
    type: RecipeAction.REMOVE_RECIPE_INGREDIENT
    payload : { ingredientId : string }
}

export const addRecipeAction = (payload : Recipe) : AddRecipeAction => ({
    type : RecipeAction.ADD_RECIPE,
    payload
})

export const updateRecipeAction = (payload : Recipe) : UpdateRecipeAction => ({
    type : RecipeAction.UPDATE_RECIPE,
    payload
})

export const updateIngredientRecipeAction = (payload: Ingredient) : UpdateIngredientRecipeAction => ({
    type : RecipeAction.UPDATE_RECIPE_INGREDIENT,
    payload
})

export const removeRecipeAction = (id: string) : RemoveRecipeAction => ({ 
    type: RecipeAction.REMOVE_RECIPE,
    payload : { id } 
})

export const removeIngredientRecipeAction = (ingredientId: string) : RemoveIngredientRecipeAction => ({ 
    type: RecipeAction.REMOVE_RECIPE_INGREDIENT,
    payload : { ingredientId } 
})

export type RecipeActions = 
    AddRecipeAction |
    UpdateRecipeAction |
    UpdateIngredientRecipeAction |
    RemoveRecipeAction |
    RemoveIngredientRecipeAction