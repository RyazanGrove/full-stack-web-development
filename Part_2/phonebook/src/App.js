import React, { useState } from 'react'
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

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
    const [ personsToShow, setPersonsToShow ] = useState(persons)

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
            <Filter filterNames={filterNames}/>
            <h3>Add a new</h3>
            <PersonForm addPerson={addPerson} handleNameInputChange={handleNameInputChange} handleNumberInputChange={handleNumberInputChange}/>
            {/*<form onSubmit={addPerson}>*/}
            {/*    <div>*/}
            {/*        name: <input onChange={handleNameInputChange}/>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        number: <input onChange={handleNumberInputChange}/>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <button type="submit">add</button>*/}
            {/*    </div>*/}
            {/*</form>*/}
            <h3>Numbers</h3>
            <Persons persons={ useFilter ? personsToShow : persons }/>
        </div>
    )
}

export default App