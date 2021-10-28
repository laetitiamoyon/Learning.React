import { ApplicationState } from '../root/root.state';
import { RecipeState } from './recipes.state';

export const selectRecipes = (state : ApplicationState) : RecipeState  => state.recipes

export const selectInformationMessage = (state : ApplicationState) : string | undefined => state.recipes.informationMessage