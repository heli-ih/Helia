'use client'

interface TopbarProps {
  onMenuClick?: () => void
  showMenu?: boolean
}

export default function Topbar({ onMenuClick, showMenu = false }: TopbarProps) {
  return (
    <div style={{
      height: '42px',
      minHeight: '42px',
      background: '#0e0e11',
      borderBottom: '0.5px solid rgba(255,255,255,0.06)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 18px',
      flexShrink: 0,
    }}>
      {/* Left: hamburger on small screens, decorative dots otherwise */}
      {showMenu ? (
        <button
          onClick={onMenuClick}
          aria-label="Toggle navigation"
          style={{
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: '0.5px solid rgba(255,255,255,0.12)',
            borderRadius: '6px',
            color: 'var(--text-primary)',
            fontSize: '16px',
            fontFamily: 'var(--font-mono)',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          ☰
        </button>
      ) : (
        <div style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
          {['#3a3a3e', '#3a3a3e', '#3a3a3e'].map((c, i) => (
            <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
          ))}
        </div>
      )}

      {/* Center title */}
      <div style={{ fontSize: '15px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
        helia@portfolio:~
      </div>

      {/* Right: status only — clock now lives in the bottom bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <span style={{ fontSize: '15px', color: 'var(--purple)', fontFamily: 'var(--font-mono)' }}>online</span>
      </div>
    </div>
  )
}
