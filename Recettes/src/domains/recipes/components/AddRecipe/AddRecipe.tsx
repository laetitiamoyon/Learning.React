import React, { useState, useContext, FormEvent, ChangeEvent, FC } from 'react';
import styles from './AddRecipe.module.scss'
import { RecipeContext } from '../../recipes.context';
import AddRecipeIngredient from '../AddRecipeIngredient/AddRecipeIngredient';
import { useHistory } from 'react-router-dom';
import { addRecipeAction } from '../../recipes.action';
import AddRecipeImage from '../AddRecipeImage/AddRecipeImage';
import { RecipeIngredient } from '../../recipes.model';


const AddRecipe :FC = () => 
{
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imageData, setImageData] = useState<string | undefined>(undefined)
    const [ingredients, setIngredients] = useState<RecipeIngredient[]>([])

    const addIngredient = (ingredient : RecipeIngredient) => setIngredients(
        [...ingredients, ingredient])
    
    const removeIngredient = (id : string) => setIngredients(
        ingredients.filter(ingredient => ingredient.id !== id))

    const { dispatch } = useContext(RecipeContext)

    const history = useHistory();
    const redirectToRecipes = () => history.push('/recettes')

    const addRecipe = () => dispatch(addRecipeAction(
    { 
        id : '',
        title,
        description,
        ingredients,
        imageData,
    }))

    const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)
    const onDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => setDescription(event.target.value)

    const onSubmit = (event: FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault()

        addRecipe()
        redirectToRecipes();
    }

    return <div className={styles.addRecipeContainer}>
        <h1 className={styles.formTitle}>Ajouter une nouvelle recette</h1>

        <div className={styles.addRecipeElement}>

            <AddRecipeImage imageData={imageData} setImageData={setImageData}/>

            <div className={styles.formElementContainer}>
                <form className={styles.formContainer} onSubmit={onSubmit}>
                    <label className={styles.title}>Titre:</label>
                    <input 
                        onChange={onTitleChange}
                        className={styles.input}
                        name="titre"
                        value={title}/>
                    
                    <label className={styles.title}> Description:</label>
                    <textarea 
                        onChange={onDescriptionChange}
                        rows={5}
                        className={styles.input} 
                        name="Description"
                        value={description}/>

                    <AddRecipeIngredient
                        ingredients={ingredients}
                        addIngredient={addIngredient}
                        removeIngredient={removeIngredient}/>
                        
                    <button className={styles.submitButton}>Enregistrer</button>
                </form>
            
            </div>
        </div>
        
    </div>
}

export default AddRecipe;