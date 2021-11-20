import { selectRecipes} from "../recipes.selector";
import { initialApplicationState} from "../../root/root.state";

describe("recipe.selector", () =>
{
    it("selectRecipes should be defined", () =>
    {
        // Given & When
        const recipeState = selectRecipes(initialApplicationState)

        // Then
        expect(recipeState).toBeDefined()
    })
})