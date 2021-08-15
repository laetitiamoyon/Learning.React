import { Ingredient } from './ingredients.model';

export enum IngredientAction
{
    ADD_INGREDIENT = "ingredients/ADD_INGREDIENT",
    UPDATE_INGREDIENT = "ingredients/UPDATE_INGREDIENT",
    REMOVE_INGREDIENT = "ingredients/REMOVE_INGREDIENT",
}

export interface AddIngredientAction
{ 
    type: IngredientAction.ADD_INGREDIENT
    payload : Ingredient
}

export interface UpdateIngredientAction
{ 
    type: IngredientAction.UPDATE_INGREDIENT
    payload : Ingredient
}

export interface RemoveRecipeAction
{ 
    type: IngredientAction.REMOVE_INGREDIENT
    payload : { id : string }
}

export const addIngredientAction = (payload : Ingredient) : AddIngredientAction => ({ 
    type: IngredientAction.ADD_INGREDIENT,
    payload
})

export const updateIngredientAction = (payload : Ingredient) : UpdateIngredientAction => ({ 
    type: IngredientAction.UPDATE_INGREDIENT,
    payload
})

export const removeIngredientAction = (id : string) : RemoveRecipeAction => ({ 
    type: IngredientAction.REMOVE_INGREDIENT, 
    payload : { id } 
})

export type IngredientActions = 
    AddIngredientAction |
    UpdateIngredientAction |
    RemoveRecipeAction