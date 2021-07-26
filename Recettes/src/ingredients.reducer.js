import { newGuid } from 'shared/utils/string'

export const ingredientsReducer = (state, action) =>
{
    const { title, quantity, unity } = action.payload

    switch (action.type)
    {
        case 'ADD_INGREDIENT' : return [
            ...state,
            { title, quantity, unity, id : newGuid() }
        ]

        case 'REMOVE_INGREDIENT' : return 
            state.filter(ingredient => ingredient.id !== id)

        default : return state
    }
}