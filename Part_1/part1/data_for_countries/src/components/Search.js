import React from 'react'

const Search = (props) => {
    return(
        <div>
            find countries <input onChange={props.searchEvent}/>
        </div>
    )
}

export default Search