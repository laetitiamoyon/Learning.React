import { failedActionMetadata, loadedActionMetadata, loadingActionMetadata } from '../../shared/domains/Redux/redux.utils';
import { IngredientAction, IngredientActions } from './ingredients.actions';
import { IngredientState, initialIngredients } from './ingredients.state';


export const ingredientsReducer = (state: IngredientState = initialIngredients , action: IngredientActions): IngredientState =>
{
    switch (action.type)
    {
        case IngredientAction.GET_INGREDIENTS_REQUEST : return loadingActionMetadata(state)
        case IngredientAction.GET_INGREDIENTS_SUCCESS : return {
            ...loadedActionMetadata(state),
            ingredients: action.payload
        }
        case IngredientAction.GET_INGREDIENTS_FAILED : return failedActionMetadata(action.error, state)
  
        default : return state
    }
}