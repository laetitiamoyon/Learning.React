import React, { FC, useState, ChangeEvent, useContext } from 'react';
import { newGuid } from '../../../../shared/utils/string';
import { Ingredient } from '../../../ingredients/ingredients.model';
import { RecipeIngredient } from '../../recipes.model';
import AddedIngredient from '../AddedIngredient/AddedIngredient';
import styles from './AddRecipeIngredient.module.scss'
import { IngredientContext } from '../../../ingredients/ingredients.context';

type CurrentWindow = 
    'ADD_INGREDIENT_BUTTON' |
    'SELECT_AN_INGREDIENT' |
    'INGREDIENT_SELECTED'

interface Props
{
    ingredients : RecipeIngredient[]
    addIngredient : (ingredient : RecipeIngredient) => void
    removeIngredient : (id : string) => void
}

const AddIngredient : FC<Props> = ({ingredients, addIngredient, removeIngredient}) => 
{
    const { ingredientsState : { ingredients : ingredientList }} = useContext(IngredientContext)
    const [currentWindow, setWindow] = useState<CurrentWindow>('ADD_INGREDIENT_BUTTON')
    const [id, setId] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [unity, setUnity] = useState<string>('')
    const [quantity, setQuantity] = useState(0)

    const clickOnAddIngredient = () => setWindow('SELECT_AN_INGREDIENT')
    const selectAnIngredient = (event : ChangeEvent<HTMLSelectElement>) =>
    {
        setWindow('INGREDIENT_SELECTED')
        
        const {title, unity} = ingredientList.find(i => i.id === event.target.value) as Ingredient

        setId(id)
        setTitle(title)
        setUnity(unity)
        setQuantity(0)
    }

    const onQuantityChange = (event : ChangeEvent<HTMLInputElement>) =>
        setQuantity(parseInt(event.target.value))

    const addIngredientToTheList = () => 
        addIngredient({ 
                id : newGuid(),
                title,
                unity,
                quantity
            })

    const onSubmit = () =>
    {
        addIngredientToTheList()
        setWindow('ADD_INGREDIENT_BUTTON')
    }
    
    return <> 
        { ingredients && <div className={styles.ingredients}></div> }
        
        <ul className={styles.addedIngredients}>
            { ingredients && ingredients.map(i => 
                <AddedIngredient key={i.id} {...i} removeAddedIngredient={removeIngredient}/>)}
        </ul> 

        { currentWindow === 'ADD_INGREDIENT_BUTTON' && 
        <button className={styles.button} onClick={clickOnAddIngredient}>
            Ajouter un ingrédient
        </button>}

    
        <div className={styles.formContainer}>
            { ['SELECT_AN_INGREDIENT','INGREDIENT_SELECTED'].includes(currentWindow) &&
                <select 
                    onChange={selectAnIngredient}
                    className={styles.select}
                    defaultValue=""
                    placeholder="Nom de l'ingrédient"> 
                    <option value="" disabled>Sélectionner votre ingrédient</option>
                    {ingredientList && ingredientList.map(i => <option value={i.id} key={i.id}>{i.title}</option>)}
                </select>
            }

            { currentWindow === 'INGREDIENT_SELECTED' &&
                <div>
                    <div className={styles.inputContainer}>
                        <label>Unité :</label>
                        <div className={styles.input}>{unity}</div>
                    </div> 

                    <div className={styles.inputContainer}>
                        <label>Quantité :</label>
                        <input
                            className={styles.input}
                            type="number"
                            value={quantity}
                            onChange={onQuantityChange} />
                    </div>

                    {quantity > 0 && 
                        <button className={styles.addIngredientToTheList} onClick={onSubmit}>
                            Ajouter votre ingrédient
                        </button> }
                </div>
            }
            
        </div>
    </>
};

export default AddIngredient;