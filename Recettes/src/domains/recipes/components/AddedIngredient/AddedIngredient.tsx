import styles from './AddedIngredient.module.scss'
import { Ingredient } from '../../../ingredients/ingredients.model';

interface Props
{
    quantity : number
    removeAddedIngredient : (id : string) => void
}
const AddedIngredient = ({id, title, quantity, unity, removeAddedIngredient} : Ingredient & Props) =>
    <>
        <div>Ingrédients :</div>
        <li className={styles.li}>
            {quantity}{unity} de {title}
            <button className={styles.removeButton} onClick={() => removeAddedIngredient(id)}>Supprimer</button> 
        </li>
    </>

export default AddedIngredient