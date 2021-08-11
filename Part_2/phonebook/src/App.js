import React, { useState, useEffect } from 'react'
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import axios from "axios";
import phonebookService from "./services/contacts"

const App = () => {
    const [persons, setPersons] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNumber ] = useState('')
    const [ useFilter, setUseFilter ] = useState(false)
    const [ personsToShow, setPersonsToShow ] = useState(persons)
    const [ notificationMessage, setNotificationMessage ] = useState(null)
    const [ errorMessage, setErrorMessage ] = useState(null)

    const notificationStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    useEffect(() => {
        phonebookService
            .getAll()
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
            if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
                const person = persons.find(n => n.name === newName)
                const updatedPerson = {...person, number: newNumber}
                phonebookService.get(updatedPerson.id)
                    .then(response => {
                        phonebookService
                            .update(updatedPerson.id, updatedPerson)
                            .then(response => {
                                setPersons(persons.map(person => person.id !== updatedPerson.id ? person : response.data))
                            })
                        setNotificationMessage(`Number ${newNumber} updated`)
                        setTimeout(() => {
                            setErrorMessage(null)
                        }, 5000)

                    })
                    .catch(error => {
                        setErrorMessage(`Information of ${updatedPerson.name} has already been removed from server`)
                        setTimeout(() => {
                            setNotificationMessage(null)
                        }, 5000)
                    })
            }
        } else {
            const newPerson = {name: newName, number: newNumber}
            phonebookService
                .create(newPerson)
            setPersons(persons.concat(newPerson))
            setNotificationMessage(`Added ${newName}`)
            setTimeout(() => {setNotificationMessage(null)}, 5000)
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
            { notificationMessage && <div style={notificationStyle}>{notificationMessage}</div> }
            { errorMessage && <div style={errorStyle}>{errorMessage}</div> }
            <Filter filterNames={filterNames}/>
            <h3>Add a new</h3>
            <PersonForm
                addPerson={addPerson}
                handleNameInputChange={handleNameInputChange}
                handleNumberInputChange={handleNumberInputChange}
            />
            <h3>Numbers</h3>
            <Persons persons={ useFilter ? personsToShow : persons } deleteFunction={deletePerson}/>
        </div>
    )
}

export default App