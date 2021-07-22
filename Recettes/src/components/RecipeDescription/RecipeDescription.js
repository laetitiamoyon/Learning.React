import React from 'react';
import { useParams } from "react-router-dom";
import { recipes } from '../Recipes/recipes.model'

const RecipeDescription = () => 
{
    let { id } = useParams();
    const { title } = recipes.find(r => r.id === parseInt(id))

    return <div>
        <h1>{title}</h1>
    </div>
}

export default RecipeDescription;