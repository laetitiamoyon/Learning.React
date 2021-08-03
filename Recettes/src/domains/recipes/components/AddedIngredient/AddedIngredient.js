import { useState } from 'react'
import styles from './AddedIngredient.module.css'


const AddedIngredient = ({title, quantity, unity}) =>
{
    return <li>
        {quantity}{unity} de {title}
        {/* <button className={styles.removeButton}>Supprimer</button> */}
    </li>
}

export default AddedIngredient