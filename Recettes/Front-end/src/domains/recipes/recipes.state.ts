import { ActionStatus, IActionMetadata } from "../../shared/domains/Redux/redux.model";
import { Recipe } from "./recipes.model";

export interface RecipeState extends IActionMetadata
{ 
    recipes : Recipe[]
    informationMessage? : string
};

export const initialRecipes : RecipeState = 
{
    status : ActionStatus.Loading,
    error : undefined,
    recipes : [],
    informationMessage : undefined
}
