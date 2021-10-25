import styles from './Navigation.module.scss'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Ingredients from '../../../ingredients/components/Ingredients/Ingredients'
import EditRecipe from '../../../recipes/components/EditRecipe/EditRecipe'
import Recipes from '../../../recipes/components/Recipes/Recipes'
import RecipeDescription from '../../../recipes/components/RecipeDescription/RecipeDescription'
import Home from '../Home/Home'
import AddIngredient from '../../../ingredients/components/AddIngredient/AddIngredient'
import AddRecipe from '../../../recipes/components/AddRecipe/AddRecipe'
import routes from '../../../../shared/constants/routes'
import RightNavigation from '../RightNavigation/RightNavigation'
import { FC, useState, useEffect } from 'react'
import NavBarMobile from '../../../../SVG/NavBarMobile';

const Navigation : FC = () => {

    const { recipes, ingredients, addRecipe, addIngredient} = routes

    const [toggleMenu, setToggleMenu] = useState(false)
    const [largeur, setLargeur] = useState(window.innerWidth)

    const toggleNavMobile = () => setToggleMenu(!toggleMenu )

    useEffect(() => 
    {
        const changeWidth = () => 
        {
            setLargeur(window.innerWidth)
            if (window.innerWidth > 600){
                setToggleMenu(false)
            }
        }

        window.addEventListener('rezise', changeWidth);

        return () => { window.removeEventListener('resize', changeWidth)}

    },[])

    return <BrowserRouter>
        <nav className={styles.navBar}>
            { (toggleMenu || largeur > 600) && ( 
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
                    <RightNavigation/>
                </ul> 
            )}
            <div className={styles.toggleIcon} onClick={toggleNavMobile}><NavBarMobile/></div>
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