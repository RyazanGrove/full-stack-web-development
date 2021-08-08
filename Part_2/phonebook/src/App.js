import React, { useState, useEffect } from 'react'
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import axios from "axios";

const App = () => {
    const [persons, setPersons] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNumber ] = useState('')
    const [ useFilter, setUseFilter ] = useState(false)
    const [ personsToShow, setPersonsToShow ] = useState(persons)

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    }, [])

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
            axios.post('http://localhost:3001/persons/', newPerson)
            setPersons(persons.concat(newPerson))
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filterNames={filterNames}/>
            <h3>Add a new</h3>
            <PersonForm addPerson={addPerson} handleNameInputChange={handleNameInputChange} handleNumberInputChange={handleNumberInputChange}/>
            <h3>Numbers</h3>
            <Persons persons={ useFilter ? personsToShow : persons }/>
        </div>
    )
}

export default App