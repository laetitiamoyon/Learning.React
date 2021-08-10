export const addRecipeAction = (title, description) => ({ 
    type: 'ADD_RECIPE', 
    payload : { title, description } 
})

export const removeRecipeAction = (id) => ({ 
    type: 'REMOVE_RECIPE',
    payload : { id } 
})

export const updateRecipeAction = (id, title, description, ingredients) => ({ 
    type: 'UPDATE_RECIPE',
    payload :
    { 
        id, 
        title,
        description,
        ingredients,
    } 
})