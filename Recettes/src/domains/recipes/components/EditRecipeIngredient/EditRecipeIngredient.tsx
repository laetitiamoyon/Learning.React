import { FC, useContext } from 'react';
import { ChangeEvent } from 'react';
import { RecipeIngredient } from '../../recipes.model';
import styles from './EditRecipeIngredient.module.scss';
import { IngredientContext } from '../../../ingredients/ingredients.context';

interface Props 
{
  newIngredients : RecipeIngredient[]
  setNewIngredients : (newIngredients : RecipeIngredient[]) => void
}

const EditRecipeIngredient : FC<Props> = ({newIngredients, setNewIngredients}) => 
{
  const { ingredientsState : { ingredients }} = useContext(IngredientContext)

  const removeIngredient = (id : string) : void =>
    setNewIngredients(newIngredients.filter(i => i.id !== id))

  const updateIngredients = (id : string, title : string) : void =>
    setNewIngredients(newIngredients.map(i => i.id === id ? {...i, title : title} : i))

  const updateIngredientQuantity = (id: string, quantity: number) : void =>
    setNewIngredients(newIngredients.map(i => i.id === id ? {...i, quantity : quantity} : i))

  return <div className={styles.container}>
    <label className={styles.ingredientLabel}>Ingrédients</label>
      {newIngredients.map(({id, unity, title, quantity}) =>
    
      <li className={styles.ingredients}>
        <input 
          className={styles.quantityInput}
          type="number"
          value={quantity}
          onChange={(event: ChangeEvent<HTMLInputElement>) => updateIngredientQuantity(id, parseInt(event.target.value))}/>
          <div className={styles.unity}>{unity} de </div>
        
        <select
          className={styles.select}
          value={title}
          onChange={(event : ChangeEvent<HTMLSelectElement>) => updateIngredients(id, event.target.value)}>
          <option>{title}</option>
          {ingredients.map(i => <option key={i.id} value={i.title}>{i.title}</option>)}
        </select>

        <div className={styles.trashIcon} onClick={() => removeIngredient(id)}></div>
      </li>)
    }
  </div>
};

export default EditRecipeIngredient;