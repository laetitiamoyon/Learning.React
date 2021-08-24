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
    imagePath? : string
    imageData? : string
    ingredients : RecipeIngredient[]
}