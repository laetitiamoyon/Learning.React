import { RecipeState } from './recipes.state';
import { RecipeActions, RecipeAction } from './recipes.action';
import { newGuid } from '../../shared/utils/string';

export const recipesReducer = (state: RecipeState, action: RecipeActions) =>
{
    switch (action.type)
    {
        case RecipeAction.ADD_RECIPE : 
        {
            return {
                ...state,
                recipes: [...state.recipes, 
                    { 
                        ...action.payload,
                        id : newGuid()
                    }] 
              }
        }

        case RecipeAction.UPDATE_RECIPE: 
        {   
            return {
                ...state,
                recipes: state.recipes.map(recipe => recipe.id === action.payload.id ? action.payload : recipe)
              }
        }

        case RecipeAction.REMOVE_RECIPE : 
        {
            return {
                ...state, 
                recipes: state.recipes.filter(recipe => recipe.id !== action.payload.id)
            }
        }
       
        default : return state
    }
}