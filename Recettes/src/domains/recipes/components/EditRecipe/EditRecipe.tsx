import { useState, useContext, ChangeEvent, FormEvent, FC } from 'react';
import styles from './EditRecipe.module.scss'
import { useHistory, useParams } from "react-router-dom";
import { RecipeContext } from '../../recipes.context';
import { updateRecipeAction, updateIngredientRecipeAction } from '../../recipes.action';
import { Recipe } from '../../recipes.model';
import { imageUploader } from '../../../../shared/utils/imageUploader'; 
import { IngredientContext } from '../../../ingredients/ingredients.context';
import { Ingredient as IngredientModel } from '../../../ingredients/ingredients.model';
import useEmptyRecipeIngredientsToast from '../../hooks/useEmptyRecipeIngredientsToast';

interface RouteProps
{
    id : string
}

const EditRecipe : FC<IngredientModel> = ({unity, title : ingredientTitle}) =>
{
    const { ingredientsState : { ingredients : ingredientList }} = useContext(IngredientContext)
    const { recipesState : { recipes } } = useContext(RecipeContext)
    const { id } = useParams<RouteProps>();
    const history = useHistory()
    const redirectToRecipes = () : void => history.push('/recettes')
    if (recipes.find(r => r.id === id) === undefined)
        redirectToRecipes()

    const { title, ingredients, description, imagePath, imageData } = recipes.find(r => r.id === id) as Recipe ??
    { title : undefined, ingredients : undefined, description : undefined, imagePath : undefined, imageData : undefined}

    const [newImageData, setNewImageData] = useState(imageData)
    const [newImagePath, setNewImagePath] = useState(imagePath)
    const [newIngredients, setNewIngredients] = useState(ingredients)
    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)

    const removeIngredient = (id : string) : void =>
        setNewIngredients(newIngredients.filter(i => i.id !== id))

    const updateIngredients = (id : string, title : string) : void =>
        setNewIngredients(newIngredients.map(i => i.id === id ? {...i, title : title} : i))

    const updateIngredientQuantity = (id : string, quantiy : number) : void =>
        setNewIngredients(newIngredients.map(i => i.id === id ? {...i, quantity : quantiy} : i))

    const { dispatch } = useContext(RecipeContext)


    const onChangeTitle = (event : ChangeEvent<HTMLInputElement>) : void => setNewTitle(event.target.value)
    
    const onChangeDescription = (event : ChangeEvent<HTMLTextAreaElement>) : void => setNewDescription(event.target.value)

    const onImageUploaded = (image : string) : void =>
    {
        setNewImageData(image)
        setNewImagePath(undefined)
    }

    const onChangeImage = (event: ChangeEvent<HTMLInputElement>) : void =>
        imageUploader(event, onImageUploaded)

    const updateRecipe = () : void => {
        dispatch(updateRecipeAction(
        { 
            id,
            title : newTitle,
            description : newDescription,
            ingredients : newIngredients,
            imagePath : newImagePath,
            imageData : newImageData,
        }))
        const ingredient : IngredientModel = {
            id,
            title : ingredientTitle,
            unity : unity,
        }
        dispatch(updateIngredientRecipeAction(ingredient))
    }

    const onSubmit = (event : FormEvent<HTMLFormElement>) : void =>
    {
        event.preventDefault()
        updateRecipe()
        redirectToRecipes()
    }

    useEmptyRecipeIngredientsToast()
   
    return <div className={styles.containerPage}>
        <h1 className={styles.title}>Modifier la recette</h1>
        <div className={styles.container}>
            <div className={styles.changeImageContainer}>
                <label htmlFor="imageUpload" className={styles.downloadImageButton}>Téléchargez une nouvelle image</label>
                <input className={styles.inputImage} 
                    id="imageUpload" 
                    type="file"  
                    accept="image/png, image/jpeg" 
                    onChange={onChangeImage} />

                <img className={styles.image} alt='' src={newImageData} style={{ backgroundImage : `url(.${imagePath})`}} />
            </div>

            <form className={styles.formContainer} onSubmit={onSubmit}>
                <label className={styles.label}>Titre:</label>
                <input className={styles.input} onChange={onChangeTitle} value={newTitle}/>
                
                <label className={styles.label}> Description:</label>
                <textarea rows={10} className={styles.input} onChange={onChangeDescription} value={newDescription}/>

                <label className={styles.label}>Ingrédients :</label>
                <ul>
                    { newIngredients.map(({id, quantity, unity, title}) => 
                        <li key={id} className={styles.recipeIngredient}>
                            <input
                                value={quantity}
                                type="number"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => updateIngredientQuantity(id, parseInt(event.target.value))}
                                className={styles.recipeIngredientInput}/>
                            {unity} de 

                            <select 
                                className={styles.select}
                                onChange={(event: ChangeEvent<HTMLSelectElement>) => updateIngredients(id, event.target.value)}
                                placeholder="Nom de l'ingrédient"> 
                                <option>{title}</option>
                                {ingredientList && ingredientList.map(i => <option key={i.id} value={i.title}>{i.title}</option>)}    
                            </select>

                            <button
                                onClick={()=> removeIngredient(id)} 
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