import {fireEvent, getByText, render} from "@testing-library/react";
import {useDispatch} from "react-redux";
import Ingredient from "../Ingredient";
import {ingredientMock} from "../../../ingredient.mock";
import {editIngredientRequestAction, removeIngredientRequestAction} from "../../../ingredients.actions";
import {
    removeRecipeIngredientRequestAction,
    updateRecipeIngredientRequestAction
} from "../../../../recipes/recipes.actions";

jest.mock('react-redux')
const mockUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>
const mockDispatch = jest.fn()

describe("Ingredient", () => {

    beforeEach(() => (mockUseDispatch as jest.Mock).mockReturnValue(mockDispatch))

    it("should match snapshot", () => {
        // Given & When
        const {container} = render(<Ingredient {...ingredientMock} color={""} searchIngredientTerm={""}/>)

        // Then
        expect(container).toMatchSnapshot()
    })

    it("should dispatch editIngredientRequestAction and updateRecipeIngredientRequestAction when add updateRecipeIngredient button is clicked", () =>
    {
        // Given
        const {getByText} = render(<Ingredient {...ingredientMock} color={""} searchIngredientTerm={""}/>)
        const button = getByText("Mettre à jour")
        const actionParameters = { id : '', title : '', unity : '' }

        // When
        fireEvent.click(button)

        // Then
        expect(mockDispatch).toBeCalledWith(editIngredientRequestAction(actionParameters));
        expect(mockDispatch).toBeCalledWith(updateRecipeIngredientRequestAction(actionParameters));
    })

    it("should dispatch removeIngredientRequestAction and removeRecipeIngredientRequestAction when trash icon is clicked", () =>
    {
        // Given
        const {container} = render(<Ingredient {...ingredientMock} color={""} searchIngredientTerm={""}/>)
        const trashIcon = container.getElementsByTagName('div')[3]

        // When
        fireEvent.click(trashIcon)

        // Then
        expect(mockDispatch).toBeCalledWith(removeIngredientRequestAction(ingredientMock.id))
        expect(mockDispatch).toBeCalledWith(removeRecipeIngredientRequestAction(ingredientMock.id));
    })
})

// Tester que les éléments attendus sont présent quand la current window change.
// Quand le state ou le searchterm est modifiée, vérifier que filterIngredients est appelé avec les bons paramètres et renvoit les bons paramètres