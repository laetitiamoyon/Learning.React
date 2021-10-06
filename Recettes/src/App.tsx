import React from 'react';
import Navigation from './domains/navigation/components/Navigation/Navigation';
import { IngredientContextProvider } from './domains/ingredients/ingredients.context';
import { RecipeContextProvider } from './domains/recipes/recipes.context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => 
    <RecipeContextProvider>
        <IngredientContextProvider>
            <Navigation/>
            <ToastContainer/>
        </IngredientContextProvider>
    </RecipeContextProvider>

export default App;