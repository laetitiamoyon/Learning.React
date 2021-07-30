import React, { useState, useContext } from 'react';
import styles from './EditRecipe.module.css'
import { useHistory, useParams } from "react-router-dom";
import { RecipeContext } from '../../recipes.provider';


const EditRecipe = () =>
{
    const { recipes } = useContext(RecipeContext)
    let { id } = useParams();
    const { title, ingredients, description } = recipes.find(r => r.id === parseInt(id))

    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)
    const [newIngredients, setNewIngredients] = useState(ingredients)

    const { dispatch } = useContext(RecipeContext)
    const updateRecipe = () => dispatch(
    { 
        type: 'UPDATE_RECIPE',
        payload :
        { 
            id : parseInt(id), 
            title : newTitle,
            description : newDescription,
            ingredients : newIngredients,
        } 
    })

    const history = useHistory()
    const redirectToRecipes = () => history.push('/recettes')

    const onChangeTitle = (event) => setNewTitle(event.target.value)
    const onChangeDescription = (event) => setNewDescription(event.target.value)
    const onChangeIngredients = (event) => setNewIngredients(event.target.value)
    
    const onSubmit = (event) =>
    {
        event.preventDefault()
        updateRecipe()
        redirectToRecipes()
    }

    return <div className={styles.editRecipeContainer} >
            <h1 className={styles.formTitle}>Modifier la recette</h1>
                <form className={styles.formContainer} onSubmit={onSubmit}>
                    <label className={styles.title}>Titre:</label>
                    <input className={styles.input} 
                    onChange={onChangeTitle} 
                    value={newTitle}/>
                    
                    <label className={styles.title}> Description:</label>
                    <textarea rows="10" className={styles.input} 
                    onChange={onChangeDescription} 
                    value={newDescription}/>

                    <label className={styles.title}>Ingrédients </label>
                    <input className={styles.input} value={newIngredients} onChange={onChangeIngredients}/> 
                 
                    <button className={styles.submitButton} onClick={updateRecipe}>Enregistrer</button>
                </form>
            </div>
}

export default EditRecipe;