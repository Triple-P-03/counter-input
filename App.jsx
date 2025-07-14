import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  let count = 0;
  let n=Number(inputValue)
  for (let i = 0; i <= n; i++) {
    count = count + i;
  } return (
    <div id='m'>

      <input placeholder='number' onChange={function (i) {
        setInputValue(i.target.value);
    
      }} ></input>
        
      <br />
      <h5>the sum from 1 till the box value is:  {count}</h5>

      <button onClick={() => {
        setCounter(counter+1)
      }}>counter: {counter}</button>

    </div>
  )
}


export default App
