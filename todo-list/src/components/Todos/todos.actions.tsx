import { Todo } from './todos.model';

export enum TodoAction
{
    ADD_TODO = "todos/ADD_TODO",
    UPDATE_TODO = "todos/UPDATE_TODO",
    REMOVE_TODO = "todos/REMOVE_TODO"
}

export interface AddTodoAction
{ 
    type: TodoAction.ADD_TODO
    payload : Todo
}

export interface UpdateTodoAction
{ 
    type: TodoAction.UPDATE_TODO
    payload : Todo
}

export interface RemoveTodoAction
{ 
    type: TodoAction.REMOVE_TODO
    payload : {id : string}
}

export const addTodoAction = (payload : Todo) : AddTodoAction => ({
    type : TodoAction.ADD_TODO,
    payload
})

export const updateTodoAction = (payload : Todo) : UpdateTodoAction => ({
    type : TodoAction.UPDATE_TODO,
    payload
})

export const removeTodoAction = (id: string) : RemoveTodoAction => ({ 
    type: TodoAction.REMOVE_TODO,
    payload : { id } 
})

export type TodoActions = 
    AddTodoAction |
    UpdateTodoAction |
    RemoveTodoAction 