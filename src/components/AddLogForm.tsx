import { useState } from 'react'
import type { Log } from '../App'

type AddLogFormProps = {
    onAdd: (log: Omit<Log, 'id'>) => void  // function passed down from App
}

export default function AddLogForm({ onAdd }: AddLogFormProps) {
    // 🧠 CONCEPT: Controlled inputs
    // React controls the input value through state — not the DOM
    const [type, setType] = useState<Log['type']>('feeding')
    const [note, setNote] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()          // stops page reload
        if (!note.trim()) return     // basic validation
        onAdd({                      // call the function App passed us
            type,
            note,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        })
        setNote('')                  // reset input after submit
    }

    const inputStyle = {
        width: '100%', padding: '10px 14px',
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '10px', color: '#fff',
        fontSize: '14px', fontFamily: 'sans-serif',
        outline: 'none', boxSizing: 'border-box' as const,
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
            <select value={type} onChange={e => setType(e.target.value as Log['type'])}
                style={{ ...inputStyle, marginBottom: '10px' }}>
                <option value="feeding">🍗 Feeding</option>
                <option value="walk">🦮 Walk</option>
                <option value="vet">💉 Vet visit</option>
                <option value="medicine">💊 Medicine</option>
            </select>

            <input
                type="text"
                placeholder="Add a note (e.g. 'Ate full bowl')"
                value={note}
                onChange={e => setNote(e.target.value)}   // 🧠 controlled input
                style={{ ...inputStyle, marginBottom: '10px' }}
            />

            <button type="submit" style={{
                width: '100%', padding: '12px',
                background: 'linear-gradient(135deg, #7c4dff, #00c896)',
                border: 'none', borderRadius: '10px',
                color: '#fff', fontWeight: 600, fontSize: '15px',
                cursor: 'pointer', fontFamily: 'sans-serif',
            }}>
                + Add Log
            </button>
        </form>
    )
}