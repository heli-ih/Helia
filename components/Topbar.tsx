'use client'

export default function Topbar() {
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
      {/* Window dots */}
      <div style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
        {['#3a3a3e', '#3a3a3e', '#3a3a3e'].map((c, i) => (
          <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
        ))}
      </div>

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
