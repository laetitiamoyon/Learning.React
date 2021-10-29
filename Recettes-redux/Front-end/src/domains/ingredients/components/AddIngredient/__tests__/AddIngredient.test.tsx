import {fireEvent, render} from "@testing-library/react";

import {useDispatch} from "react-redux";
import {newGuid} from "../../../../../shared/utils/string";

import {ingredientTitleMock, ingredientUnityMock} from "../../../ingredient.mock";
import {addIngredientRequestAction} from "../../../ingredients.actions";
import AddIngredient from "../AddIngredient";
import {useHistory} from "react-router-dom";

jest.mock('../../../../../shared/utils/string')
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({ push: jest.fn()})
}));
jest.mock('react-redux')
const mockDispatch = jest.fn()

const mockUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>

const history = useHistory()
const mockRedirectToIngredientList = jest.fn(history.push)


describe("AddIngredient", () =>
{
    beforeEach(() => (mockUseDispatch as jest.Mock).mockReturnValue(mockDispatch))

    it("should match snapshot", () =>
    {
        // Given & When
        const { container } = render(<AddIngredient />)

        // Then
        expect(container).toMatchSnapshot()
    })

    it("should dispatch addIngredientRequestAction when add ingredient button is clicked", () =>
    {
        //Given
        const consistentGuid = newGuid();
        (newGuid as jest.Mock).mockReturnValue(consistentGuid)
        const { getByText } = render(<AddIngredient />)
        const button = getByText("Ajouter l'ingrédient")

        // When
        fireEvent.click(button)

        // Then
        expect(mockDispatch).toBeCalledWith(addIngredientRequestAction({
            title : '',
            unity : '',
            id : consistentGuid
        }));
        expect(mockRedirectToIngredientList).toHaveBeenCalled()
        expect(mockUseDispatch).toHaveBeenCalled()

    })

})
