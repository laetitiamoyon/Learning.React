import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import styles from './RecipeDescription.module.scss'
import { useHistory } from "react-router-dom";
import { RecipeContext } from '../../recipes.context';

const RecipeDescription = () => 
{
    const { recipesState : { recipes } } = useContext(RecipeContext)
    let { id } = useParams();
    const { title, ingredients, description } = recipes.find(r => r.id === id)

    const history = useHistory();
    const onClick = () => history.push(`/modification-de-la-recette/${id}`, { id : id })

    return <div className={styles.descriptionRecipeContainer}>
        <h1 className={styles.titleRecipe}>{title}</h1>
       
        <div className={styles.recipeContainer}>
            <div className={styles.descriptionRecipe}>{description}</div>
            <div className={styles.ingredientsRecipe}>Ingrédients : {ingredients}</div>
           
            <div className={styles.buttonContainer}>
                <button className={styles.editButton} onClick={onClick}>Modifier</button>
            </div>
        </div>
    </div>
}

export default RecipeDescription;