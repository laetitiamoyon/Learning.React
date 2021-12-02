import React, {useState} from 'react';

const Todo = ({id, title : iTitle, removeTodo, updateTodo}) => {

    const [title, setTitle] = useState(iTitle)
    const onChangeTitle = event => setTitle(event.target.value)
    const [checked, setChecked] = useState(false)
    const onCompleted = (event) => setChecked(event.target.value)


    return <div>
        <input
        value={title}
        onChange={onChangeTitle}/>
        <input type="checkbox" checked={checked} onChange={onCompleted}/>
        <button onClick={() => removeTodo(id)}>X</button>
        <button onClick={() => updateTodo({id, title})}>Mettre à jour</button>

    </div>
};

export default Todo;