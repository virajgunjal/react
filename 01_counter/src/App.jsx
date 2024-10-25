import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  //let counter = 5;

  const addValue =()=>{
    
    counter = counter+1;
    setCounter(counter)
  }

  const subValue = ()=>{
    if(counter===0){
      alert("value cannot go beyond zero");
    }
    else{
    setCounter(counter-1);
  }
  }
  return (
    <>
      <h1>Coffee</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>add value</button><br />
      <button onClick={subValue}>sub value</button>
    </>
  )
}

export default App
