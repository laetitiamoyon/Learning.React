import React, { useState, useContext, FormEvent, ChangeEvent, FC } from 'react';
import styles from './AddRecipe.module.scss'
import { RecipeContext } from '../../recipes.context';
import AddRecipeIngredient from '../AddRecipeIngredient/AddRecipeIngredient';
import { useHistory } from 'react-router-dom';
import { addRecipeAction } from '../../recipes.action';
import AddRecipeImage from '../AddRecipeImage/AddRecipeImage';
import { RecipeIngredient } from '../../recipes.model';
import AddOtherRecipeInformations from '../AddOtherRecipeInformations/AddOtherRecipeInformations';

const AddRecipe :FC = () => 
{
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState<string | undefined>('')
    const [ingredients, setIngredients] = useState<RecipeIngredient[]>([])
    const [cookingTime, setCookingTime] = useState('')
    const [preparationTime, setpreparationTime] = useState('')
    const [calories, setCalories] = useState('')

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
        image,
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
                onChange={onTitleChange}
                value={title}
                name="Titre de la recette"/>

              <label className={styles.label}>Description</label>
              <textarea
                className={styles.input}
                rows={5}
                onChange={onDescriptionChange}
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
}

export default AddRecipe;