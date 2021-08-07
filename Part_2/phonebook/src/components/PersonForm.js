import React from "react";

const PersonForm = (props) => {
    return(
        <form onSubmit={props.addPerson}>
            <div>
                name: <input onChange={props.handleNameInputChange}/>
            </div>
            <div>
                number: <input onChange={props.handleNumberInputChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm