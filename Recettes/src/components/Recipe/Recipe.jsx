import React from 'react'
import { useHistory } from "react-router-dom";
import styles from './Recipe.module.css'

const Recipe = ({id, title, image}) =>
{
    const history = useHistory();

    const onClick = () => history.push(`/description-de-la-recette/${id}`, { id : id })

    return <div className={styles.recipeContainer}>
        <div className={styles.recipeElement}>
            <div className={styles.recipeImage} src={image}></div>
            <div className={styles.recipeTitle}>{title}</div>
            <div className={styles.recipeButton} onClick={onClick}>Voir la recette</div>
        </div>
    </div>
}

export default Recipe;