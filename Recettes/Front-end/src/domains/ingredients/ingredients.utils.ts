import { Ingredient } from "./ingredients.model";

export const filterIngredients = (ingredients : Ingredient[], searchTerm : string) : Ingredient[] =>
    ingredients.filter(r => r.title.toLowerCase().includes(searchTerm.toLowerCase()))

// TODO : tester la couche utils (__tests__/ingredients.utils.test.ts)