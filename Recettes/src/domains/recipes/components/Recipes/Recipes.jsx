import React, { useContext } from 'react'
import styles from './Recipes.module.css'
import Recipe from '../Recipe/Recipe'
import { RecipeContext } from '../../recipes.provider'

const Recipes = () => 
{
    const { recipes } = useContext(RecipeContext)

    return <>
        <h1 className={styles.title}>Nos recettes</h1>

        <div className={styles.recipeContainer}>
            { recipes.map(r => <Recipe {...r} key={r.id} />) }
        </div> 

    </>
}

export default Recipes;
