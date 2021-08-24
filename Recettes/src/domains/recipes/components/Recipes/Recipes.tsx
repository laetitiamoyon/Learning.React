import React, { FC, useContext } from 'react'
import styles from './Recipes.module.scss'
import Recipe from '../Recipe/Recipe'
import { RecipeContext } from '../../recipes.context'

const Recipes : FC = () => 
{
    const { recipesState : { recipes } } = useContext(RecipeContext)

    return <div className={styles.recipeContainer}>
        <h1 className={styles.title}>Nos recettes</h1>
        <div className={styles.recipeElementContainer}>
            { recipes && recipes.map(r => <Recipe {...r} key={r.id} />) }
        </div>
    </div> 
}

export default Recipes;
