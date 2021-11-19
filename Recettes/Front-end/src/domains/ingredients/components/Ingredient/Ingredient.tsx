import { FC, useState, ChangeEvent } from 'react';
import { Ingredient as IngredientModel } from '../../ingredients.model';
import styles from './Ingredient.module.scss'
import { useDispatch } from 'react-redux';
import { removeIngredientRequestAction, editIngredientRequestAction } from '../../ingredients.actions';
import { updateRecipeIngredientRequestAction, removeRecipeIngredientRequestAction } from '../../../recipes/recipes.actions';
import { Highlight } from '../../../../shared/utils/Highlight';

type CurrentWindow = 
    'EDIT_INGREDIENT_BUTTON' |
    'UPDATE_INGREDIENT'

interface Props extends IngredientModel
{
    searchIngredientTerm : string,
    color : string
}

const Ingredient :FC<Props> = ({ id, title, unity, searchIngredientTerm, color }) =>
{
  const [newTitle, setNewTitle] = useState(title)
  const [newUnity, setNewUnity] = useState(unity)
  const [currentWindow, setWindow] = useState<CurrentWindow>('EDIT_INGREDIENT_BUTTON')

  const clickOnEditIngredient = () : void => setWindow('UPDATE_INGREDIENT')

  const onChangeTitle = (event : ChangeEvent<HTMLInputElement>) => setNewTitle(event.target.value)
  const onChangeUnity = (event : ChangeEvent<HTMLInputElement>) => setNewUnity(event.target.value)

  const ingredientDispatch = useDispatch()
  const recipeDispatch = useDispatch()

  const removeIngredient = () => 
  {
    ingredientDispatch(removeIngredientRequestAction(id))
    recipeDispatch(removeRecipeIngredientRequestAction(id))
  }

  const updateRecipeIngredient = () => 
  {
    ingredientDispatch(editIngredientRequestAction(
    { 
      id, 
      title : newTitle,
      unity : newUnity
    }))
    recipeDispatch(updateRecipeIngredientRequestAction({
      id,
      title : newTitle,
      unity : newUnity
    }))
  }

  return <div className={styles.container}>
    <div className={styles.ingredient}>
    { currentWindow === 'EDIT_INGREDIENT_BUTTON' && 
            <div onClick={clickOnEditIngredient} className={styles.title}>
                <Highlight searchTerm={searchIngredientTerm} text={title} color={color}/></div>}
        
            { currentWindow === 'UPDATE_INGREDIENT' &&
                <input
                    className={styles.input} 
                    placeholder="titre"
                    onChange={onChangeTitle} 
                    value={newTitle}/> 
            }

      <input 
        className={styles.input} 
        value={newUnity}
        onChange={onChangeUnity}/>

      <button className={styles.updateButton} onClick={updateRecipeIngredient}>Mettre à jour</button>
      <div className={styles.trashIcon} onClick={removeIngredient}></div>
    </div>
  </div>
};

export default Ingredient;