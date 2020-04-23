import React, { useState } from 'react'
import Weather from './Weather'

const Country = ({ country }) => {
    const [ show, setShow ] = useState(false)
    

    if(show === true) {
        return (
            <div>
                <div>
                    <h1 onClick={() => setShow(false)}>{country.name}</h1>
                </div>
                
                <p>
                    capital {country.capital}<br />
                    population {country.population}
                </p>
                <h2>languages</h2>
                <ul>
                    {country.languages.map((language) =>
                        <li>{language.name}</li>
                    )}
                </ul>
                <img src={country.flag} alt={`${country.name} flag`} height="100" width="100"></img>
                <Weather city={country.capital} />
            </div>
        )
    } else {
        return (
            <div onClick={() => setShow(true)}>
                {country.name}
            </div>
        )
    }
}

export default Country