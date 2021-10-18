import { FC, useContext } from 'react'
import { useHistory } from "react-router-dom";
import { removeIngredientAction } from '../../../ingredients/ingredients.action';
import { removeRecipeAction } from '../../recipes.action';
import { RecipeContext } from '../../recipes.context';
import { Recipe as RecipeModel } from '../../recipes.model'
import styles from './Recipe.module.scss'
import { IngredientContext } from '../../../ingredients/ingredients.context';
import { Highlight } from '../../../../shared/utils/Highlight';

interface Props extends RecipeModel
{
    searchRecipeTerm : string,
    color : string
}

const Recipe : FC<Props> = ({ id, title, image, searchRecipeTerm, color }) =>
{
    const history = useHistory();
    const seeRecipeOnClick = () : void => history.push(`/description-de-la-recette/${id}`, { id : id })
    const { dispatch } = useContext(RecipeContext)
    const { dispatch : ingredientDispatch } = useContext(IngredientContext)
    
    const removeRecipe = () : void => 
    {
        dispatch(removeRecipeAction(id))
        ingredientDispatch(removeIngredientAction(id))
    }
    
      return <div className={styles.container}>
      <div className={styles.recipe}>
      <div className={styles.title}><Highlight searchTerm={searchRecipeTerm} text={title} color={color}/></div>
        <div className={styles.image} style={{ backgroundImage : `url(${image})`}} />
        <div className={styles.buttonContainer}>
          <button className={styles.viewDescriptionButton} onClick={seeRecipeOnClick}>Voir la recette</button>
          <div className={styles.trashIcon} onClick={removeRecipe}></div>
        </div>
      </div>
    </div>
}

export default Recipe;