import React from 'react'

const Contact = ({ name, number, removeContact }) => {
    return (
        <div>
            <li>{name} {number}</li>
            <button onClick={removeContact}>delete</button>
        </div>
    )
}

export default Contact