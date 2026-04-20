import type { Log } from '../App'

// 🧠 CONCEPT: Props again — each LogItem receives one log object
type LogItemProps = {
    log: Log
}

// Emoji map — each care type gets an icon
const icons: Record<Log['type'], string> = {
    feeding: '🍗',
    walk: '🦮',
    vet: '💉',
    medicine: '💊',
}

const colors: Record<Log['type'], string> = {
    feeding: 'rgba(0,200,150,0.15)',
    walk: 'rgba(124,77,255,0.15)',
    vet: 'rgba(255,100,100,0.15)',
    medicine: 'rgba(255,190,50,0.15)',
}

export default function LogItem({ log }: LogItemProps) {
    return (
        <div style={{
            display: 'flex', alignItems: 'center', gap: '14px',
            padding: '12px 16px', borderRadius: '12px',
            background: colors[log.type],
            border: '1px solid rgba(255,255,255,0.07)',
            marginBottom: '10px', fontFamily: 'sans-serif',
        }}>
            <span style={{ fontSize: '22px' }}>{icons[log.type]}</span>
            <div style={{ flex: 1 }}>
                <p style={{ margin: 0, color: '#fff', fontSize: '14px', fontWeight: 500 }}>
                    {log.note}
                </p>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
                    {log.type} · {log.time}
                </p>
            </div>
        </div>
    )
}