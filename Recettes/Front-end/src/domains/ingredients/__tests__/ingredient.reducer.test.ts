import {ingredientsReducer} from "../ingredients.reducer";
import {emptyIngredientStateMock, errorMessageMock, ingredientMock, ingredientStateMock} from "../ingredient.mock";
import {
    getIngredientsFailedAction,
    getIngredientsRequestAction,
    getIngredientsSuccessAction
} from "../ingredients.actions";

import {ActionStatus} from "../../../shared/domains/Redux/redux.model";

describe("ingredient.reducer", () =>
{
    describe("GET_INGREDIENTS", () =>
    {
        it("Should change the status to loading and set the error to undefined on request", () =>
        {
            // Given & When
            const newState = ingredientsReducer(emptyIngredientStateMock, getIngredientsRequestAction())

            // Then
            expect(newState).toEqual(expect.objectContaining({
                status: ActionStatus.Loading,
                error: undefined
            }))
        })

        it("Should set the ingredients, change the status to loaded and set the error to undefined on success", () =>
        {
            // Given & When
            const newState = ingredientsReducer(emptyIngredientStateMock, getIngredientsSuccessAction(ingredientStateMock.ingredients))

            // Then
            expect(newState).toEqual({
                status: ActionStatus.Loaded,
                error: undefined,
                ingredients : ingredientStateMock.ingredients
            })
        })

        it("Should change the status to failed and set the error on failed", () =>
        {
            // Given & When
            const newState = ingredientsReducer(emptyIngredientStateMock, getIngredientsFailedAction(errorMessageMock))

            // Then
            expect(newState).toEqual(expect.objectContaining({
                status: ActionStatus.Failed,
                error: errorMessageMock,
            }))
        })
    })

})