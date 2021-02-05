import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return(
        <h1>{props.title}</h1>
    )
}

const Button = ({handleClick, text}) => {
    return(
        <button onClick={handleClick}>{text}</button>
    )
}

const Statistics = ({title, good, neutral, bad}) =>{
    const totalNumber = good + neutral + bad
    return(
        <div>
            <h1>{title}</h1>
            <h3>good {good}</h3>
            <h3>neutral {neutral}</h3>
            <h3>bad {bad}</h3>
            <h3>all {totalNumber}</h3>
            <h3>average {totalNumber !==0 && (good - bad)/totalNumber}</h3>
            <h3>positive {totalNumber !==0 && good / totalNumber} %</h3>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Header title='give feedback' />
            <Button handleClick={()=>setGood(good + 1)} text='good'/>
            <Button handleClick={()=>setNeutral(neutral + 1)} text='neutral'/>
            <Button handleClick={()=>setBad(bad + 1)} text='bad'/>
            <Statistics title='statistics' good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)