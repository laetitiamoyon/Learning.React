import { FC, useContext } from 'react'
import { useHistory } from "react-router-dom";
import { removeIngredientAction } from '../../../ingredients/ingredients.action';
import { removeRecipeAction } from '../../recipes.action';
import { RecipeContext } from '../../recipes.context';
import { Recipe as RecipeModel } from '../../recipes.model'
import styles from './Recipe.module.scss'
import { IngredientContext } from '../../../ingredients/ingredients.context';
import { Highlight } from '../../../../shared/utils/Highlight';

const Recipe : FC<RecipeModel> = ({ id, title, image }) =>
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
    const searchRecipeTerm = ""
    
      return <div className={styles.container}>
      <div className={styles.recipe}>
        <div className={styles.title}>{title}</div>
        <div className={styles.image} style={{ backgroundImage : `url(${image})`}} />
        {/* <Highlight searchTerm={searchRecipeTerm} text={title}/> */}
        <div className={styles.buttonContainer}>
          <button className={styles.viewDescriptionButton} onClick={seeRecipeOnClick}>Voir la recette</button>
          <div className={styles.trashIcon} onClick={removeRecipe}></div>
        </div>
      </div>
    </div>
}

export default Recipe;