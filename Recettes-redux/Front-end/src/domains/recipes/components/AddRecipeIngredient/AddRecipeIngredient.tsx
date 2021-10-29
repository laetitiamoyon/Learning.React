import { RecipeIngredients } from '../../recipes.model';
import styles from './AddRecipeIngredient.module.scss'
import { FC, useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { selectIngredients } from '../../../ingredients/ingredients.selector';
import { Ingredient } from '../../../ingredients/ingredients.model';
import AddedRecipeIngredient from '../AddedRecipeIngredient/AddedRecipeIngredient';

type CurrentWindow =
  'ADD_INGREDIENT_BUTTON' |
  'SELECT_AN_INGREDIENT' |
  'INGREDIENT_SELECTED'

interface Props 
{
  ingredients : RecipeIngredients[]
  addIngredient : (ingredient : RecipeIngredients) => void
  removeIngredient : (id : string) => void
}

const AddRecipeIngredient : FC<Props> = ({ ingredients, addIngredient, removeIngredient }) => 
{
  const { ingredients : ingredientList } = useSelector(selectIngredients)
  const [currentWindow, setCurrentWindow] = useState<CurrentWindow>('ADD_INGREDIENT_BUTTON')
  const [title, setTitle] = useState('')
  const [unity, setUnity] = useState('')
  const [quantity, setQuantity] = useState(0)

  const onClickToSelectAnIngredient = () : void => setCurrentWindow('SELECT_AN_INGREDIENT')

  const selectAnIngredient = (event : ChangeEvent<HTMLSelectElement>) : void => 
  {
    setCurrentWindow('INGREDIENT_SELECTED')
    const {title, unity} = ingredientList.find(i => i.id === event.target.value) as Ingredient
    setTitle(title)
    setUnity(unity)
    setQuantity(0)
  }

  const addIngredientToTheList = () : void => addIngredient(
    { id : '',
      title,
      unity,
      quantity
    })
  
  const onChangeQuantity = (event: ChangeEvent<HTMLInputElement>) => setQuantity(parseInt(event.target.value))
  const onChangeUnity = (event: ChangeEvent<HTMLInputElement>) => setUnity(event.target.value)

  const onSubmit = () : void => 
  {
    addIngredientToTheList()
    setCurrentWindow('ADD_INGREDIENT_BUTTON')
  }

  return <div className={styles.container}>
      { ingredients?.length > 0 && <>
        <div className={styles.ingredients}>Vos ingrédients</div>
        <div className={styles.addedIngredients}>
          { ingredients.map(i => <AddedRecipeIngredient key={`AddedRecipeIngredient${i.id}`} {...i} removeAddedIngredient={removeIngredient}/>)}
        </div>
      </>
      }
       
      { currentWindow === 'ADD_INGREDIENT_BUTTON' && <button className={styles.addIngredientButton} 
        onClick={onClickToSelectAnIngredient}>Ajouter un ingrédient</button> }

      <div className={styles.selectAnIngredient}>
        { ['SELECT_AN_INGREDIENT','INGREDIENT_SELECTED'].includes(currentWindow) &&
          <select
            className={styles.select}
            onChange={selectAnIngredient}
            defaultValue="">
            <option
              value="" disabled>Selectionner votre ingrédient</option>
              {ingredientList && ingredientList.map(i => <option value={i.id} key={i.id}>{i.title}</option>)}
          </select>
        }

        { currentWindow === 'INGREDIENT_SELECTED' && 
          <div>
            <div className={styles.ingredientSelectedWindow}>
              <div className={styles.label}>Unité</div>
              <input 
                className={styles.input}
                value={unity}
                onChange={onChangeUnity}/>
              <div className={styles.label}>Quantité</div> 
              <input 
                className={styles.input}
                value={quantity}
                type="number"
                onChange={onChangeQuantity}/>
              </div>

            { quantity > 0 && <button className={styles.addIngredientToTheList} onClick={onSubmit}>
              Ajouter l'ingrédient à la liste</button> }
              
          </div> 
        }
      </div>
      
    </div>
};

export default AddRecipeIngredient;