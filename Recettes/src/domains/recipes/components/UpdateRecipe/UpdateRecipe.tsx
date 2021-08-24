import { FC, useState } from 'react';
import { RecipeIngredient } from '../../recipes.model';

interface Props
{
    ingredients : RecipeIngredient[]
}

const UpdateRecipe : FC<Props> = ({ ingredients }) => 
{
    const [recipeIngredients, setRecipeIngredients] = useState(ingredients)

    const updateRecipeIngredient = (oldId: string, newId: string) : void =>
        setRecipeIngredients(recipeIngredients.map(r => r.id === oldId ? 
            {
                ...r,...(ingredients.find(i => i.id === newId))
            } : r ))

    return <></>
};

export default UpdateRecipe;