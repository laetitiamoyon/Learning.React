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

const computeInfoMessage = (recipes : Recipe[]) : string | null =>
{
    let infoMessage : string | null = recipes.filter(r => r.ingredients.length === 0)
        .map(r => r.title)
        .join(', ')

    infoMessage = infoMessage === '' ? null : infoMessage = `Les recettes suivantes ${infoMessage} ont été supprimées`

    return infoMessage
}

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

            // 1) On met à jour les ingrédients modifiés d'une recette
            const recipesWithEmptyIngredients = state.recipes.map(r => (
            {
                ...r,
                ingredients : r.ingredients.map(i => i.id === id ? 
                    { 
                        ...i,
                        ...action.payload 
                    } : i)
            }))
            console.log( state.recipes, recipesWithEmptyIngredients, action.payload)
        
            // 2) On supprime les recettes qui ne contiennent plus d'ingrédients lorsqu'elles sont modifiées
            const recipesWithoutEmptyIngredients = recipesWithEmptyIngredients.filter(r => r.ingredients.length !== 0)

            // 3) On calcul notre message contenant les recettes supprimées
            const infoMessage = computeInfoMessage(recipesWithEmptyIngredients)
            
            return updateRecipeState(state, recipesWithoutEmptyIngredients, infoMessage)
        }     
        
        case RecipeAction.REMOVE_RECIPE_INGREDIENT : 
        {           
            const { ingredientId } = action.payload
            
            // 1) On supprime les ingrédients des recettes
            const recipesWithEmptyIngredients = state.recipes.map(r => ({ ...r, ingredients : r.ingredients.filter(i => i.id !== ingredientId)}))

            // 2) On supprime les recettes dont les ingrédients ont été supprimées
            const recipesWithoutEmptyIngredients = recipesWithEmptyIngredients.filter(r => r.ingredients.length !== 0)

            // 3) On calcul le message contenant les recettes qui ont été supprimées
            const infoMessage = computeInfoMessage(recipesWithEmptyIngredients)

            return updateRecipeState(state, recipesWithoutEmptyIngredients, infoMessage)
        }
        
        default : return state
    }
}