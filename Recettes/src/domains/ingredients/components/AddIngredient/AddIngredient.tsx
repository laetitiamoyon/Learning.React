import React, { useContext, useState, ChangeEvent, FormEvent, FC } from 'react';
import { useHistory } from 'react-router-dom';
import { IngredientContext } from '../../ingredients.context';
import styles from './AddIngredient.module.scss'
import { addIngredientAction } from '../../ingredients.action'

const AddIngredient : FC = () => 
{
    const [title, setTitle] = useState('')
    const [unity, setUnity] = useState('')
    const { dispatch } = useContext(IngredientContext)

    const history = useHistory();
    const redirectToIngredients = () : void => history.push('/ingredients')
    const addIngredient = () : void => dispatch(addIngredientAction(
    { 
        id : '',
        title,
        unity
    }))

    const onTitleChange = (event: ChangeEvent<HTMLInputElement>) : void => setTitle(event.target.value)
    const onUnityChange = (event: ChangeEvent<HTMLInputElement>) : void => setUnity(event.target.value)

    const onSubmit = (event: FormEvent<HTMLFormElement>) : void =>
    {
        event.preventDefault()

        addIngredient()
        redirectToIngredients();
    }

    return <div className={styles.container}>
    <div className={styles.elements}>
      <h1 className={styles.title}>Ajouter un nouvel ingrédient</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <label>Nom de l'ingrédient</label>
        <input 
          className={styles.input}
          onChange={onTitleChange}
          value={title}
          type="text"/>

        <label>L'unité</label>
        <input 
          className={styles.input}
          onChange={onUnityChange}
          value={unity}
          type="text"/>
        
        <button className={styles.submitButton}>Ajouter l'ingrédient</button>
      </form>
    </div>
  </div>
};

export default AddIngredient;