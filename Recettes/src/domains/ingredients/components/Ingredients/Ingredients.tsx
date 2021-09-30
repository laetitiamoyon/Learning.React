import React, { FC, useContext, useState, useEffect, ChangeEvent } from 'react';
import styles from './Ingredients.module.scss'
import Ingredient from '../Ingredient/Ingredient';
import { IngredientContext } from '../../ingredients.context';


const Ingredients :FC = () => 
{
    const { ingredientsState : { ingredients} } = useContext(IngredientContext)
    const [filteredIngredient, setFilteredIngredient] = useState(ingredients)
    const [searchIngredientTerm, setSearchIngredientTerm] = useState('')

    const onSearchIngredient = (event : ChangeEvent<HTMLInputElement>) : void => setSearchIngredientTerm(event.target.value)

    useEffect(() => {
        setFilteredIngredient(ingredients.filter(ingredient => 
            ingredient.title.toLowerCase().includes(searchIngredientTerm.toLowerCase())
            ))
    }, [searchIngredientTerm, ingredients])

    return <div className={styles.container}>
        <h1 className={styles.title}>Gérer mes ingrédients</h1>
        <div className={styles.form}>
            <input className={styles.input}
                type="text"
                placeholder="Rechercher"
                onChange={onSearchIngredient}/>
        </div>
        <div className={styles.ingredientsList}>
            { filteredIngredient.map(ingredient => <Ingredient {...ingredient} key={ingredient.id} />)}
        </div> 
    </div>
}

export default Ingredients;