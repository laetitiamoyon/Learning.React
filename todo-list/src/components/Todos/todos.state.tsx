import { Todo } from "./todos.model";

export interface TodoState
{ 
    todos : Todo[]
};

export const todosInitialState : TodoState = 
{
    todos : [
    { 
        id : "1", 
        content : "Faire le ménage",
        completed : true,
    },
    { 
        id : "2", 
        content : "Faire ma compta",
        completed : true,
    },
    { 
        id : "3", 
        content : "Appeler Marine",
        completed : false,
    },
    { 
        id : "4", 
        content : "Acheter des croquettes pour petit chien",
        completed : false,
    },
]}
