import { FC } from 'react';
import './Todo.css'
import { ITodo } from '../../todos.model';
import { editTodoRequestAction, removeTodoRequestAction, toggleTodoRequestAction } from '../../todos.actions';
import { useDispatch } from 'react-redux';
import { ChangeEvent } from 'react';

const Todo : FC<ITodo> = ({ id, content, completed }) =>
{
    const dispatch = useDispatch()
    const onChangeTitle = (event : ChangeEvent<HTMLInputElement>) => dispatch(editTodoRequestAction(id, event.target.value))
    const onChecked = () => dispatch(toggleTodoRequestAction(id))
    const onRemove = () => dispatch(removeTodoRequestAction(id))

    return <div className="todosContainer">
        <div className="todo">
            <input className="checkbox" type="checkbox" checked={completed} onChange={onChecked}/>
            <input className="content" defaultValue={content} onChange={onChangeTitle}/>
            <div className="removeButton" onClick={onRemove}>X</div>
        </div>
    </div>
};

export default Todo;