import {fireEvent, getAllByText, getByRole, getByText, render} from "@testing-library/react";
import {useDispatch} from "react-redux";
import Ingredient from "../Ingredient";
import {ingredientMock, ingredientTitleMock, ingredientUnityMock} from "../../../ingredient.mock";
import {editIngredientRequestAction, removeIngredientRequestAction} from "../../../ingredients.actions";
import {Ingredient as IngredientModel} from "../../../ingredients.model";
import {Recipe} from "../../../../recipes/recipes.model";
import {removeTodoRequestAction} from "../../../../../../../../todo-list/Front-end/src/domains/Todos/todos.actions";
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

    it("should dispatch editIngredientRequestAction updateRecipeIngredientRequestAction when add updateRecipeIngredient button is clicked", () =>
    {
        // Given
        const {getByText} = render(<Ingredient {...ingredientMock} color={""} searchIngredientTerm={""}/>)
        const button = getByText("Mettre à jour")

        // When
        fireEvent.click(button)

        // Then
        expect(mockDispatch).toBeCalledWith(editIngredientRequestAction({
            id : '',
            title : '',
            unity : ''
        }));
        expect(mockDispatch).toBeCalledWith(updateRecipeIngredientRequestAction({
            id : '',
            title : '',
            unity : ''
        }));
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