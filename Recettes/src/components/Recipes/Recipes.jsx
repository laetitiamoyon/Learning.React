
import styles from './Recipes.module.css'
import { recipes } from './recipes.model'
import Recipe from '../Recipe/Recipe'
import RecipeDescription from '../RecipeDescription/RecipeDescription';

const Recipes = () => <>
    <h1 className={styles.title}>Nos recettes</h1>

    <div className={styles.recipeContainer}>
        { recipes.map(r => <Recipe {...r} key={r.id} />) }
    </div> 

</>

export const EditRecipes = () => <>
    <h1 className={styles.title}>Nos recettes</h1>

    <div className={styles.editRecipeContainer}>
        { recipes.map(r => < RecipeDescription {...r} key={r.id} />) }
    </div> 

</>

export default Recipes;
