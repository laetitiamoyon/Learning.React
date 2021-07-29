import React, { useContext } from 'react';
import { IngredientContext } from '../../ingredients.provider';
import styles from './Ingredient.module.css'


const Ingredient = ({id, title, quantity, unity}) => 
{
    const { dispatch } = useContext(IngredientContext)
    const removeIngredient = () => dispatch({ type: 'REMOVE_INGREDIENT', payload : { id } })
    const updateIngredient = () => dispatch({ type: 'UPDATE_INGREDIENT', payload : { title } })


    return <>
        <form className={styles.formContainer}>
            <input 
                className={styles.ingredientTitle}
                placeholder="titre"
                defaultValue={title}/>
            <input 
                className={styles.ingredientQuantity}
                placeholder="quantité"
                defaultValue={quantity}/>
            <input 
                className={styles.ingredientUnity}
                placeholder="unité"
                defaultValue={unity}/>
            <div className={styles.updateButton} onClick={updateIngredient}>Mettre à jour</div>
            <div className={styles.removeButton} onClick={removeIngredient}></div>
        </form>

    </>
};

export default Ingredient;