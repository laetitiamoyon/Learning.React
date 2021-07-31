import React, { useState, useContext } from 'react';
import { IngredientContext } from '../../ingredients.provider';
import styles from './Ingredient.module.scss'

const Ingredient = ({id, title, quantity, unity}) => 
{
    const [newTitle, setNewTitle] = useState(title)
    const [newQuantity, setNewQuantity] = useState(quantity)
    const [newUnity, setNewUnity] = useState(unity)

    const { dispatch } = useContext(IngredientContext)
    const removeIngredient = () => dispatch({ type: 'REMOVE_INGREDIENT', payload : { id } })
    const updateIngredient = () => dispatch(
    { 
        type: 'UPDATE_INGREDIENT',
        payload :
        { 
            id : parseInt(id), 
            title : newTitle,
            unity : newUnity,
            quantity : parseInt(newQuantity),
        } 
    })

    const onChangeTitle = (event) => setNewTitle(event.target.value)
    const onChangeQuantity = (event) => setNewQuantity(event.target.value)
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