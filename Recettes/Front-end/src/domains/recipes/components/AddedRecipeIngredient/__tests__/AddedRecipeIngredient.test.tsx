import {render} from "@testing-library/react";
import AddedRecipeIngredient from "../AddedRecipeIngredient";

const mockRemoveIngredient = jest.fn()

describe("AddedRecipeIngredient", () =>
{
    it("should match snapshot", () =>
    {
        //Given & When
        const { container } = render(<AddedRecipeIngredient
            removeAddedIngredient={""} id={''} unity={''} title={''} quantity={undefined} />)

        //Then
        expect(container).toMatchSnapshot()
    })
})