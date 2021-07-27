import React from 'react';
import Navigation from './components/Navigation/Navigation';
import {RecipeContextProvider} from './recipes.provider';
import {IngredientContextProvider} from './ingredients.provider';

const App = () => 
<>
    <RecipeContextProvider>
    <IngredientContextProvider>
        <Navigation/>
    </IngredientContextProvider>
    </RecipeContextProvider>


</>

export default App;