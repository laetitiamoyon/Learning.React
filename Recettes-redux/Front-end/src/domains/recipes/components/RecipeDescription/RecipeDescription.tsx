import { useSelector } from 'react-redux';
import { selectRecipes } from '../../recipes.selector';
import { FC } from 'react';
import { Recipe, RecipeIngredients } from '../../recipes.model';
import styles from './RecipeDescription.module.scss'
import { useHistory, useParams } from 'react-router-dom';
import SVGCalories from '../../../../SVG/SVGCalories';
import SVGCookingTime from '../../../../SVG/SVGCookingTime';
import SVGPreparationTime from '../../../../SVG/SVGPreparationTime';

interface RouteProps
{
  id : string
}

const RecipeDescription : FC = () => 
{
  let { id } = useParams<RouteProps>();
  const recipes = useSelector(selectRecipes)
  const { title, description, image, ingredients, calories, cookingTime, preparationTime } = recipes.recipes.find(r => r.id === id) as Recipe

  const history = useHistory()
  const EditRecipe = () : void => history.push(`/modification-de-la-recette/${id}`, { id : id })

  return <div className={styles.container}>
    <div className={styles.title}>{title}</div>
    <div className={styles.elements}>
      <div className={styles.descriptionContainer}>
        <div className={styles.cookInformationContainer}>
          <div className={styles.cookInformation}>
            <SVGPreparationTime/>
            <div>{preparationTime}</div>
          </div>
          <div className={styles.cookInformation}>
            <SVGCookingTime/>
            <div>{cookingTime}</div>
          </div>
          <div className={styles.cookInformation}>
            <SVGCalories/>
            <div>{calories}</div>
          </div>
        </div>

        <div className={styles.label}>Les étapes de la recette</div>
        <div className={styles.descriptionContent}>{description}</div>
        <div className={styles.label}>Les ingrédients</div>

        <div>{ingredients.map(({ title, unity, quantity } : RecipeIngredients ) =>
          <div className={styles.ingredients} key={`RecipeIngredients${id}`}> 
            - {quantity} {unity} de {title}</div>)}</div>
        <button className={styles.button} onClick={EditRecipe}>Modifier la recette</button>
      </div>

      <div className={styles.image} style={{ backgroundImage : `url(${image})`}}/> 
    </div>
  </div>
};

export default RecipeDescription;