import {fireEvent, render} from "@testing-library/react";

import {useDispatch, useSelector} from "react-redux";
import {newGuid} from "../../../../../shared/utils/string";

import {useHistory} from "react-router-dom";
import AddRecipe from "../AddRecipe";
import {addRecipeRequestAction} from "../../../recipes.actions";
import {ingredientStateMock} from "../../../../ingredients/ingredient.mock";

jest.mock('../../../../../shared/utils/string')
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({ push: jest.fn()})
}));
jest.mock('react-redux')
const mockDispatch = jest.fn()

const mockUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>

const history = useHistory()
const mockRedirectToRecipes = jest.fn(history.push)


describe("AddRecipe", () =>
{
    beforeEach(() => (mockUseDispatch as jest.Mock).mockReturnValue(mockDispatch))

    it("should match snapshot", () =>
    {
        // Given & When
        const { container } = render(<AddRecipe />)

        // Then
        expect(container).toMatchSnapshot()
    })

    it("should dispatch addRecipeRequestAction when add recipe button is clicked", () =>
    {
        //Given
        const consistentGuid = newGuid();
        (newGuid as jest.Mock).mockReturnValue(consistentGuid)
        const { getByText } = render(<AddRecipe />)
        const button = getByText("Enregistrer")

        // When
        fireEvent.click(button)

        // Then
        expect(mockDispatch).toBeCalledWith(addRecipeRequestAction({
            id : consistentGuid,
            title,
            description,
            image,
            cookingTime,
            preparationTime,
            calories,
            ingredients
        }));
        expect(mockRedirectToRecipes).toHaveBeenCalled()
        expect(mockUseDispatch).toHaveBeenCalled()

    })

})
