import {useDispatch, useSelector} from "react-redux";
import {ingredientStateMock} from "../../../ingredient.mock";
import Ingredients from "../Ingredients";
import { render} from "@testing-library/react";
import {getIngredientsRequestAction} from "../../../ingredients.actions";


jest.mock('react-redux')
const mockUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>
const mockDispatch = jest.fn()


describe("Ingredients", () => {
    beforeEach(() => (mockUseDispatch as jest.Mock).mockReturnValue(mockDispatch))

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
})