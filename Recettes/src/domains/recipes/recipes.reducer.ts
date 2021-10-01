import { RecipeState } from './recipes.state';
import { RecipeActions, RecipeAction } from './recipes.action';
import { newGuid } from '../../shared/utils/string';
import { Recipe } from './recipes.model';
import { setLocalStorageData } from '../../shared/domains/localStorage/localStorage.utils';

const updateRecipeState = (
    state: RecipeState,
    recipes: Recipe[],
    infoMessage : string | null = null) : RecipeState => 
{
    setLocalStorageData('localRecipes', recipes)

    return {
        ...state,
        recipes : recipes,
        infoMessage
    }
}

const containRecipeIngredient = (recipe : Recipe, id : string) : boolean =>
    recipe.ingredients.some(recipeIngredient => recipeIngredient.id === id)

export const recipesReducer = (state: RecipeState, action: RecipeActions) : RecipeState =>
{
    switch (action.type)
    {
        case RecipeAction.ADD_RECIPE : 
            return updateRecipeState(state,
                [...state.recipes, { ...action.payload,id : newGuid()}])
    
        case RecipeAction.UPDATE_RECIPE: 
            return updateRecipeState(state,
                state.recipes.map(recipe => recipe.id === action.payload.id ? action.payload : recipe))

        case RecipeAction.REMOVE_RECIPE : 
            return updateRecipeState(state, 
                state.recipes.filter(recipe => recipe.id !== action.payload.id))
        
        case RecipeAction.UPDATE_RECIPE_INGREDIENT: 
        {
            const { id } = action.payload
            let infoMessage : string | null = null
            // supprimer les recettes avec 0 ingrédients
            // calculer la string infoMessage
            return updateRecipeState(state, 
                state.recipes    
                // .filter(recipe => containRecipeIngredient(recipe, id) ? 
                // recipe.ingredients.map(recipeIngredient => recipeIngredient.id === id ?
                // action.payload.id : recipeIngredient).length > 0 : infoMessage) 
                .map(recipe => containRecipeIngredient(recipe, id) ? 
                    { 
                        ...recipe,                                                                                              
                        ingredients : recipe.ingredients.map(recipeIngredient => 
                            recipeIngredient.id === id ? 
                            action.payload : recipeIngredient)
                    }
            : recipe))
        }     
        
        case RecipeAction.REMOVE_RECIPE_INGREDIENT : 
        {           
            const { ingredientId } = action.payload
            
            // 1) On supprime les ingrédients des recettes
            const recipesWithEmptyIngredients = state.recipes.map(r => ({ ...r, ingredients : r.ingredients.filter(i => i.id !== ingredientId)}))

            // 2) On supprime les recettes dont les ingrédients ont étaient supprimés
            const recipesWithoutEmptyIngredients = recipesWithEmptyIngredients.filter(r => r.ingredients.length !== 0)

            // 3) On calcul le message contenant les recettes qui ont étaient supprimés
            let infoMessage : string | null = recipesWithEmptyIngredients.filter(r => r.ingredients.length === 0)
                .map(r => r.title)
                .join(', ')
            infoMessage = infoMessage === '' ? null : infoMessage = `Les recettes suivantes ${infoMessage} ont été supprimés`

            return updateRecipeState(state, recipesWithoutEmptyIngredients, infoMessage)
            
        }
        
        default : return state
    }
}