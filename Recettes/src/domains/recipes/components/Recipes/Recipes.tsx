import React, { FC, useContext, useState, useEffect, ChangeEvent } from 'react'
import styles from './Recipes.module.scss'
import { RecipeContext } from '../../recipes.context'
import useEmptyRecipeIngredientsToast from '../../hooks/useEmptyRecipeIngredientsToast';
import Recipe from '../Recipe/Recipe';
import { Highlight } from '../../../../shared/utils/Highlight';

const Recipes : FC = () => 
{   
    const { recipesState : { recipes } } = useContext(RecipeContext)
   const [filteredRecipes, setFilteredRecipes] = useState(recipes)
    const [searchRecipeTerm, setSearchRecipeTerm] = useState('')

    useEffect(() => {
        setFilteredRecipes(recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(searchRecipeTerm)))        
    }, [searchRecipeTerm, recipes]);

    useEmptyRecipeIngredientsToast()

    const onChangeRecipeTerm = (event : ChangeEvent<HTMLInputElement>) : void => setSearchRecipeTerm(event.target.value)

    return <div className={styles.container}>
        <h1 className={styles.title}>Mes recettes</h1>
        <div className={styles.form}>
            <input className={styles.input} 
            type="text" 
            placeholder="Rechercher" 
            value={searchRecipeTerm} 
            onChange={onChangeRecipeTerm}/>
        </div>
        <div className={styles.recipes}>
        { filteredRecipes.map(r => <Recipe {...r} key={r.id} />)} 
      </div>
    </div>
}
export default Recipes;
