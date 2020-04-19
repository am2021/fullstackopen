import React from 'react'

const Filter = ({ handleFilterChange }) => {
    return(
        <div>filter shown with <input onKeyUp={handleFilterChange}/></div>
    )
}

export default Filter