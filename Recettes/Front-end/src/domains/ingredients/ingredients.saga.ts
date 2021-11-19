import { call, put, takeLatest } from 'redux-saga/effects'
import { addIngredientFailedAction, AddIngredientRequestAction, addIngredientSuccessAction, editIngredientFailedAction, EditIngredientRequestAction, editIngredientSuccessAction, getIngredientsFailedAction, getIngredientsRequestAction, GetIngredientsRequestAction, getIngredientsSuccessAction, IngredientAction, removeIngredientFailedAction, RemoveIngredientRequestAction, RemoveIngredientSuccessAction } from './ingredients.actions';
import { Ingredient } from './ingredients.model';
import { addIngredient, getAllIngredients, updateIngredient, removeIngredient } from './ingredients.api';

export function* getAllIngredientsSaga()
{
   try
   {
      const ingredients : Ingredient[] = yield call(getAllIngredients);
  
      yield put(getIngredientsSuccessAction(ingredients));
   }
   catch (error : any)
   {
      yield put(getIngredientsFailedAction(error.message));
   }
}

export function* addIngredientSaga(action : AddIngredientRequestAction)
{
   try
   {
      const newIngredient : Ingredient = yield call(addIngredient, action.payload);
      
      yield put(addIngredientSuccessAction(newIngredient));
      yield put(getIngredientsRequestAction());
   }
   catch (error : any)
   {
      yield put(addIngredientFailedAction(error.message));
   }
}

export function* editIngredientSaga(action : EditIngredientRequestAction)
{
   try
   {
      const ingredient = action.payload
      const editedIngredient : Ingredient = yield call(updateIngredient, ingredient);
     
      yield put(editIngredientSuccessAction(editedIngredient));
      yield put(getIngredientsRequestAction());
   }
   catch (error : any)
   {
      yield put(editIngredientFailedAction(error.message));
   }
}

export function* removeIngredientSaga(action : RemoveIngredientRequestAction)
{
   try
   {
        const { id } = action.payload

        yield call(removeIngredient, id);
        yield put(RemoveIngredientSuccessAction(id));
        yield put(getIngredientsRequestAction());
      }
   catch (error : any)
   {
      yield put(removeIngredientFailedAction(error.message));
   }
}

export default function* ingredientSaga() : Generator {
  yield takeLatest(IngredientAction.GET_INGREDIENTS_REQUEST, getAllIngredientsSaga);
  yield takeLatest(IngredientAction.ADD_INGREDIENT_REQUEST, addIngredientSaga);
  yield takeLatest(IngredientAction.EDIT_INGREDIENT_REQUEST, editIngredientSaga);
  yield takeLatest(IngredientAction.REMOVE_INGREDIENT_REQUEST, removeIngredientSaga);
}
