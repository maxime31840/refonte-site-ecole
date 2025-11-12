import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='flex justify-center bg-yellow-400 p-1 text-xl'>Iris mediaschool</h1>
        <div className='flex justify-center pt-10'>Refonte en cours ...</div>
      </div> 
    </>
  )
}

export default App

