import React, { FC, useContext } from 'react';
import { TodoContext } from '../todos.context';
import './Todo.css'
import { removeTodoAction } from '../todos.actions';
import { Todo as TodoModel} from '../todos.model';

const Todo : FC<TodoModel> = ({ id, content, completed }) => {

    const { dispatch } = useContext(TodoContext)
    const removeTodo = () => dispatch(removeTodoAction(id))

    return <div className="todosContainer">
       
        <div className="todos">
            <div className="checkBox">{completed}</div>
            <div className="content">{content}</div>
            <div className="removeButton" onClick={removeTodo}>X</div>
        </div>
    </div>
};

export default Todo;