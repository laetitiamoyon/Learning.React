import React, { useState, useContext} from 'react';
import styles from './AddRecipe.module.scss'
import { RecipeContext } from '../../recipes.provider';
import AddIngredient from '../AddIngredient/AddIngredient';
import { useHistory } from 'react-router-dom';
import { addRecipeAction } from '../../recipes.action';

const AddRecipe = () => 
{
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const { dispatch } = useContext(RecipeContext)

    const history = useHistory();
    const redirectToRecipes = () => history.push('/recettes')

    const addRecipe = () => dispatch(addRecipeAction(title, description, imageData))

    const onTitleChange = (event) => setTitle(event.target.value)
    const onDescriptionChange = (event) => setDescription(event.target.value)
    const [imageData, setImageData] = useState(null)

    const uploadImage = (event) =>
    {
        var file = event.target.files[0]
        var reader = new FileReader();

        reader.onload = (event) => setImageData(event.target.result);
        reader.readAsDataURL(file)
    }

    const onSubmit = (event) =>
    {
        event.preventDefault()

        addRecipe()
        redirectToRecipes();
    }

    return <div className={styles.addRecipeContainer}>
        <h1 className={styles.formTitle}>Ajouter une nouvelle recette</h1>
            <div className={styles.formElementContainer}>
                <form className={styles.formContainer} onSubmit={onSubmit}>
                    <input id="browse" type="file" onChange={uploadImage}/>
                    <img width="200" height="200" alt='' src={imageData}/>

                    <label className={styles.title}>Titre:</label>
                    <input 
                        onChange={onTitleChange}
                        className={styles.input}
                        name="titre"
                        value={title}/>
                    
                    <label className={styles.title}> Description:</label>
                    <textarea 
                        onChange={onDescriptionChange}
                        rows="5"
                        className={styles.input} 
                        name="Description"
                        value={description}/>

                    <AddIngredient/>

                    <button className={styles.submitButton}>Enregistrer</button>
                </form>
            
            </div>
        
    </div>
}

export default AddRecipe;