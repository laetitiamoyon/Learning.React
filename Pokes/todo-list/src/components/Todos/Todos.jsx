import React, {useState, FC} from 'react';
import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";

const Todos = () => {

    const DEFAULT_TODOS = [{id: 1, title : 'faire la lessive'}]

    const [todos, setTodos] = useState(DEFAULT_TODOS)

    const generateId = () => todos.map(i => i.id).reduce((a,b) => a > b ? a + 1 : b + 1, 0)

    const addTodo = ({ title }) => setTodos([...todos, {id : generateId(), title}])

    const removeTodo = (id) => setTodos(todos.filter(t => t.id !== id))

    const updateTodo = (todo) => setTodos(todos.map(t => t.id === todo.id ? todo : t))
    const toggleTodo = (todo) => setTodos(todos.map(t => t.id === todo.id ? todo : t))

    return <div>
        <h1>Liste des tâches :</h1>
        {todos.map(t => <Todo
            {...t}
            key={`Todo${t.id}`}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            completed={toggleTodo}/>)}
        <AddTodo addTodo={addTodo} />
    </div>
};

export default Todos;