import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  // let myObj={
  //   username: "zeus",
  //   age: 21
  // }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind</h1>
      { <Card username="coffee" /*someObj={myObj} *//> }
      <Card/>
    </>
  )
}

export default App
