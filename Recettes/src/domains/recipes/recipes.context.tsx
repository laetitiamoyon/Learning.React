import React, { FC, useReducer, ReactNode } from 'react'
import { recipesReducer } from './recipes.reducer';
import { RecipeActions } from './recipes.action';
import { recipesInitialState, RecipeState } from './recipes.state';
import { useEffect } from 'react';

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
export const RecipeContextProvider : FC<Props> = ({children}) =>
{
    const [recipesState, dispatch] = useReducer(recipesReducer, recipesInitialState, () => {
      const localRecipes = localStorage.getItem('recipesState')
        return localRecipes ? JSON.parse(localRecipes) : recipesInitialState; 
      })

    useEffect(() => {
      localStorage.setItem("localRecipes", JSON.stringify(recipesState));
    }, [recipesState]);

    return <RecipeContext.Provider value={{recipesState, dispatch}}>
        {children}
    </RecipeContext.Provider>
}