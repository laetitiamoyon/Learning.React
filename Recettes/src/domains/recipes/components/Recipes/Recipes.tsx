import React, { FC, useContext, useState, useEffect, ChangeEvent } from 'react'
import styles from './Recipes.module.scss'
import Recipe from '../Recipe/Recipe';
import { RecipeContext } from '../../recipes.context'
import { Recipe as RecipeModel } from '../../recipes.model'

const Recipes : FC<RecipeModel> = ({title}) => 
{
    const { recipesState : { recipes } } = useContext(RecipeContext)
    const [filteredRecipes, setFilteredRecipes] = useState(recipes)
    const [searchRecipeTerm, setSearchRecipeTerm] = useState('')
  
    const onSearchRecipe = (event : ChangeEvent<HTMLInputElement>) : void => setSearchRecipeTerm(event.target.value)

    // const getRedFilteredRecipe = () => 
    // {
    //     const subRecipe = recipes.filter(recipe => recipe.title.split(''))
    //     return (
    //         <div>{ subRecipe.join().toLowerCase() === searchRecipeTerm.toLowerCase() ? 
    //             <div className={styles.red}>{subRecipe}</div> : subRecipe}
    //         </div>
    //     )
    // }

    useEffect(() => {
        setFilteredRecipes(recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(searchRecipeTerm)))
        
    }, [searchRecipeTerm, recipes]);
    
    return <div className={styles.container}>
        <h1 className={styles.title}>Nos recettes</h1>
        <div className={styles.form}>
            <input className={styles.input} 
            type="text" 
            placeholder="Rechercher" 
            value={searchRecipeTerm} 
            onChange={onSearchRecipe}/>
        </div>
        <div className={styles.recipes} >
        {filteredRecipes.map(recipe => <Recipe key={recipe.id} {...recipe}/>)}
      </div>
    </div> 
}

export default Recipes;
