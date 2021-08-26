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

    const addIngredient = (ingredient : RecipeIngredient) : void => setIngredients(
        [...ingredients, ingredient])
    
    const removeIngredient = (id : string) : void => setIngredients(
        ingredients.filter(ingredient => ingredient.id !== id))

    const { dispatch } = useContext(RecipeContext)

    const history = useHistory();
    const redirectToRecipes = () : void => history.push('/recettes')

    const addRecipe = () : void => dispatch(addRecipeAction(
    { 
        id : '',
        title,
        description,
        ingredients,
        imageData,
    }))

    const onTitleChange = (event: ChangeEvent<HTMLInputElement>) : void => 
    {
        localStorage.setItem('title',event.target.value)
        setTitle(event?.target.value)
    }


    const onDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) : void => setDescription(event.target.value)

    const onSubmit = (event: FormEvent<HTMLFormElement>) : void =>
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