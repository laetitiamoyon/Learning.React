import React, { useReducer, ReactNode, FC } from 'react'
import { IngredientActions } from './ingredients.action'
import { ingredientsReducer } from './ingredients.reducer'
import { IngredientState, localStorageIngredientState } from './ingredients.state'

interface IngredientContextState
{
    ingredientsState: IngredientState;
    dispatch: React.Dispatch<IngredientActions>;
}

const ingredientContextInitialState : IngredientContextState =
{
    ingredientsState: localStorageIngredientState(),
    dispatch: () => null
}

interface Props
{
    children : ReactNode
}
export const IngredientContext = React.createContext<IngredientContextState>(ingredientContextInitialState)
export const IngredientContextProvider : FC<Props> = ({children}) =>
{
    const [ingredientsState, dispatch] = useReducer(ingredientsReducer, localStorageIngredientState())

    return <IngredientContext.Provider value={{ingredientsState, dispatch}}>
        {children}
    </IngredientContext.Provider>
}