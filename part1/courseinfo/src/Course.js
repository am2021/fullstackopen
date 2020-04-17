import React from 'react'

const Course = ({ course }) => {

    const Header = ({ name }) => {
      return <h2>{name}</h2>
    }
  
    const Content = ({ parts }) => {
      return(
        <div>
          {parts.map(part => 
            <Part key={part.id} part={part} />
          )}
        </div>
      )
    }
  
    const Part = ({ part }) => {
      return <p>{part.name} {part.exercises}</p>
    }
  
    const Total = ({ parts }) => {
      return(
        <h3>
          total of {parts.reduce(function(acc,o) { return acc + o.exercises; }, 0)} exercises
        </h3>
      )
    }
    
    return(
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

  export default Course