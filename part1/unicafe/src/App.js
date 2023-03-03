import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Header = ({text}) => <h2>{text}</h2>

const StatisticLine = ({counter, text, sign}) => <p>{text} {counter}{sign}</p>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const increaseGood = () => {
    const updatedConter = good + 1
    const updatedTotal = total + 1
    setGood(updatedConter)
    setTotal(updatedTotal)
    updatePositive(updatedConter, updatedTotal)
    updateAverage(updatedConter, bad, updatedTotal)
  }

  const increaseNeutral = () => {
    const updatedConter = neutral + 1
    const updatedTotal = total + 1
    setNeutral(updatedConter)
    setTotal(updatedTotal)
    updatePositive(good, updatedTotal)
    updateAverage(good, bad, updatedTotal)
  }

  const increaseBad = () => {
    const updatedConter = bad + 1
    const updatedTotal = total + 1
    setBad(updatedConter)
    setTotal(updatedTotal)
    updatePositive(good, updatedTotal)
    updateAverage(good, updatedConter, updatedTotal)
  }

  const updateAverage = (good, bad, total) => {
    const updatedAverage = (good - bad) / total
    setAverage(updatedAverage)
  }

  const updatePositive = (good, total) => {

    let updatedPositive = 0
    if (total > 0) {
      updatedPositive = good / total
    } 
    setPositive(updatedPositive)
  }

  return (
    <div>
      <Header text ="give feedback"/>
      <Button handleClick={increaseGood} text="good"/>
      <Button handleClick={increaseNeutral} text="neutral"/>
      <Button handleClick={increaseBad} text="bad"/>
      <Header text ="statistics"/>
      <StatisticLine counter={good} sign="" text="good"/>
      <StatisticLine counter={neutral} text="neutral"/>
      <StatisticLine counter={bad} sign="" text="bad"/>
      <StatisticLine counter={total} sign="" text="all"/>
      <StatisticLine counter={average} sign="" text="average"/>
      <StatisticLine counter={positive} sign="%" text="positive"/>
    </div>
  )
}

export default App
