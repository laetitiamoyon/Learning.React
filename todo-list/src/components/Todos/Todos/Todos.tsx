import React, { FC, useContext } from 'react';
import { TodoContext } from '../todos.context';
import './Todos.css'
import Todo from '../Todo/Todo';

const Todos : FC = () => {

    const { todosState : { todos } } = useContext(TodoContext)
    return <div className="todoContainer">
        <h1 className="title">Todo List</h1>
        <div className="todoElement">
            { todos && todos.map(t => <Todo {...t} key={t.id} />) }
        </div>
    </div> 
};

export default Todos;