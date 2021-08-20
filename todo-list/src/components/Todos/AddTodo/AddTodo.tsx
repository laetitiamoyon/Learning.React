import { useContext, useState, ChangeEvent, FC } from 'react';
import { TodoContext } from '../todos.context';
import { addTodoAction } from '../todos.actions';
import "./AddTodo.css"

const AddTodo : FC = () => {

    const { dispatch } = useContext(TodoContext)
    const [addTodoText, setAddTodoText] = useState('')

    const addTodo = () : void => dispatch(addTodoAction(
    {
        id: '',
        content: '',
        completed: false
    }))

    const onChangeTodo = (event: ChangeEvent<HTMLInputElement>) : void =>
        setAddTodoText(event.target.value)

    return <div className="container">
        <div className="addButton" onClick={addTodo}>+</div>
        <input 
            onChange={onChangeTodo}
            value={addTodoText}
            placeholder="Ajouter une tâche"
            className="input"
            name="addTodo"/>
    </div>
};

export default AddTodo;