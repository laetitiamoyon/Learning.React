import { call, put, takeLatest } from 'redux-saga/effects'
import { getRecipesFailedAction, AddRecipeRequestAction, addRecipeSuccessAction, addRecipeFailedAction, EditRecipeRequestAction, RemoveRecipeRequestAction, RemoveRecipeSuccessAction, removeRecipeFailedAction, getRecipesSuccessAction, editRecipeSuccessAction, editRecipeFailedAction, RecipeAction, getRecipesRequestAction, UpdateRecipeIngredientRequestAction, updateRecipeIngredientSuccessAction, updateRecipeIngredientFailedAction, removeRecipeIngredientSuccessAction, removeRecipeIngredientFailedAction, RemoveRecipeIngredientRequestAction, setInformationMessageAction } from './recipes.actions';
import { Recipe } from './recipes.model';
import { addRecipe, getAllRecipes, updateRecipe, removeRecipe } from './recipes.api';

const computeInformationMessage = (recipes : Recipe[]) : string | undefined => 
{
   const recipesWithoutIngredient = recipes.filter(r => r.ingredients.length === 0)

   return recipesWithoutIngredient.length === 0 ? undefined :
   "les recettes suivantes ont été supprimées :" +
   recipesWithoutIngredient.map(r => r.title).join(',')
}

export function* getAllRecipesSaga()
{
   try
   {
      const recipes : Recipe[] = yield call(getAllRecipes);
     
      yield put(getRecipesSuccessAction(recipes));
   }
   catch (error : any)
   {
      yield put(getRecipesFailedAction(error.message));
   }
}

export function* addRecipeSaga(action : AddRecipeRequestAction)
{
   try
   {
      const newRecipe : Recipe = yield call(addRecipe, action.payload);
    
      yield put(addRecipeSuccessAction(newRecipe));
      yield put(getRecipesRequestAction());
   }
   catch (error : any)
   {
      yield put(addRecipeFailedAction(error.message));
   }
}

export function* editRecipeSaga(action : EditRecipeRequestAction)
{
   try
   {      
      const editedRecipe : Recipe = yield call(updateRecipe, action.payload);
      
      yield put(editRecipeSuccessAction(editedRecipe));
      yield put(getRecipesRequestAction());
   }
   catch (error : any)
   {
      yield put(editRecipeFailedAction(error.message));
   }
}

export function* updateRecipeIngredientSaga(action : UpdateRecipeIngredientRequestAction)
{
   try
   {
      const recipes : Recipe[] = yield call(getAllRecipes);
      const ingredient = action.payload

      // Récupérer les recettes qui contiennent l'ingrédient à modifier
      const recipesToUpdated = recipes.filter(r => r.ingredients.find(i => i.id === ingredient.id))

      // On met à jour l'ingrédient des recettes qui le contienne
      const updatedRecipes = recipesToUpdated.map(r => 
      ({
         ...r,
         ingredients : r.ingredients.map(i => ingredient.id === i.id ? ingredient : i)
      }))
      
      // On demande à l'API de mettre à jour les données 
      for (let updatedRecipe of updatedRecipes)
      {
         if (updatedRecipe.ingredients.length === 0) 
            yield call(removeRecipe, updatedRecipe.id);
         else 
            yield call(updateRecipe, updatedRecipe);
         
            yield put(updateRecipeIngredientSuccessAction({
            recipeId : updatedRecipe.id,
            ingredient
         }))
      }

      const informationMessage = computeInformationMessage(updatedRecipes)
      yield put (setInformationMessageAction(informationMessage))
      yield put(getRecipesRequestAction());
   }
   catch (error : any)
   {
      yield put(updateRecipeIngredientFailedAction(error.message));
   }
}

export function* removeRecipeSaga(action : RemoveRecipeRequestAction)
{
   try
   {
      const { id } = action.payload

      yield call(removeRecipe, id);
      yield put(RemoveRecipeSuccessAction(id));
      yield put(getRecipesRequestAction());
   }

   catch (error : any)
   {
      yield put(removeRecipeFailedAction(error.message));
   }
}

export function* removeRecipeIngredientSaga(action : RemoveRecipeIngredientRequestAction)
{
   try
   {
      const recipes : Recipe[] = yield call(getAllRecipes);
      const {ingredientId} = action.payload

      // Récupérer les recettes contenant l'ingrédient 
      const recipesToUpdated = recipes.filter(r => r.ingredients.find(i => i.id === ingredientId))

      // Supprimer l'ingrédient présent dans les recettes 
      const updatedRecipes = recipesToUpdated.map(r => ({
         ...r,
         ingredients: r.ingredients.filter(i => ingredientId !== i.id)
      }))

      for (let updatedRecipe of updatedRecipes)
      {
         if (updatedRecipe.ingredients.length === 0)
            yield call(removeRecipe, updatedRecipe.id);
         else
            yield call(updateRecipe, updatedRecipe);

         yield put (removeRecipeIngredientSuccessAction({
            recipeId : updatedRecipe.id,
            ingredientId
         }))

      }

      const informationMessage = computeInformationMessage(updatedRecipes)
      yield put (setInformationMessageAction(informationMessage))
      yield put(getRecipesRequestAction());
   }
   catch (error : any)
   {
      yield put(removeRecipeIngredientFailedAction(error.message));
   }
}

export default function* recipeSaga() : Generator {
  yield takeLatest(RecipeAction.GET_RECIPES_REQUEST, getAllRecipesSaga);
  yield takeLatest(RecipeAction.ADD_RECIPE_REQUEST, addRecipeSaga);
  yield takeLatest(RecipeAction.EDIT_RECIPE_REQUEST, editRecipeSaga);
  yield takeLatest(RecipeAction.UPDATE_RECIPE_INGREDIENT_REQUEST, updateRecipeIngredientSaga);
  yield takeLatest(RecipeAction.REMOVE_RECIPE_REQUEST, removeRecipeSaga);
  yield takeLatest(RecipeAction.REMOVE_RECIPE_INGREDIENT_REQUEST, removeRecipeIngredientSaga);
}
