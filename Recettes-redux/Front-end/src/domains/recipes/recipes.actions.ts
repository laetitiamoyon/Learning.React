import { Ingredient } from '../ingredients/ingredients.model';
import { Recipe, RemoveRecipeIngredientSuccessPayload, UpdateRecipeIngredientSuccessPayload } from './recipes.model';

export enum RecipeAction
{
    GET_RECIPES_REQUEST = "RECIPES/GET_RECIPE_REQUEST",
    GET_RECIPES_SUCCESS = "RECIPES/GET_RECIPE_SUCCESS",
    GET_RECIPES_FAILED = "RECIPES/GET_RECIPE_FAILED",

    ADD_RECIPE_REQUEST = "RECIPES/ADD_RECIPE_REQUEST",
    ADD_RECIPE_SUCCESS = "RECIPES/ADD_RECIPE_SUCCESS",
    ADD_RECIPE_FAILED = "RECIPES/ADD_RECIPE_FAILED",

    EDIT_RECIPE_REQUEST = "RECIPES/EDIT_RECIPE_REQUEST",
    EDIT_RECIPE_SUCCESS = "RECIPES/EDIT_RECIPE_SUCCESS",
    EDIT_RECIPE_FAILED = "RECIPES/EDIT_RECIPE_FAILED",

    UPDATE_RECIPE_INGREDIENT_REQUEST = "RECIPES/UPDATE_RECIPE_INGREDIENT_REQUEST",
    UPDATE_RECIPE_INGREDIENT_SUCCESS = "RECIPES/UPDATE_RECIPE_INGREDIENT_SUCCESS",
    UPDATE_RECIPE_INGREDIENT_FAILED = "RECIPES/UPDATE_RECIPE_INGREDIENT_FAILED",

    REMOVE_RECIPE_REQUEST = "RECIPES/REMOVE_RECIPE_REQUEST",
    REMOVE_RECIPE_SUCCESS = "RECIPES/REMOVE_RECIPE_SUCCESS",
    REMOVE_RECIPE_FAILED = "RECIPES/REMOVE_RECIPE_FAILED",

    REMOVE_RECIPE_INGREDIENT_REQUEST = "RECIPES/REMOVE_RECIPE_INGREDIENT_REQUEST",
    REMOVE_RECIPE_INGREDIENT_SUCCESS = "RECIPES/REMOVE_RECIPE_INGREDIENT_SUCCESS",
    REMOVE_RECIPE_INGREDIENT_FAILED = "RECIPES/REMOVE_RECIPE_INGREDIENT_FAILED",

    SET_INFORMATION_MESSAGE = "SET_INFORMATION_MESSAGE"
}

export interface GetRecipesRequestAction
{ 
    type: RecipeAction.GET_RECIPES_REQUEST
}

export interface GetRecipesSuccessAction
{ 
    type: RecipeAction.GET_RECIPES_SUCCESS
    payload : Recipe[]
}

export interface GetRecipesFailedAction
{ 
    type: RecipeAction.GET_RECIPES_FAILED
    error : string
}

export interface AddRecipeRequestAction
{ 
    type: RecipeAction.ADD_RECIPE_REQUEST
    payload : Recipe
}

export interface AddRecipeSuccessAction
{ 
    type: RecipeAction.ADD_RECIPE_SUCCESS
    payload : Recipe
}

export interface AddRecipeFailedAction
{ 
    type: RecipeAction.ADD_RECIPE_FAILED
    error : string
}

export interface EditRecipeRequestAction
{ 
    type: RecipeAction.EDIT_RECIPE_REQUEST
    payload : Recipe
}

export interface EditRecipeSuccessAction
{ 
    type: RecipeAction.EDIT_RECIPE_SUCCESS
    payload : Recipe
}

export interface EditRecipeFailedAction
{ 
    type: RecipeAction.EDIT_RECIPE_FAILED
    error : string
}

export interface UpdateRecipeIngredientRequestAction
{ 
    type: RecipeAction.UPDATE_RECIPE_INGREDIENT_REQUEST
    payload : Ingredient
}

export interface UpdateRecipeIngredientSuccessAction
{ 
    type: RecipeAction.UPDATE_RECIPE_INGREDIENT_SUCCESS
    payload : UpdateRecipeIngredientSuccessPayload
}

export interface UpdateRecipeIngredientFailedAction
{ 
    type: RecipeAction.UPDATE_RECIPE_INGREDIENT_FAILED
    error : string
}

export interface RemoveRecipeRequestAction
{ 
    type: RecipeAction.REMOVE_RECIPE_REQUEST
    payload : { id : string }
}

export interface RemoveRecipeSuccessAction
{ 
    type: RecipeAction.REMOVE_RECIPE_SUCCESS
    payload : { id : string }
}

export interface RemoveRecipeFailedAction
{ 
    type: RecipeAction.REMOVE_RECIPE_FAILED
    error : string
}

export interface RemoveRecipeIngredientRequestAction
{ 
    type: RecipeAction.REMOVE_RECIPE_INGREDIENT_REQUEST
    payload : { ingredientId : string }
}

