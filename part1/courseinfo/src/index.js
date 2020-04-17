import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({ course }) => {

  const Header = ({ name }) => {
    return <h1>{name}</h1>
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
      <h4>
        total of {parts.reduce(function(acc,o) { return acc + o.exercises; }, 0)} exercises
      </h4>
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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))