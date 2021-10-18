import { Ingredient } from './ingredients.model';
import { getOrDefaultDataFromLocalStorage } from '../../shared/domains/localStorage/localStorage.utils';

export interface IngredientState
{
    ingredients : Ingredient[]
}
 
export const initialIngredients : Ingredient[] = [
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
}]
    
export const localStorageIngredientState = () : IngredientState => ({
    ingredients : getOrDefaultDataFromLocalStorage('ingredients', initialIngredients)
})  