import { newGuid } from '../../shared/utils/string'
import { IngredientAction, IngredientActions } from './ingredients.action'
import { IngredientState } from './ingredients.state';

export const ingredientsReducer = (state : IngredientState, action : IngredientActions) =>
{

    switch (action.type)
    {
        case IngredientAction.ADD_INGREDIENT : 
        {
            return { 
                ...state, 
                ingredients : [...state.ingredients, {...action.payload, id : newGuid() }]
            }
        }

        case IngredientAction.UPDATE_INGREDIENT : 
        {
            return {
                ...state,
                ingredients : state.ingredients.map(ingredient => 
                    ingredient.id === action.payload.id ? action.payload :ingredient)
                }
        }
        
        case IngredientAction.REMOVE_INGREDIENT : 
        {
            return {
                ...state,
                ingredients : state.ingredients.filter(ingredient => ingredient.id !== action.payload.id)
            }
        }

        default : return state
    }
}