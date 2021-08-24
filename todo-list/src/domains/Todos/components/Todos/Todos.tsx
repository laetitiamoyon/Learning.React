import React, { FC, useContext, useState } from 'react';
import './Todos.css'
import Todo from '../Todo/Todo';
import AddTodo from '../AddTodo/AddTodo';
import { ITodo } from '../../todos.model';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../todos.selector';

const Todos : FC = () =>
{
    const todos = useSelector(selectTodos)

    return <div className="todoContainer">
        <h1 className="title">Todo List</h1>
        <div className="todoElement">
            { todos && todos.todos.map(t => <Todo {...t} key={t.id}/>) }
            <AddTodo />
        </div>
    </div> 
};

export default Todos;