import React, { useState } from 'react'
import ReactDOM from "react-dom";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

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
            <Filter changeEvent={filterNames}></Filter>
            <h2>Add a new</h2>
            <PersonForm submitEvent={addPerson} nameChangeEvent={handleNameInputChange} numberChangeEvent={handleNumberInputChange}></PersonForm>
            <h2>Numbers</h2>
            <Persons useFilter={useFilter} persons={persons} personsToShow={personsToShow}></Persons>
        </div>
    )
}

export default App

ReactDOM.render(
    <App />,
    document.getElementById('root')
)