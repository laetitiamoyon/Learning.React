import {selectIngredients} from "../ingredients.selector";
import {initialApplicationState} from "../../root/root.state";

describe("ingredient.selector", () =>
{
    it("selectIngredients should be defined", () =>
    {
        // Given & When
        const ingredientState = selectIngredients(initialApplicationState)

        // Then
        expect(ingredientState).toBeDefined()
    })
})