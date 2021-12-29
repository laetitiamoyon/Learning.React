import React, {ChangeEvent, FC, useState } from 'react';
import styles from "./AddUser.module.css"

interface Props
{
    addUser : any
}

const AddUser : FC<Props> = ({addUser}) =>
{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onChangeFirstName = (event : ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)
    const onChangeLastName = (event : ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)


    return <div className={styles.container}>
        <input className={styles.input} value={firstName} onChange={onChangeFirstName}/>
        <input className="input" value={lastName} onChange={onChangeLastName}/>
        <button onClick={() => addUser({firstName, lastName})}>Ajouter</button>
    </div>
};

export default AddUser;