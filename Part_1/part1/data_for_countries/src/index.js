import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";
import Search from './components/Search'
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
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

export default App

ReactDOM.render(
    <App />,
    document.getElementById('root')
)