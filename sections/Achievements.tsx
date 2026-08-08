'use client'
import { useState } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

import { awards, type Award } from '@/data/awards'


function AchievementImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false)
  const { isMobile } = useBreakpoint()
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: isMobile ? 'auto' : 240,
      minHeight: isMobile && !loaded ? 200 : undefined,
      borderRadius: '10px',
      overflow: 'hidden',
      border: '1px solid rgba(230,168,23,0.35)',
      boxShadow: '0 0 18px rgba(230,168,23,0.18)',
    }}>
      {!loaded && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(160deg, rgba(230,168,23,0.10) 0%, rgba(13,12,26,0.95) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            border: '1.5px solid rgba(230,168,23,0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 26,
          }}>
            🎖️
          </div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: isMobile ? 'auto' : '100%',
          objectFit: isMobile ? 'contain' : 'cover',
          display: 'block',
          userSelect: 'none',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}
      />
    </div>
  )
}

const cardStyle = (i: number): React.CSSProperties => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '18px',
  padding: '24px 28px',
  border: '0.5px solid rgba(230,168,23,0.22)',
  borderRadius: '14px',
  background: 'linear-gradient(135deg, rgba(230,168,23,0.07), rgba(230,168,23,0.01) 70%)',
  opacity: 0,
  animation: 'typeIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards',
  animationDelay: `${0.08 + i * 0.1}s`,
  transition: 'border-color 0.25s ease, background 0.25s ease, transform 0.25s ease',
  overflow: 'hidden',
})

export default function SectionAchievements() {
  const { isMobile } = useBreakpoint()
  return (
    <div className="section-enter" style={{ padding: isMobile ? '20px' : '32px 36px', overflowY: 'auto', height: '100%' }}>
      <div style={{ fontSize: '14px', color: 'var(--green)', letterSpacing: '0.1em', marginBottom: '20px' }}>
        200 OK: GET /achievements
      </div>
      <h2 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: isMobile ? '22px' : '28px',
        fontWeight: 700,
        color: 'var(--text-primary)',
        letterSpacing: '-0.02em',
        marginBottom: '6px',
      }}>
        Achievements
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: isMobile ? '100%' : '760px', marginTop: '22px' }}>
        {awards.map((a, i) => {
          const Wrapper = a.link ? 'a' : 'div'
          const wrapperProps = a.link
            ? { href: a.link, target: '_blank' as const, rel: 'noopener noreferrer' }
            : {}
          return (
            <Wrapper
              key={a.v}
              {...wrapperProps}
              style={{ ...cardStyle(i), color: 'inherit', textDecoration: 'none' }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(230,168,23,0.45)'
                el.style.background = 'linear-gradient(135deg, rgba(230,168,23,0.12), rgba(230,168,23,0.02) 70%)'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(230,168,23,0.22)'
                el.style.background = 'linear-gradient(135deg, rgba(230,168,23,0.07), rgba(230,168,23,0.01) 70%)'
                el.style.transform = 'translateY(0)'
              }}
            >
              {a.image && <AchievementImage src={a.image} alt={`${a.title}, awarded to Helia Haghighi, ${a.date}`} />}

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  marginBottom: '6px',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.06em',
                  color: 'var(--amber)',
                }}>
                  {a.date}
                </div>
                <div style={{
                  fontSize: '17px',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  marginBottom: '8px',
                  lineHeight: 1.3,
                }}>
                  {a.title}
                </div>
                <div style={{
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  lineHeight: 1.7,
                }}>
                  {a.note}
                </div>
              </div>

              {/* Background sparkle dots — extra fun, low contrast */}
              <span aria-hidden="true" style={{
                position: 'absolute',
                top: '12px',
                right: '52%',
                width: '3px',
                height: '3px',
                borderRadius: '50%',
                background: 'var(--amber)',
                opacity: 0.35,
              }} />
              <span aria-hidden="true" style={{
                position: 'absolute',
                bottom: '14px',
                left: '38%',
                width: '2px',
                height: '2px',
                borderRadius: '50%',
                background: 'var(--amber)',
                opacity: 0.25,
              }} />
              <span aria-hidden="true" style={{
                position: 'absolute',
                top: '40%',
                right: '22%',
                width: '2px',
                height: '2px',
                borderRadius: '50%',
                background: 'var(--amber)',
                opacity: 0.3,
              }} />
            </Wrapper>
          )
        })}
      </div>
    </div>
  )
}
