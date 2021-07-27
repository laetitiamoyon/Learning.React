import React from 'react';
import {RecipeContextProvider} from './recipes.provider';
import {IngredientContextProvider} from './ingredients.provider';
import Navigation from './domains/navigation/components/Navigation/Navigation';

const App = () => 
    <>
        <RecipeContextProvider>
            <IngredientContextProvider>
                <Navigation/>
            </IngredientContextProvider>
        </RecipeContextProvider>
    </>

export default App;