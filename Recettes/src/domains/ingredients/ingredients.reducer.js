import { newGuid } from '../../shared/utils/string'

export const ingredientsReducer = (state, action) =>
{

    switch (action.type)
    {
        case 'ADD_INGREDIENT' : 
        {
            const { title, quantity, unity } = action.payload

            return [...state, { title, quantity, unity, id : newGuid() }]
        }

        case 'REMOVE_INGREDIENT' : 
        {
            const { id } = action.payload
            
            return state.filter(ingredient => ingredient.id !== id)
        }
        case 'UPDATE_INGREDIENT' : 
        {
            const { id, title, quantity, unity } = action.payload
            
            return state.map(ingredient => 
                ingredient.id === id ? {...ingredient, title, quantity, unity} :
                ingredient) 
        }
    
        default : return state
    }
}