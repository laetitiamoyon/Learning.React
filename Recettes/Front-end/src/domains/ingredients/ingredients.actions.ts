import { Ingredient } from './ingredients.model';

export enum IngredientAction
{
    GET_INGREDIENTS_REQUEST = "ingredients/GET_INGREDIENT_REQUEST",
    GET_INGREDIENTS_SUCCESS = "ingredients/GET_INGREDIENT_SUCCESS",
    GET_INGREDIENTS_FAILED = "ingredients/GET_INGREDIENT_FAILED",

    ADD_INGREDIENT_REQUEST = "ingredients/ADD_INGREDIENT_REQUEST",
    ADD_INGREDIENT_SUCCESS = "ingredients/ADD_INGREDIENT_SUCCESS",
    ADD_INGREDIENT_FAILED = "ingredients/ADD_INGREDIENT_FAILED",

    EDIT_INGREDIENT_REQUEST = "ingredients/EDIT_INGREDIENT_REQUEST",
    EDIT_INGREDIENT_SUCCESS = "ingredients/EDIT_INGREDIENT_SUCCESS",
    EDIT_INGREDIENT_FAILED = "ingredients/EDIT_INGREDIENT_FAILED",

    REMOVE_INGREDIENT_REQUEST = "ingredients/REMOVE_INGREDIENT_REQUEST",
    REMOVE_INGREDIENT_SUCCESS = "ingredients/REMOVE_INGREDIENT_SUCCESS",
    REMOVE_INGREDIENT_FAILED = "ingredients/REMOVE_INGREDIENT_FAILED"
}

export interface GetIngredientsRequestAction
{ 
    type: IngredientAction.GET_INGREDIENTS_REQUEST
}

export interface GetIngredientsSuccessAction
{ 
    type: IngredientAction.GET_INGREDIENTS_SUCCESS
    payload : Ingredient[]
}

export interface GetIngredientsFailedAction
{ 
    type: IngredientAction.GET_INGREDIENTS_FAILED
    error : string
}

export interface AddIngredientRequestAction
{ 
    type: IngredientAction.ADD_INGREDIENT_REQUEST
    payload : Ingredient
}

export interface AddIngredientSuccessAction
{ 
    type: IngredientAction.ADD_INGREDIENT_SUCCESS
    payload : Ingredient
}

export interface AddIngredientFailedAction
{ 
    type: IngredientAction.ADD_INGREDIENT_FAILED
    error : string
}

export interface EditIngredientRequestAction
{ 
    type: IngredientAction.EDIT_INGREDIENT_REQUEST
    payload : Ingredient
}

export interface EditIngredientSuccessAction
{ 
    type: IngredientAction.EDIT_INGREDIENT_SUCCESS
    payload : Ingredient
}

export interface EditIngredientFailedAction
{ 
    type: IngredientAction.EDIT_INGREDIENT_FAILED
    error : string
}

export interface RemoveIngredientRequestAction
{ 
    type: IngredientAction.REMOVE_INGREDIENT_REQUEST
    payload : { id : string }
}

export interface RemoveIngredientSuccessAction
{ 
    type: IngredientAction.REMOVE_INGREDIENT_SUCCESS
    payload : { id : string }
}

export interface RemoveIngredientFailedAction
{ 
    type: IngredientAction.REMOVE_INGREDIENT_FAILED
    error : string
}

export const getIngredientsRequestAction = () : GetIngredientsRequestAction => ({
    type : IngredientAction.GET_INGREDIENTS_REQUEST,
})

export const getIngredientsSuccessAction = (payload : Ingredient[]) : GetIngredientsSuccessAction => ({
    type : IngredientAction.GET_INGREDIENTS_SUCCESS,
    payload
})

export const getIngredientsFailedAction = (error : string) : GetIngredientsFailedAction => ({
    type : IngredientAction.GET_INGREDIENTS_FAILED,
    error
})

export const addIngredientRequestAction = (payload : Ingredient) : AddIngredientRequestAction => ({
    type : IngredientAction.ADD_INGREDIENT_REQUEST,
    payload
})

export const addIngredientSuccessAction = (payload : Ingredient) : AddIngredientSuccessAction => ({
    type : IngredientAction.ADD_INGREDIENT_SUCCESS,
    payload
})

export const addIngredientFailedAction = (error : string) : AddIngredientFailedAction => ({
    type : IngredientAction.ADD_INGREDIENT_FAILED,
    error
})

export const editIngredientRequestAction = (payload : Ingredient) : EditIngredientRequestAction => ({
    type : IngredientAction.EDIT_INGREDIENT_REQUEST,
    payload 
})

export const editIngredientSuccessAction = (payload : Ingredient) : EditIngredientSuccessAction => ({
    type : IngredientAction.EDIT_INGREDIENT_SUCCESS,
    payload 
})

export const editIngredientFailedAction = (error : string) : EditIngredientFailedAction => ({
    type : IngredientAction.EDIT_INGREDIENT_FAILED,
    error
})

export const removeIngredientRequestAction = (id: string) : RemoveIngredientRequestAction => ({ 
    type: IngredientAction.REMOVE_INGREDIENT_REQUEST,
    payload : { id } 
})

export const RemoveIngredientSuccessAction = (id: string) : RemoveIngredientSuccessAction => ({ 
    type: IngredientAction.REMOVE_INGREDIENT_SUCCESS,
    payload : { id } 
})

export const removeIngredientFailedAction = (error : string) : RemoveIngredientFailedAction => ({ 
    type: IngredientAction.REMOVE_INGREDIENT_FAILED,
    error 
})

export type IngredientActions = 
    GetIngredientsRequestAction |
    GetIngredientsSuccessAction |
    GetIngredientsFailedAction |

    AddIngredientRequestAction |
    AddIngredientSuccessAction |
    AddIngredientFailedAction |
    
    EditIngredientRequestAction |
    EditIngredientSuccessAction |
    EditIngredientFailedAction |
    
    RemoveIngredientRequestAction | 
    RemoveIngredientSuccessAction | 
    RemoveIngredientFailedAction 