export interface RemoveRecipeIngredientSuccessAction
{ 
    type: RecipeAction.REMOVE_RECIPE_INGREDIENT_SUCCESS
    payload : RemoveRecipeIngredientSuccessPayload
}

export interface RemoveRecipeIngredientFailedAction
{ 
    type: RecipeAction.REMOVE_RECIPE_INGREDIENT_FAILED
    error : string
}

export interface SetInformationMessageAction
{
    type : RecipeAction.SET_INFORMATION_MESSAGE,
    payload? : string
}

export const getRecipesRequestAction = () : GetRecipesRequestAction => ({
    type : RecipeAction.GET_RECIPES_REQUEST,
})

export const getRecipesSuccessAction = (payload : Recipe[]) : GetRecipesSuccessAction => ({
    type : RecipeAction.GET_RECIPES_SUCCESS,
    payload
})

export const getRecipesFailedAction = (error : string) : GetRecipesFailedAction => ({
    type : RecipeAction.GET_RECIPES_FAILED,
    error
})

export const addRecipeRequestAction = (payload : Recipe) : AddRecipeRequestAction => ({
    type : RecipeAction.ADD_RECIPE_REQUEST,
    payload
})

export const addRecipeSuccessAction = (payload : Recipe) : AddRecipeSuccessAction => ({
    type : RecipeAction.ADD_RECIPE_SUCCESS,
    payload
})

export const addRecipeFailedAction = (error : string) : AddRecipeFailedAction => ({
    type : RecipeAction.ADD_RECIPE_FAILED,
    error
})

export const editRecipeRequestAction = (recipe : Recipe) : EditRecipeRequestAction => ({
    type : RecipeAction.EDIT_RECIPE_REQUEST,
    payload : recipe
})

export const editRecipeSuccessAction = (payload : Recipe) : EditRecipeSuccessAction => ({
    type : RecipeAction.EDIT_RECIPE_SUCCESS,
    payload 
})

export const editRecipeFailedAction = (error : string) : EditRecipeFailedAction => ({
    type : RecipeAction.EDIT_RECIPE_FAILED,
    error
})

export const updateRecipeIngredientRequestAction = (ingredient : Ingredient) : UpdateRecipeIngredientRequestAction => ({
    type : RecipeAction.UPDATE_RECIPE_INGREDIENT_REQUEST,
    payload : ingredient
})

export const updateRecipeIngredientSuccessAction = (payload : UpdateRecipeIngredientSuccessPayload) : UpdateRecipeIngredientSuccessAction => ({
    type : RecipeAction.UPDATE_RECIPE_INGREDIENT_SUCCESS,
    payload 
})

export const updateRecipeIngredientFailedAction = (error : string) : UpdateRecipeIngredientFailedAction => ({
    type : RecipeAction.UPDATE_RECIPE_INGREDIENT_FAILED,
    error
})

export const removeRecipeRequestAction = (id: string) : RemoveRecipeRequestAction => ({ 
    type: RecipeAction.REMOVE_RECIPE_REQUEST,
    payload : { id } 
})

export const RemoveRecipeSuccessAction = (id: string) : RemoveRecipeSuccessAction => ({ 
    type: RecipeAction.REMOVE_RECIPE_SUCCESS,
    payload : { id } 
})

export const removeRecipeFailedAction = (error : string) : RemoveRecipeFailedAction => ({ 
    type: RecipeAction.REMOVE_RECIPE_FAILED,
    error 
})

export const removeRecipeIngredientRequestAction = (ingredientId: string) : RemoveRecipeIngredientRequestAction => ({ 
    type: RecipeAction.REMOVE_RECIPE_INGREDIENT_REQUEST,
    payload : { ingredientId } 
})

export const removeRecipeIngredientSuccessAction = (payload : RemoveRecipeIngredientSuccessPayload) : RemoveRecipeIngredientSuccessAction => ({ 
    type: RecipeAction.REMOVE_RECIPE_INGREDIENT_SUCCESS,
    payload
})

export const removeRecipeIngredientFailedAction = (error : string) : RemoveRecipeIngredientFailedAction => ({ 
    type: RecipeAction.REMOVE_RECIPE_INGREDIENT_FAILED,
    error 
})

export const setInformationMessageAction = (informationMessage? : string) : SetInformationMessageAction => ({
    type : RecipeAction.SET_INFORMATION_MESSAGE,
    payload : informationMessage
})

export type RecipeActions = 
    GetRecipesRequestAction |
    GetRecipesSuccessAction |
    GetRecipesFailedAction |

    AddRecipeRequestAction |
    AddRecipeSuccessAction |
    AddRecipeFailedAction |
    
    EditRecipeRequestAction |
    EditRecipeSuccessAction |
    EditRecipeFailedAction |

    UpdateRecipeIngredientRequestAction |
    UpdateRecipeIngredientSuccessAction |
    UpdateRecipeIngredientFailedAction |
    
    RemoveRecipeRequestAction | 
    RemoveRecipeSuccessAction | 
    RemoveRecipeFailedAction |

    RemoveRecipeIngredientRequestAction | 
    RemoveRecipeIngredientSuccessAction | 
    RemoveRecipeIngredientFailedAction |

    SetInformationMessageAction