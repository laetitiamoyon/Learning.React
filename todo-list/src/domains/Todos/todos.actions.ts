import { ITodo } from './todos.model';

export enum TodoAction
{
    ADD_TODO = "todos/ADD_TODO",
    EDIT_TODO = "todos/EDIT_TODO",
    TOGGLE_TODO = "todos/TOGGLE_TODO",
    REMOVE_TODO = "todos/REMOVE_TODO"
}
export interface AddTodoAction
{ 
    type: TodoAction.ADD_TODO
    payload : ITodo
}

export interface EditTodoAction
{ 
    type: TodoAction.EDIT_TODO
    payload : { id : string, title : string }
}

export interface ToggleTodoAction
{ 
    type: TodoAction.TOGGLE_TODO
    payload : { id : string }
}

export interface RemoveTodoAction
{ 
    type: TodoAction.REMOVE_TODO
    payload : { id : string }
}

export const addTodoAction = (payload : ITodo) : AddTodoAction => ({
    type : TodoAction.ADD_TODO,
    payload
})

export const editTodoAction = (id : string, title : string) : EditTodoAction => ({
    type : TodoAction.EDIT_TODO,
    payload : { id, title }
})

export const toggleTodoAction = (id: string) : ToggleTodoAction => ({ 
    type: TodoAction.TOGGLE_TODO,
    payload : { id } 
})

export const removeTodoAction = (id: string) : RemoveTodoAction => ({ 
    type: TodoAction.REMOVE_TODO,
    payload : { id } 
})

export type TodoActions = 
    AddTodoAction |
    EditTodoAction |
    ToggleTodoAction |
    RemoveTodoAction 