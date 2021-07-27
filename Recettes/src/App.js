import React from 'react';
import Navigation from './domains/navigation/components/Navigation/Navigation';
import { IngredientContextProvider } from './domains/ingredients/ingredients.provider';
import { RecipeContextProvider } from './domains/recipes/recipes.provider';

const App = () => 
    <RecipeContextProvider>
        <IngredientContextProvider>
            <Navigation/>
        </IngredientContextProvider>
    </RecipeContextProvider>

export default App;