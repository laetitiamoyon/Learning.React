import React, {ChangeEvent, FC, useState } from 'react';
import { IUser } from './users.model';
import styles from "./User.module.css"

interface Props
{
    updateUser : any
    removeUser : any
}

const User : FC<IUser & Props> = (user) =>
{
    const {id, firstName : iFirstName, lastName : iLastName, updateUser, removeUser} = user

    const [firstName, setFirstName] = useState(iFirstName)
    const [lastName, setLastName] = useState(iLastName)

    const onChangeFirstName = (event : ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)
    const onChangeLastName = (event : ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)

    return <div className={styles.container}>
            <input className={styles.input} value={firstName} onChange={onChangeFirstName}/>
            <input className={styles.input} value={lastName} onChange={onChangeLastName}/>
            <button className={styles.updateButton} onClick={() => updateUser({id, firstName, lastName})}>Mettre à jour</button>
            <button className={styles.updateButton} onClick={() => updateUser({id, firstName, lastName})}>Mettre à jour</button>
            <button className={styles.updateButton} onClick={() => updateUser({firstName, lastName, id})}>Mettre à jour</button>
            <button className={styles.deleteButton} onClick={() => removeUser(id)}>X</button>
        </div>
};

export default User;