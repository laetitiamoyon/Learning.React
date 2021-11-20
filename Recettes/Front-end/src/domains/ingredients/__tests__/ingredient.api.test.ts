import axios from 'axios'
import {ingredientMock, ingredientStateMock} from "../ingredient.mock";
import {
    addIngredient,
    configuration,
    getAllIngredients,
    removeIngredient,
    updateIngredient,
    url
} from "../ingredients.api";

jest.mock('axios')

describe("ingredient.api", () =>
{
    it("getAllIngredients should return all the ingredients and axios.get should be called with routes.api and httpConfiguration.default", async () =>
    {
        // Given
        (axios.get as jest.Mock).mockReturnValue(Promise.resolve({ data : ingredientStateMock.ingredients }))

        // When
        const ingredients = await getAllIngredients()

        // Then
        expect(ingredients).toEqual(ingredientStateMock.ingredients)
        expect(axios.get).toHaveBeenCalledWith(url, configuration);
    })

    it("addIngredient should return add an ingredient and axios.post should be called with routes.api and configuration", async () =>
    {
        // Given
        (axios.post as jest.Mock).mockReturnValue(Promise.resolve({ data : ingredientMock }))

        // When
        const ingredient = await addIngredient(ingredientMock)

        // Then
        expect(ingredient).toEqual(ingredientMock)
        expect(axios.post).toHaveBeenCalledWith(url, ingredientMock, configuration);
    })

    it("updateIngredient should put the ingredient and axios.put should be called with routes.api/id and configuration", async () =>
    {
        // Given
        (axios.put as jest.Mock).mockReturnValue(Promise.resolve({ data : ingredientMock }))

        // When
        const ingredient = await updateIngredient(ingredientMock)

        // Then
        expect(axios.put).toHaveBeenCalledWith(`${url}/${ingredientMock.id}`, ingredientMock, configuration);
        expect(ingredient).toEqual(ingredientMock)
    })

    it("removeIngredient should remove the ingredient and axios.delete should be called with routes.api/id and configuration", async () =>
    {
        // Given
        (axios.delete as jest.Mock).mockReturnValue(Promise.resolve({ data : ingredientMock }))

        // When
        const ingredient = await removeIngredient(ingredientMock.id)

        // Then
        expect(ingredient).toEqual(ingredientMock)
        expect(axios.delete).toHaveBeenCalledWith(`${url}/${ingredientMock.id}`, configuration);
    })
})