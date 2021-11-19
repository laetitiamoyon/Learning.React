import {fireEvent, render} from "@testing-library/react";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import AddRecipe from "../AddRecipe";
import {addRecipeRequestAction} from "../../../recipes.actions";
import {newGuid} from "../../../../../shared/utils/string";
import {recipeStateMock} from "../../../recipes.mock";
import {ingredientStateMock} from "../../../../ingredients/ingredient.mock";

jest.mock('../../../../../shared/utils/string')

const mockHistoryPush = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({ push: mockHistoryPush })
}));

jest.mock('react-redux')
const mockDispatch = jest.fn()
const mockUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>

describe("AddRecipe", () => {

    beforeEach(() => (mockUseDispatch as jest.Mock).mockReturnValue(mockDispatch))

    it("should match snapshot", async () => {
        // Given
        (useSelector as jest.Mock).mockReturnValue(recipeStateMock)

        // When
        const {container} = render(<AddRecipe/>)


        // Then
        expect(container).toMatchSnapshot()
    })

    it("should dispatch addIngredientRequestAction when submit button is clicked", async () =>
    {
        // Given
        (useSelector as jest.Mock).mockReturnValue(ingredientStateMock)
        const { container } = render(<AddRecipe />)
        const button = container.getElementsByTagName('button')[0]

        // When
        const consistentGuid = newGuid();
        (newGuid as jest.Mock).mockReturnValue(consistentGuid)
        fireEvent.click(button)

        // Then
        expect(mockDispatch).toBeCalledWith(addRecipeRequestAction({
            id : consistentGuid,
            title : '',
            description : '',
            ingredients : [],
            preparationTime: "",
            image: "",
            calories: "",
            cookingTime: ""
        }));
        expect(mockHistoryPush).toHaveBeenCalledWith('/recettes')
    })
})