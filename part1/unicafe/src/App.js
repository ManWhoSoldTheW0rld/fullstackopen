import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Header = ({text}) => <h2>{text}</h2>

const Statistics = ({counter, text}) => <p>{text} {counter}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <Header text ="give feedback"/>
      <Button handleClick={increaseGood} text="good"/>
      <Button handleClick={increaseNeutral} text="neutral"/>
      <Button handleClick={increaseBad} text="bad"/>
      <Header text ="statistics"/>
      <Statistics counter={good} text="good"/>
      <Statistics counter={neutral} text="neutral"/>
      <Statistics counter={bad} text="bad"/>
    </div>
  )
}

export default App
