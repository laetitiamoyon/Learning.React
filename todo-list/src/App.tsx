import { TodoContextProvider } from './components/Todos/todos.context';
import React from 'react';
import Todos from './components/Todos/Todos/Todos';

const App = () => 

  <TodoContextProvider>
    <Todos/>
  </TodoContextProvider>

export default App;
