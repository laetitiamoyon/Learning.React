import { FC } from 'react'
import { RecipeIngredient } from '../../recipes.model';
import styles from './AddedIngredient.module.scss'

interface Props extends RecipeIngredient
{
    removeAddedIngredient : (id : string) => void
}

const AddedIngredient : FC<Props> = ({id, title, quantity, unity, removeAddedIngredient}) =>
    <>
        <div>Ingrédients :</div>
        <li className={styles.li}>
            {quantity}{unity} de {title}
            <button className={styles.removeButton} onClick={() => removeAddedIngredient(id)}>Supprimer</button> 
        </li>
    </>

export default AddedIngredient