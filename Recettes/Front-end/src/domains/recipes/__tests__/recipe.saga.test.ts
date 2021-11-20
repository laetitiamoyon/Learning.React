import {call, fork} from "redux-saga-test-plan/matchers";
import {throwError} from "redux-saga-test-plan/providers";
import * as matchers from 'redux-saga-test-plan/matchers';
import {expectSaga} from "redux-saga-test-plan";
import {takeLatest} from "redux-saga/effects";
import {excludeSagaPayloadFn} from "../../../shared/domains/Redux/redux.utils";
import {
    addRecipeFailedAction,
    addRecipeRequestAction,
    addRecipeSuccessAction,
    editRecipeFailedAction,
    editRecipeRequestAction,
    editRecipeSuccessAction,
    getRecipesFailedAction,
    getRecipesRequestAction,
    getRecipesSuccessAction,
    RecipeAction,
    removeRecipeFailedAction,
    removeRecipeRequestAction,
    RemoveRecipeSuccessAction,
    updateRecipeIngredientFailedAction,
    updateRecipeIngredientRequestAction,
} from "../recipes.actions";
import {addRecipe, getAllRecipes, removeRecipe, updateRecipe} from "../recipes.api";
import {errorMessageMock, errorMock, recipeMock, recipeStateMock} from "../recipes.mock";
import recipeSaga, {
    addRecipeSaga,
    editRecipeSaga,
    getAllRecipesSaga, removeRecipeIngredientSaga,
    removeRecipeSaga,
    updateRecipeIngredientSaga
} from "../recipes.saga";
import {ingredientMock} from "../../ingredients/ingredient.mock";

jest.mock('react-redux')
jest.mock('../recipes.api')
jest.mock('../recipes.selector')

describe("recipe.saga", () =>
{
    describe("GET_RECIPES", () =>
    {
        const action = getRecipesRequestAction()

        it("should get all the recipes", () =>
        {
            // Given
            (getAllRecipes as jest.Mock).mockReturnValue(recipeStateMock.recipes)

            // When & Then
            return expectSaga(getAllRecipesSaga)
                .provide([call(() => getAllRecipes)])
                .put(getRecipesSuccessAction(recipeStateMock.recipes))
                .dispatch(action)
                .silentRun()
        })

        it("should handle errors", () =>
            // When & Then
            expectSaga(getAllRecipesSaga)
                .provide([[matchers.call.fn(getAllRecipes), throwError(errorMock)]])
                .put(getRecipesFailedAction(errorMessageMock))
                .dispatch(action)
                .silentRun())
    })

    describe("ADD_RECIPES", () =>
    {
        const action = addRecipeRequestAction(recipeMock)

        it("should add a recipe", () =>
        {
            // Given
            (addRecipe as jest.Mock).mockReturnValue(recipeMock)

            // When & Then
            return expectSaga(addRecipeSaga, action)
                .provide([call(() => addRecipe, recipeMock), call(() => getAllRecipesSaga, recipeStateMock.recipes)])
                .put(addRecipeSuccessAction(recipeMock))
                .put(getRecipesRequestAction())
                .dispatch(action)
                .silentRun()
        })

        it("should handle errors", () =>
            // When & Then
            expectSaga(addRecipeSaga, action)
                .provide([[matchers.call.fn(addRecipe), throwError(errorMock)]])
                .put(addRecipeFailedAction(errorMessageMock))
                .dispatch(action)
                .silentRun())
    })

    describe("EDIT_RECIPE", () =>
    {
        const action = editRecipeRequestAction(recipeMock)

        it("should edit an recipe", () =>
        {
            (updateRecipe as jest.Mock).mockReturnValue(recipeMock)

            // When & Then
            return expectSaga(editRecipeSaga, action)
                .provide([call(() => updateRecipe, recipeMock.id, recipeMock ), call(() => getAllRecipes, recipeStateMock.recipes)])
                .put(editRecipeSuccessAction(recipeMock))
                .put(getRecipesRequestAction())
                .dispatch(action)
                .silentRun()
        })

        it("should handle errors", () =>
            // When & Then
            expectSaga(editRecipeSaga, action)
                .provide([[matchers.call.fn(updateRecipe), throwError(errorMock)]])
                .put(editRecipeFailedAction(errorMessageMock))
                .dispatch(action)
                .silentRun())
    })
})

describe("UPDATE_RECIPE_INGREDIENT", () =>
{
    const action = updateRecipeIngredientRequestAction(ingredientMock)

    beforeEach(() => (getAllRecipes as jest.Mock).mockReturnValue(recipeStateMock.recipes))

    // Todo : work case

    it("should handle errors", () =>
        // When & Then
        expectSaga(updateRecipeIngredientSaga, action)
            .provide([[matchers.call.fn(updateRecipe), throwError(errorMock)]])
            .put(updateRecipeIngredientFailedAction(errorMessageMock))
            .dispatch(action)
            .silentRun())
})

describe("REMOVE_RECIPE", () =>
{
    const action = removeRecipeRequestAction(recipeMock.id)

    it("should remove an recipe", () =>
    {
        // Given
        (removeRecipe as jest.Mock).mockReturnValue(recipeMock)

        // When & Then
        return expectSaga(removeRecipeSaga, action)
            .provide([call(() => removeRecipe, recipeMock.id), call(() => getAllRecipes, recipeStateMock.recipes)])
            .put(RemoveRecipeSuccessAction(recipeMock.id))
            .put(getRecipesRequestAction())
            .dispatch(action)
            .silentRun()
    })

    it("should handle errors", () =>
        // When & Then
        expectSaga(removeRecipeSaga, action)
            .provide([[matchers.call.fn(removeRecipe), throwError(errorMock)]])
            .put(removeRecipeFailedAction(errorMessageMock))
            .dispatch(action)
            .silentRun())
})

it("watchIngredientsSagas should watch and takeLatest GET_RECIPES_REQUEST, ADD_RECIPE_REQUEST, EDIT_RECIPE_REQUEST, REMOVE_RECIPE_REQUEST", () =>
{
    const iterator = recipeSaga();

    expect(excludeSagaPayloadFn(iterator.next().value)).toEqual(excludeSagaPayloadFn(fork(takeLatest, RecipeAction.GET_RECIPES_REQUEST, getAllRecipesSaga)));
    expect(excludeSagaPayloadFn(iterator.next().value)).toEqual(excludeSagaPayloadFn(fork(takeLatest, RecipeAction.ADD_RECIPE_REQUEST, addRecipeSaga)));
    expect(excludeSagaPayloadFn(iterator.next().value)).toEqual(excludeSagaPayloadFn(fork(takeLatest, RecipeAction.EDIT_RECIPE_REQUEST, editRecipeSaga)));
    expect(excludeSagaPayloadFn(iterator.next().value)).toEqual(excludeSagaPayloadFn(fork(takeLatest, RecipeAction.UPDATE_RECIPE_INGREDIENT_REQUEST, updateRecipeIngredientSaga)));
    expect(excludeSagaPayloadFn(iterator.next().value)).toEqual(excludeSagaPayloadFn(fork(takeLatest, RecipeAction.REMOVE_RECIPE_REQUEST, removeRecipeSaga)));
    expect(excludeSagaPayloadFn(iterator.next().value)).toEqual(excludeSagaPayloadFn(fork(takeLatest, RecipeAction.REMOVE_RECIPE_INGREDIENT_REQUEST, removeRecipeIngredientSaga)));
})
