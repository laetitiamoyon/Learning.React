import React, { useReducer } from 'react'
import { recipes as initialState } from './recipes.model'
import { recipesReducer } from './recipes.reducer'

export const RecipeContext = React.createContext({})
export const RecipeContextProvider = ({children}) =>
{
    const [recipes, dispatch] = useReducer(recipesReducer, initialState)

    return <RecipeContext.Provider value={{recipes, dispatch}}>
            {children}
    </RecipeContext.Provider>
    
}