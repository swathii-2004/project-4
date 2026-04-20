// src/App.tsx
import { useState } from 'react'
import Navbar from './components/Navbar'
import PetCard from './components/PetCard'
import './App.css'

// 👆 TypeScript type — shape of one log entry
export type Log = {
  id: number
  type: 'feeding' | 'vet' | 'walk' | 'medicine'
  note: string
  time: string
}

function App() {
  // 🧠 CONCEPT: useState — this is your app's memory
  // logs is the current value, setLogs is the function to update it
  const [logs, setLogs] = useState<Log[]>([
    { id: 1, type: 'feeding', note: 'Morning kibble', time: '8:00 AM' },
    { id: 2, type: 'walk', note: 'Park walk, 20 min', time: '9:30 AM' },
    { id: 3, type: 'medicine', note: 'Flea tablet', time: '10:00 AM' },
  ])

  // 🧠 CONCEPT: lifting state up — this function lives in App
  // and gets passed DOWN to AddLogForm as a prop
  const addLog = (newLog: Omit<Log, 'id'>) => {
    setLogs(prev => [...prev, { ...newLog, id: Date.now() }])
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0d0d0d' }}>
      {/* Passing petName as a PROP to Navbar */}
      <Navbar petName="Buddy 🐶" />

      <main style={{ maxWidth: '600px', margin: '0 auto', padding: '100px 20px 40px' }}>
        {/* Passing logs and addLog as PROPS to PetCard */}
        <PetCard logs={logs} onAdd={addLog} />
      </main>
    </div>
  )
}

export default App