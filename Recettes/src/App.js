import React from 'react';
import Navigation from './components/Navigation/Navigation';
import {RecipeContextProvider} from './recipes.provider'

const App = () => 
    <RecipeContextProvider>
        <Navigation/>
    </RecipeContextProvider>

export default App;