import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(2)

  function addValue () {
    setCount(count+1)
  }

   function decreaseValue () {
    setCount(count-1)
  }
  return (
    <>
       <h1>Counter App</h1>
      <h2>Count is {count} </h2>
      <button disabled = {count === 20} onClick={addValue}>Add </button>
      <button disabled = {count ===0}onClick={decreaseValue}>Subtract  </button>
      {count ===20 && <p>Max limit reached</p>}
      {count ===0 && <p>Min limit reached</p>}
    </>
  )
}

export default App

