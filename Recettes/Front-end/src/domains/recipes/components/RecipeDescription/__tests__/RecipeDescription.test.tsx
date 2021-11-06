import {useDispatch, useSelector} from "react-redux";
import {recipeMock, recipeStateMock} from "../../../recipes.mock";
import {fireEvent, render} from "@testing-library/react";
import {getRecipesRequestAction} from "../../../recipes.actions";
import RecipeDescription from "../RecipeDescription";

jest.mock('react-redux')
const mockUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>
const mockDispatch = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: 'id'
    }),
    useRouteMatch: () => ({ url: '/modification-de-la-recette/id' }),
}));

const mockEditRecipe = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockEditRecipe,
    }),
}));

describe("RecipeDescription", () => {
    beforeEach(() => {
        (mockUseDispatch as jest.Mock).mockReturnValue(mockDispatch)
    })

    it("should match snapshot", async () => {
        // Given
        (useSelector as jest.Mock).mockReturnValue(recipeStateMock)

        // When
        const {container} = render(<RecipeDescription/>) ;

        // Then
        expect(container).toMatchSnapshot()
    })

    it("should dispatch getRecipesRequestAction when component is mounted and recipe reducer and saga are injected",() =>
    {
        // Given
        (useSelector as jest.Mock).mockReturnValue(recipeStateMock);

        // When
        render(<RecipeDescription/>)

        // Then
        expect(mockDispatch).toBeCalledWith(getRecipesRequestAction())
    })

    it('Redirects to correct URL on click', () => {
        const {getByRole} = render(<RecipeDescription/>);

        fireEvent.click(getByRole('button'));
        expect(mockEditRecipe).toHaveBeenCalledWith('/modification-de-la-recette/')
    })


})