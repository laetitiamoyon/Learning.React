import React, { useState, useContext} from 'react';
import styles from './AddRecipe.module.scss'
import { RecipeContext } from '../../recipes.provider';
import AddIngredient from '../AddIngredient/AddIngredient';
import { useHistory } from 'react-router-dom';
import { addRecipeAction } from '../../recipes.action';
import ImageUploading from 'react-images-uploading';


const AddRecipe = () => 
{
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [images, setImages] = useState([]);
    const { dispatch } = useContext(RecipeContext)

    const history = useHistory();
    const redirectToRecipes = () => history.push('/recettes')

    const addRecipe = () => dispatch(addRecipeAction(title, description, images))

    const onTitleChange = (event) => setTitle(event.target.value)
    const onDescriptionChange = (event) => setDescription(event.target.value)
    const onChangeImage = (imageList) => setImages(imageList);

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
                <ImageUploading value={images} onChange={onChangeImage}
                    dataURLKey="data_url"> 
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemove, }) => (
                    <div>
                        <button className={styles.uploadImageButton} onClick={onImageUpload}> Télécharger votre image </button> &nbsp;
                        <button className={styles.removeImageButton} onClick={onImageRemove}>Supprimer l'image</button>
                        
                        {imageList.map((image, index) => (
                        <div key={index}>
                            <img className={styles.imageUploaded} src={image['data_url']} alt="" />
                            <div>
                                <button className={styles.addImageButton} onClick={(event) => 
                                setImages(event.target.value) + alert("Votre image a bien été ajoutée")}>Ajouter l'image</button>
                            </div>
                        </div> ))}
                    </div> )}
                </ImageUploading></div>

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

                    <AddIngredient/>

                    <button className={styles.submitButton}>Enregistrer</button>
                </form>
            
            </div>
        </div>
    </div>
}

export default AddRecipe;