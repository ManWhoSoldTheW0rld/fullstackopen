import { useState } from 'react'

const Filter = ({searchString, handler}) => {
  return (
    <div>
        filter shown with: <input value={searchString} onChange={handler} />
    </div>
  )
}

const PersonForm = ({newName, handleNameChange, newPhone, handlePhoneChange, addNewName}) => {
  return (
    <form onSubmit={addNewName}>
    <div>
    name: <input value={newName} onChange={handleNameChange} />
    </div>
    <div>
    number: <input value={newPhone} onChange={handlePhoneChange} />
    </div>   
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

const Persons = ({list}) => {
  return list.map(person => <p key={person.id}>{person.name} {person.number}</p>)
}

const App = () => {
  const [persons, setPersons] = useState([
      { name: 'Arto Hellas', number: '040-123456', id: 1 },
      { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
      { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
      { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchString, setSearchString] = useState('')

  const addNewName = (event) => {
    event.preventDefault()

    const samePersons = persons.filter(person => person.name === newName)

    if (samePersons.length > 0) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({
        id : persons.length + 1,
        name : newName,
        number : newPhone
      }))
      setNewName("")
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  } 

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  } 

  const handleFilterChange = (event) => {
    setSearchString(event.target.value)
  }

  const list = searchString === "" ? persons : persons.filter(person => person.name.toLowerCase().includes(searchString.toLowerCase())) 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchString={searchString} handler={handleFilterChange}  />
      <h3>Add a new</h3>
      <PersonForm newName={newName} handleNameChange={handleNameChange} 
        newPhone={newPhone} handlePhoneChange={handlePhoneChange} addNewName={addNewName}/>
      <h3>Numbers</h3>
      <Persons list={list}/>
    </div>
  )
}

export default App
