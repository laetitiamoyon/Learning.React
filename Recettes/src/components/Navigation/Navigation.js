import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Home from '../Homes/Home'
import Ingredients from '../Ingredients/Ingredients'
import NewRecipe from '../NewRecipe/NewRecipe'
import RecipeDescription from '../RecipeDescription/RecipeDescription'
import Recipes from '../Recipes/Recipes'
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
            <ul className={styles.rightUl}>
                <li>
                    <Link to="/creer-une-recette" className={styles.addRecipe}>Ajouter une recette</Link>
                </li>
            </ul>
        </nav>

        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recettes" exact component={Recipes} />
            <Route path="/ingredients" exact component={Ingredients} />
            <Route path="/creer-une-recette" exact component={NewRecipe} />
            <Route path="/description-de-la-recette/:id" exact component={RecipeDescription} />
        </Switch>
  </BrowserRouter>
  

export default Navigation;