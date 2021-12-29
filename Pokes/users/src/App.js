import './App.css';
import {useState } from 'react'


const DEFAULT_USERS = [
  {
    id : "1",
    name : "Toto",
    age : "18"
  },
  {
    id : "2",
    name : "Tata",
    age : "22"
  },
]

const User = ({id, name : nName, age : nAge, removeUser, updateUser}) =>
{
  const [name, setName] = useState(nName)
  const [age, setAge] = useState(nAge)

  const onChangeName = event => setName(event.target.value)
  const onChangeAge = event => setAge(event.target.value)

  const [visible, setVisible] = useState(false)
  const toggle = () => setVisible(!visible)

  return <div>
    <label>Name :</label>
    { visible &&(
    <input
        value={name} onChange={onChangeName}/>)}

    <label>Age :</label>
    { visible &&(
    <input
        value={age} onChange={onChangeAge}/>)}
    <button onClick={() => removeUser(id)}>X</button>
    <button onClick={() => updateUser({name, age, id})}>Mettre à jour</button>
    { !visible &&(<button onClick={toggle}>+</button>)}
    { visible &&(<button onClick={toggle}>-</button>)}
  </div>

}

const Users = ({users, removeUser, updateUser}) =>
{
  return <div>
    {users.map(u => <User {...u} key={u.id} removeUser={removeUser} updateUser={updateUser}/>)}
  </div>

}

const AddUser = ({addUser}) =>
{
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const onChangeName = event => setName(event.target.value)
  const onChangeAge = event => setAge(event.target.value)

  return <div>
    <h1>Ajouter un utilisateur</h1>
    <input value={name} placeholder='name' onChange={onChangeName}/>
    <input value={age} placeholder='age' onChange={onChangeAge}/>
    <button onClick={() => addUser({name, age})}>Ajouter</button>
  </div>
}

const App = () =>
{

  const [users, setUsers] = useState(DEFAULT_USERS)
  const newId = () => users.map(u => u.id).reduce((a, b) => a > b ? a + 1 : b + 1, 0)
  const addUser = ({name, age}) => setUsers([...users, { id: newId(), name, age }])
  const removeUser = id => setUsers(users.filter(u => u.id !== id))
  const updateUser = user => setUsers(users.map(u => u.id === user.id ? user : u))

  console.log(users)
  return <div className="App">
    <AddUser addUser={addUser}/>
    <Users users={users} removeUser={removeUser} updateUser={updateUser} />
    </div>
}

export default App;
