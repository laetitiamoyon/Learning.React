import { Ingredient } from "../ingredients/ingredients.model";

export interface RecipeIngredient extends Ingredient
{
    quantity? : number
}

export interface Recipe
{
    id : string
    title : string
    description : string
    image? : string
    imageData? : string
    preparationTime? : string,
    cookingTime? : string,
    calories? : string
    ingredients : RecipeIngredient[]
}