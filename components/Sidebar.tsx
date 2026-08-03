'use client'
import Link from 'next/link'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { projects } from '@/data/projects'
import { SECTIONS, SECTION_BY_ID, type SectionId } from '@/data/sections'
import { groups as experienceGroups } from '@/sections/Changelog'

interface SidebarProps {
  active: SectionId
  onNavigate: (s: SectionId) => void
  isOpen?: boolean
  onClose?: () => void
  mobileSubMenu?: SectionId | null
  onMobileSubMenuChange?: (s: SectionId | null) => void
}

// Sections that have a per-item sub-list. On mobile we expose this list inside
// the sidebar instead of within the section's own column.
const SUB_NAV_SECTIONS = new Set<SectionId>(['projects', 'changelog'])

// A plain left-click is intercepted so the shell can run the avatar fly-out
// before routing. Modified clicks (cmd/ctrl/shift/alt, middle button) are left
// alone so "open in new tab" works — which matters now that every section is a
// real URL, and is also why these are <Link>s and not <button>s: crawlers need
// a real <a href> to follow.
function isPlainLeftClick(e: React.MouseEvent) {
  return !(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0)
}

export default function Sidebar({
  active,
  onNavigate,
  isOpen = false,
  onClose,
  mobileSubMenu = null,
  onMobileSubMenuChange,
}: SidebarProps) {
  const { isMobile, isTablet } = useBreakpoint()
  const isSmall = isMobile || isTablet

  const asideStyle: React.CSSProperties = isSmall
    ? {
        width: '210px',
        minWidth: '210px',
        background: '#0e0e11',
        borderRight: '0.5px solid rgba(255,255,255,0.06)',
        display: 'flex',
        flexDirection: 'column',
        padding: '28px 0',
        gap: 0,
        overflowY: 'auto',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        zIndex: 99,
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease',
      }
    : {
        width: '210px',
        minWidth: '210px',
        background: '#0e0e11',
        borderRight: '0.5px solid rgba(255,255,255,0.06)',
        display: 'flex',
        flexDirection: 'column',
        padding: '28px 0',
        gap: 0,
        overflowY: 'auto',
      }

  // Mobile-only: when a section with a sub-list is selected, show that
  // sub-list in place of the main nav. Tapping a sub-item opens the section
  // pre-pointed at that item via the section's existing localStorage key.
  const showSubMenu = isMobile && mobileSubMenu !== null

  const handleNavClick = (e: React.MouseEvent, id: SectionId) => {
    if (!isPlainLeftClick(e)) return
    if (isMobile && SUB_NAV_SECTIONS.has(id)) {
      e.preventDefault()
      onMobileSubMenuChange?.(id)
      return
    }
    e.preventDefault()
    onNavigate(id)
    onClose?.()
  }

  const handleSubSelect = (e: React.MouseEvent, storageKey: string, value: string, parent: SectionId) => {
    if (!isPlainLeftClick(e)) return
    e.preventDefault()
    try { localStorage.setItem(storageKey, value) } catch { /* ignore */ }
    onMobileSubMenuChange?.(null)
    onNavigate(parent)
    onClose?.()
  }

  const subItems: { key: string; label: string; meta: string }[] = (() => {
    if (mobileSubMenu === 'projects') {
      return projects.map(p => ({ key: p.id, label: p.name, meta: p.type }))
    }
    if (mobileSubMenu === 'changelog') {
      return experienceGroups.map(g => ({ key: g.key, label: g.label, meta: g.dateRange }))
    }
    return []
  })()

  return (
    <>
      {isSmall && isOpen && (
        <div
          onClick={() => { onMobileSubMenuChange?.(null); onClose?.() }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 98,
          }}
        />
      )}
      <aside style={asideStyle}>
      {/* Logo — also the link home, so every page carries a crawlable path back
          to the root. */}
      <div style={{ padding: '0 20px 28px', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
        <Link
          href="/"
          onClick={e => handleNavClick(e, 'me')}
          style={{ textDecoration: 'none', display: 'block' }}
        >
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 600, color: '#E9E9EF', letterSpacing: '-0.02em' }}>
            helia.dev
          </div>
          <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '3px', letterSpacing: '0.06em' }}>
            v10.4.2
          </div>
        </Link>
      </div>

      {showSubMenu ? (
        <>
          {/* Back row */}
          <button
            onClick={() => onMobileSubMenuChange?.(null)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 20px 10px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
              textAlign: 'left',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.08em',
            }}
          >
            <span aria-hidden="true">←</span>
            <span>BACK</span>
          </button>
          <div style={{ padding: '0 20px 10px', fontSize: '11px', color: 'var(--text-primary)', letterSpacing: '0.12em', fontWeight: 700 }}>
            {mobileSubMenu === 'projects' ? 'PROJECTS' : 'EXPERIENCE'}
          </div>

          {subItems.map((item, i) => {
            const storageKey = mobileSubMenu === 'projects' ? 'projects-selected' : 'changelog-selected'
            const parent = mobileSubMenu as SectionId
            return (
              <Link
                key={item.key}
                href={SECTION_BY_ID[parent].href}
                onClick={e => handleSubSelect(e, storageKey, item.key, parent)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '10px 20px',
                  background: 'transparent',
                  border: 'none',
                  borderLeft: '2px solid transparent',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    [{String(i).padStart(2, '0')}]
                  </span>
                  <span style={{
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 500,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}>
                    {item.label}
                  </span>
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', paddingLeft: '30px', fontFamily: 'var(--font-mono)' }}>
                  {item.meta}
                </div>
              </Link>
            )
          })}
        </>
      ) : (
        <>
          {/* Nav label */}
          <div style={{ padding: '20px 20px 10px', fontSize: '11px', color: 'var(--text-primary)', letterSpacing: '0.12em', fontWeight: 700 }}>
            ENDPOINTS
          </div>

          {/* Nav items */}
          {SECTIONS.map(({ method, label, id, href, title }) => (
            <Link
              key={id}
              href={href}
              title={title}
              aria-current={active === id ? 'page' : undefined}
              onClick={e => handleNavClick(e, id)}
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
                textDecoration: 'none',
                transition: 'background-color 0.2s cubic-bezier(0.16,1,0.3,1)',
              }}
              onMouseEnter={e => {
                if (active !== id) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'
              }}
              onMouseLeave={e => {
                if (active !== id) (e.currentTarget as HTMLElement).style.background = 'transparent'
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
                {label}
              </span>
              {isMobile && SUB_NAV_SECTIONS.has(id) && (
                <span aria-hidden="true" style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '14px' }}>›</span>
              )}
            </Link>
          ))}

          {/* System info */}
          <div style={{ marginTop: 'auto', padding: '20px', borderTop: '0.5px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 2 }}>
              <div>uptime<span style={{ float: 'right', color: 'var(--purple)', opacity: 0.7 }}>99.9%</span></div>
              <div>timezone<span style={{ float: 'right' }}>UAE</span></div>
            </div>
          </div>
        </>
      )}
    </aside>
    </>
  )
}
