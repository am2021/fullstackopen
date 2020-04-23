import React from 'react'
import Country from './Country'
import Weather from './Weather'

const Countries = ({ filteredCountries }) => {
    if(filteredCountries.length > 10) {
        return <div>Too many matches, specify another filter</div>
    } else if (filteredCountries.length === 1) {
        const country = filteredCountries[0]

        return (
            <div>
                <h1>{country.name}</h1>
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
            filteredCountries.map((country) => <Country country={country}/>)
        )
    }
}

export default Countries