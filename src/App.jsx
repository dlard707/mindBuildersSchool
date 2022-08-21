import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
      <h1>MindBuilders</h1>
      <div className="card">
        <button >
          Contato
        </button>
        <p>
        Ensinando habilidades reais para o mundo de hoje
        </p>
      </div>
     
    </div>
  )
}

export default App
