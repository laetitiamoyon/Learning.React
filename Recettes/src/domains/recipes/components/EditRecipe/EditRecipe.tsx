import { useState, useContext, ChangeEvent, FormEvent, FC } from 'react';
import styles from './EditRecipe.module.scss'
import { useHistory, useParams } from "react-router-dom";
import { RecipeContext } from '../../recipes.context';
import { updateRecipeAction } from '../../recipes.action';
import { Recipe } from '../../recipes.model';
import { imageUploader } from '../../../../shared/utils/imageUploader';

interface RouteProps
{
    id : string
}

const EditRecipe : FC = () =>
{
    const { recipesState : { recipes } } = useContext(RecipeContext)
    let { id } = useParams<RouteProps>();
    const { title, ingredients, description, imagePath, imageData } = recipes.find(r => r.id === id) as Recipe

    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)
    const [newImageData, setNewImageData] = useState(imageData)
    const [newImagePath, setNewImagePath] = useState(imagePath)
    const [newIngredients, setNewIngredients] = useState(ingredients)

    const { dispatch } = useContext(RecipeContext)
    const updateRecipe = () => dispatch(updateRecipeAction(
    { 
        id,
        title : newTitle,
        description : newDescription,
        ingredients : newIngredients, // todo : edit ingredients
        imagePath : newImagePath,
        imageData : newImageData,
    }))

    const history = useHistory()
    const redirectToRecipes = () => history.push('/recettes')

    const onChangeTitle = (event : ChangeEvent<HTMLInputElement>) => setNewTitle(event.target.value)
    const onChangeDescription = (event : ChangeEvent<HTMLTextAreaElement>) => setNewDescription(event.target.value)
    //const onChangeIngredients = (event : ChangeEvent<HTMLInputElement>) => setNewIngredients(event.target.value)
  
    const onImageUploaded = (image : string) =>
    {
        setNewImageData(image)
        setNewImagePath(undefined)
    }

    const onChangeImage = (event: ChangeEvent<HTMLInputElement>) =>
        imageUploader(event, onImageUploaded)

    const onSubmit = (event : FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault()
        updateRecipe()
        redirectToRecipes()
    }

    return <div className={styles.editRecipeContainer} >
        <h1 className={styles.formTitle}>Modifier la recette</h1>
        <div className={styles.addRecipeElement}>
            <div className={styles.changeImageContainer}>
                <label htmlFor="imageUpload" className={styles.label}>Téléchargez une nouvelle image</label>
                <input className={styles.inputImage} 
                    id="imageUpload" 
                    type="file"  
                    accept="image/png, image/jpeg" 
                    onChange={onChangeImage} />

                <img className={styles.image} alt='' src={newImageData} style={{ backgroundImage : `url(.${imagePath})`}} />
            </div>

            <form className={styles.formContainer} onSubmit={onSubmit}>
                <label className={styles.title}>Titre:</label>
                <input className={styles.input} onChange={onChangeTitle} value={newTitle}/>
                
                <label className={styles.title}> Description:</label>
                <textarea rows={10} className={styles.input} onChange={onChangeDescription} value={newDescription}/>

                <label className={styles.title}>Ingrédients </label>
                <ul>
                    { newIngredients.map(({id, quantity, title, unity}) => 
                        <li key={id} className={styles.recipeIngredient}>
                            <span className={styles.recipeIngredientInput}>{quantity}</span> {unity} de {title}
                        </li>)
                    }
                </ul>
                { /* <input className={styles.input} value={newIngredients} onChange={onChangeIngredients}/> */ } 
                
                <button className={styles.submitButton} onClick={updateRecipe}>Enregistrer</button>
            </form>
        </div>
    </div>
}

export default EditRecipe;