import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 const addCounter = () => {
    if(count<5){
      setCount(count+1)
    }
  }
 const remCounter = () => {
    if(count>0){
      setCount(count-1)
    }
  }

  const [count, setCount] = useState(0)

  return (
    <>
      <button
      onClick={addCounter}
      >
        
        Add Number {count}
      </button>
      <br />
      <button 
      onClick={remCounter}
      >
        Remove Number {count}
      </button>
    </>
  )
}

export default App
