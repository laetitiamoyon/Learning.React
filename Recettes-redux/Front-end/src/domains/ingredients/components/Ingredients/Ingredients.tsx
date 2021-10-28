import React, { useEffect } from 'react';
import { FC, ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIngredients } from '../../ingredients.selector';
import { getIngredientsRequestAction } from '../../ingredients.actions';
import styles from './Ingredients.module.scss'
import Ingredient from '../Ingredient/Ingredient';
import { useInformationMessage } from '../../../recipes/hooks/useInformationMessage';

const Ingredients : FC = () => 
{
  const ingredientsState = useSelector(selectIngredients)
  const dispatch = useDispatch()
  const [filteredIngredients, setFilteredIngredients] = useState(ingredientsState.ingredients)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => 
  {
    setFilteredIngredients(ingredientsState.ingredients
      .filter(r => r.title.toLowerCase()
      .includes(searchTerm.toLowerCase())))
  }, [ingredientsState, searchTerm])
  
  const onSearchTermChange = (event : ChangeEvent<HTMLInputElement>) : void => setSearchTerm(event.target.value)

  useEffect(() => { dispatch(getIngredientsRequestAction()) }, [])

  useInformationMessage()

  return <div className={styles.container}>
      <h1 className={styles.title}>Gérer mes ingrédients</h1>
      <div className={styles.form}>
        <input className={styles.input}
          placeholder="Rechercher un ingrédient"
          onChange={onSearchTermChange}/>
      </div>
      <div className={styles.ingredients}>
        { filteredIngredients.map(i => <Ingredient {...i} key={i.id} 
          searchIngredientTerm={searchTerm} title={i.title} color="#f8813d"/>)}
      </div>
  </div>
};

export default Ingredients;