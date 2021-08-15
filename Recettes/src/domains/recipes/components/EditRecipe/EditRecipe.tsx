import React, { useState, useContext, ChangeEvent, FormEvent } from 'react';
import styles from './EditRecipe.module.scss'
import { useHistory, useParams } from "react-router-dom";
import { RecipeContext } from '../../recipes.context';
import { updateRecipeAction } from '../../recipes.action';
import { Recipe } from '../../recipes.model';

interface RouteProps
{
    id : string
}

const EditRecipe = () =>
{
    const { recipesState : { recipes } } = useContext(RecipeContext)
    let { id } = useParams<RouteProps>();
    const { title, ingredients, description, imagePath, imageData } = recipes.find(r => r.id === id) as Recipe

    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)
    const [newIngredients, setNewIngredients] = useState(ingredients)

    const { dispatch } = useContext(RecipeContext)
    const updateRecipe = () => dispatch(updateRecipeAction(
    { 
        id,
        title : newTitle,
        description : newDescription,
        ingredients : newIngredients,
        imagePath,
        imageData
    }))

    const history = useHistory()
    const redirectToRecipes = () => history.push('/recettes')

    const onChangeTitle = (event : ChangeEvent<HTMLInputElement>) => setNewTitle(event.target.value)
    const onChangeDescription = (event : ChangeEvent<HTMLTextAreaElement>) => setNewDescription(event.target.value)
    const onChangeIngredients = (event : ChangeEvent<HTMLInputElement>) => setNewIngredients(event.target.value)
    
    const onSubmit = (event : FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault()
        updateRecipe()
        redirectToRecipes()
    }

    return <div className={styles.editRecipeContainer} >
        <h1 className={styles.formTitle}>Modifier la recette</h1>

        <form className={styles.formContainer} onSubmit={onSubmit}>
            <label className={styles.title}>Titre:</label>
            <input className={styles.input} onChange={onChangeTitle} value={newTitle}/>
            
            <label className={styles.title}> Description:</label>
            <textarea rows={10} className={styles.input} onChange={onChangeDescription} value={newDescription}/>

            <label className={styles.title}>Ingrédients </label>
            <input className={styles.input} value={newIngredients} onChange={onChangeIngredients}/> 
            
            <button className={styles.submitButton} onClick={updateRecipe}>Enregistrer</button>
        </form>
    </div>
}

export default EditRecipe;