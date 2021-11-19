import {fireEvent, render} from "@testing-library/react";

import {useDispatch} from "react-redux";
import {newGuid} from "../../../../../shared/utils/string";
import {addIngredientRequestAction} from "../../../ingredients.actions";
import AddIngredient from "../AddIngredient";

jest.mock('../../../../../shared/utils/string')

const mockHistoryPush = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({ push: mockHistoryPush })
}));

jest.mock('react-redux')
const mockDispatch = jest.fn()
const mockUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>

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
        expect(mockHistoryPush).toHaveBeenCalledWith('/ingrédients')
        expect(mockUseDispatch).toHaveBeenCalled()
    })
})
