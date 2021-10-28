import styles from './Navigation.module.scss'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import EditRecipe from '../../../recipes/components/EditRecipe/EditRecipe'
import RecipeDescription from '../../../recipes/components/RecipeDescription/RecipeDescription'
import {FC, lazy, ReactNode, useRef, useState} from 'react'
import NavBarMobile from '../../../../SVG/NavBarMobile';
import useToggle from '../../../../shared/hooks/useToggle';
import { useBreakpoints } from '../../../../shared/hooks/useBreakpoints';
import { useClickOutside } from '../../../../shared/hooks/useClickOutside';
import {INavigationElement} from "../../navigation.model";
import NavigationElement from "../NavigationElement/NavigationElement";
import React from 'react'
import RightNavigationUpdater from "../RightNavigationUpdater/RightNavigationUpdater";
import {initialNavigationElements, routes} from "../../navigation.configuration";

const LazyHome = lazy(() => import('../Home/Home'))
const LazyRecipes = lazy(() => import('../../../recipes/components/Recipes/Recipes'))
const LazyIngredients = lazy(() => import('../../../ingredients/components/Ingredients/Ingredients'))
const LazyAddRecipe = lazy(() => import('../../../recipes/components/AddRecipe/AddRecipe'))
const LazyAddIngredient = lazy(() => import('../../../ingredients/components/AddIngredient/AddIngredient'))
const LazyRecipeDescription = lazy(() => import('../../../recipes/components/RecipeDescription/RecipeDescription'))
const LazyEditRecipe = lazy(() => import('../../../recipes/components/EditRecipe/EditRecipe'))

const Navigation : FC = () =>
{
    const [navigationElements, setNavigationElements] = useState(initialNavigationElements)
    const [mobileNavigationIsVisible, toggleMobileNavigation, setMobileNavigationIsVisible] = useToggle(false)
    const { smOrBelow } = useBreakpoints()

    const componentReference = useRef(null);
	useClickOutside(componentReference, () => setMobileNavigationIsVisible(false));

    const selectNavigationElement = (navigationElement : INavigationElement) =>
        setNavigationElements(navigationElements.map(e => ({...e, active : e.title === navigationElement.title })))

    const showNavigationElements = (elements : INavigationElement[], leftNavigation? : boolean) : ReactNode =>
        elements
            .filter(n => (leftNavigation !== undefined ? (n.leftNavigation === leftNavigation) : true) && n.visible)
            .map(n => <NavigationElement key={n.title} {...n} selectNavigationElement={selectNavigationElement}/>)

    return <BrowserRouter>
        <RightNavigationUpdater setNavigationElements={setNavigationElements} navigationElements={navigationElements}/>
        <header ref={componentReference}>
            <nav className={styles.navBar} >
                <div className={styles.toggleIcon} onClick={toggleMobileNavigation}><NavBarMobile/></div>

                <div className={styles.leftUl}>
                    { (!smOrBelow && showNavigationElements(navigationElements, true))  }
                    { smOrBelow &&
                    <>
                        { mobileNavigationIsVisible && showNavigationElements(navigationElements) }
                    </>
                    }
                </div>

                <div className={styles.rightUl}>
                    { (!smOrBelow && showNavigationElements(navigationElements, false))  }
                    { smOrBelow &&
                    <>
                        { !mobileNavigationIsVisible && showNavigationElements(navigationElements.filter(n => n.active), false) }
                    </>
                    }
                </div>
            </nav>
        </header>

        <React.Suspense fallback={<span>Loading...</span>}>
            <Switch>
                <Route path={routes.home}  exact component={LazyHome} />
                <Route path={routes.recipes} exact component={LazyRecipes} />
                <Route path={routes.ingredients} exact component={LazyIngredients} />
                <Route path={routes.addRecipe} exact component={LazyAddRecipe} />
                <Route path={routes.addIngredient} exact component={LazyAddIngredient} />
                <Route path="/description-de-la-recette/:id" exact component={LazyRecipeDescription} />
                <Route path="/modification-de-la-recette/:id" exact component={LazyEditRecipe} />
            </Switch>
        </React.Suspense>
    </BrowserRouter>
}

export default Navigation;