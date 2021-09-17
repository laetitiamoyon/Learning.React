import { Ingredient } from './ingredients.model';
import { getOrDefaultDataFromLocalStorage } from '../../shared/utils/localStorageHelper';

export interface IngredientState
{
    ingredients : Ingredient[]
}
 
export const initialIngredients : Ingredient[] = [
{ 
    id : "1", 
    title : "sel", 
    unity : "gr"
},
{ 
    id : "2", 
    title : "Huile d'olive", 
    unity : "gr"
},
{ 
    id : "3", 
    title : "Champignons", 
    unity : "gr"
},
{ 
    id : "4", 
    title : "Jambon", 
    unity : "gr"
},
{ 
    id : "5", 
    title : "Sauce tomate", 
    unity : "gr"
},
{ 
    id : "6", 
    title : "Mozzarella", 
    unity : "gr"
},
{ 
    id : "7", 
    title : "Pâte à pizza", 
    unity : "gr"
},
{ 
    id : "8", 
    title : "Laitue", 
    unity : "pièce"
},
{ 
    id : "9", 
    title : "Blanc de poulet", 
    unity : "pièce"
},
{ 
    id : "10", 
    title : "Pain de mie", 
    unity : "tranche"
},
{ 
    id : "11", 
    title : "Lait", 
    unity : "cuillère à soupe"
},
{ 
    id : "12", 
    title : "Ail", 
    unity : "gousse"
},
{ 
    id : "13", 
    title : "Moutarde de Dijon", 
    unity : "Cuillère à café"
},
{ 
    id : "14", 
    title : "Parmesan rapé", 
    unity : "gr"
},
{ 
    id : "15", 
    title : "Pommes Golden", 
    unity : "pièce"
},
{ 
    id : "16", 
    title : "Pâte brisée", 
    unity : "pièce"
},
{ 
    id : "17", 
    title : "Beurre", 
    unity : "gr"
},
{ 
    id : "18", 
    title : "Lardons", 
    unity : "gr"
},
{ 
    id : "19", 
    title : "Pâtes", 
    unity : "gr"
},
{ 
    id : "20", 
    title : "Jaunes d'oeuf", 
    unity : "pièce"
},
{ 
    id : "21", 
    title : "Oignon", 
    unity : "pièce"
},
{ 
    id : "22", 
    title : "Crème fraiche", 
    unity : "cl"
}]
    
export const localStorageIngredientState = () : IngredientState => ({
    ingredients : getOrDefaultDataFromLocalStorage('ingredients', initialIngredients)
})  