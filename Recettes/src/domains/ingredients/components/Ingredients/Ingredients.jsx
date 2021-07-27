import React, { useContext } from 'react';
import styles from './Ingredients.module.css'
import Ingredient from '../Ingredient/Ingredient';
import { IngredientContext } from '../../ingredients.provider';
import { useHistory } from 'react-router-dom';

const Ingredients = () => 
{
    const { ingredients } = useContext(IngredientContext)

    const history = useHistory();
    const onClick = () => history.push("ajouter-un-ingredient/")

    return <>
        <div className={styles.addIngredientContainer}>
            <div className={styles.addIngredientElement} onClick={onClick}>Ajouter un ingrédient</div>
        </div>
        <h1 className={styles.title}>Gérer les ingrédients</h1>
    
        <div className={styles.ingredientContainer}>
            { ingredients && ingredients.map(i => <Ingredient {...i} key={i.id} />)}
        </div> 
    </>
}

export default Ingredients;