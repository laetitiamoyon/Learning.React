import {useDispatch, useSelector} from "react-redux";
import {recipeStateMock} from "../../../recipes.mock";
import {render} from "@testing-library/react";
import Recipes from "../Recipes";
import {getRecipesRequestAction} from "../../../recipes.actions";

jest.mock('react-redux')
const mockUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>
const mockDispatch = jest.fn()

describe("Recipes", () => {
    beforeEach(() => {
        (mockUseDispatch as jest.Mock).mockReturnValue(mockDispatch)
    })

    it("should match snapshot", async () => {
        // Given
        (useSelector as jest.Mock).mockReturnValue(recipeStateMock)

        // When
        const {container} = render(<Recipes/>)

        // Then
        expect(container).toMatchSnapshot()
    })

    it("should dispatch getRecipesRequestAction when component is mounted and recipe reducer and saga are injected",() =>
    {
        // Given
        (useSelector as jest.Mock).mockReturnValue(recipeStateMock);

        // When
        render(<Recipes/>)

        // Then
        expect(mockDispatch).toBeCalledWith(getRecipesRequestAction())
    })

})