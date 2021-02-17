import React, { useState, useEffect } from 'react'
import axios from "axios";
import CountryInfo from "./CountryInfo";

const Weather = (props) => {
    const [data, setData] = useState({})
    const [dataIsReady, setDataIsReady] = useState(false)

    const api_key = process.env.REACT_APP_API_KEY
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.country.capital}&appid=${api_key}&units=metric`
    useEffect(()=>{
        axios.get(weatherURL).then(response => {
            setData(response.data)
            setDataIsReady(true)
        })
    },[])

    if(dataIsReady) {
        return (
            <div>
                <h3>Weather in {props.country.capital}</h3>
                <CountryInfo info={data}/>
            </div>
        )
    } else {
        return(
            <div></div>
        )
    }
}

export default Weather