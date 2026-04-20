import type { Log } from '../App'
import LogItem from './LogItem'
import AddLogForm from './AddLogForm'

type PetCardProps = {
    logs: Log[]
    onAdd: (log: Omit<Log, 'id'>) => void
}

export default function PetCard({ logs, onAdd }: PetCardProps) {
    return (
        <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px', padding: '24px',
            fontFamily: 'sans-serif',
        }}>
            <h2 style={{ color: '#fff', margin: '0 0 4px', fontSize: '22px' }}>Buddy</h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', margin: '0 0 20px', fontSize: '13px' }}>
                Golden Retriever · 3 years old
            </p>

            <h3 style={{
                color: 'rgba(255,255,255,0.6)', fontSize: '13px',
                textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 12px'
            }}>
                Today's Log ({logs.length})
            </h3>

            {/* 🧠 CONCEPT: .map() — renders one LogItem per entry in the array */}
            {/* key= is required — it helps React track which item is which */}
            {logs.map(log => (
                <LogItem key={log.id} log={log} />
            ))}

            <AddLogForm onAdd={onAdd} />
        </div>
    )
}