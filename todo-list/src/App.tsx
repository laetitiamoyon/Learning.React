import { TodoContextProvider } from './components/Todos/todos.context';
import React from 'react';
import Todos from './components/Todos/Todos/Todos';
import AddTodo from './components/Todos/AddTodo/AddTodo';


const App = () => 

  <TodoContextProvider>
    <Todos/>
    <AddTodo/>
  </TodoContextProvider>

export default App;
