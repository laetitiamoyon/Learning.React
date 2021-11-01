import { IngredientState, initialIngredients } from '../ingredients/ingredients.state';
import { initialRecipes, RecipeState } from '../recipes/recipes.state';

export interface ApplicationState
{
    ingredients : IngredientState,
    recipes : RecipeState
}

export const initialApplicationState : ApplicationState =
{
    ingredients : initialIngredients,
    recipes : initialRecipes
}