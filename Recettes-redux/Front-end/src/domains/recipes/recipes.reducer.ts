import { failedActionMetadata, loadedActionMetadata, loadingActionMetadata } from '../../shared/domains/Redux/redux.utils';
import { RecipeAction, RecipeActions } from './recipes.actions';
import { initialRecipes, RecipeState } from './recipes.state';

export const recipesReducer = (state: RecipeState = initialRecipes , action: RecipeActions): RecipeState =>
{
    switch (action.type)
    {
        case RecipeAction.GET_RECIPES_REQUEST : return loadingActionMetadata(state)
        case RecipeAction.GET_RECIPES_SUCCESS : return {
            ...loadedActionMetadata(state),
            recipes: action.payload
        }
        case RecipeAction.GET_RECIPES_FAILED : return failedActionMetadata(action.error, state)

        case RecipeAction.ADD_RECIPE_REQUEST : return loadingActionMetadata(state)
        case RecipeAction.ADD_RECIPE_SUCCESS : return loadedActionMetadata(state)
        case RecipeAction.ADD_RECIPE_FAILED : return failedActionMetadata(action.error, state)
     
        case RecipeAction.EDIT_RECIPE_REQUEST : return loadingActionMetadata(state)
        case RecipeAction.EDIT_RECIPE_SUCCESS : return loadedActionMetadata(state)      
        case RecipeAction.EDIT_RECIPE_FAILED : return failedActionMetadata(action.error, state)

        case RecipeAction.UPDATE_RECIPE_INGREDIENT_REQUEST : return loadingActionMetadata(state)
        case RecipeAction.UPDATE_RECIPE_INGREDIENT_SUCCESS : return loadedActionMetadata(state)      
        case RecipeAction.UPDATE_RECIPE_INGREDIENT_FAILED : return failedActionMetadata(action.error, state)

        case RecipeAction.REMOVE_RECIPE_REQUEST : return loadingActionMetadata(state)
        case RecipeAction.REMOVE_RECIPE_SUCCESS : return loadedActionMetadata(state)
        case RecipeAction.REMOVE_RECIPE_FAILED : return failedActionMetadata(action.error, state)

        case RecipeAction.REMOVE_RECIPE_INGREDIENT_REQUEST : return loadingActionMetadata(state)
        case RecipeAction.REMOVE_RECIPE_INGREDIENT_SUCCESS : return loadedActionMetadata(state)
        case RecipeAction.REMOVE_RECIPE_INGREDIENT_FAILED : return failedActionMetadata(action.error, state)

        case RecipeAction.SET_INFORMATION_MESSAGE : return { ...state, informationMessage : action.payload }

        default : return state
    }
}