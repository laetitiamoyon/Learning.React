import React from 'react';
import { useParams } from "react-router-dom";
import { recipes } from '../Recipes/recipes.model'
import styles from './RecipeDescription.module.css'
import { useHistory } from "react-router-dom";

const RecipeDescription = () => 
{
    let { id } = useParams();
    const { title, ingredients, description } = recipes.find(r => r.id === parseInt(id))

    const history = useHistory();
    const onClick = () => history.push(`/modification-de-la-recette/${id}`, { id : id })

    return <div className={styles.editRecipeContainer}>
        <h1 className={styles.titleRecipe}>{title}</h1>
        <div className={styles.ingredientsRecipe}>{ingredients}</div>
        <div className={styles.descriptionRecipe}>{description}</div>
        <button className={styles.editButton} onClick={onClick}>Modifier</button>
    </div>

}

export default RecipeDescription;