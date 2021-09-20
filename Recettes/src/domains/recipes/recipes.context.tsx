import React, { FC, useReducer, ReactNode } from 'react'
import { recipesReducer } from './recipes.reducer';
import { RecipeActions } from './recipes.action';
import { RecipeState, localStorageRecipeState } from './recipes.state';

interface RecipeContextState
{
  recipesState: RecipeState;
  dispatch: React.Dispatch<RecipeActions>;
}

const recipeContextInitialState : RecipeContextState =
{
  recipesState: localStorageRecipeState(),
  dispatch: () => null
}

interface Props
{
  children : ReactNode
}

export const RecipeContext = React.createContext<RecipeContextState>(recipeContextInitialState);
export const RecipeContextProvider : FC<Props> = ({children}) =>
{
    const [recipesState, dispatch] = useReducer(recipesReducer, localStorageRecipeState())

    return <RecipeContext.Provider value={{recipesState, dispatch}}>
        {children}
    </RecipeContext.Provider>
}