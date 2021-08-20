import { TodoState, todosInitialState } from './todos.state';
import { TodoActions } from './todos.actions';
import React, { FC, useReducer, ReactNode } from 'react'
import { todosReducer } from './todos.reducer';

interface TodoContextState
{
  todosState: TodoState;
  dispatch: React.Dispatch<TodoActions>;
}

const todoContextInitialState : TodoContextState =
{
  todosState: todosInitialState,
  dispatch: () => null
}

interface Props
{
  children : ReactNode
}

export const TodoContext = React.createContext<TodoContextState>(todoContextInitialState);
export const TodoContextProvider : FC<Props> = ({children}) =>
{
    const [todosState, dispatch] = useReducer(todosReducer, todosInitialState)

    return <TodoContext.Provider value={{todosState, dispatch}}>
        {children}
    </TodoContext.Provider>
}