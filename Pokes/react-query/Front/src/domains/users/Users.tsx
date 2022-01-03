import React from 'react';
import {useMutation, useQuery, useQueryClient } from 'react-query';
import { IUser } from './users.model';
import {getAllUsers, addUser, updateUser, removeUser} from './users.apiClient';
import User from './User';
import AddUser from './AddUser';
import styles from "./Users.module.css"

const Users = () => {

    const {data : users} = useQuery<IUser[]>('users', getAllUsers)

    const queryClient = useQueryClient()
    const invalidateUsersConfiguration = { onSuccess : () => queryClient.invalidateQueries('users') }

    const {mutate : onAddUser} = useMutation(addUser, invalidateUsersConfiguration)
    const {mutate : onUpdateUser} = useMutation(updateUser, invalidateUsersConfiguration)
    const {mutate : onRemoveUser} = useMutation(removeUser, invalidateUsersConfiguration)

    return <div className={styles.container}>
        {users?.map(user => <User
            {...user}
            key={user.id}
            updateUser={onUpdateUser}
            removeUser={onRemoveUser}
        />)}
        <AddUser addUser={onAddUser}/>
    </div>
};

export default Users;



