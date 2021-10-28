import React from 'react';
import styles from './RightNavigation.module.scss'
import { FC } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { routes } from '../../../shared/constants/routes';

const RightNavigation : FC = () => 
{
  const route = useLocation().pathname

  const { recipes, ingredients, addIngredient, addRecipe } = routes

  const redirectTo = 
    route === recipes ? addRecipe :
    route === ingredients ? addIngredient :
    null;
  
  const linkTitle =
    route === recipes ? "Ajouter une recette" :
    route === ingredients ? "Ajouter un ingredient" :
    null;

  return <ul className={styles.rigthUl}>
    <li>
      {redirectTo && <Link to={redirectTo}>{linkTitle}</Link>}
    </li>
  </ul>
  
};

export default RightNavigation;