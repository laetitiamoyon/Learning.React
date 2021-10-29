import {IngredientState} from "./ingredients.state";
import {ActionStatus} from "../../shared/domains/Redux/redux.model";

export const emptyIngredientStateMock : IngredientState =
    {
        status : ActionStatus.Loading,
        error : undefined,
        ingredients : []
    }

export const ingredientStateMock : IngredientState =
    {
        ...emptyIngredientStateMock,
        ingredients : [
            {
                id : "1",
                title : "Pâte à pizza",
                unity : "pièce",
            },
            {
                id : "2",
                title : "Sauce Tomate",
                unity : "gr",
            },
            {
                id: "3",
                title: "Mozzarella",
                unity: "gr"
            },
            {
                id: "4",
                title: "Basilic",
                unity: "gr"
            },
            {
                id: "5",
                title: "Sel",
                unity: "gr"
            },
            {
                id: "6",
                title: "Huile d'olive",
                unity: "gr"
            },
            {
                id: "7",
                title: "Tomate",
                unity: "gr"
            },
            {
                id: "8",
                title: "Vinaigre balsamique",
                unity: "gr"
            },
            {
                id: "9",
                title: "Pommes",
                unity: "gr"
            },
            {
                id: "10",
                title: "Pâte feuilletée",
                unity: "pièce"
            },
            {
                id: "11",
                title: "Crème fraiche",
                unity: "gr"
            },
            {
                id: "12",
                title: "Oeufs",
                unity: "pièce"
            },
            {
                id: "13",
                title: "Sucre",
                unity: "gr"
            },
            {
                id: "14",
                title: "Lardons",
                unity: "gr"
            },
            {
                id: "15",
                title: "Parmesan",
                unity: "gr"
            },
            {
                id: "16",
                title: "Carottes",
                unity: "gr"
            },
            {
                id: "17",
                title: "Curry",
                unity: "gr"
            },
            {
                id: "18",
                title: "Lait de coco",
                unity: "gr"
            },
            {
                id: "19",
                title: "Courgette",
                unity: "gr"
            },
            {
                id: "20",
                title: "Poivron",
                unity: "gr"
            }
        ]
    }

export const ingredientMock = ingredientStateMock.ingredients[0]
export const {title : ingredientTitleMock, unity : ingredientUnityMock, id : ingredientIdMock} = ingredientStateMock.ingredients[1]
export const errorMessageMock = '404 not found'
export const errorMock  = new Error(errorMessageMock)