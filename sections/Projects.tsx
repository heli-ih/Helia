'use client'
import { useEffect, useRef, useState } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { projects } from '@/data/projects'

const lineStyle = (i: number): React.CSSProperties => ({
  opacity: 0,
  animation: 'typeIn 0.3s ease forwards',
  animationDelay: `${i * 0.06}s`,
})

const GitHubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 4h6v6" />
    <path d="M10 14 21 3" />
    <path d="M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
  </svg>
)

const GlobeIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const GitHubMarkSmall = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

const isInProgress = (status: string) => /in[- ]?progress/i.test(status)

function ProjectImage({ src, alt }: { src: string | null; alt: string }) {
  const [loaded, setLoaded] = useState(false)
  // No screenshot for this project yet — show the placeholder alone rather than
  // an <img src="">, which the browser resolves against the page URL and refetches.
  const hasImage = Boolean(src)
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {(!loaded || !hasImage) && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(160deg, #13112a 0%, #0d0c1a 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: '1.5px solid rgba(96,112,200,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 22,
          }}>
            🖼️
          </div>
        </div>
      )}
      {hasImage && (
      <img
        src={src as string}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}
      />
      )}
    </div>
  )
}

const STORAGE_KEY = 'projects-selected'

export default function SectionProjects() {
  const { isMobile, isTablet } = useBreakpoint()
  const [selected, setSelected] = useState<string | null>(projects[0]?.id ?? null)
  const project = projects.find(p => p.id === selected)
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Restore previously-selected project on mount.
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && projects.some(p => p.id === stored)) setSelected(stored)
  }, [])

  // Skip first-mount write so the restore can land without being clobbered.
  const restoredOnce = useRef(false)
  useEffect(() => {
    if (!restoredOnce.current) {
      restoredOnce.current = true
      return
    }
    if (selected) localStorage.setItem(STORAGE_KEY, selected)
  }, [selected])

  // Arrow-key navigation through the project list. Listener is window-scoped
  // but only mounted while this section is mounted, so it can't fire on other
  // pages. ArrowUp/ArrowDown step through the list (no wrap); the new
  // selected button is focused so the focus ring follows the arrow keys.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
      // If the user is typing in an input/textarea elsewhere, don't hijack.
      const active = document.activeElement
      if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) return

      e.preventDefault()
      setSelected((current) => {
        const idx = projects.findIndex(p => p.id === current)
        const direction = e.key === 'ArrowDown' ? 1 : -1
        const nextIdx = idx + direction
        if (nextIdx < 0 || nextIdx >= projects.length) return current
        // Defer focus + scroll until after the state update commits.
        queueMicrotask(() => {
          const btn = buttonRefs.current[nextIdx]
          btn?.focus({ preventScroll: true })
          btn?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
        })
        return projects[nextIdx].id
      })
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className="section-enter" style={{ display: 'flex', flexDirection: 'row', height: '100%', overflow: 'hidden', marginLeft: '-12px' }}>
      {/* Project list — hidden on mobile (sidebar exposes the sub-menu instead) */}
      {!isMobile && (
        <div style={{
          width: isTablet ? '180px' : '260px',
          minWidth: isTablet ? '180px' : '260px',
          borderRight: '0.5px solid rgba(255,255,255,0.06)',
          overflowY: 'auto',
          padding: '24px 0',
        }}>
          {projects.map((p, i) => (
            <button
              key={p.id}
              ref={(el) => { buttonRefs.current[i] = el }}
              onClick={() => setSelected(p.id)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: isTablet ? '10px 14px' : '12px 20px',
                background: selected === p.id ? 'rgba(96,112,200,0.06)' : 'transparent',
                borderLeft: `2px solid ${selected === p.id ? 'var(--purple)' : 'transparent'}`,
                border: 'none',
                borderLeftWidth: '2px',
                borderLeftStyle: 'solid',
                borderLeftColor: selected === p.id ? 'var(--purple)' : 'transparent',
                cursor: 'pointer',
                transition: 'background-color 0.18s cubic-bezier(0.16,1,0.3,1), border-left-color 0.18s ease',
              }}
              onMouseEnter={e => { if (selected !== p.id) (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.02)' }}
              onMouseLeave={e => { if (selected !== p.id) (e.currentTarget as HTMLButtonElement).style.background = 'transparent' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                <span style={{ fontSize: isTablet ? '10px' : '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  [{String(i).padStart(2, '0')}]
                </span>
                <span style={{ fontSize: isTablet ? '13px' : '15px', color: selected === p.id ? 'var(--text-primary)' : 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>
                  {p.name}
                </span>
              </div>
              <div style={{ fontSize: isTablet ? '11px' : '12px', color: 'var(--text-secondary)', paddingLeft: isTablet ? '28px' : '34px' }}>{p.type}</div>
            </button>
          ))}
        </div>
      )}

      {/* Project detail */}
      <div style={{ flex: 1, overflowY: 'auto', padding: isMobile ? '20px' : '28px 32px', marginLeft: isMobile ? 0 : '12px' }}>
        {!project ? (
          <div style={{ color: 'var(--text-secondary)', fontSize: '15px', fontFamily: 'var(--font-mono)', marginTop: '40px' }}>
            <span style={{ color: 'var(--purple)', opacity: 0.5 }}>←</span>  select a project to inspect
          </div>
        ) : (
          <div key={project.id} className="section-enter">
            <div style={{ fontSize: '14px', color: 'var(--green)', letterSpacing: '0.1em', marginBottom: '20px', ...lineStyle(0) }}>
              200 OK — GET /projects/{project.id}
            </div>
            <h3 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '28px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              ...lineStyle(1),
            }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} on GitHub`}
                  title={`${project.name} — GitHub`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: 'var(--purple)',
                    transition: 'color 0.18s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--purple)'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} live site`}
                  title={`${project.name} — Live site`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: 'var(--purple)',
                    transition: 'color 0.18s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--purple)'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </a>
              )}
              {project.name}
            </h3>

            {/* Image */}
            <div style={{
              width: '85%',
              aspectRatio: '16/9',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '0.5px solid rgba(255,255,255,0.08)',
              marginBottom: '18px',
              background: 'var(--bg-panel)',
              ...lineStyle(2),
            }}>
              <ProjectImage src={project.image} alt={project.name} />
            </div>

            {/* Description */}
            <p style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              lineHeight: 1.85,
              width: '85%',
              marginBottom: '18px',
              ...lineStyle(4),
            }}>
              {project.desc}
            </p>

            {/* Stack chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', width: '85%', ...lineStyle(5) }}>
              {project.stack.map((s) => (
                <span key={s} style={{
                  fontSize: '15px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--purple)',
                  padding: '3px 9px',
                  border: '0.5px solid var(--purple-border)',
                  background: 'var(--purple-bg)',
                  borderRadius: '4px',
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
