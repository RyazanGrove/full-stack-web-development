import React from "react";
import Person from "./Person";

const Persons = (props) => {
    return(
        <div>
            {props.persons.map(person =>
                <Person name={person.name} number={person.number} deleteFunction={props.deleteFunction}/>
            )}
        </div>
    )
}

export default Persons