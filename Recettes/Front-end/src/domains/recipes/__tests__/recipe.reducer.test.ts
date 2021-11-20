import {ActionStatus} from "../../../shared/domains/Redux/redux.model";
import {recipesReducer} from "../recipes.reducer";
import {emptyRecipeStateMock, errorMessageMock, recipeStateMock} from "../recipes.mock";
import {getRecipesFailedAction, getRecipesRequestAction, getRecipesSuccessAction} from "../recipes.actions";

describe("recipe.reducer", () =>
{
    describe("GET_RECIPES", () =>
    {
        it("Should change the status to loading and set the error to undefined on request", () =>
        {
            // Given & When
            const newState = recipesReducer(emptyRecipeStateMock, getRecipesRequestAction())

            // Then
            expect(newState).toEqual(expect.objectContaining({
                status: ActionStatus.Loading,
                error: undefined
            }))
        })

        it("Should set the recipe, change the status to loaded and set the error to undefined on success", () =>
        {
            // Given & When
            const newState = recipesReducer(emptyRecipeStateMock, getRecipesSuccessAction(recipeStateMock.recipes))

            // Then
            expect(newState).toEqual({
                status: ActionStatus.Loaded,
                error: undefined,
                recipes : recipeStateMock.recipes
            })
        })

        it("Should change the status to failed and set the error on failed", () =>
        {
            // Given & When
            const newState = recipesReducer(emptyRecipeStateMock, getRecipesFailedAction(errorMessageMock))

            // Then
            expect(newState).toEqual(expect.objectContaining({
                status: ActionStatus.Failed,
                error: errorMessageMock,
            }))
        })
    })

})