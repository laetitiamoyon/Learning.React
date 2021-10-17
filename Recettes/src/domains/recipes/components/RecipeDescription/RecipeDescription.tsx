import { FC, useContext } from 'react';
import { useParams } from "react-router-dom";
import styles from './RecipeDescription.module.scss'
import { useHistory } from "react-router-dom";
import { RecipeContext } from '../../recipes.context';
import { Recipe, RecipeIngredient } from '../../recipes.model';
import SVGPreparationTime from '../../../../SVG/SVGPreparationTime';
import SVGCookingTime from '../../../../SVG/SVGCookingTime';
import SVGCalories from '../../../../SVG/SVGCalories';

interface RouteProps
{
    id : string
}

const RecipeDescription :FC = () => 
{
    const { recipesState : { recipes } } = useContext(RecipeContext)
    let { id } = useParams<RouteProps>();
    const {title, image, description, ingredients, calories, cookingTime, preparationTime} = recipes.find(r => r.id === id) as Recipe
    const history = useHistory();
    const onClick = () : void => history.push(`/modification-de-la-recette/${id}`, { id : id })

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

        <div>{ingredients.map(({ title, unity, quantity } : RecipeIngredient ) =>
        <div className={styles.ingredients} key={`RecipeIngredients${id}`}> 
            - {quantity} {unity} de {title}</div>)}</div>
        <button className={styles.button} onClick={onClick}>Modifier la recette</button>
    </div>

    <img className={styles.image} alt='' src={image} style={{ backgroundImage : `url(.${image})`}} />
    </div>
    </div>
    };
        


export default RecipeDescription;