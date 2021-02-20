import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import phonebookService from "./services/contacts"

const App = () => {
    const [persons, setPersons] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNumber ] = useState('')
    const [ useFilter, setUseFilter ] = useState(false)
    const [personsToShow, setPersonsToShow] = useState(persons)

    useEffect(() => {
        phonebookService
            .getAll()
            .then(response => {
                setPersons(response.data)
            })
    }, [])

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
            if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
                const person = persons.find(n => n.name === newName)
                const updatedPerson = {...person, number: newNumber}
                phonebookService
                    .update(updatedPerson.id,updatedPerson)
                    .then(response => {
                        setPersons(persons.map(person => person.id !== updatedPerson.id ? person : response.data))
                    })
            }
        } else {
            const newPerson = {name: newName, number: newNumber}
            phonebookService
                .create(newPerson)
            setPersons(persons.concat(newPerson))
        }
    }

    const deletePerson = (name) =>{
        if(window.confirm('Delete ' + name + ' ?')) {
            let newArray = []
            persons.map((person, i) => {
                if (person.name !== name) {
                    newArray = newArray.concat(person)
                } else {
                    phonebookService
                        .remove(person.id)
                }
            })
            setPersons(newArray)
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter changeEvent={filterNames}></Filter>
            <h2>Add a new</h2>
            <PersonForm submitEvent={addPerson} nameChangeEvent={handleNameInputChange} numberChangeEvent={handleNumberInputChange}></PersonForm>
            <h2>Numbers</h2>
            <Persons useFilter={useFilter} persons={persons} personsToShow={personsToShow} deleteFunction={deletePerson}></Persons>
        </div>
    )
}

export default App

ReactDOM.render(
    <App />,
    document.getElementById('root')
)