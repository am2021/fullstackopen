import React from 'react'

const Filter = ({ text, handleFilterChange }) => {
    return(
        <div>{text} <input onKeyUp={handleFilterChange}/></div>
    )
}

export default Filter
