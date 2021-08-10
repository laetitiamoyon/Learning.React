import styles from './AddedIngredient.module.scss'


const AddedIngredient = ({id, title, quantity, unity, removeAddedIngredient}) =>

    <><div>Ingrédients :</div>
    <li className={styles.li}>
        {quantity}{unity} de {title}
        <button className={styles.removeButton} onClick={() => removeAddedIngredient(id)}>Supprimer</button> 
    </li>
    </>

export default AddedIngredient