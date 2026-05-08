'use client'

type Section = 'me' | 'origin' | 'projects' | 'stack' | 'changelog' | 'achievements' | 'certifications' | 'testimonials' | 'collab'

interface SidebarProps {
  active: Section
  onSelect: (s: Section) => void
}

const endpoints: { method: 'GET' | 'POST'; route: string; id: Section }[] = [
  { method: 'GET',  route: '/me',             id: 'me'             },
  { method: 'GET',  route: '/me/origin',      id: 'origin'         },
  { method: 'GET',  route: '/stack',          id: 'stack'          },
  { method: 'GET',  route: '/experience',     id: 'changelog'      },
  { method: 'GET',  route: '/projects',       id: 'projects'       },
  { method: 'GET',  route: '/achievements',   id: 'achievements'   },
  { method: 'GET',  route: '/certifications', id: 'certifications' },
  { method: 'GET',  route: '/testimonials',   id: 'testimonials'   },
  { method: 'POST', route: '/collab',         id: 'collab'         },
]

export default function Sidebar({ active, onSelect }: SidebarProps) {
  return (
    <aside
      style={{
        width: '210px',
        minWidth: '210px',
        background: '#0e0e11',
        borderRight: '0.5px solid rgba(255,255,255,0.06)',
        display: 'flex',
        flexDirection: 'column',
        padding: '28px 0',
        gap: 0,
        overflowY: 'auto',
      }}
    >
      {/* Logo */}
      <div style={{ padding: '0 20px 28px', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 600, color: '#E9E9EF', letterSpacing: '-0.02em' }}>
          helia.dev
        </div>
        <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '3px', letterSpacing: '0.06em' }}>
          v10.4.2
        </div>
      </div>

      {/* Nav label */}
      <div style={{ padding: '20px 20px 10px', fontSize: '11px', color: 'var(--text-primary)', letterSpacing: '0.12em', fontWeight: 700 }}>
        ENDPOINTS
      </div>

      {/* Nav items */}
      {endpoints.map(({ method, route, id }) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '9px 20px',
            background: active === id ? 'rgba(96,112,200,0.06)' : 'transparent',
            border: 'none',
            cursor: 'pointer',
            width: '100%',
            textAlign: 'left',
            transition: 'background-color 0.2s cubic-bezier(0.16,1,0.3,1)',
          }}
          onMouseEnter={e => {
            if (active !== id) (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.03)'
          }}
          onMouseLeave={e => {
            if (active !== id) (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
          }}
        >
          {active === id && (
            <span
              key={`indicator-${id}`}
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'var(--purple)',
                transformOrigin: 'center',
                animation: 'slideIndicator 0.2s ease forwards',
              }}
            />
          )}
          <span style={{
            fontSize: '11px',
            fontWeight: 600,
            padding: '2px 5px',
            borderRadius: '3px',
            background: method === 'GET' ? 'rgba(62,207,142,0.12)' : 'rgba(96,112,200,0.12)',
            color: method === 'GET' ? 'var(--green)' : 'var(--purple)',
            letterSpacing: '0.04em',
            flexShrink: 0,
          }}>
            {method}
          </span>
          <span style={{
            fontSize: '14px',
            color: active === id ? '#c8c8d4' : 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
            transition: 'color 0.15s',
          }}>
            {route}
          </span>
        </button>
      ))}

      {/* System info */}
      <div style={{ marginTop: 'auto', padding: '20px', borderTop: '0.5px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 2 }}>
          <div>uptime<span style={{ float: 'right', color: 'var(--purple)', opacity: 0.7 }}>99.9%</span></div>
          <div>timezone<span style={{ float: 'right' }}>UAE</span></div>
        </div>
      </div>
    </aside>
  )
}
