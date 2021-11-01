import { ApplicationState } from '../root/root.state';
import { IngredientState } from './ingredients.state';

export const selectIngredients = (state : ApplicationState) : IngredientState  => state.ingredients