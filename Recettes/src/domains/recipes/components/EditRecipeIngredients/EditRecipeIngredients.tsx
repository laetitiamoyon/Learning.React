import { ChangeEvent, FC, useState } from 'react';
import { RecipeIngredient } from '../../recipes.model';

interface Props
{
    ingredients : RecipeIngredient[]
}

const EditRecipeIngredients : FC<Props> = ({ ingredients }) => 
{
    const [recipeIngredientsId, setRecipeIngredientsId] = useState(ingredients)

    const updateRecipeIngredients = (oldId: string, newId: string) : void =>
        setRecipeIngredientsId(recipeIngredientsId.map(r => r.id === oldId ? 
            {
                ...r,...(ingredients.find(i => i.id === newId))
            } : r ))

    
    return <></>
    //<select 
    //     onChange={(event: ChangeEvent<HTMLSelectElement>) => updateRecipeIngredients(recipeIngredientsId, event.target.value)}
    //     className={styles.select} 
    //     placeholder="Nom de l'ingrédient">
    // </select>
};

export default EditRecipeIngredients;