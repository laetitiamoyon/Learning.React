import { Ingredient } from '../ingredients/ingredients.model';

export interface RecipeIngredients extends Ingredient
{
  quantity? : number
}

export interface Recipe
{
  id : string,
  title : string,
  description : string,
  preparationTime? : string,
  cookingTime? : string,
  calories? : string,
  image? : string,
  ingredients : RecipeIngredients[]
}

export interface UpdateRecipeIngredientSuccessPayload
{
  recipeId : string,
  ingredient : Ingredient
}

export interface RemoveRecipeIngredientSuccessPayload
{
  recipeId : string,
  ingredientId : string
}