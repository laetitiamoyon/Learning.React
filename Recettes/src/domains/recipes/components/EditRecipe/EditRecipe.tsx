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

    const removeIngredient = (id : string) =>
        setNewIngredients(newIngredients.filter(i => i.id !== id))

    const updateIngredientQuantity = (id : string, quantiy : number) =>
        setNewIngredients(newIngredients.map(i => i.id === id ? {...i, quantity : quantiy} : i))

    const { dispatch } = useContext(RecipeContext)
    const updateRecipe = () => dispatch(updateRecipeAction(
    { 
        id,
        title : newTitle,
        description : newDescription,
        ingredients : newIngredients,
        imagePath : newImagePath,
        imageData : newImageData,
    }))

    const history = useHistory()
    const redirectToRecipes = () => history.push('/recettes')

    const onChangeTitle = (event : ChangeEvent<HTMLInputElement>) : void => setNewTitle(event.target.value)
    const onChangeDescription = (event : ChangeEvent<HTMLTextAreaElement>) : void => setNewDescription(event.target.value)
  
    const onImageUploaded = (image : string) : void =>
    {
        setNewImageData(image)
        setNewImagePath(undefined)
    }

    const onChangeImage = (event: ChangeEvent<HTMLInputElement>) : void =>
        imageUploader(event, onImageUploaded)

    const onSubmit = (event : FormEvent<HTMLFormElement>) : void =>
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
                            <input
                                value={quantity}
                                type="number"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => updateIngredientQuantity(id, parseInt(event.target.value))}
                                className={styles.recipeIngredientInput}/>
                            {unity} de {title} 
                            <button
                                onClick={() => removeIngredient(id)} 
                                className={styles.removeButton}>
                                Supprimer
                            </button>
                        </li>)
                    }
                </ul>
                
                <button className={styles.submitButton} onClick={updateRecipe}>Enregistrer</button>
            </form>
        </div>
    </div>
}

export default EditRecipe;