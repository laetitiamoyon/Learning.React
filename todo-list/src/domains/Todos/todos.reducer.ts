import { TodoState, initialTodosState } from './todos.state';
import { TodoActions, TodoAction } from './todos.actions';

export const todosReducer = (state: TodoState = initialTodosState, action: TodoActions) : TodoState =>
{
    switch (action.type)
    {
        case TodoAction.ADD_TODO : 
        {
            return {
                ...state,
                todos: [...state.todos, action.payload] 
              }
        }
        case TodoAction.EDIT_TODO : 
        {
            const { id, title } = action.payload

            return {
                ...state,
                todos: state.todos.map(todo => todo.id === id ? { ...todo, content : title } : todo)
            }
        }
        case TodoAction.TOGGLE_TODO :
            {
                const { id } = action.payload
            
                return {
                    ...state, 
                    todos : state.todos.map(todo => todo.id === id ? {...todo, completed : !todo.completed} : todo)
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