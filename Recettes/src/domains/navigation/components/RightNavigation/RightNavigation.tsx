import styles from './RightNavigation.module.scss'
import { Link, useLocation } from "react-router-dom"
import routes from '../../../../shared/constants/routes'

const RightNavigation = () =>
{
    const route = useLocation().pathname as string
    const { recipes, ingredients, addRecipe, addIngredient } = routes

    const redirectTo = 
        route === recipes ? addRecipe :
        route === ingredients ? addIngredient :
        null;
    const linkTitle = 
        route === recipes ? "Ajouter une recette" :
        route === ingredients ? "Ajouter un ingrédient" :
        null;

    return <ul className={styles.rightUl}>
        <li>
            {redirectTo && <Link to={redirectTo}>{linkTitle}</Link>}
        </li>
    </ul>
}

export default RightNavigation