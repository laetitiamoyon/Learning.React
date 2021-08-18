import { Recipe } from "./recipes.model";

export interface RecipeState
{ 
    recipes : Recipe[]
};

export const recipesInitialState : RecipeState = 
{
    recipes : [
    { 
        id : "1", 
        imagePath : "./images/regina.jpg",
        ingredients : [
            { 
                id : "1", 
                title : "sel", 
                unity : "gr",
                quantity :100
            },
            { 
                id : "2", 
                title : "jambon", 
                unity : "gr",
                quantity :100
            },
            { 
                id : "3", 
                title : "pâte à pizza", 
                unity : "pièce",
                quantity :1
            },
            { 
                id : "4", 
                title : "champignon", 
                unity : "gr",
                quantity :100
            },
            { 
                id : "5", 
                title : "sauce tomate", 
                unity : "gr",
                quantity :100
            },
        ],
        title : "Pizza Régina", 
        description : "1. Commencez à préparer la garniture de votre pizza en divisant les tranches de jambon blanc et en les coupant en deux. 2. Couvrez la pâte à pizza de sauce tomate, puis parsemez de jambon, de champignons et de Mozzarella râpée Galbani. 3. Assaisonnez avec un peu d’huile d’olive et de poivre. 4. Enfournez et laissez cuire pendant environ 15 minutes." 
    },
    
    { 
        id : "2", 
        imagePath : "./images/salade-cersar.jpg",
        ingredients : [
            { 
                id : "1", 
                title : "sel", 
                unity : "gr",
                quantity :1
            },
            { 
                id : "2", 
                title : "huile d'olive", 
                unity : "gr",
                quantity :10
            }
        ],
        title : "Salade César",
        description : "Couper les tranches de pain en cube. Faire revenir les croûtons dans un filet d'huile d'olive pendant 2 minutes et laisser refroidir. Couper le poulet en petits morceaux et faire cuire dans une poêle anti-adhésive sans matière grasse. Faire dorer et laisser refroidir. Déchirer la laitue et petits morceaux. Pour finir dresser dans l'ordre : salade, poulet, croûtons et sauce César." 
    },
    
    { 
        id : "3", 
        imagePath : "./images/tarte-pommes.jpg",
        ingredients : [
            { 
                id : "1", 
                title : "sel", 
                unity : "gr",
                quantity :1
            }
        ],
        title : "Tarte aux pommes", 
        description : "Déroulez, étalez et piquez la pâte dans un moule à tarte. Pelez, videz et coupez en fines tranches les pommes. Posez-les sur la pâte en rosace. Dans un saladier, battez les œufs avec le sucre, puis ajoutez la crème et la cannelle. Versez le mélange sur les pommes. Pour finir, mettez au four à 210°C (thermostat 7) pour 40 minutes environ. Vers la fin de la cuisson, répartissez sur la tarte le sucre vanillé et remettez au four pour caramélisé." 
    },
    
    { 
        id : "4", 
        imagePath : "./images/carbonara.jpg",
        ingredients : [
            { 
                id : "1", 
                title : "sel", 
                unity : "gr",
                quantity :1
            }
        ],
        title : "Pate Carbonara",
        description : "Cuire les pâtes. Pendant ce temps, faire dorer les lardons dans une poêle à sec. Lorsqu'ils sont dorés, ajouter la crème et laisser mijoter durant 10 minutes. Egoutter les pâtes, les verser dans la sauce, ajouter l'oeuf battu, mélanger et servir saupoudrer de fromage."
    },
    
    { 
        id : "5", 
        imagePath : "./images/curry-legumes.jpg",
        ingredients : [
            { 
                id : "1", 
                title : "sel", 
                unity : "gr",
                quantity :1
            }
        ],
        title : "Curry de légume", 
        description : "Débiter les carottes en fines tranches et la patate en petits morceaux. Découper les courgettes en quarts de rondelles tout en conservant la peau. Détailler les échalotes et l'ail et les faire dorer dans une grande sauteuse avec un peu d'huile. Ajouter les légumes, réduire le feu et couvrir. En parallèle, dans un saladier, mélanger la crème de coco, le concentré de tomates et la pâte de curry avec le jus des citrons verts. Ajouter le piment et le basilic moulus, le cumin, et napper les légumes de ce mélange bien homogène. Ajouter 1/2 verre d'eau. Poivrer et saler à discrétion. Bien laisser mijoter sous couvercle à feu minimum."
    },

    { 
        id : "6", 
        imagePath : "./images/risotto.jpg",
        ingredients : [
            { 
                id : "1", 
                title : "sel", 
                unity : "gr",
                quantity :1
            }
        ],
        title : "Risotto aux cèpes",
        description : "Préparer des copeaux de Parmesan avec un couteau économe. Préparer un bouillon en faisant chauffer l'eau et le bouillon cube de légumes. Hydrater les cèpes dans le l'eau tiède pendant 30 minutes. Faire revenir l'oignon émincé dans la moitiée du beurre pendant 3 à 4 minutes et ajouter le riz, laisser revenir jusqu'à ce que le riz soit translucide. Verser le vin blanc et laisser évaporer. Ajouter louche par louche le bouillon chaud et attendre chaque fois entre chaque louche que le liquide se soit évaporé. Pendant ce temps, faire revenir les champignons de Paris en lamelles et les cèpes réhydratées rincés et égouttées dans le restant du beurre (compter environ 7 à 10 mn). En fin de cuisson ajouter la crème fraiche et bien mélanger. Arrêter le feu. Ajouter au riz, une fois la dernière louche de bouillon évaporée, la poêlée de Champignons et bien mélanger l'ensemble. Hors du feu, ajouter des copeaux de parmesan (la quantité est fonction des goûts de chacun). Poivrer si nécessaire. Mélanger à nouveau et servir rapidement. Décorer avec quelques copeaux de parmesan." 
    },

    { 
        id : "7", 
        imagePath : "./images/tarte-courgettes.jpg",
        ingredients : [
            { 
                id : "1", 
                title : "sel", 
                unity : "gr",
                quantity :1
            }
        ],
        title : "Tarte aux courgettes",
        description : "Peler les courgettes et l'oignon, les couper en dés et les faire revenir dans l'huile avec les lardons. Dérouler la pâte dans un moule à tartes et la piquer avec une fourchette. Mélanger la crème et l'oeuf. Saler et poivrer. Disposer sur la pâte les cougettes, l'oignon et les lardons, puis la préparation. Saupouder d'emmental et enfourner pendant 20 mn environ à four chaud. (180°C, Th 6)."
    },

    { 
        id : "8", 
        ingredients : [
            { 
                id : "1", 
                title : "sel", 
                unity : "gr",
                quantity :1
            }
        ],
        title : "Tacos mexicain",
        description : "A la poêle, faire dorer l'oignon émincé dans un peu d'huile d'olive. Rajouter la viande, assaisonner et laisser cuire 5 min. Laver les feuilles de laitue. Couper les tomates et le poivron en petits dés. Incorporer le tout à la poêlée avec le coulis de tomate, et poursuivre la cuisson pendant 5 min. Egoutter les haricots rouges et les ajouter 2 min avant la fin de cuisson. Hors du feu, ajuster l'assaisonnement et saupoudrer généreusement de cumin; on peut aussi rajouter quelques gouttes de Tabasco. Garnir les tortillas de préparation et les refermer en les roulant comme des crêpes. Disposer 1 feuille de laitue sur chaque tacos avant de servir."
    }
]}