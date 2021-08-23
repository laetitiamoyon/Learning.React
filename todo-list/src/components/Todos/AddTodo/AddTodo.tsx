import { useContext, useState, ChangeEvent, FC } from 'react';
import { TodoContext } from '../todos.context';
import { addTodoAction } from '../todos.actions';
import "./AddTodo.css"
import { ITodo } from '../todos.model';
import { newGuid } from '../../../shared/utils/string';

interface Props
{
    addTodo : (todo : ITodo) => void
}

const AddTodo : FC<Props> = ({addTodo}) => {

    const { dispatch } = useContext(TodoContext)
    const [title, setTitle] = useState('')

    const dispatchAddTodo = (todo : ITodo) : void => dispatch(addTodoAction(todo))

    const addTodoInContextAndModel = () =>
    {
        const todo = {
            id: newGuid(),
            content: title,
            completed: false
        }

        dispatchAddTodo(todo)
        addTodo(todo)
    }

    const onChangeTodo = (event: ChangeEvent<HTMLInputElement>) : void =>
        setTitle(event.target.value)

    return <div className="container">
        <div className="addButton" onClick={addTodoInContextAndModel}>+</div>
        <input 
            onChange={onChangeTodo}
            value={title}
            placeholder="Ajouter une tâche"
            className="input"
            name="addTodo"/>
    </div>
};

export default AddTodo;