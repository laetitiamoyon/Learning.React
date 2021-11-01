import {useDispatch} from "react-redux";
import {fireEvent, render} from "@testing-library/react";
import Recipe from "../../../../recipes/components/Recipe/Recipe";
import {
    removeRecipeIngredientRequestAction,
    removeRecipeRequestAction,
} from "../../../recipes.actions";
import {recipeMock} from "../../../recipes.mock";
import {useHistory} from "react-router-dom";

jest.mock('react-redux')
const mockUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>
const mockDispatch = jest.fn()

const history = useHistory()
const mockOnClickToTheDescription = jest.fn(history.push)
jest.mock('react-router-dom', () => ({

    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockOnClickToTheDescription,
    }),
}));

describe("Recipe", () => {

    beforeEach(() => (mockUseDispatch as jest.Mock).mockReturnValue(mockDispatch))

    it("should match snapshot", () => {
        // Given & When
        const {container} = render(<Recipe {...recipeMock} color={""} searchTerm={""}/>)

        // Then
        expect(container).toMatchSnapshot()
    })

    it("should dispatch removeRecipeRequestAction and removeRecipeIngredientRequestAction when trash icon is clicked ", () => {
        // Given
        const {container} = render(<Recipe {...recipeMock} color={""} searchTerm={""}/>)
        const trashIcon = container.getElementsByTagName('div')[3]

        // When
        fireEvent.click(trashIcon)
        // Then
        expect(mockDispatch).toBeCalledWith(removeRecipeRequestAction(recipeMock.id))
        expect(mockDispatch).toBeCalledWith(removeRecipeIngredientRequestAction(recipeMock.id));
    })

    it("should redirected to description of the recipe when viewDescription Button is clicked ", () => {
        // Given
        const { getByText } = render(<Recipe {...recipeMock} color={""} searchTerm={""}/>)
        const button = getByText("Voir la recette")


        // When
        fireEvent.click(button)

        // Then
        expect(mockOnClickToTheDescription).toHaveBeenCalledWith('`/modification-de-la-recette/${id}`, { id : id }');
    })
})