import React from 'react';
import { FC, useState, ChangeEvent, FormEvent } from 'react';
import { Recipe } from '../../recipes.model';
import styles from './EditRecipe.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { editRecipeRequestAction, updateRecipeIngredientRequestAction, removeRecipeIngredientRequestAction } from '../../recipes.actions';
import { useHistory, useParams } from 'react-router-dom';
import { selectRecipes } from '../../recipes.selector';
import { selectIngredients } from '../../../ingredients/ingredients.selector';
import { Ingredient } from '../../../ingredients/ingredients.model';
import EditOtherRecipeInformations from '../EditOtherRecipeInformations/EditOtherRecipeInformations';
import EditRecipeImage from '../EditRecipeImage/EditRecipeImage';

interface RouteProps
{
  id : string
}

const EditRecipe : FC<Ingredient> = ({id : ingredientId, title : ingredientTitle, unity}) => 
{
  let {id} = useParams<RouteProps>()
  const recipes = useSelector(selectRecipes)
  const ingredientsList = useSelector(selectIngredients)
  const {title, description, ingredients, image, calories, preparationTime, cookingTime} = recipes.recipes.find(r => r.id === id) as Recipe

  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)
  const [newImage, setNewImage] = useState<string | undefined>(image)
  const [newIngredients, setNewIngredients] = useState(ingredients)
  const [newCalories, setNewCalories] = useState<string | undefined>(calories)
  const [newPreparationTime, setNewPreparationTime] = useState<string | undefined>(preparationTime)
  const [newCookingTime, setNewCookingTime] = useState<string | undefined>(cookingTime)

  const onChangeTitle = (event : ChangeEvent<HTMLInputElement>) => setNewTitle(event.target.value)
  const onChangeDescription = (event : ChangeEvent<HTMLTextAreaElement>) => setNewDescription(event.target.value)

  const dispatch = useDispatch()

  const updateRecipe = () => 
  {
    dispatch(editRecipeRequestAction({
      id,
      title : newTitle,
      description: newDescription,
      image : newImage,
      ingredients: newIngredients,
      calories: newCalories,
      cookingTime: newCookingTime,
      preparationTime: newPreparationTime
    }))
    dispatch(updateRecipeIngredientRequestAction({
      id : ingredientId,
      title : ingredientTitle,
      unity
    }))
  }
  
  const removeRecipeIngredient = (id: string) : void => setNewIngredients(newIngredients.filter(i => i.id !== id))

  const updateRecipeIngredient = (id: string, title : string) => setNewIngredients(
    newIngredients.map(i => i.id === id ? {...i, title : title} : i))
  
  const updateQuantity = (id: string, quantity: number) => setNewIngredients(
    newIngredients.map(i => i.id === id ? {...i, quantity : quantity} : i)
  )
  
  const history = useHistory()
  const redirectToRecipes = () => history.push('/recettes')
  const onSubmit = (event : FormEvent<HTMLFormElement>) => 
  {
    event.preventDefault()
    updateRecipe()
    redirectToRecipes()
  }

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

              <div className={styles.ingredientContainer}>
                <label className={styles.ingredientLabel}>Ingrédients</label>
                  {newIngredients.map(({id, title, quantity, unity}) =>
                  
                    <li className={styles.ingredients} key={id}>
                      <input 
                        className={styles.quantityInput}
                        type="number"
                        value={quantity}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => updateQuantity(id, parseInt(event.target.value))}/>
                        <div className={styles.unity}>{unity} de </div>
                      
                      <select
                        className={styles.select}
                        onChange={(event: ChangeEvent<HTMLSelectElement>)=> updateRecipeIngredient(id, event.target.value)}>
                        <option>{title}</option>
                        {ingredientsList.ingredients.map(i => <option key={i.id} value={i.title}>{i.title}</option>)}
                      </select>

                      <div className={styles.trashIcon} onClick={() => removeRecipeIngredient(id)}></div>
                    </li>)
                  }
              </div>
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