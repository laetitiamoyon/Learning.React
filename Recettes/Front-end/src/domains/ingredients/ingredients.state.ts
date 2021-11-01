import { ActionStatus, IActionMetadata } from "../../shared/domains/Redux/redux.model";
import { Ingredient } from "./ingredients.model";

export interface IngredientState extends IActionMetadata
{
  ingredients : Ingredient[]
}

export const initialIngredients : IngredientState = 
{
    status : ActionStatus.Loading,
    error : undefined,
    ingredients : []
}