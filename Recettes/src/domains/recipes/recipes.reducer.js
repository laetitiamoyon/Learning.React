import { newGuid } from '../../shared/utils/string'

export const recipesReducer = (state, action) =>
{
    switch (action.type)
    {
        case 'ADD_RECIPE' : 
        {

            
            const { title, description, ingredients, imageData } = action.payload
            console.log(imageData);

            return [...state, { title, description, ingredients, imageData, id : newGuid() }]
        }
        case 'REMOVE_RECIPE' : 
        {
            const { id } = action.payload
            
            return state.filter(recipe => recipe.id !== id)
        }
        case 'UPDATE_RECIPE' : 
        {
            const { id, title, description, ingredients } = action.payload
            
            return state.map(recipe => 
                recipe.id === id ? {...recipe, title, description, ingredients} :
                recipe) 
        }

        default : return state
    }
}