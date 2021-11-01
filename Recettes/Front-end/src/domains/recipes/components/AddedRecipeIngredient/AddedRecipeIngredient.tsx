import React from 'react';
import { FC } from 'react';
import { RecipeIngredients } from '../../recipes.model';
import styles from './AddedRecipeIngredient.module.scss';

interface Props extends RecipeIngredients
{
  removeAddedIngredient : (id : string) => void
}

const AddedRecipeIngredient : FC<Props> = ({id, title, quantity, unity, removeAddedIngredient}) => 
{
  const removeIngredient = () => removeAddedIngredient(id)
  
  return <li className={styles.li}>
      - {quantity} {unity} de {title}
      <div className={styles.trashIcon} onClick={removeIngredient}></div>
    </li>
}


export default AddedRecipeIngredient;