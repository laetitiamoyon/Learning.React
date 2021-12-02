import React, {ChangeEvent, useState} from 'react';

const AddTodo = ({addTodo}) => {

    const [title, setTitle] = useState("")

    const onChangeTitle = (event : ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)

    return <div className="container">
        <h1>Ajouter une tâche</h1>
        <input
            type="text"
            value={title}
            onChange={onChangeTitle}
            placeholder="Ajouter une tâche"/>

        <button onClick={()=> addTodo({title}) } >Ajouter une tâche</button>

    </div>
};

export default AddTodo;