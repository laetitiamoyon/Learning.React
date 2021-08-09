import React, { useState, useContext } from 'react';
import { removeIngredientAction, updateIngredientAction } from '../../ingredients.action';
import { IngredientContext } from '../../ingredients.provider';
import styles from './Ingredient.module.scss'

const Ingredient = ({id, title, unity}) => 
{
    const [newTitle, setNewTitle] = useState(title)
    const [newUnity, setNewUnity] = useState(unity)

    const { dispatch } = useContext(IngredientContext)
    const removeIngredient = () => dispatch(removeIngredientAction(id))
    const updateIngredient = () => dispatch(updateIngredientAction(id, newTitle, newUnity))

    const onChangeTitle = (event) => setNewTitle(event.target.value)
    const onChangeUnity = (event) => setNewUnity(event.target.value)

    console.log(unity)
    return <form className={styles.formContainer}>
        <input 
            placeholder="titre"
            onChange={onChangeTitle}
            value={newTitle}/>

        <input 
            placeholder="unité"
            onChange={onChangeUnity}
            value={newUnity}/>

        <div className={styles.updateButton} onClick={updateIngredient}>Mettre à jour</div>
        <div className={styles.removeButton} onClick={removeIngredient}></div>
    </form>
};

export default Ingredient;