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
    payload : Recipe
}

export interface RemoveRecipeAction
{ 
    type: IngredientAction.REMOVE_INGREDIENT
    payload : { id : string }
}

export const addIngredientAction = (title, unity) => ({ 
    type: 'ADD_INGREDIENT', 
    payload : { title, unity } 
})

export const removeIngredientAction = (id) => ({ 
    type: 'REMOVE_INGREDIENT', 
    payload : { id } 
})

export const updateIngredientAction = (id, title, unity) => ({ 
    type: 'UPDATE_INGREDIENT',
    payload :
    { 
        id, 
        title,
        unity
    } 
})