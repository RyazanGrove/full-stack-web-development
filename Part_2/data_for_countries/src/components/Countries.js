import React from 'react'
import Country from './Country'

const Countries = (props) => {
    return(
        <div>
            {props.countries.length > 10 && <div>Too many matches, specify another filter</div>}
            {props.countries.length > 1 && props.countries.length <= 10 && props.countries.map(country =>
                <Country key={country.name} isSingle={false} country={country}/>)}
            {props.countries.length === 1 && <Country isSingle={true} country={props.countries}/>}
        </div>
    )
}

export default Countries