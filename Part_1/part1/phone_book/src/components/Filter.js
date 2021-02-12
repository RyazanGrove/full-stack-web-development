import React from 'react'

const Filter = (props) =>{
    return(
        <div>
            filter shown with <input onChange={props.changeEvent}/>
        </div>
    )
}

export default Filter