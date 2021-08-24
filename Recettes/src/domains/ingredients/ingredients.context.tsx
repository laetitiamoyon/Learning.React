import React, { useReducer, ReactNode, FC } from 'react'
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

interface Props
{
    children : ReactNode
}
export const IngredientContext = React.createContext<IngredientContextState>(ingredientContextInitialState)
export const IngredientContextProvider : FC<Props> = ({children}) =>
{
    const [ingredientsState, dispatch] = useReducer(ingredientsReducer, ingredientInitialState)

    return <IngredientContext.Provider value={{ingredientsState, dispatch}}>
        {children}
    </IngredientContext.Provider>
}