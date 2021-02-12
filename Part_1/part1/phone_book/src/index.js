import React, { useState } from 'react'
import ReactDOM from "react-dom";

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas', number: '040-1234567' }
    ])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNumber ] = useState('')

    const handleNameInputChange = (event) =>{
        setNewName(event.target.value)
    }

    const handleNumberInputChange = (event) =>{
        setNumber(event.target.value)
    }

    const addPerson = (event) =>{
        event.preventDefault()
        if(persons.filter(person => person.name === newName).length > 0){
            window.alert(`${newName} is already added to phonebook`)
        } else {
            const newPerson = {name: newName, number: newNumber}
            setPersons(persons.concat(newPerson))
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input onChange={handleNameInputChange}/>
                </div>
                <div>
                    number: <input onChange={handleNumberInputChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
        </div>
    )
}

export default App

ReactDOM.render(
    <App />,
    document.getElementById('root')
)