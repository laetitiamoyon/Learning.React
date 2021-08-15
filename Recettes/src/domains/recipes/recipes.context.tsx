import React, { useReducer, ReactNode } from 'react'
import { recipesReducer } from './recipes.reducer';
import { RecipeActions } from './recipes.action';
import { recipesInitialState, RecipeState } from './recipes.state';

interface RecipeContextState
{
  recipesState: RecipeState;
  dispatch: React.Dispatch<RecipeActions>;
}

const recipeContextInitialState : RecipeContextState =
{
  recipesState: recipesInitialState,
  dispatch: () => null
}

interface Props
{
  children : ReactNode
}

export const RecipeContext = React.createContext<RecipeContextState>(recipeContextInitialState);
export const RecipeContextProvider = ({children} : Props) =>
{
    const [recipesState, dispatch] = useReducer(recipesReducer, recipesInitialState)

    return <RecipeContext.Provider value={{recipesState, dispatch}}>
        {children}
    </RecipeContext.Provider>
}