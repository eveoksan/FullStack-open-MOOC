import { useState } from 'react'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

const handleGoodClick = () => {
    setAll(all + 1)
    setGood(good +1) 
}

const handleNeutralClick = () => {
    setAll(all + 1)
    setNeutral(neutral +1) 
}
const handleBadClick = () => {
    setAll(all + 1)
    setBad(bad +1) 
}

  return (
      <div>
          <h1>give feedback</h1>
          <Button handleClick={handleGoodClick} text ='good' />
            <Button handleClick={handleNeutralClick} text ='neutral' />
            <Button handleClick={handleBadClick} text ='bad' />
          <h1>statistics</h1>
          <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
  )
}


const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad
    const average = ((good - bad)/all).toFixed(1)
    const positive = ((good/all)*100).toFixed(1) + "%"

    if (all === 0) {
      return (
        <div>palautetta ei ole annettu</div>
      )
    }else {
      return (
        <div>
            <table>
                <tbody>
                    <Statistic text="good" value ={good} />
                    <Statistic text="neutral" value ={neutral} />
                    <Statistic text="bad" value ={bad} />
                    <Statistic text="all" value ={all} />
                    <Statistic text="average" value ={average} />
                    <Statistic text="positive" value ={positive} />
                 </tbody>
            </table>
        </div>
      )
    }
}


const Statistic = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}


const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
       {text}
    </button>
  )


export default App
