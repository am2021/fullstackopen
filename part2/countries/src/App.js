import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios'


const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const filteredCountries = (filter === '')
    ? countries
    : countries.filter(country => new RegExp(filter, 'i').test(country.name))

  return (
    <div>
      <Filter text='find countries' handleFilterChange={handleFilterChange} />
      <Countries filteredCountries={filteredCountries} />
    </div>
  )
}

export default App
