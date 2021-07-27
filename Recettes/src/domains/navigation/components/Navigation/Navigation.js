import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Ingredients from '../../../ingredients/components/Ingredients/Ingredients'
import EditRecipe from '../../../recipes/components/EditRecipe/EditRecipe'
import NewRecipe from '../../../recipes/components/NewRecipe/NewRecipe'
import Recipes from '../../../recipes/components/Recipes/Recipes'
import RecipeDescription from '../../../recipes/components/RecipeDescription/RecipeDescription'
import Home from '../Homes/Home'


import styles from './Navigation.module.css'

const Navigation = () =>
    <BrowserRouter>
        <nav className={styles.navBar}>
            <ul className={styles.leftUl}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/recettes">Recettes</Link>
                </li>
                <li>
                    <Link to="/ingredients">Ingrédients</Link>
                </li>
            </ul>
        </nav>

        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recettes" exact component={Recipes} />
            <Route path="/ingredients" exact component={Ingredients} />
            <Route path="/creer-une-recette" exact component={NewRecipe} />
            <Route path="/description-de-la-recette/:id" exact component={RecipeDescription} />
            <Route path="/modification-de-la-recette/:id" exact component={EditRecipe} />
            <Route path="/creer-une-recette/" exact component={NewRecipe} />
        </Switch>
  </BrowserRouter>
  

export default Navigation;