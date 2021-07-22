
import styles from './Recipes.module.css'
import { recipes } from './recipes.model'
import Recipe from '../Recipe/Recipe'

const Recipes = () => <>
    <h1 className={styles.title}>Nos recettes</h1>

    <div className={styles.recipeContainer}>
        { recipes.map(r => <Recipe {...r} key={r.id} />) }
        {/* { recipes.map(r => <Recipe id={r.id} title={r.title}/>) } */}
    </div> 
</>

export default Recipes;