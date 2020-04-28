import React, { useState, useEffect } from 'react'
import Contact from './components/Contact'
import Filter from './components/Filter'
import Form from './components/Form'
import contactService from './services/contact'
import axios from 'axios'
import contact from './services/contact'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const addContact = (event) => {
    event.preventDefault()

    if(persons.filter(p => p.name === newName).length > 0) {
      if(window.confirm(`'${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(p => p.name === newName)
        const changedPerson = { ...person, number: newNumber}

        contactService
        .update(person.id, changedPerson)
        .then(returnedPerson => {
          contactService
          .getAll()
          .then(returnedPersons => {
             setPersons(returnedPersons)
            }
          )

          setPersons(persons.map(person => person.number !== changedPerson.number ? person : returnedPerson))
          setNewName('')
          setNewNumber('')
        })
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      contactService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const removeContactOf = (id) => {
    const person = persons.find(p => p.id === id)

    if (window.confirm("Are you sure you want to delete the contact?")) {
      contactService
      .remove(id)
      .then(returnedPerson => {
        contactService
          .getAll()
          .then(returnedPersons => {
             setPersons(returnedPersons)
            }
          )

        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
      })
    }
  }

  const filteredPersons = (filter === '')
    ? persons
    : persons.filter(person => new RegExp(filter, 'i').test(person.name))
 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <Form addContact={addContact} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => 
          <Contact 
            key={person.name} 
            name={person.name} 
            number={person.number}
            removeContact={() => removeContactOf(person.id)}
          />
        )}
      </ul>
    </div>
  )
}

export default App