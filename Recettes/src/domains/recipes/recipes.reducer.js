import { newGuid } from '../../shared/utils/string'

export const recipesReducer = (state, action) =>
{
    switch (action.type)
    {
        case 'ADD_RECIPE' : 
        {
            const { title, description, ingredients } = action.payload

            return [...state, { title, description, ingredients,id : newGuid() }]
        }
        case 'REMOVE_RECIPE' : 
        {
            const { id } = action.payload
            
            return state.filter(recipe => recipe.id !== id)
        }

        default : return state
    }
}