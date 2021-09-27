import { newGuid } from '../../shared/utils/string'
import { IngredientAction, IngredientActions } from './ingredients.action'
import { IngredientState } from './ingredients.state';
import { Ingredient } from './ingredients.model';
import { setLocalStorageData } from '../../shared/domains/localStorage/localStorage.utils';

const updateIngredientState = (state : IngredientState, ingredients : Ingredient[]) : IngredientState =>
{
    setLocalStorageData('ingredients', ingredients)
            
    return { 
        ...state, 
        ingredients : ingredients
    }
}

export const ingredientsReducer = (state : IngredientState, action : IngredientActions) : IngredientState =>
{
    switch (action.type)
    {
        case IngredientAction.ADD_INGREDIENT : 
            return updateIngredientState(state,
                [...state.ingredients, {...action.payload, id : newGuid() }])

        case IngredientAction.UPDATE_INGREDIENT : 
            return updateIngredientState(state,
                state.ingredients.map(ingredient => ingredient.id === action.payload.id ? action.payload : ingredient))
        
        case IngredientAction.REMOVE_INGREDIENT : 
            return updateIngredientState(state,
                state.ingredients.filter(ingredient => ingredient.id !== action.payload.id))
    
        default : return state
    }
}