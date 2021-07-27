import React, { useContext, useState } from 'react';
import { IngredientContext } from '../ingredients.provider';
import styles from './AddIngredient.module.css'

const AddIngredient = () => 
{
    const [title, setTitle] = useState('')
    const [quantity, setQuantity] = useState('')
    const [unity, setUnity] = useState('')
    const { dispatch } = useContext(IngredientContext)

    const addIngredient = () => dispatch({ type: 'ADD_INGREDIENT', payload : { title, quantity, unity } })

    const onTitleChange = (event) => setTitle(event.target.value)
    const onQuantityChange = (event) => setQuantity(event.target.value)
    const onUnityChange = (event) => setUnity(event.target.value)

    const onSubmit = (event) =>
    {
        event.preventDefault()

        addIngredient()
    }

    return <>
        <form className={styles.formContainer} onSubmit={onSubmit}>
            <input 
                onChange={onTitleChange}
                className={styles.ingredientTitle}
                name="Nom de l'ingrédient"
                value={title} required/>
            
            <input 
                onChange={onQuantityChange}
                className={styles.ingredientQuantity}
                name="Quantité"
                value={quantity} required/>
            
            <input 
                onChange={onUnityChange}
                className={styles.ingredientUnity}
                name="Unité"
                value={unity} required/>

            <button className={styles.submitButton}>Créer</button>
        </form>
    </>
};

export default AddIngredient;