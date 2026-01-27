import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import CounterCard from '@/components/CounterCard'
import CounterProps from '@/components/CounterProps'

function App() {
  
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <CounterCard></CounterCard>
      <CounterProps count={count} setCount={setCount}></CounterProps>
    </>
  )
}

export default App
