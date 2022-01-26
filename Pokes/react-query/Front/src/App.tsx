import React, {ChangeEvent, useState } from 'react';
import './App.css';
import Users from './domains/users/Users';
import ReactQueryProvider from "./domains/configuration/ReactQueryProvider";
import { ExampleComponent } from './domains/translations/ExampleComponent';
// import {i18n} from './domains/translations/i18n';

const App = () =>
    <ReactQueryProvider>
        <Users/>
        <ExampleComponent/>
import React from 'react';
import './App.css';
import Users from './domains/users/Users';
import ReactQueryProvider from "./domains/configuration/ReactQueryProvider";

const App = () =>
    <ReactQueryProvider>
      <Users/>
    </ReactQueryProvider>

export default App;
