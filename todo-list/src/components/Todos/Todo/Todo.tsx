import React, { FC } from 'react';
import './Todo.css'
import { ITodo } from '../todos.model';

interface Props extends ITodo
{
    removeTodo : (id : string) => void
    toggleTodo : (id : string) => void
    editTodo : (id : string, title : string) => void
}
const Todo : FC<Props> = ({ id, content, completed, removeTodo, toggleTodo, editTodo }) =>
{
    const onChangeTitle = (e : any) => editTodo(id, e.target.value)
    const onChecked = (e : any) => toggleTodo(id)

    return <div className="todosContainer">
        <div className="todo">
            <input type="checkbox" checked={completed} onChange={onChecked}/>
            <input className="content" defaultValue={content} onChange={onChangeTitle}/>
            <div className="removeButton" onClick={() => removeTodo(id)}>X</div>
        </div>
    </div>
};

export default Todo;