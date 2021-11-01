import React from 'react';
import styles from './Navigation.module.scss'
import { FC } from 'react';
import { routes } from '../../../shared/constants/routes';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import RightNavigation from '../RightNavigation/RightNavigation';
import Home from '../Home/Home';
import Recipes from '../../recipes/components/Recipes/Recipes';
import Ingredients from '../../ingredients/components/Ingredients/Ingredients';
import AddRecipe from '../../recipes/components/AddRecipe/AddRecipe';
import AddIngredient from '../../ingredients/components/AddIngredient/AddIngredient';
import RecipeDescription from '../../recipes/components/RecipeDescription/RecipeDescription';
import EditRecipe from '../../recipes/components/EditRecipe/EditRecipe';

const Navigation : FC = () => 
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
      <Route path={addIngredient} exact component={AddIngredient} />
      <Route path="/description-de-la-recette/:id" exact component={RecipeDescription} />
      <Route path="/modification-de-la-recette/:id" exact component={EditRecipe} />
    </Switch>

  </BrowserRouter>
};

export default Navigation;