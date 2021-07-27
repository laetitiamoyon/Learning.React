import React, { useContext } from 'react';
import styles from './Ingredients.module.css'
import AddIngredient from '../AddIngredient/AddIngredient';
import Ingredient from '../Ingredient/Ingredient';
import { IngredientContext } from '../../ingredients.provider';

const Ingredients = () => 
{
    const { ingredients } = useContext(IngredientContext)

    return <>
        <h1 className={styles.title}>Gérer les ingrédients</h1>
    
        <div className={styles.ingredientContainer}>
            { ingredients && ingredients.map(i => <Ingredient {...i} key={i.id} />)}
        </div> 
        <div><AddIngredient/></div>
    </>
}

export default Ingredients;