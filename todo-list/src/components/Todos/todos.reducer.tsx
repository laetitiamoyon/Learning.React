import { TodoState } from './todos.state';
import { TodoActions, TodoAction } from './todos.actions';
import { newGuid } from '../../shared/utils/string';

export const todosReducer = (state: TodoState, action: TodoActions) : TodoState =>
{
    switch (action.type)
    {
        case TodoAction.ADD_TODO : 
        {
            console.log(action, state)
            return {
                ...state,
                todos: [...state.todos, { ...action.payload, id : newGuid() } ] 
              }
        }
        case TodoAction.UPDATE_TODO : 
        {
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
            }
        }
        case TodoAction.REMOVE_TODO :
        {
            return {
                ...state, 
                todos : state.todos.filter(todo => todo.id !== action.payload.id)
            }
        }
        default : return state
    }
}