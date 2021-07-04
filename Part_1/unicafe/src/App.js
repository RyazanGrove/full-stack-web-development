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

const Statistic = ({text, value}) =>{
    if(text === 'positive'){
        return(
            <h3>{text} {value * 100} %</h3>
        )
    }
    return(
        <h3>{text} {value}</h3>
    )
}

const Statistics = ({title, good, neutral, bad}) =>{
    //single component to display statistics
    const totalNumber = good + neutral + bad
    if(totalNumber === 0){
        return(
            <h3>No feedback given</h3>
        )
    }
    return(
        <div>
            <h1>{title}</h1>
            <Statistic text='good' value={good}/>
            <Statistic text='neutral' value={neutral}/>
            <Statistic text='bad' value={bad}/>
            <Statistic text='all' value={totalNumber}/>
            <Statistic text='average' value={(good - bad)/totalNumber}/>
            <Statistic text='positive' value={good / totalNumber}/>
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