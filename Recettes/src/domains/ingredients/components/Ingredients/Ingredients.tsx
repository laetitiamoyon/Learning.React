import React, { useContext } from 'react';
import styles from './Ingredients.module.scss'
import Ingredient from '../Ingredient/Ingredient';
import { IngredientContext } from '../../ingredients.provider';


const Ingredients = () => 
{
    const { ingredients } = useContext(IngredientContext)

    return <div className={styles.ingredientContainer}>
        <h1 className={styles.title}>Gérer les ingrédients</h1>
        
        <div className={styles.ingredientElementContainer}>
            { ingredients && ingredients.map(i => <Ingredient {...i} key={i.id} />)}
        </div> 
    </div>
}

export default Ingredients;