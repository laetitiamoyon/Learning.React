
import {call, fork} from "redux-saga-test-plan/matchers";
import {throwError} from "redux-saga-test-plan/providers";
import {useSelector} from "react-redux";
import * as matchers from 'redux-saga-test-plan/matchers';
import {
    addIngredientFailedAction,
    addIngredientRequestAction,
    addIngredientSuccessAction,
    editIngredientFailedAction,
    editIngredientRequestAction,
    editIngredientSuccessAction,
    getIngredientsFailedAction,
    getIngredientsRequestAction,
    getIngredientsSuccessAction, IngredientAction,
    removeIngredientFailedAction,
    removeIngredientRequestAction,
    RemoveIngredientSuccessAction
} from "../ingredients.actions";
import {addIngredient, getAllIngredients, removeIngredient, updateIngredient} from "../ingredients.api";
import {errorMessageMock, errorMock, ingredientMock, ingredientStateMock} from "../ingredient.mock";
import {expectSaga} from "redux-saga-test-plan";
import ingredientSaga, {addIngredientSaga, editIngredientSaga, getAllIngredientsSaga, removeIngredientSaga} from "../ingredients.saga";
import {takeLatest} from "redux-saga/effects";
import {excludeSagaPayloadFn} from "../../../shared/domains/Redux/redux.utils";
import {TodoAction} from "../../../../../../Todo list/Front-end/src/domains/Todos/todos.actions";

jest.mock('react-redux')
jest.mock('../ingredients.api')
jest.mock('../ingredients.selector')

describe("ingredient.saga", () =>
{
    describe("GET_INGREDIENTS", () =>
    {
        const action = getIngredientsRequestAction()

        it("should get all the ingredients", () =>
        {
            // Given
            (getAllIngredients as jest.Mock).mockReturnValue(ingredientStateMock.ingredients)

            // When & Then
            return expectSaga(getAllIngredientsSaga)
                .provide([call(() => getAllIngredients)])
                .put(getIngredientsSuccessAction(ingredientStateMock.ingredients))
                .dispatch(action)
                .silentRun()
        })

        it("should handle errors", () =>
            // When & Then
            expectSaga(getAllIngredientsSaga)
                .provide([[matchers.call.fn(getAllIngredients), throwError(errorMock)]])
                .put(getIngredientsFailedAction(errorMessageMock))
                .dispatch(action)
                .silentRun())
    })

    describe("ADD_INGREDIENT", () =>
    {
        const action = addIngredientRequestAction(ingredientMock)

        it("should add a ingredient", () =>
        {
            // Given
            (addIngredient as jest.Mock).mockReturnValue(ingredientMock)

            // When & Then
            return expectSaga(addIngredientSaga, action)
                .provide([call(() => addIngredient, ingredientMock), call(() => getAllIngredients, ingredientStateMock.ingredients)])
                .put(addIngredientSuccessAction(ingredientMock))
                .put(getIngredientsRequestAction())
                .dispatch(action)
                .silentRun()
        })

        it("should handle errors", () =>
            // When & Then
            expectSaga(addIngredientSaga, action)
                .provide([[matchers.call.fn(addIngredient), throwError(errorMock)]])
                .put(addIngredientFailedAction(errorMessageMock))
                .dispatch(action)
                .silentRun())
    })

    describe("EDIT_INGREDIENT", () =>
    {
        const action = editIngredientRequestAction(ingredientMock)

        it("should edit an ingredient", () =>
        {
            (updateIngredient as jest.Mock).mockReturnValue(ingredientMock)

            // When & Then
            return expectSaga(editIngredientSaga, action)
                .provide([call(() => updateIngredient, ingredientMock.id, ingredientMock ), call(() => getAllIngredients, ingredientStateMock.ingredients)])
                .put(editIngredientSuccessAction(ingredientMock))
                .put(getIngredientsRequestAction())
                .dispatch(action)
                .silentRun()
        })

        it("should handle errors", () =>
            // When & Then
            expectSaga(editIngredientSaga, action)
                .provide([[matchers.call.fn(updateIngredient), throwError(errorMock)]])
                .put(editIngredientFailedAction(errorMessageMock))
                .dispatch(action)
                .silentRun())
        })
    })

    describe("REMOVE_INGREDIENT", () =>
    {
        const action = removeIngredientRequestAction(ingredientMock.id)

        it("should remove an ingredient", () =>
        {
            // Given
            (removeIngredient as jest.Mock).mockReturnValue(ingredientMock)

            // When & Then
            return expectSaga(removeIngredientSaga, action)
                .provide([call(() => removeIngredient, ingredientMock.id), call(() => getAllIngredients, ingredientStateMock.ingredients)])
                .put(RemoveIngredientSuccessAction(ingredientMock.id))
                .put(getIngredientsRequestAction())
                .dispatch(action)
                .silentRun()
        })

        it("should handle errors", () =>
            // When & Then
            expectSaga(removeIngredientSaga, action)
                .provide([[matchers.call.fn(removeIngredient), throwError(errorMock)]])
                .put(removeIngredientFailedAction(errorMessageMock))
                .dispatch(action)
                .silentRun())
    })

    it("watchIngredientsSagas should watch and takeLatest GET_INGREDIENTS_REQUEST, ADD_INGREDIENTS_REQUEST, EDIT_INGREDIENTS_REQUEST, REMOVE_INGREDIENTS_REQUEST", () =>
    {
        const iterator = ingredientSaga();

        expect(excludeSagaPayloadFn(iterator.next().value)).toEqual(excludeSagaPayloadFn(fork(takeLatest, IngredientAction.GET_INGREDIENTS_REQUEST, getAllIngredientsSaga)));
        expect(excludeSagaPayloadFn(iterator.next().value)).toEqual(excludeSagaPayloadFn(fork(takeLatest, IngredientAction.ADD_INGREDIENT_REQUEST, addIngredientSaga)));
        expect(excludeSagaPayloadFn(iterator.next().value)).toEqual(excludeSagaPayloadFn(fork(takeLatest, IngredientAction.EDIT_INGREDIENT_REQUEST, editIngredientSaga)));
        expect(excludeSagaPayloadFn(iterator.next().value)).toEqual(excludeSagaPayloadFn(fork(takeLatest, IngredientAction.REMOVE_INGREDIENT_REQUEST, removeIngredientSaga)));
    })
