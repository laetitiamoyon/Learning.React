import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Recipe as RecipeModel} from '../../recipes.model';
import styles from './Recipe.module.scss'
import { useDispatch } from 'react-redux';
import { removeRecipeRequestAction, removeRecipeIngredientRequestAction } from '../../recipes.actions';
import { Highlight } from '../../../../shared/utils/Highlight';

interface Props extends RecipeModel
{
  searchTerm : string,
  color: string
}

const Recipe : FC<Props> = ({ id, title, image, searchTerm, color }) => 
{
  const history = useHistory()

  const onClickToTheDescription = () => history.push(`/description-de-la-recette/${id}`, { id : id })

  const recipeDispatch = useDispatch()
  const ingredientDispatch = useDispatch()

  const removeRecipe = () => 
  {
    recipeDispatch(removeRecipeRequestAction(id)) 
    ingredientDispatch(removeRecipeIngredientRequestAction(id))
  }

  return <div className={styles.container}>
      <div className={styles.recipe}>
        <Highlight searchTerm={searchTerm} text={title} color={color}/>
        <img className={styles.image} alt="" src={image} /> 
        <div className={styles.buttonContainer}>
          <button className={styles.viewDescriptionButton} onClick={onClickToTheDescription}>Voir la recette</button>
          <div className={styles.trashIcon} onClick={removeRecipe}></div>
        </div>
      </div>
    </div>
};

export default Recipe;