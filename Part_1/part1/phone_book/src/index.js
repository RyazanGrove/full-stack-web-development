import React, { useState } from 'react'
import ReactDOM from "react-dom";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNumber ] = useState('')
    const [ useFilter, setUseFilter ] = useState(false)
    const [personsToShow, setPersonsToShow] = useState(persons)

    const handleNameInputChange = (event) =>{
        setNewName(event.target.value)
    }

    const handleNumberInputChange = (event) =>{
        setNumber(event.target.value)
    }

    const filterNames = (event) =>{
        if(event.target.value.length > 0){
            let filteredNames = []
            persons.map(person => {
                if(person.name.toLowerCase().includes(event.target.value.toLowerCase())){
                    filteredNames = filteredNames.concat(person)
                }
            })
            setPersonsToShow(filteredNames)
            setUseFilter(true)
        } else {
            setUseFilter(false)
        }
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
            <div>
                filter shown with <input onChange={filterNames}/>
            </div>
            <h2>Add a new</h2>
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
            {!useFilter && persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
            {useFilter && personsToShow.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
        </div>
    )
}

export default App

ReactDOM.render(
    <App />,
    document.getElementById('root')
)