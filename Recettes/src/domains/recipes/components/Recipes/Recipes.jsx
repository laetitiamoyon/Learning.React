import React, { useContext } from 'react'
import styles from './Recipes.module.css'
import Recipe from '../Recipe/Recipe'
import { RecipeContext } from '../../recipes.provider'

import { useHistory } from "react-router-dom"

const Recipes = () => 
{
    const { recipes } = useContext(RecipeContext)

    const history = useHistory();

    const onClick = () => history.push("creer-une-recette/")


    return <>

            <div className={styles.addRecipeContainer}>
            <div className={styles.addRecipeElement} onClick={onClick}>Ajouter une recette</div>
            </div>
        <h1 className={styles.title}>Nos recettes</h1>

        <div className={styles.recipeContainer}>
            { recipes && recipes.map(r => <Recipe {...r} key={r.id} />) }
        </div> 
    </>
}

export default Recipes;
