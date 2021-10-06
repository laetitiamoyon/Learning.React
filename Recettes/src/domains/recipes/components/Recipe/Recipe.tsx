import { FC, useContext } from 'react'
import { useHistory } from "react-router-dom";
import { removeIngredientAction } from '../../../ingredients/ingredients.action';
import { removeRecipeAction } from '../../recipes.action';
import { RecipeContext } from '../../recipes.context';
import { Recipe as RecipeModel } from '../../recipes.model'
import styles from './Recipe.module.scss'
import { IngredientContext } from '../../../ingredients/ingredients.context';
import { Highlight } from '../../../../shared/utils/Highlight';

const Recipe : FC<RecipeModel> = ({ id, title, imagePath, imageData }) =>
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
    
    return <div className={styles.recipeContainer}>
        <div className={styles.removeButton} onClick={removeRecipe}></div>
       
        <div className={styles.element}>
            <img className={styles.image} alt='' src={imageData} style={{ backgroundImage : `url(${imagePath})`}} />
            <Highlight searchTerm={searchRecipeTerm} text={title}/>
            <div className={styles.title}>{title}</div>
            <div className={styles.viewButton} onClick={seeRecipeOnClick}>Voir la recette</div>
        </div>
    </div>
    
}

export default Recipe;