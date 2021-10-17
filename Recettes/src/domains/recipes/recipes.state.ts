import { Recipe } from "./recipes.model";
import { getOrDefaultDataFromLocalStorage } from '../../shared/domains/localStorage/localStorage.utils';

export interface RecipeState
{ 
    recipes : Recipe[]
    infoMessage : string | null
};

export const initialRecipes : Recipe[] = [
{
    id : "1", 
    image : "../images/pizza.jpg",
    ingredients : [
    { 
        id : "1", 
        title : "Pâte à pizza", 
        unity : "pièce",
        quantity :1
    },
    { 
        id : "2", 
        title : "Sauce Tomate", 
        unity : "gr",
        quantity :200
    },
    { 
        id : "3", 
        title : "Mozzarella", 
        unity : "gr",
        quantity :200
    },
    { 
        id : "4", 
        title : "Basilic", 
        unity : "gr",
        quantity :20
    }],
    title : "Pizza Margherita", 
    preparationTime : "25 minutes",
    cookingTime : "15 minutes",
    calories : "545 Kcal",
    description : "Couvrez la pâte à pizza de sauce tomate, puis parsemez de mozzarella et de basilic. Assaisonnez avec un peu d’huile d’olive et de poivre. Enfournez et laissez cuire pendant environ 15 minutes."
    },
    { 
    id : "2", 
    image : "../images/salade.jpg",
    ingredients : [
    { 
        id : "5", 
        title : "Sel", 
        unity : "gr",
        quantity :10
    },
    { 
        id : "6", 
        title : "Huile d'olive", 
        unity : "gr",
        quantity :10
    },
    { 
        id : "3", 
        title : "Mozzarella", 
        unity : "gr",
        quantity :200
        },
    { 
        id : "7", 
        title : "Tomate", 
        unity : "gr",
        quantity :200
    },
    { 
        id : "8", 
        title : "Vinaigre balsamique", 
        unity : "gr",
        quantity :2
    },
    { 
        id : "4", 
        title : "Basilic", 
        unity : "gr",
        quantity :20
    }],
    title : "La tomate mozzarella",
    preparationTime : "10 minutes",
    cookingTime : "0 minutes",
    calories : "145 Kcal",
    description : "Couper les tomates et la mozzarella en tranche. Les disposer dans une assiette, assaisonner d'huile d'olive et de vinaigre balsamique. Parsemer de basilic." 
    },
    { 
    id : "3", 
    image : "../images/tarte-pommes.jpg",
    ingredients : [
    { 
        id : "9", 
        title : "Pommes", 
        unity : "gr",
        quantity :100
    },
    { 
        id : "10", 
        title : "Pâte feuilletée", 
        unity : "pièce",
        quantity :1
    },
    { 
        id : "11", 
        title : "Crème fraiche", 
        unity : "gr",
        quantity :100
    },
    { 
        id : "12", 
        title : "Oeufs", 
        unity : "pièce",
        quantity :3
    },
    { 
        id : "13", 
        title : "Sucre", 
        unity : "gr",
        quantity :100
    }],
    title : "Tarte aux pommes", 
    preparationTime : "25 minutes",
    cookingTime : "50 minutes",
    calories : "445 Kcal",
    description : "Déroulez, étalez et piquez la pâte dans un moule à tarte. Pelez, videz et coupez en fines tranches les pommes. Posez-les sur la pâte en rosace. Dans un saladier, battez les œufs avec le sucre, puis ajoutez la crème. Versez le mélange sur les pommes. Pour finir, mettez au four à 210°C (thermostat 7) pour 40 minutes." 
    },
    { 
    id : "4", 
    image : "../images/carbonara.jpg",
    ingredients : [
    { 
        id : "11", 
        title : "Crème fraiche", 
        unity : "gr",
        quantity :100
    },
    { 
        id : "12", 
        title : "Oeufs", 
        unity : "pièce",
        quantity :3
    },
    { 
        id : "13", 
        title : "Penne", 
        unity : "gr",
        quantity :150
    },
    { 
        id : "14", 
        title : "Lardons", 
        unity : "gr",
        quantity :150
    },
    { 
        id : "15", 
        title : "Parmesan", 
        unity : "gr",
        quantity :20
    }],
    title : "Pate Carbonara",
    preparationTime : "15 minutes",
    cookingTime : "10 minutes",
    calories : "505 Kcal",
    description : "Cuire les pâtes. Pendant ce temps, faire dorer les lardons dans une poêle à sec. Lorsqu'ils sont dorés, ajouter la crème et laisser mijoter durant 10 minutes. Egoutter les pâtes, les verser dans la sauce, ajouter l'oeuf battu, mélanger et servir saupoudrer de fromage."
    },
    { 
    id : "5", 
    image : "../images/curry.jpg",
    ingredients : [
    { 
        id : "16", 
        title : "Carottes", 
        unity : "gr",
        quantity :100
    },
    { 
        id : "17", 
        title : "Curry", 
        unity : "gr",
        quantity :20
    },
    { 
        id : "18", 
        title : "Lait de coco", 
        unity : "gr",
        quantity :100
    },
    { 
        id : "19", 
        title : "Courgette", 
        unity : "gr",
        quantity :100
    },
    { 
        id : "20", 
        title : "Poivron", 
        unity : "gr",
        quantity :100
    }],
    title : "Curry de légume", 
    preparationTime : "25 minutes",
    cookingTime : "30 minutes",
    calories : "245 Kcal",
    description : "Débiter les carottes en fines tranches et découper les courgettes, les poirons en petits morceaux. Ajouter le curry, le lait de coco et 1/2 verre d'eau. Poivrer et saler à discrétion. Bien laisser mijoter sous couvercle à feu minimum."
}]

export const localStorageRecipeState = () : RecipeState => ({
    recipes : getOrDefaultDataFromLocalStorage('localRecipes', initialRecipes),
    infoMessage : null
})