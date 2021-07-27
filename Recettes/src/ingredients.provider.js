import React, { useReducer } from 'react'
import { ingredients as initialState } from './ingredients.model'
import { ingredientsReducer } from './ingredients.reducer'

export const IngredientContext = React.createContext({})
export const IngredientContextProvider = ({children}) =>
{
    const [ingredients, dispatch] = useReducer(ingredientsReducer, initialState)

    return <IngredientContext.Provider value={{ingredients, dispatch}}>
        {children}
    </IngredientContext.Provider>
}