import {useDispatch, useSelector} from "react-redux";
import {recipeMock, recipeStateMock} from "../../../recipes.mock";
import {fireEvent, getByText, render} from "@testing-library/react";
import EditRecipe from "../EditRecipe";
import {ingredientMock, ingredientStateMock} from "../../../../ingredients/ingredient.mock";
import {
    editRecipeRequestAction,
    updateRecipeIngredientRequestAction
} from "../../../recipes.actions";
import React from "react";

const mockRecipeId = recipeMock.id
const mockPushHistory = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({ push: mockPushHistory }),
    useParams: () => ({ id: mockRecipeId }),
}));

jest.mock('react-redux')

const mockDispatch = jest.fn()

const mockUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>

describe("EditRecipe", () => {

    beforeEach(() => (mockUseDispatch as jest.Mock).mockReturnValueOnce(mockDispatch))

    it("should match snapshot", async () => {
        // Given
        (useSelector as jest.Mock).mockReturnValueOnce(recipeStateMock).mockReturnValueOnce(ingredientStateMock)

        // When
        const {container} = render(<EditRecipe id={''} title={''} unity={''}/>) ;

        // Then
        expect(container).toMatchSnapshot()
    })

    it("should dispatch editRecipeRequestAction and updateRecipeIngredientRequestAction when submit button is clicked", async () =>
    {
        // Given
        (useSelector as jest.Mock).mockReturnValueOnce(recipeStateMock).mockReturnValueOnce(ingredientStateMock)
        const { getByText } = render(<EditRecipe id={''} title={''} unity={''}/>)
        const button = getByText("Enregistrer")
        //const actionParameters = { id : '', title : '', description : '', image : "", ingredients : [], calories : "",cookingTime: "", preparationTime: ""}

        // When
        fireEvent.click(button)

        // Then
        //expect(mockDispatch).toBeCalledWith(editRecipeRequestAction(actionParameters));

        expect(mockDispatch).toBeCalledWith(updateRecipeIngredientRequestAction({
            id : "",
            title : "",
            unity : ""
        }));

        expect(mockPushHistory).toHaveBeenCalledWith('/recettes')
    })
})