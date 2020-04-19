import React from 'react'
import Contact from './Contact'

const Contacts = ({ filteredPersons } ) => {
    return(
        <ul>
        {filteredPersons.map((person) => 
          <Contact key={person.name} name={person.name} number={person.number}/>
        )}
      </ul>
    )
}

export default Contacts