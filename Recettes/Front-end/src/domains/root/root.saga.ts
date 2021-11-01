import watchRecipesSagas from '../recipes/recipes.saga'
import watchIngredientsSagas from '../ingredients/ingredients.saga'
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware()

export default function* rootSagas() {
  yield all ([
      watchRecipesSagas(),
      watchIngredientsSagas(),
  ]);
  
}