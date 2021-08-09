export const addRecipeAction = (title, description) => ({ 
    type: 'ADD_RECIPE', 
    payload : { title, description } 
})

export const removeRecipeAction = (id) => ({ 
    type: 'REMOVE_RECIPE',
     payload : { id } 
})

export const updateRecipeAction = (id, newTitle, newDescription, newIngredients) => ({ 
    type: 'UPDATE_RECIPE',
    payload :
    { 
        id : id, 
        title : newTitle,
        description : newDescription,
        ingredients : newIngredients,
    } 
})