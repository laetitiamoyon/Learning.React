import styles from './Navigation.module.css'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Ingredients from '../../../ingredients/components/Ingredients/Ingredients'
import EditRecipe from '../../../recipes/components/EditRecipe/EditRecipe'
import Recipes from '../../../recipes/components/Recipes/Recipes'
import RecipeDescription from '../../../recipes/components/RecipeDescription/RecipeDescription'
import Home from '../Homes/Home'
import AddIngredient from '../../../ingredients/components/AddIngredient/AddIngredient'
import AddRecipe from '../../../recipes/components/AddRecipe/AddRecipe'
import RightNavigation from '../RightNavigation/RightNavigation'
import routes from '../../../../shared/constants/routes'
import AddMoreIngredient from '../../../ingredients/components/AddMoreIngredient/AddMoreIngredient'

const Navigation = () =>
{
    const { recipes, ingredients, addRecipe, addIngredient } = routes

    return <BrowserRouter>
        <nav className={styles.navBar}>
            <ul className={styles.leftUl}>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to={recipes}>Recettes</Link>
                </li>
                <li>
                    <Link to={ingredients}>Ingrédients</Link>
                </li>
            </ul>

            <RightNavigation/>
        </nav>

        <Switch>
            <Route path="/" exact component={Home} />
            <Route path={recipes} exact component={Recipes} />
            <Route path={ingredients} exact component={Ingredients} />
            <Route path={addRecipe} exact component={AddRecipe} />
            <Route path="/description-de-la-recette/:id" exact component={RecipeDescription} />
            <Route path="/modification-de-la-recette/:id" exact component={EditRecipe} />
            <Route path={addIngredient} exact component={AddIngredient} />
        </Switch>
    </BrowserRouter>
}

export default Navigation;