export const addIngredientAction = (title, unity) => ({ 
    type: 'ADD_INGREDIENT', 
    payload : { title, unity } 
})

export const removeIngredientAction = (id) => ({ 
    type: 'REMOVE_INGREDIENT', 
    payload : { id } 
})

export const updateIngredientAction = (id, newTitle, newUnity) => ({ 
    type: 'UPDATE_INGREDIENT',
    payload :
    { 
        id : id, 
        title : newTitle,
        unity : newUnity
    } 
})