import React, { useState, useContext} from 'react';
import styles from './AddRecipe.module.css'
import { useHistory } from 'react-router-dom';
import { RecipeContext } from '../../recipes.provider';

const NewRecipe = () => 
{
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const { dispatch } = useContext(RecipeContext)
    const history = useHistory();

    const redirectToRecipes = () => history.push('/recettes')
    const addRecipe = () => dispatch({ type: 'ADD_RECIPE', payload : { title, description } })

    const onTitleChange = (event) => setTitle(event.target.value)
    const onDescriptionChange = (event) => setDescription(event.target.value)

    const onSubmit = (event) =>
    {
        event.preventDefault()

        addRecipe()
        redirectToRecipes();
    }

    return <>
        <h1 className={styles.formTitle}>Créer une nouvelle recette</h1>
        <form className={styles.formContainer} onSubmit={onSubmit}>
            <label className={styles.title}>Titre:</label>
            <input 
                onChange={onTitleChange}
                className={styles.recipeTitle}
                name="titre"
                value={title}/>
            
            <label className={styles.title}> Description:</label>
            <textarea 
                onChange={onDescriptionChange}
                rows="5"
                className={styles.recipeDescription}
                name="Description"
                value={description}/>

            <label className={styles.title}>Ingrédients </label>
            <select className={styles.selectIngredient} name="ingredients"></select>

            <button className={styles.submitButton}>Enregistrer</button>
        </form>
    </>
}

export default NewRecipe;