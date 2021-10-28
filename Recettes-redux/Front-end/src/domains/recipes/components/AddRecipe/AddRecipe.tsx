import { useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipeRequestAction } from '../../recipes.actions';
import { newGuid } from '../../../../shared/utils/string';
import { ChangeEvent } from 'react';
import styles from './AddRecipe.module.scss';
import { useHistory } from 'react-router-dom';
import { FormEvent } from 'react';
import AddRecipeIngredient from '../AddRecipeIngredient/AddRecipeIngredient';
import { RecipeIngredients } from '../../recipes.model';
import AddRecipeImage from '../AddRecipeImage/AddRecipeImage';
import AddOtherRecipeInformations from '../AddOtherRecipeInformations/AddOtherRecipeInformations';

const AddRecipe : FC = () => 
{
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<string | undefined>('')
  const [ingredients, setIngredients] = useState<RecipeIngredients[]>([])
  const [cookingTime, setCookingTime] = useState('')
  const [preparationTime, setpreparationTime] = useState('')
  const [calories, setCalories] = useState('')

  const addIngredient = (ingredient : RecipeIngredients) : void => setIngredients(
    [...ingredients, { ...ingredient, id : newGuid() } ])

  const removeIngredient = (id : string) : void => 
    setIngredients(ingredients.filter(ingredient => ingredient.id !== id))

  const dispatch = useDispatch()
  const addNewRecipe = () => dispatch(addRecipeRequestAction({
    id: newGuid(),
    title,
    description,
    image,
    cookingTime,
    preparationTime,
    calories,
    ingredients 

  }))

  const history = useHistory()
  const redirectToRecipes = () => history.push('/recettes')

  const onChangeTitle = (event : ChangeEvent<HTMLInputElement>) : void => 
    setTitle(event.target.value)
  const onChangeDescription = (event : ChangeEvent<HTMLTextAreaElement>) : void => 
    setDescription(event.target.value)

  const onSubmit = (event : FormEvent<HTMLFormElement>) : void => 
  {
    event.preventDefault()

    addNewRecipe()
    redirectToRecipes()
  }

  return <div className={styles.containerPage}>
    <h1 className={styles.title}>Ajouter une nouvelle recette</h1>
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.container}>

        <AddRecipeImage image={image} setImage={setImage}/>

        <div className={styles.element}>
          <div className={styles.rightElements}>
              <label className={styles.label}>Titre de la recette</label>
              <input 
                className={styles.input}
                type="text"
                onChange={onChangeTitle}
                value={title}
                name="Titre de la recette"/>

              <label className={styles.label}>Description</label>
              <textarea
                className={styles.input}
                rows={5}
                onChange={onChangeDescription}
                value={description}
                name="Description"/>

              <div className={styles.addRecipeIngredient}> <AddRecipeIngredient
                ingredients={ingredients}
                addIngredient={addIngredient}
                removeIngredient={removeIngredient}/></div>
          </div>
        </div>
      </div>
        
      <AddOtherRecipeInformations calories={calories} setCalories={setCalories}
            cookingTime={cookingTime} setCookingTime={setCookingTime}
            preparationTime={preparationTime} setpreparationTime={setpreparationTime}/>

      <button className={styles.submitButton}>Enregistrer</button>
    </form>
  </div>
};

export default AddRecipe;