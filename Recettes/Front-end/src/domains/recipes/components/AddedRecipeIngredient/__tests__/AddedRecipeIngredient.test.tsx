import {fireEvent, render} from "@testing-library/react";
import AddedRecipeIngredient from "../AddedRecipeIngredient";
import {ingredientMock} from "../../../../ingredients/ingredient.mock";

const mockRemoveIngredient = jest.fn()

describe("AddedRecipeIngredient", () =>
{
    it("should match snapshot", () =>
    {
        // Given & When
        const { container } = render(
            <AddedRecipeIngredient
                removeAddedIngredient={mockRemoveIngredient} id={''} unity={''} title={''} quantity={undefined}
            />)

        // Then
        expect(container).toMatchSnapshot()
    })

    it("should removeRecipeIngredient when trash icon is clicked", () =>
    {
        // Given
        const {container} = render(<AddedRecipeIngredient removeAddedIngredient={mockRemoveIngredient} {...ingredientMock} quantity={undefined}/>)
        const trashIcon = container.getElementsByTagName('div')[0]

        // When
        fireEvent.click(trashIcon)

        // Then
        expect(mockRemoveIngredient).toBeCalledWith(ingredientMock.id)
    })
})