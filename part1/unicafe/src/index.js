import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>
}

const Heading = ({ text }) => {
    return <h1>{text}</h1>
}

const Display = ({ text, value }) => <div>{text} {value}</div>

const App = (props) => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return(
        <div>
            <Heading text="give feedback" />
            <Button onClick={() => setGood(good + 1)} text="good"/>
            <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
            <Button onClick={() => setBad(bad + 1)} text="bad"/>
            <Heading text="statistics" />
            <Display text="good" value={good} />
            <Display text="neutral" value={neutral} />
            <Display text="bad" value={bad} />
        </div>
    )
}

  ReactDOM.render(
      <App />, document.getElementById('root')
  )
  