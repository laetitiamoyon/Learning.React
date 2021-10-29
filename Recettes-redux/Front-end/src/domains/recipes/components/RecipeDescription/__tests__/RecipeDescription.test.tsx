import {useDispatch, useSelector} from "react-redux";
import {recipeStateMock} from "../../../recipes.mock";
import {render} from "@testing-library/react";
import {getRecipesRequestAction} from "../../../recipes.actions";
import {useHistory, useParams} from "react-router-dom";
import RecipeDescription from "../RecipeDescription";


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({ push: jest.fn()})
}));
jest.mock('react-redux')
const mockUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>
const mockDispatch = jest.fn()

let id = useParams()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn().mockReturnValue({ id }),
    }))

const history = useHistory()
const mockEditRecipe = jest.fn(history.push)


describe("RecipeDescription", () => {
    beforeEach(() => {
        (mockUseDispatch as jest.Mock).mockReturnValue(mockDispatch)
    })

    it("should match snapshot", async () => {
        // Given
        (useSelector as jest.Mock).mockReturnValue(recipeStateMock)

        // When
        const {container} = render(<RecipeDescription/>);

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
        expect(mockEditRecipe).toHaveBeenCalled()
    })


})