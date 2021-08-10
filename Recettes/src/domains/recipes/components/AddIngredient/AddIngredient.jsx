import React, { useContext, useState } from 'react';
import { newGuid } from '../../../../shared/utils/string';
import { IngredientContext } from '../../../ingredients/ingredients.provider';
import AddedIngredient from '../AddedIngredient/AddedIngredient';
import styles from './AddIngredient.module.scss'

const AddIngredient = () => 
{
    const { ingredients } = useContext(IngredientContext)
    const [addedIngredients, setAddedIngredients] = useState([])
    const [currentWindow, setWindow] = useState('ADD_INGREDIENT_BUTTON')
    const [id, setId] = useState()
    const [title, setTitle] = useState()
    const [unity, setUnity] = useState()
    const [quantity, setQuantity] = useState(0)

    const clickOnAddIngredient = () => setWindow('SELECT_AN_INGREDIENT')
    const selectAnIngredient = (event) =>
    {
        setWindow('INGREDIENT_SELECTED')
        
        const {title, unity} = ingredients.find(i => i.id === event.target.value)

        setId(id)
        setTitle(title)
        setUnity(unity)
        setQuantity(0)
    }

    const onQuantityChange = (event) => setQuantity(event.target.value)

    const addIngredientToTheList = () => 
        setAddedIngredients([...addedIngredients, { id : newGuid(), title, unity, quantity }])

    const removeAddedIngredient = id =>
        setAddedIngredients(addedIngredients.filter(a => a.id !== id))

    const onSubmit = (event) =>
    {
        event.preventDefault()
        addIngredientToTheList()
        setWindow('ADD_INGREDIENT_BUTTON')
    }

    return <> 
        { addedIngredients && <div className={styles.ingredients}></div> }
        
        <ul className={styles.addedIngredients}>
            { addedIngredients && addedIngredients.map(i => 
                <AddedIngredient key={i.id} {...i} removeAddedIngredient={removeAddedIngredient}/>)}
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
                    <option value="" disabled selected>Sélectionner votre ingrédient</option>
                    {ingredients && ingredients.map(i => <option value={i.id} key={i.id}>{i.title}</option>)}
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