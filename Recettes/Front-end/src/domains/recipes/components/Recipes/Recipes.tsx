import React, { useEffect } from 'react';
import { FC, useState, ChangeEvent } from 'react';
import Recipe from '../Recipe/Recipe';
import { selectRecipes } from '../../recipes.selector';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipesRequestAction } from '../../recipes.actions';
import styles from './Recipes.module.scss'
import { useInformationMessage } from '../../hooks/useInformationMessage';

const Recipes : FC = () => 
{
  const recipeState = useSelector(selectRecipes)
  const dispatch = useDispatch()
  const [filteredRecipes, setFilteredRecipes] = useState(recipeState.recipes)
  const [searchTerm, setSearchTerm] = useState("")
  
  useEffect(() => { dispatch(getRecipesRequestAction()) }, [])

  useEffect(() => 
  {
    setFilteredRecipes(recipeState.recipes
      .filter(r => r.title.toLowerCase()
      .includes(searchTerm.toLowerCase())))
  }, [recipeState, searchTerm])
  
  const onSearchTermChange = (event : ChangeEvent<HTMLInputElement>) : void => setSearchTerm(event.target.value)

  useInformationMessage()

  return <>
     <div className={styles.container}>
      <h1 className={styles.title}>Vos recettes</h1>
      <div className={styles.form}>
      <input className={styles.input}
        placeholder="Rechercher une recette"
        onChange={onSearchTermChange}/>
      </div>

      <div className={styles.recipes}>
        { filteredRecipes.map(r => <Recipe {...r} key={r.id} searchTerm={searchTerm} 
          title={r.title} color="#f8813d" />) }
      </div>
    </div> 
 </>
};

export default Recipes;