import React from 'react';
import Navigation from './domains/navigation/components/Navigation/Navigation';
import { IngredientContextProvider } from './domains/ingredients/ingredients.context';
import { RecipeContextProvider } from './domains/recipes/recipes.context';

const App = () => 
    <RecipeContextProvider>
        <IngredientContextProvider>
            <Navigation/>
        </IngredientContextProvider>
    </RecipeContextProvider>

export default App;