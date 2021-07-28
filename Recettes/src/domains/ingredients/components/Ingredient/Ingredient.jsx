import React, { useContext } from 'react';
import { IngredientContext } from '../../ingredients.provider';
import styles from './Ingredient.module.css'


const Ingredient = ({id, title, quantity, unity}) => 
{
    const { dispatch } = useContext(IngredientContext)
    const removeIngredient = () => dispatch({ type: 'REMOVE_INGREDIENT', payload : { id } })
    const updateIngredient = () => dispatch({ type: 'UPDATE_INGREDIENT', payload : { title, quantity, unity } })

  
    const onTitleChange = (event) => onTitleChange(event.target.value)
    const onQuantityChange = (event) => onQuantityChange(event.target.value)
    const onUnityChange = (event) => onUnityChange(event.target.value)


    return <>
        <form className={styles.formContainer}>
            <input 
                onChange={onTitleChange}
                className={styles.ingredientTitle}
                name="titre"
                defaultValue={title}/>
            <input 
                onChange={onQuantityChange}
                className={styles.ingredientQuantity}
                placeholder="quantité"
                defaultValue={quantity}/>
            <input 
                onChange={onUnityChange}
                className={styles.ingredientUnity}
                name="unité"
                defaultValue={unity}/>
            <div className={styles.updateButton} onClick={updateIngredient}>Mettre à jour</div>
            <div className={styles.removeButton} onClick={removeIngredient}></div>
        </form>

    </>
};

export default Ingredient;