import React from 'react'

const Person = ({name, number, deleteFunction}) => {
    let deleteFunctionForButton = () => {
        deleteFunction(name)
    }
    return(
        <p>
            {name} {number}
            <button onClick={deleteFunctionForButton}>delete</button>
        </p>
    )
}

export default Person