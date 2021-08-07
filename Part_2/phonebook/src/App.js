import React, { useState } from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas' }
    ])
    const [ newName, setNewName ] = useState('')

    const handleInputChange = (event) =>{
        setNewName(event.target.value)
    }

    const addPerson = (event) =>{
        event.preventDefault()
        const newPerson = {name: newName}
        setPersons(persons.concat(newPerson))
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input onChange={handleInputChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person => <p key={person.name}>{person.name}</p>)}
        </div>
    )
}

export default App