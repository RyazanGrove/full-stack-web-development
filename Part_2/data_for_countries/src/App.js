import React, { useState, useEffect } from 'react'
import axios from "axios";
import Search from "./components/Search";
import Countries from "./components/Countries";

function App() {
    const [countries, setCountries] = useState([])
    const [countriesToShow, setCountriesToShow] = useState([])

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    }, [])

    const filterCountries = (event) => {
        if(event.target.value.length > 0){
            let selectedCountries = []
            countries.map(country => {
                if(country.name.toLowerCase().includes(event.target.value.toLowerCase())){
                    selectedCountries = selectedCountries.concat(country)
                }
            })
            setCountriesToShow(selectedCountries)
        }
    }

    return (
        <div>
            <Search searchEvent={filterCountries}/>
            <Countries countries={countriesToShow}/>
        </div>
    )
}

export default App;
