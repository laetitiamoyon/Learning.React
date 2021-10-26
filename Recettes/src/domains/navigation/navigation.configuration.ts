import {INavigationElement} from "../../domains/navigation/navigation.model";

export const routes =
{
    home : '/',
    recipes : '/recettes',
    ingredients : '/ingredients',
    addRecipe : '/ajouter-une-recette',
    addIngredient : '/ajouter-un-ingredient'
}

export const initialNavigationElements : INavigationElement[] =
[
    {title: 'Accueil', active: true, href: routes.home, leftNavigation : true, visible : true },
    {title: 'Recettes', href: routes.recipes, leftNavigation : true, visible : true },
    {title: 'Ingrédients', href: routes.ingredients, leftNavigation : true, visible : true },
    {title: 'Ajouter une recette', href: routes.addRecipe, leftNavigation : false, visible : false },
    {title: 'Ajouter un ingrédient', href: routes.addIngredient, leftNavigation : false, visible : false }
]