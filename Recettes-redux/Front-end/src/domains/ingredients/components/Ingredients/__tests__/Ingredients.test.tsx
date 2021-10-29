import {useDispatch, useSelector} from "react-redux";
import {ingredientStateMock} from "../../../ingredient.mock";
import {getTodosRequestAction} from "../../../../../../../../todo-list/Front-end/src/domains/Todos/todos.actions";
import Ingredients from "../Ingredients";
import Todos from "../../../../../../../../todo-list/Front-end/src/domains/Todos/components/Todos/Todos";
import {act, render} from "@testing-library/react";
import {getIngredientsRequestAction} from "../../../ingredients.actions";


jest.mock('react-redux')
const mockUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>
const mockDispatch = jest.fn()


describe("Ingredients", () => {
    beforeEach(() => {
        (mockUseDispatch as jest.Mock).mockReturnValue(mockDispatch)
    })

    it("should match snapshot", async () => {
        // Given
        (useSelector as jest.Mock).mockReturnValue(ingredientStateMock)

        // When
        const {container} = render(<Ingredients/>)

        // Then
        expect(container).toMatchSnapshot()
    })

    it("should dispatch getIngredientsRequestAction when component is mounted and ingredient reducer and saga are injected",() =>
    {
        // Given
        (useSelector as jest.Mock).mockReturnValue(ingredientStateMock);

        // When
        render(<Ingredients/>)

        // Then
        expect(mockDispatch).toBeCalledWith(getIngredientsRequestAction())
    })

    it("should filter title recipes when written some letter in the search bar and when component is mounted", () =>
    {
        // Given
        const {container} = render(<Ingredients />)
        const input = container.getElementsByTagName('input')[0]

        // When
       //fireEvent.change(input, {target: {value: }})

        // Then

    })
})