import React, { useState, useContext} from 'react';
import styles from './AddRecipe.module.scss'
import { RecipeContext } from '../../recipes.provider';
import AddRecipeIngredient from '../AddRecipeIngredient/AddRecipeIngredient';
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
        if (!event.target.files || !event.target.files[0]) return

        var file = event.target.files[0]
        var reader = new FileReader()

        reader.onload = (event) => setImageData(event.target.result)
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

        <div className={styles.addRecipeElement}>
            <div className={styles.uploadImageContainer}>
                <div className={styles.titleUploadImage}>Choisissez l'image de votre recette</div>
                <label for="imageUpload" className={styles.labelUpload}>Téléchargez l'image</label>
               
                <input className={styles.inputUpload} 
                    id="imageUpload" 
                    type="file"  
                    accept="image/png, image/jpeg" 
                    onChange={uploadImage} />

                <img className={styles.imageUpload} alt='' src={imageData}/>
            </div>

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
                        rows="5"
                        className={styles.input} 
                        name="Description"
                        value={description}/>

                    <AddRecipeIngredient/>

                    <button className={styles.submitButton}>Enregistrer</button>
                </form>
            
            </div>
        </div>
        
    </div>
}

export default AddRecipe;