import React from 'react'

const PersonForm = (props) => {
    return(
        <form onSubmit={props.submitEvent}>
            <div>
                name: <input onChange={props.nameChangeEvent}/>
            </div>
            <div>
                number: <input onChange={props.numberChangeEvent}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm