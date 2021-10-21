import { FC } from 'react'
import { RecipeIngredient } from '../../recipes.model';
import styles from './AddedIngredient.module.scss'

interface Props extends RecipeIngredient
{
    removeAddedIngredient : (id : string) => void
}

const AddedIngredient : FC<Props> = ({id, title, quantity, unity, removeAddedIngredient}) =>
    <>
        <li className={styles.li}>
            {quantity} {unity} de {title}
            <div className={styles.trashIcon} onClick={() => removeAddedIngredient(id)}></div> 
        </li>
    </>

export default AddedIngredient