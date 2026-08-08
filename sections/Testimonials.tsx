'use client'
import { useBreakpoint } from '@/hooks/useBreakpoint'

import { testimonials, type Testimonial } from '@/data/testimonials'


const cardStyle = (i: number): React.CSSProperties => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  padding: '22px 24px',
  border: '0.5px solid rgba(96,112,200,0.22)',
  borderRadius: '12px',
  background: 'linear-gradient(135deg, rgba(96,112,200,0.05), rgba(96,112,200,0.01) 70%)',
  opacity: 0,
  animation: 'typeIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards',
  animationDelay: `${0.06 + i * 0.08}s`,
  transition: 'border-color 0.25s ease, background 0.25s ease, transform 0.25s ease',
})

export default function SectionTestimonials() {
  const { isMobile } = useBreakpoint()
  const avatarSize = isMobile ? 40 : 56
  return (
    <div className="section-enter" style={{ padding: isMobile ? '20px' : '32px 36px', overflowY: 'auto', height: '100%' }}>
      <div style={{ fontSize: '14px', color: 'var(--green)', letterSpacing: '0.1em', marginBottom: '20px' }}>
        200 OK: GET /testimonials
      </div>
      <h2 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: isMobile ? '22px' : '28px',
        fontWeight: 700,
        color: 'var(--text-primary)',
        letterSpacing: '-0.02em',
        marginBottom: '6px',
      }}>
        Testimonials
      </h2>
      <p style={{
        fontSize: '15px',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-mono)',
        marginTop: '14px',
        lineHeight: 1.7,
        maxWidth: isMobile ? '100%' : '640px',
        marginBottom: '24px',
      }}>
        What managers, mentors, and collaborators have said.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: isMobile ? '100%' : '760px' }}>
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            style={cardStyle(i)}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.borderColor = 'rgba(96,112,200,0.45)'
              el.style.background = 'linear-gradient(135deg, rgba(96,112,200,0.09), rgba(96,112,200,0.02) 70%)'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.borderColor = 'rgba(96,112,200,0.22)'
              el.style.background = 'linear-gradient(135deg, rgba(96,112,200,0.05), rgba(96,112,200,0.01) 70%)'
              el.style.transform = 'translateY(0)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? '8px' : '14px' }}>
              <div
                aria-hidden="true"
                style={{
                  width: avatarSize,
                  height: avatarSize,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  background: '#1a1830',
                  border: '1px solid rgba(96,112,200,0.4)',
                  boxShadow: '0 0 10px rgba(96,112,200,0.25)',
                  fontSize: isMobile ? 20 : 28,
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                👤
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{
                  fontSize: '16px',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  marginBottom: '3px',
                  lineHeight: 1.3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  flexWrap: 'wrap',
                }}>
                  <span>{t.name}</span>
                  {t.links.length > 0 && (
                    <span style={{ display: 'inline-flex', gap: '6px', flexWrap: 'wrap' }}>
                      {t.links.map((l) => (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: '11px',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--purple)',
                            padding: '2px 8px',
                            border: '0.5px solid var(--purple-border)',
                            background: 'var(--purple-bg)',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            letterSpacing: '0.04em',
                            transition: 'background-color 0.15s ease, color 0.15s ease',
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)'
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--purple)'
                          }}
                        >
                          {l.label} ↗
                        </a>
                      ))}
                    </span>
                  )}
                  {!isMobile && (
                    <span style={{
                      marginLeft: 'auto',
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 400,
                      color: 'var(--purple)',
                      letterSpacing: '0.04em',
                      opacity: 0.85,
                    }}>
                      {t.date}
                    </span>
                  )}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  lineHeight: 1.5,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {t.role}
                </div>
              </div>
            </div>

            <div style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              lineHeight: 1.75,
              whiteSpace: 'pre-wrap',
            }}>
              {t.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
