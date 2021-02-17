import React, { useState } from 'react'
import Weather from "./Weather";

const Country = ({isSingle, country}) => {
    const [viewIsShown ,setViewIsShown] = useState(false)

    const showView = () => {
        setViewIsShown(true)
    }

    if(isSingle === false){
        if(viewIsShown === true){
            return(
                <div>
                    <h2>{country.name}</h2>
                    <p>capital {country.capital}</p>
                    <p>population {country.population}</p>
                    <h3>languages</h3>
                    <ul>{country.languages.map(language => <li key={language.name}>{language.name}</li>)}</ul>
                    <img src={country.flag} width={200} height={200} alt={'country_flag'}/>
                </div>
            )
        }else {
            return (
                <div>
                    {country.name}<button onClick={showView}>show</button>
                </div>
            )
        }
    } else {
        country = country[0]
        return (
            <div>
                <h2>{country.name}</h2>
                <p>capital {country.capital}</p>
                <p>population {country.population}</p>
                <h3>languages</h3>
                <ul>{country.languages.map(language => <li key={language.name}>{language.name}</li>)}</ul>
                <img src={country.flag} width={200} height={200} alt={'country_flag'}/>
                <Weather country={country}/>
            </div>
        )
    }



}

export default Country