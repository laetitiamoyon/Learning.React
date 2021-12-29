import React from 'react';
import './App.css';
import Users from './domains/users/Users';
import ReactQueryProvider from "./domains/configuration/ReactQueryProvider";

const App = () =>
    <ReactQueryProvider>
      <Users/>
    </ReactQueryProvider>

export default App;
