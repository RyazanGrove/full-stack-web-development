import React from 'react'

const Country = ({isSingle, country}) => {
    if(isSingle === false){
        return (
            <div>{country.name}</div>
        )
    } else {
        country = country[0]
        return (
            <div>
                <h2>{country.name}</h2>
                <p>capital {country.capital}</p>
                <p>population {country.population}</p>
                <h3>languages</h3>
                <ul>{country.languages.map(language => <li key={language.name}>{language.name}</li>)}</ul>
                <img src={country.flag} width={200} height={200}/>
            </div>
        )
    }



}

export default Country