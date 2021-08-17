import React, { FC, useContext } from 'react';
import { useParams } from "react-router-dom";
import styles from './RecipeDescription.module.scss'
import { useHistory } from "react-router-dom";
import { RecipeContext } from '../../recipes.context';
import { Recipe } from '../../recipes.model';

interface RouteProps
{
    id : string
}

const RecipeDescription :FC = () => 
{
    const { recipesState : { recipes } } = useContext(RecipeContext)
    let { id } = useParams<RouteProps>();
    const { title, ingredients, description, imageData } = recipes.find(r => r.id === id) as Recipe

    const history = useHistory();
    const onClick = () => history.push(`/modification-de-la-recette/${id}`, { id : id })

    return <div className={styles.descriptionRecipeContainer}>
        <h1 className={styles.title}>{title}</h1>
       
        <div className={styles.recipeContainer}>
            <img className={styles.image} alt='' src={imageData}/>
            <div className={styles.description}>{description}</div>
            <div className={styles.ingredients}>Ingrédients : {ingredients}</div>
           
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={onClick}>Modifier</button>
            </div>
        </div>
    </div>
}

export default RecipeDescription;