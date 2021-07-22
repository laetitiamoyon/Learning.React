import React from 'react';
import styles from './NewRecipe.module.css'

const NewRecipe = () => 
<>
    <h1 className={styles.formTitle}>Créer une nouvelle recette</h1>
    <form className={styles.formContainer} onSubmit>
        <label className={styles.title}>Titre:</label>
        <input className={styles.recipeTitle} name="titre"/>
        
        <label className={styles.title}> Description:</label>
        <textarea rows="5" className={styles.recipeDescription} name="Description"/>

        <label className={styles.title}>Ingrédients </label>
        <select className={styles.selectIngredient} name="ingredients"></select>

        <button className={styles.submitButton}>Enregistrer</button>
    </form>
</>

export default NewRecipe;