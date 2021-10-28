import { useState, FC, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { newGuid } from '../../../../shared/utils/string';
import { addIngredientRequestAction } from '../../ingredients.actions';
import styles from './AddIngredient.module.scss';

const AddIngredient : FC = () => 
{
  const history = useHistory()
  const redirectToIngredientList = () => history.push('/ingrédients')

  const [title, setTitle] = useState('')
  const [unity, setUnity] = useState('')

  const dispatch = useDispatch()
  const addNewIngredient = () => dispatch(addIngredientRequestAction({
    id: newGuid(),
    title,
    unity
  }))

  const onChangeTitle = (event : ChangeEvent<HTMLInputElement>) : void => setTitle(event.target.value)
  const onChangeUnity = (event: ChangeEvent<HTMLInputElement>) : void => setUnity(event.target.value)

  const onSubmit = (event : ChangeEvent<HTMLFormElement>) : void =>
  {
    event.preventDefault()
    addNewIngredient()
    redirectToIngredientList()
  }

  return <div className={styles.container}>
    <div className={styles.elements}>
      <h1 className={styles.title}>Ajouter un nouvel ingrédient</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <label>Nom de l'ingrédient</label>
        <input 
          className={styles.input}
          onChange={onChangeTitle}
          value={title}
          type="text"/>

        <label>L'unité</label>
        <input 
          className={styles.input}
          onChange={onChangeUnity}
          value={unity}
          type="text"/>
        
        <button className={styles.submitButton}>Ajouter l'ingrédient</button>
      </form>
    </div>
  </div>
};

export default AddIngredient;