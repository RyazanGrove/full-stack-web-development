import React, { useState } from 'react'

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

const Statistics = (props) =>{
    return(
        <div>
            <h1>{props.title}</h1>
            <h3>good {props.good}</h3>
            <h3>neutral {props.neutral}</h3>
            <h3>bad {props.bad}</h3>
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

export default App