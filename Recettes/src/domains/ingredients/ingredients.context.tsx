import React, { useReducer } from 'react'
import { IngredientActions } from './ingredients.action'
import { ingredientsReducer } from './ingredients.reducer'
import { IngredientState, ingredientInitialState } from './ingredients.state'

interface IngredientContextState
{
    ingredientsState: IngredientState;
    dispatch: React.Dispatch<IngredientActions>;
}

const ingredientContextInitialState : IngredientContextState =
{
    ingredientsState: ingredientInitialState,
    dispatch: () => null
}
export const IngredientContext = React.createContext<IngredientContextState>(ingredientContextInitialState)
export const IngredientContextProvider = ({children}) =>
{
    const [ingredientsState, dispatch] = useReducer(ingredientsReducer, ingredientInitialState)

    return <IngredientContext.Provider value={{ingredientsState, dispatch}}>
        {children}
    </IngredientContext.Provider>
}