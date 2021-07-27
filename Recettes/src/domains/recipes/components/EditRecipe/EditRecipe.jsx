import React, { useState, useContext } from 'react';
import styles from './EditRecipe.module.css'
import { useParams } from "react-router-dom";
import { RecipeContext } from '../../recipes.provider';


const EditRecipe = () =>
{
    const { recipes } = useContext(RecipeContext)
    let { id } = useParams();
    const { title : t, ingredients, description } = recipes.find(r => r.id === parseInt(id))
    const [title] = useState(t)

    return <form className={styles.formContainer} onSubmit>
        <label className={styles.title}>Titre:</label>
        <input className={styles.recipeTitle} defaultValue={title}/>
        
        <label className={styles.title}> Description:</label>
        <textarea rows="10" className={styles.recipeDescription} value={description}/>

        <label className={styles.title}>Ingrédients </label>
        <select className={styles.selectIngredient} >
        <option>{ingredients}</option>
        </select>

        <button className={styles.submitButton}>Enregistrer</button>
    </form>
}

export default EditRecipe;