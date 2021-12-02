import './App.css';
import {useState} from "react";

const AddUser = ({addUser}) =>
{
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onChangeFirstName = event => setFirstName(event.target.value)
  const onChangeLastName = event => setLastName(event.target.value)

  return <div>
    <input
        type="text"
        value={firstName}
        onChange={onChangeFirstName}/>
    <input
        type="text"
        value={lastName}
        onChange={onChangeLastName}/>
    <button onClick={() => addUser({firstName, lastName})}>Send</button>
  </div>

}

const User = ({id, firstName : iFirstName, lastName : iLastName, updateUser, removeUser}) =>
{
  const [firstName, setFirstName] = useState(iFirstName)
  const [lastName, setLastName] = useState(iLastName)

  const onChangeFirstName = event => setFirstName(event.target.value)
  const onChangeLastName = event => setLastName(event.target.value)

  return <div>
    <input
        type="text"
        value={firstName}
        onChange={onChangeFirstName}/>

    <input
        type="text"
        value={lastName}
        onChange={onChangeLastName}/>
    <button onClick={() => updateUser({id, firstName, lastName})}>Update</button>
    <button onClick={() => removeUser(id)}>Remove</button>
  </div>

}

const UserList = ({ user, updateUser, removeUser }) =>
{
  return <div>
    {user.map(u => <User
        {...u}
        key={`User${u.id}`}
        updateUser={updateUser}
        removeUser={removeUser}/>)}
  </div>
  
}

//Learning.React/Pokes/CRUD with internal state
const DEFAULT_USERS = [{ id : 1, firstName : 'toto', lastName : "tata" }]
const App = () =>
{
  const [user, setUser] = useState(DEFAULT_USERS)
  const generateNewId = () => user.map(u => u.id).reduce((a, b) => a > b ? a + 1 : b + 1, 1)
  const addUser = ({firstName, lastName}) => setUser([...user, {id: generateNewId(), firstName, lastName}])
  const removeUser = id => setUser(user.filter(u => u.id !== id))
  const updateUser = users => setUser(user.map(u => u.id === users.id ? users : u))

  console.log(user)
  return <div>
    <AddUser addUser={addUser}/>
    <UserList
        user={user}
        removeUser={removeUser}
        updateUser={updateUser}/>
  </div>


}

export default App;