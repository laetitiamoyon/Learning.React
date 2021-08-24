import React, { FC } from 'react';
import './Todo.css'
import { ITodo } from '../../todos.model';
import { editTodoAction, removeTodoAction, toggleTodoAction } from '../../todos.actions';
import { useDispatch } from 'react-redux';

const Todo : FC<ITodo> = ({ id, content, completed }) =>
{
    const dispatch = useDispatch()
    const onChangeTitle = (e : any) => dispatch(editTodoAction(id, e.target.value))
    const onChecked = (e : any) => dispatch(toggleTodoAction(id))
    const onRemove = () => dispatch(removeTodoAction(id))

    return <div className="todosContainer">
        <div className="todo">
            <input type="checkbox" checked={completed} onChange={onChecked}/>
            <input className="content" defaultValue={content} onChange={onChangeTitle}/>
            <div className="removeButton" onClick={onRemove}>X</div>
        </div>
    </div>
};

export default Todo;