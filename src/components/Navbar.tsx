// 🧠 CONCEPT: Props — data passed from parent (App) to child (Navbar)
// We define what props this component accepts using a TypeScript type

type NavbarProps = {
    petName: string   // App passes this in as <Navbar petName="Buddy" />
}

export default function Navbar({ petName }: NavbarProps) {
    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0,
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            padding: '0 24px', height: '60px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            fontFamily: 'sans-serif',
        }}>
            <span style={{ color: '#fff', fontSize: '18px', fontWeight: 600 }}>
                🐾 PetCare
            </span>
            {/* petName came from App.tsx as a prop — this is how data flows DOWN */}
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
                Tracking: {petName}
            </span>
        </nav>
    )
}