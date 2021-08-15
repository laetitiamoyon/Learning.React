import React, { useContext, useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { IngredientContext } from '../../ingredients.context';
import styles from './AddIngredient.module.scss'
import { addIngredientAction } from '../../ingredients.action'

const AddIngredient = () => 
{
    const [title, setTitle] = useState('')
    const [unity, setUnity] = useState('')
    const { dispatch } = useContext(IngredientContext)

    const history = useHistory();
    const redirectToIngredients = () => history.push('/ingredients')
    const addIngredient = () => dispatch(addIngredientAction(
    { 
        id : '',
        title,
        unity
    }))

    const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)
    const onUnityChange = (event: ChangeEvent<HTMLInputElement>) => setUnity(event.target.value)

    const onSubmit = (event: FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault()

        addIngredient()
        redirectToIngredients();
    }

    return <>
        <div className={styles.addIngredientContainer}>
            <h1 className={styles.formTitle}>Ajouter un nouvel ingrédient</h1>
            <form className={styles.formContainer} onSubmit={onSubmit}>
                <div className={styles.formElement}>
                    <label className={styles.titleLabel}>Nom de l'ingrédient :</label>
                    <input 
                        onChange={onTitleChange}
                        className={styles.ingredientInput}
                        placeholder="Nom de l'ingrédient"
                        value={title} required/>
                    
                    <label className={styles.titleLabel}>Unité :</label>
                    <input 
                        onChange={onUnityChange}
                        className={styles.ingredientInput}
                        placeholder="Unité"
                        value={unity} required/>
                </div>

                <button className={styles.submitButton}>Ajouter</button>
            </form>
        </div>
    </>
};

export default AddIngredient;