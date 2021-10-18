import { useState, useContext, ChangeEvent, FormEvent, FC } from 'react';
import styles from './EditRecipe.module.scss'
import { useHistory, useParams } from "react-router-dom";
import { RecipeContext } from '../../recipes.context';
import { updateRecipeAction, updateIngredientRecipeAction } from '../../recipes.action';
import { Recipe } from '../../recipes.model';
import { IngredientContext } from '../../../ingredients/ingredients.context';
import { Ingredient as IngredientModel } from '../../../ingredients/ingredients.model';
import useEmptyRecipeIngredientsToast from '../../hooks/useEmptyRecipeIngredientsToast';
import EditRecipeImage from '../EditRecipeImage/EditRecipeImage';
import EditOtherRecipeInformations from '../EditOtherRecipeInformations/EditOtherRecipeInformations';

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

    const { title, ingredients, description, image, calories, preparationTime, cookingTime } = recipes.find(r => r.id === id) as Recipe ??
    { title : undefined, ingredients : undefined, description : undefined, image : undefined, calories : undefined, preparationTime : undefined, cookingTime : undefined}

    const [newImage, setNewImage] = useState(image)
    const [newIngredients, setNewIngredients] = useState(ingredients)
    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)
    const [newCalories, setNewCalories] = useState<string | undefined>(calories)
    const [newPreparationTime, setNewPreparationTime] = useState<string | undefined>(preparationTime)
    const [newCookingTime, setNewCookingTime] = useState<string | undefined>(cookingTime)

    const removeIngredient = (id : string) : void =>
        setNewIngredients(newIngredients.filter(i => i.id !== id))

    const updateIngredients = (id : string, title : string) : void =>
        setNewIngredients(newIngredients.map(i => i.id === id ? {...i, title : title} : i))

    const updateIngredientQuantity = (id : string, quantiy : number) : void =>
        setNewIngredients(newIngredients.map(i => i.id === id ? {...i, quantity : quantiy} : i))

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

              <div className={styles.ingredientContainer}>
                <label className={styles.ingredientLabel}>Ingrédients</label>
                  {newIngredients.map(({id, title, quantity, unity}) =>
                  
                    <li className={styles.ingredients} key={id}>
                      <input 
                        className={styles.quantityInput}
                        type="number"
                        value={quantity}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => updateIngredientQuantity(id, parseInt(event.target.value))}/>
                        <div className={styles.unity}>{unity} de </div>
                      
                      <select
                        className={styles.select}
                        onChange={(event: ChangeEvent<HTMLSelectElement>)=> updateIngredients(id, event.target.value)}>
                        <option>{title}</option>
                        {ingredientList.map(i => <option key={i.id} value={i.title}>{i.title}</option>)}
                      </select>

                      <div className={styles.trashIcon} onClick={() => removeIngredient(id)}></div>
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