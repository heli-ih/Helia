'use client'

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
  </svg>
)

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M2 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.4l-10 6.25L2 6.4V6Zm0 2.75v9.25c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V8.75l-9.47 5.92a1 1 0 0 1-1.06 0L2 8.75Z" />
  </svg>
)

type IconKey = 'Github' | 'Linkedin' | 'Email'
const icons: Record<IconKey, React.ReactNode> = {
  'Github':   <GitHubIcon />,
  'Linkedin': <LinkedInIcon />,
  'Email':    <MailIcon />,
}

const links: { label: IconKey; href: string }[] = [
  { label: 'Github',   href: 'https://github.com/heli-ih' },
  { label: 'Linkedin', href: 'https://www.linkedin.com/in/helia-haghighi-3a9a99166/' },
  { label: 'Email',    href: 'mailto:heliaa.haghighi@gmail.com' },
]

const blockStyle = (n: number): React.CSSProperties => ({
  animation: 'fadeIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
  animationDelay: `${n * 0.08}s`,
  opacity: 0,
})

interface MeProps {
  leaving?: boolean
}

export default function SectionMe({ leaving = false }: MeProps) {
  return (
    <div
      className="section-enter"
      style={{ display: 'flex', height: '100%', overflow: 'visible', minHeight: 0 }}
    >
      {/* LEFT — content. The inner wrapper uses margin:auto to vertically
          center when content fits, but collapses to 0 when it overflows so
          the outer column scrolls cleanly (mixing justify-content:center
          with overflow:auto would clip the top with no scroll-up). */}
      <div
        style={{
          flex: 1,
          padding: '40px 48px',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
        }}
      >
       <div style={{ margin: 'auto 0', width: '100%' }}>
        <div style={blockStyle(0)}>
          <div
            style={{
              fontSize: '14px',
              color: 'var(--green)',
              letterSpacing: '0.1em',
              marginBottom: '20px',
              fontFamily: 'var(--font-mono)',
            }}
          >
            200 OK — GET /me
          </div>
        </div>

        <div style={blockStyle(1)}>
          <h1
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '64px',
              fontWeight: 800,
              color: '#E9E9EF',
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              marginBottom: '12px',
              background: 'linear-gradient(135deg, #E9E9EF 60%, #8088cc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Helia Haghighi
          </h1>
        </div>

        <div style={blockStyle(2)}>
          <p
            style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              marginBottom: '32px',
            }}
          >
            Software Developer · Data Analyst
          </p>
        </div>

        <div style={blockStyle(3)}>
          <p
            style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              maxWidth: '480px',
              lineHeight: 2.0,
              marginBottom: '36px',
            }}
          >
            I turn complex problems into systems that work. My expertise spans 
            enterprise solutions, continuously delivering innovative products 
            that drive business impact.
          </p>
        </div>

        {/* Social links */}
        <div
          style={{
            display: 'flex',
            gap: '18px',
            flexWrap: 'wrap',
            ...blockStyle(4),
          }}
        >
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                fontSize: '12px',
                borderRadius: '20px',
                border: '0.5px solid rgba(96,112,200,0.3)',
                background: 'rgba(96,112,200,0.07)',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)',
                textDecoration: 'none',
                transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'rgba(96,112,200,0.6)'
                el.style.color = 'var(--purple)'
                el.style.background = 'rgba(96,112,200,0.12)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'rgba(96,112,200,0.3)'
                el.style.color = 'var(--text-secondary)'
                el.style.background = 'rgba(96,112,200,0.07)'
              }}
            >
              {icons[label]}
              {label}
            </a>
          ))}
        </div>
       </div>
      </div>

      {/* RIGHT — avatar with radial glow */}
      <div
        style={{
          width: '340px',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Inner purple glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '380px',
            height: '380px',
            background:
              'radial-gradient(circle at center, rgba(96,112,200,0.12) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        {/* Avatar — flies into the side panel position when navigating away.
            The PNG has real alpha (the body is genuinely cut out), so
            filter: drop-shadow() casts a halo that hugs the silhouette.
            We dropped mix-blend-mode: multiply because (a) alpha makes it
            redundant and (b) `filter` creates a new stacking context that
            would otherwise break the multiply backdrop. */}
        <img
          src="/avatar-default.jpg"
          alt="Helia"
          style={{
            position: 'relative',
            height: '480px',
            width: 'auto',
            objectFit: 'contain',
            objectPosition: 'bottom center',
            filter: 'drop-shadow(0 0 14px rgba(215,210,200,0.35)) drop-shadow(0 0 28px rgba(215,210,200,0.18))',
            animation: leaving ? 'none' : 'floatY 3.5s ease-in-out infinite',
            transition:
              'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease',
            transform: leaving
              ? 'translate(calc(100vw - 600px), calc(50vh - 400px)) scale(0.18)'
              : 'translate(0, 0) scale(1)',
            opacity: leaving ? 0.7 : 1,
            transformOrigin: 'bottom center',
          }}
        />

        {/* Speech bubble — orbits the avatar's upper-left, tail points right toward avatar. */}
        {!leaving && (
          <div
            style={{
              position: 'absolute',
              top: '45%',
              left: '-80px',
              zIndex: 5,
              padding: '6px 14px',
              fontSize: '12px',
              borderRadius: '20px',
              border: '0.5px solid rgba(96,112,200,0.3)',
              background: 'rgba(14,16,40,0.85)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              whiteSpace: 'nowrap',
              animation: 'floatY 4s ease-in-out infinite',
              boxShadow: '0 4px 18px rgba(0,0,0,0.35)',
            }}
          >
            UAE Golden Visa Holder
            {/* Tail outline (slightly larger, behind the fill) */}
            <span style={{
              position: 'absolute',
              right: '-9px',
              top: '50%',
              width: 0,
              height: 0,
              transform: 'translateY(-50%)',
              borderTop: '7px solid transparent',
              borderBottom: '7px solid transparent',
              borderLeft: '9px solid rgba(96,112,200,0.3)',
              pointerEvents: 'none',
            }} />
            {/* Tail fill */}
            <span style={{
              position: 'absolute',
              right: '-8px',
              top: '50%',
              width: 0,
              height: 0,
              transform: 'translateY(-50%)',
              borderTop: '6px solid transparent',
              borderBottom: '6px solid transparent',
              borderLeft: '8px solid rgba(14,16,40,0.85)',
              pointerEvents: 'none',
            }} />
          </div>
        )}

        {/* Speech bubble — orbits the avatar's lower-right, tail points left toward avatar. */}
        {!leaving && (
          <div
            style={{
              position: 'absolute',
              bottom: '60%',
              right: '6%',
              zIndex: 5,
              padding: '6px 14px',
              fontSize: '12px',
              borderRadius: '20px',
              border: '0.5px solid rgba(96,112,200,0.3)',
              background: 'rgba(14,16,40,0.85)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              whiteSpace: 'nowrap',
              animation: 'floatY 4.5s ease-in-out infinite -1.8s',
              boxShadow: '0 4px 18px rgba(0,0,0,0.35)',
            }}
          >
            CS Graduate
            {/* Tail outline */}
            <span style={{
              position: 'absolute',
              left: '-9px',
              top: '50%',
              width: 0,
              height: 0,
              transform: 'translateY(-50%)',
              borderTop: '7px solid transparent',
              borderBottom: '7px solid transparent',
              borderRight: '9px solid rgba(96,112,200,0.3)',
              pointerEvents: 'none',
            }} />
            {/* Tail fill */}
            <span style={{
              position: 'absolute',
              left: '-8px',
              top: '50%',
              width: 0,
              height: 0,
              transform: 'translateY(-50%)',
              borderTop: '6px solid transparent',
              borderBottom: '6px solid transparent',
              borderRight: '8px solid rgba(14,16,40,0.85)',
              pointerEvents: 'none',
            }} />
          </div>
        )}
      </div>
    </div>
  )
}
