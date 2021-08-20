import { RecipeState } from './recipes.state';
import { RecipeActions, RecipeAction } from './recipes.action';
import { newGuid } from '../../shared/utils/string';
import { Recipe } from './recipes.model';

const containRecipeIngredient = (recipe : Recipe, id : string) : boolean =>
    recipe.ingredients.some(recipeIngredient => recipeIngredient.id === id)

export const recipesReducer = (state: RecipeState, action: RecipeActions) : RecipeState =>
{
    switch (action.type)
    {
        case RecipeAction.ADD_RECIPE : 
        {
            return {
                ...state,
                recipes: [
                    ...state.recipes, 
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

        case RecipeAction.UPDATE_RECIPE_INGREDIENT: 
        {
            const { id } = action.payload
            
            return {
                ...state, 
                recipes: state.recipes.map(
                    recipe => containRecipeIngredient(recipe, id) ? 
                    { 
                        ...recipe,                                                                                              
                        ingredients : recipe.ingredients.map(recipeIngredient => 
                            recipeIngredient.id === id ? 
                            action.payload : recipeIngredient)
                    }
                    : recipe)
            }   
        }

        case RecipeAction.REMOVE_RECIPE_INGREDIENT : 
        {
            const { ingredientId } = action.payload
            
            return {
                ...state, 
                recipes: state.recipes.map(
                    recipe => containRecipeIngredient(recipe, ingredientId) ? 
                    { 
                        ...recipe,                                                                                              
                        ingredients : recipe.ingredients.filter(recipeIngredient => recipeIngredient.id !== action.payload.ingredientId)
                    }
                    : recipe)
            }
        }
       
        default : return state
    }
}