import React, { useState, useContext, ChangeEvent } from 'react';
import { removeIngredientAction, updateIngredientAction } from '../../ingredients.action';
import { IngredientContext } from '../../ingredients.context';
import { Ingredient } from '../../ingredients.model';
import styles from './Ingredient.module.scss'

const Ingredient = ({id, title, unity} : Ingredient) => 
{
    const [newTitle, setNewTitle] = useState(title)
    const [newUnity, setNewUnity] = useState(unity)

    const { dispatch } = useContext(IngredientContext)
    const removeIngredient = () => dispatch(removeIngredientAction(id))
    const updateIngredient = () => dispatch(updateIngredientAction(
    { 
        id, 
        title : newTitle,
        unity : newUnity
    }))

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => setNewTitle(event.target.value)
    const onChangeUnity = (event: ChangeEvent<HTMLInputElement>) => setNewUnity(event.target.value)

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