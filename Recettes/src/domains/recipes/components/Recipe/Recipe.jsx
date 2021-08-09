import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { removeRecipeAction } from '../../recipes.action';
import { RecipeContext } from '../../recipes.provider';
import styles from './Recipe.module.scss'

const Recipe = ({id, title, image}) =>
{
    const history = useHistory();
    const seeRecipeOnClick = () => history.push(`/description-de-la-recette/${id}`, { id : id })
    const removeRecipe = () => dispatch(removeRecipeAction(id))
    const { dispatch } = useContext(RecipeContext)

    return <div className={styles.recipeContainer}>
        <div className={styles.removeButton} onClick={removeRecipe}></div>
       
        <div className={styles.recipeElement}>
            <img className={styles.recipeImage} alt='' style={{ backgroundImage :`url(${image})`}}/>
            <div className={styles.recipeTitle}>{title}</div>
            <div className={styles.viewRecipeButton} onClick={seeRecipeOnClick}>Voir la recette</div>
        </div>
    </div>
}

export default Recipe;