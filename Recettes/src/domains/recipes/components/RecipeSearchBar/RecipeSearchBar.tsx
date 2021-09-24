import { FC, useContext } from 'react'
import { useHistory } from "react-router-dom";
import { removeRecipeAction } from '../../recipes.action';
import { RecipeContext } from '../../recipes.context';
import { Recipe as RecipeModel } from '../../recipes.model'
import styles from './RecipeSearchBar.module.scss'

const RecipeSearchBar : FC<RecipeModel> = ({id, title, imagePath, imageData}) =>
{
    const history = useHistory();
    const seeRecipeOnClick = () : void => history.push(`/description-de-la-recette/${id}`, { id : id })
    const removeRecipe = () : void => dispatch(removeRecipeAction(id))
    const { dispatch } = useContext(RecipeContext)

    return <div className={styles.recipeContainer}>
        <div className={styles.removeButton} onClick={removeRecipe}></div>
       
        <div className={styles.element}>
            <img className={styles.image} alt='' src={imageData} style={{ backgroundImage : `url(${imagePath})`}} />
            <div className={styles.title}>{title}</div>
            <div className={styles.viewButton} onClick={seeRecipeOnClick}>Voir la recette</div>
        </div>
    </div>
}

export default RecipeSearchBar;