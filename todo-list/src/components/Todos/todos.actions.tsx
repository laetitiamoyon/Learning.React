import { ITodo } from './todos.model';

export enum TodoAction
{
    ADD_TODO = "todos/ADD_TODO",
    UPDATE_TODO = "todos/UPDATE_TODO",
    REMOVE_TODO = "todos/REMOVE_TODO"
}

export interface AddTodoAction
{ 
    type: TodoAction.ADD_TODO
    payload : ITodo
}

export interface UpdateTodoAction
{ 
    type: TodoAction.UPDATE_TODO
    payload : ITodo
}

export interface RemoveTodoAction
{ 
    type: TodoAction.REMOVE_TODO
    payload : {id : string}
}

export const addTodoAction = (payload : ITodo) : AddTodoAction => ({
    type : TodoAction.ADD_TODO,
    payload
})

export const updateTodoAction = (payload : ITodo) : UpdateTodoAction => ({
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