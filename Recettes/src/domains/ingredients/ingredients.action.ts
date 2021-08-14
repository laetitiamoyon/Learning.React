export const addIngredientAction = (title, unity) => ({ 
    type: 'ADD_INGREDIENT', 
    payload : { title, unity } 
})

export const removeIngredientAction = (id) => ({ 
    type: 'REMOVE_INGREDIENT', 
    payload : { id } 
})

export const updateIngredientAction = (id, title, unity) => ({ 
    type: 'UPDATE_INGREDIENT',
    payload :
    { 
        id, 
        title,
        unity
    } 
})