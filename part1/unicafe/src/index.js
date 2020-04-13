import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Heading = ({ text }) => <h1>{text}</h1>

const Statistic = ({ text, value }) => <div>{text} {value}</div>

const Statistics = ({ good, neutral, bad, clicks, score }) => {
    if (clicks === 0) {
        return (
            <div>
                <Heading text="statistics" />
                <div>No feedback given</div>
            </div>
        )
    }

    return (
        <div>
            <Heading text="statistics" />
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={clicks} />
            <Statistic text="average" value={score / clicks} />
            <Statistic text="positive" value={((good / clicks) * 100) + '%'} />
        </div>
    )
}

const App = (props) => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [clicks, setClicks] = useState(0)
    const [score, setScore] = useState(0)

    const handleGoodClick = () => {
        setClicks(clicks + 1)
        setScore(score + 1)
        setGood(good + 1)
    }

    const handleNeutralClick = () => {
        setClicks(clicks + 1)
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setClicks(clicks + 1)
        setScore(score - 1)
        setBad(bad + 1)
    }

    return(
        <div>
            <Heading text="give feedback" />
            <Button onClick={handleGoodClick} text="good"/>
            <Button onClick={handleNeutralClick} text="neutral"/>
            <Button onClick={handleBadClick} text="bad"/>
            <Statistics good={good} neutral={neutral} bad={bad} clicks={clicks} score={score}/>
        </div>
    )
}

  ReactDOM.render(
      <App />, document.getElementById('root')
  )
  