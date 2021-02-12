import React from 'react'
import Person from "./Person";

const Persons = (props) => {
    return(
        <div>
            {!props.useFilter && props.persons.map(person => <Person key={person.name} name={person.name} number={person.number}/>)}
            {props.useFilter && props.personsToShow.map(person => <Person key={person.name} name={person.name} number={person.number}/>)}
        </div>
    )
}

export default Persons