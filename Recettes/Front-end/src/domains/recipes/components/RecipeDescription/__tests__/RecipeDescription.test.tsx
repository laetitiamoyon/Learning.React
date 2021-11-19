import { useSelector} from "react-redux";
import {recipeMock, recipeStateMock} from "../../../recipes.mock";
import {fireEvent, render} from "@testing-library/react";
import RecipeDescription from "../RecipeDescription";

const mockRecipeId = recipeMock.id
const mockPushHistory = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({ push: mockPushHistory }),
    useParams: () => ({ id: mockRecipeId }),
}));

jest.mock('react-redux')

describe("RecipeDescription", () => {
    it("should match snapshot", async () => {
        // Given
        (useSelector as jest.Mock).mockReturnValue(recipeStateMock)

        // When
        const {container} = render(<RecipeDescription/>) ;

        // Then
        expect(container).toMatchSnapshot()
    })

    it('Redirects to correct URL on click', () => {
        // Given
        (useSelector as jest.Mock).mockReturnValue(recipeStateMock)

        const {getByRole} = render(<RecipeDescription/>);

        // When
        fireEvent.click(getByRole('button'));

        // Then
        expect(mockPushHistory).toHaveBeenCalledWith(`/modification-de-la-recette/${mockRecipeId}`, { id : mockRecipeId})
    })
})