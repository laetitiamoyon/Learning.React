import React, { FC, useContext, useState } from 'react';
import { TodoContext } from '../todos.context';
import './Todos.css'
import Todo from '../Todo/Todo';
import AddTodo from '../AddTodo/AddTodo';
import { ITodo } from '../todos.model';

const Todos : FC = () => {

    const { todosState } = useContext(TodoContext)
    const [todos, setTodos] = useState(todosState.todos)

    console.log(todos)

    const addTodo = (todo : ITodo) : void => setTodos([...todos, todo])
    const removeTodo = (id : string) => setTodos(todos.filter(t => t.id !== id))
    const toggleTodo = (id : string) => setTodos(todos.map(t => t.id === id ? 
        {...t, completed : !t.completed} : t))
    const editTodo = (id : string, title : string) => setTodos(todos.map(t => t.id === id ? 
        {...t, content : title } : t))

    return <div className="todoContainer">
        <h1 className="title">Todo List</h1>
        <div className="todoElement">
            { todos && todos.map(t => 
                <Todo {...t} 
                    key={t.id}
                    toggleTodo={toggleTodo}
                    editTodo={editTodo}
                    removeTodo={removeTodo} />
            ) }
            <AddTodo addTodo={addTodo}/>
        </div>
    </div> 
};

export default Todos;