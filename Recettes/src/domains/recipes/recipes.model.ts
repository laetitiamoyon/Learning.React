import { Ingredient } from "../ingredients/ingredients.model";

export interface Recipe
{
    id : string
    title : string
    description : string
    imagePath? : string
    imageData? : string
    ingredients : string
    // TODO : array of Ingredient instead of string
    // On va en avoir besoin lors de la suppression d'un ingrédient,
    // En effet, ça doit également les supprimer de vos recettes 
}

export interface RecipeIngredient extends Ingredient
{
    quantity : number
}