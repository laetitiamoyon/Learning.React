import { combineReducers } from "redux";
import { ingredientsReducer } from "../ingredients/ingredients.reducer";
import { recipesReducer } from '../recipes/recipes.reducer';

const rootReducer = combineReducers(
{
    ingredients : ingredientsReducer,
    recipes : recipesReducer
});

export default rootReducer
