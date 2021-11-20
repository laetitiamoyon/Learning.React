import axios from 'axios'
import {recipeMock, recipeStateMock} from "../recipes.mock";
import {getAllRecipes, url, configuration, addRecipe, updateRecipe, removeRecipe} from "../recipes.api";

jest.mock('axios')

describe("recipe.api", () =>
{
    it("getAllRecipes should return all the recipes and axios.get should be called with routes.api and configuration", async () =>
    {
        // Given
        (axios.get as jest.Mock).mockReturnValue(Promise.resolve({ data : recipeStateMock.recipes }))

        // When
        const recipes = await getAllRecipes()

        // Then
        expect(recipes).toEqual(recipeStateMock.recipes)
        expect(axios.get).toHaveBeenCalledWith(url, configuration);
    })

    it("addRecipe should return add a recipe and axios.post should be called with routes.api and configuration", async () =>
    {
        // Given
        (axios.post as jest.Mock).mockReturnValue(Promise.resolve({ data : recipeMock }))

        // When
        const recipe = await addRecipe(recipeMock)

        // Then
        expect(recipe).toEqual(recipeMock)
        expect(axios.post).toHaveBeenCalledWith(url, recipeMock, configuration);
    })

    it("updateRecipe should put the recipe and axios.put should be called with routes.api/id and configuration", async () =>
    {
        // Given
        (axios.put as jest.Mock).mockReturnValue(Promise.resolve({ data : recipeMock }))

        // When
        const recipe = await updateRecipe(recipeMock)

        // Then
        expect(axios.put).toHaveBeenCalledWith(`${url}/${recipeMock.id}`, recipeMock, configuration);
        expect(recipe).toEqual(recipeMock)
    })

    it("removeRecipe should remove the recipe and axios.delete should be called with routes.api/id and configuration", async () =>
    {
        // Given
        (axios.delete as jest.Mock).mockReturnValue(Promise.resolve({ data : recipeMock }))

        // When
        const recipe = await removeRecipe(recipeMock.id)

        // Then
        expect(recipe).toEqual(recipeMock)
        expect(axios.delete).toHaveBeenCalledWith(`${url}/${recipeMock.id}`, configuration);
    })
})