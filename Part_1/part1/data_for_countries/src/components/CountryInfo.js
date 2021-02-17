import React from 'react'

const CountryInfo = (props) =>{
    return(
        <div>
            <p>temperature: {props.info.main.temp} Celsius</p>
            <p>wind: {props.info.wind.speed} m/sec direction {props.info.wind.deg} grad</p>
        </div>
    )
}

export default CountryInfo