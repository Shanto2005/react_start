import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  let [messege, setMessege] = useState("")
  
  const addValue = () => {
    if(counter < 5){
      setCounter(counter + 1)
      setMessege("")
    }else{
      setMessege("Numbers greater than 5 won't appear.")
    }
  }
  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
      setMessege("")
    }else{
      setMessege("Numbers less than 0 won't appear.")
    }
  }
  return (
    <>
      <h1>Please Enter Your Body Count: {counter}</h1>
      <p style={{ color: 'red' }}>{messege}</p>
      <button onClick={addValue}>Counter Increase</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Counter Decrease</button>
    </>
  )
}

export default App
