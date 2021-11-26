import './App.css';
import {useState} from "react";

const AddUser = ({addUser}) =>
{
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const onChangeFirstName = event => setFirstName(event.target.value)
  const onChangeLastName = event => setLastName(event.target.value)

  return <div>
    <input
        type="text"
        placeholder="firstName"
        value={firstName}
        onChange={onChangeFirstName} />

    <input
        type="text"
        placeholder="lastName"
        value={lastName}
        onChange={onChangeLastName} />

    <button onClick={() => addUser({firstName, lastName})}>Ajouter un utilisateur</button>
  </div>
}

const User = ({id, firstName : iFirstName, lastName : iLastName, removeUser, updateUser}) =>
{
  const [firstName, setFirstName] = useState(iFirstName)
  const [lastName, setLastName] = useState(iLastName)

  const onChangeFirstName = event => setFirstName(event.target.value)
  const onChangeLastName = event => setLastName(event.target.value)

  return <div>
    <input
        type="text"
        placeholder="firstName"
        value={firstName}
        onChange={onChangeFirstName} />

    <input
        type="text"
        placeholder="lastName"
        value={lastName}
        onChange={onChangeLastName} />

    <button onClick={() => removeUser(id)}>X</button>
    <button onClick={() => updateUser({id, firstName, lastName})}>Mettre à jour</button>
  </div>
}

const UserList = ({users, removeUser, updateUser}) =>
  <div className="user-list">
    {users.map(u =>
    <User
        {...u}
        key={`User${u.id}`}
        removeUser={removeUser}
        updateUser={updateUser}/>)}
  </div>

//Learning.React/Pokes/CRUD with internal state
const DEFAULT_USERS = [{ id : 1, firstName : 'toto', lastName : "tata" }]
const App = () =>
{
  const [users, setUsers] = useState(DEFAULT_USERS)

  const generateNewId = () => users.map(u => u.id).reduce((a , b) => a > b ? a + 1 : b + 1, 0)
  const addUser = ({firstName, lastName}) => setUsers([...users, {id : generateNewId(), firstName, lastName}])

  const updateUser = user => setUsers(users.map(u => u.id === user.id ? user : u))

  const removeUser = id => setUsers(users.filter(u => u.id !== id ))

  return <div>
    <AddUser addUser={addUser} />
    <UserList users={users} removeUser={removeUser} updateUser={updateUser} />
  </div>

}

export default App;