'use client'
import { useBreakpoint } from '@/hooks/useBreakpoint'

import { FACTS as facts, ORIGIN_STORY } from '@/data/profile'

const lineStyle = (i: number): React.CSSProperties => ({
  opacity: 0,
  animation: 'typeIn 0.3s ease forwards',
  animationDelay: `${i * 0.06}s`,
})

export default function SectionOrigin() {
  const { isMobile } = useBreakpoint()
  return (
    <div className="section-enter" style={{ padding: isMobile ? '20px' : '32px 36px', overflowY: 'auto', height: '100%' }}>
      <div style={{ fontSize: '14px', color: 'var(--green)', letterSpacing: '0.1em', marginBottom: '20px', ...lineStyle(0) }}>
        200 OK: GET /me/origin
      </div>
      {/* Mobile-only: top 20% of avatar peeking above the title */}
      {isMobile && (
        <div style={{
          width: '160px',
          height: '90px',
          margin: '0 auto 14px',
          overflow: 'hidden',
          maskImage: 'linear-gradient(to bottom, black 60%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent)',
          ...lineStyle(1),
        }}>
          <img
            src="/avatar-default.jpg"
            alt="Helia Haghighi, software developer and data analyst based in Dubai, UAE"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'contain',
              objectPosition: 'top center',
              filter: 'drop-shadow(0 0 14px rgba(215,210,200,0.25))',
            }}
          />
        </div>
      )}
      <h2 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: isMobile ? '22px' : '28px',
        fontWeight: 700,
        color: 'var(--text-primary)',
        letterSpacing: '-0.02em',
        marginBottom: '6px',
        textAlign: isMobile ? 'center' : 'left',
        ...lineStyle(1),
      }}>
        Origin story
      </h2>
      <p style={{
        fontSize: '15px',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-mono)',
        lineHeight: 1.9,
        maxWidth: isMobile ? '100%' : '560px',
        marginBottom: '28px',
        ...lineStyle(3),
      }}>
        {ORIGIN_STORY.map((para, i) => (
          <span key={i}>
            {para}
            {i < ORIGIN_STORY.length - 1 && <><br /><br /></>}
          </span>
        ))}
      </p>

      {/* Two-column labeled grid */}
      <div style={{ maxWidth: isMobile ? '100%' : '560px' }}>
        {facts.map((f, i) => (
          <div
            key={f.label}
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '16px',
              padding: '12px 0',
              borderBottom: i < facts.length - 1 ? '0.5px solid rgba(255,255,255,0.06)' : 'none',
              ...lineStyle(4 + i),
            }}
          >
            <div style={{
              width: '120px',
              flexShrink: 0,
              fontSize: '15px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
            }}>
              {f.label}
            </div>
            <div style={{
              flex: 1,
              fontSize: '15px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-primary)',
              lineHeight: 1.6,
            }}>
              {f.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
