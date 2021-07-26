import React, { useReducer } from 'react'
import { recipesReducer } from './recipes.reducer'
import { recipes as initialState } from './recipes.model'

export const RecipeContext = React.createContext({})
export const RecipeContextProvider = ({children}) =>
{
    const [recipes, dispatch] = useReducer(recipesReducer, initialState)

    return <RecipeContext.Provider value={{recipes, dispatch}}>
        {children}
    </RecipeContext.Provider>
}