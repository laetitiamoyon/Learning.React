import { useState, useContext, ChangeEvent, FormEvent, FC } from 'react';
import styles from './EditRecipe.module.scss'
import { useHistory, useParams } from "react-router-dom";
import { RecipeContext } from '../../recipes.context';
import { updateRecipeAction, updateIngredientRecipeAction } from '../../recipes.action';
import { Recipe, RecipeIngredient } from '../../recipes.model';
import useEmptyRecipeIngredientsToast from '../../hooks/useEmptyRecipeIngredientsToast';
import EditRecipeImage from '../EditRecipeImage/EditRecipeImage';
import EditOtherRecipeInformations from '../EditOtherRecipeInformations/EditOtherRecipeInformations';
import EditRecipeIngredient from '../EditRecipeIngredient/EditRecipeIngredient';

interface RouteProps
{
    id : string
}

const EditRecipe : FC<RecipeIngredient> = ({unity, title : ingredientTitle, quantity}) =>
{
    const { recipesState : { recipes } } = useContext(RecipeContext)
    const { id } = useParams<RouteProps>();
    const history = useHistory()
    const redirectToRecipes = () : void => history.push('/recettes')

    const { title, ingredients, description, image, calories, preparationTime, cookingTime } = recipes.find(r => r.id === id) as Recipe 

    const [newImage, setNewImage] = useState(image)
    const [newIngredients, setNewIngredients] = useState(ingredients)
    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)
    const [newCalories, setNewCalories] = useState<string | undefined>(calories)
    const [newPreparationTime, setNewPreparationTime] = useState<string | undefined>(preparationTime)
    const [newCookingTime, setNewCookingTime] = useState<string | undefined>(cookingTime)

    const { dispatch } = useContext(RecipeContext)

    const onChangeTitle = (event : ChangeEvent<HTMLInputElement>) : void => setNewTitle(event.target.value)
    
    const onChangeDescription = (event : ChangeEvent<HTMLTextAreaElement>) : void => setNewDescription(event.target.value)

    const updateRecipe = () : void => {
        dispatch(updateRecipeAction(
        { 
            id,
            title : newTitle,
            description : newDescription,
            ingredients : newIngredients,
            image : newImage,
            imageData : newImage,
            calories: newCalories,
            cookingTime: newCookingTime,
            preparationTime: newPreparationTime
        }))
        dispatch(updateIngredientRecipeAction({
            id,
            title : ingredientTitle,
            unity : unity,
        }))
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
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.container}>

        <EditRecipeImage newImage={newImage} setNewImage={setNewImage}/>

        <div className={styles.element}>
          <div className={styles.rightElements}>
              <label className={styles.label}>Titre de la recette</label>
              <input 
                className={styles.input}
                type="text"
                onChange={onChangeTitle}
                value={newTitle}
                name="Titre de la recette"/>

              <label className={styles.label}>Description</label>
              <textarea
                className={styles.input}
                rows={5}
                onChange={onChangeDescription}
                value={newDescription}
                name="Description"/>

              <EditRecipeIngredient 
                newIngredients={newIngredients} setNewIngredients={setNewIngredients}/>

          </div>
        </div>
      </div>
        
      <EditOtherRecipeInformations
        newCalories={newCalories}
        setNewCalories={setNewCalories}
        newCookingTime={newCookingTime}
        setNewCookingTime={setNewCookingTime}
        newPreparationTime={newPreparationTime}
        setNewPreparationTime={setNewPreparationTime}/>

      <button className={styles.submitButton}>Enregistrer</button>
    </form>
  </div>
};

export default EditRecipe;