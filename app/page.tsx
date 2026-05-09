'use client'
import { useEffect, useRef, useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import Bottombar from '@/components/Bottombar'
import AvatarPanel from '@/components/AvatarPanel'
import SectionMe from '@/sections/Me'
import SectionOrigin from '@/sections/Origin'
import SectionProjects from '@/sections/Projects'
import SectionStack from '@/sections/Stack'
import SectionChangelog from '@/sections/Changelog'
import SectionAchievements from '@/sections/Achievements'
import SectionCertifications from '@/sections/Certifications'
import SectionTestimonials from '@/sections/Testimonials'
import SectionCollab from '@/sections/Collab'
import { useBreakpoint } from '@/hooks/useBreakpoint'

type Section = 'me' | 'origin' | 'projects' | 'stack' | 'changelog' | 'achievements' | 'certifications' | 'testimonials' | 'collab'

// Sidebar tab order (must match Sidebar.tsx for arrow-key nav indexing).
const SECTION_ORDER: Section[] = ['me', 'origin', 'stack', 'changelog', 'projects', 'achievements', 'certifications', 'testimonials', 'collab']

// Sections with their own internal ArrowUp/Down sub-list nav. The page-level
// handler skips these so the inner listener handles the keys.
const SECTIONS_WITH_SUB_NAV = new Set<Section>(['projects', 'changelog'])

const STORAGE_KEY = 'site-active-section'

export default function Home() {
  const [active, setActive] = useState<Section>('me')
  const [leaving, setLeaving] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  // On mobile, tapping projects/experience first expands a sub-list inside the
  // sidebar; selecting a sub-item then opens the section. null means main nav.
  const [mobileSubMenu, setMobileSubMenu] = useState<Section | null>(null)
  const { isMobile, isTablet } = useBreakpoint()
  // Gates section content rendering until the localStorage restore has run,
  // so a refreshed user never sees the landing /me section flash before the
  // saved section takes over.
  const [hydrated, setHydrated] = useState(false)

  // On mount, restore the last viewed section from localStorage so a refresh
  // lands the user back where they were. Bypasses handleSelect so the
  // avatar fly-out animation doesn't trigger on restore.
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && (SECTION_ORDER as string[]).includes(stored)) {
      setActive(stored as Section)
    }
    setHydrated(true)
  }, [])

  // Skip the first write — otherwise the initial 'me' value would clobber the
  // stored section before the restore effect above can land.
  const restoredOnce = useRef(false)
  useEffect(() => {
    if (!restoredOnce.current) {
      restoredOnce.current = true
      return
    }
    localStorage.setItem(STORAGE_KEY, active)
  }, [active])

  // When leaving the landing /me section, hold the page on `me` for 500ms
  // so the big avatar can play its fly-into-side-panel animation, then swap.
  const handleSelect = (s: Section) => {
    if (active === 'me' && s !== 'me') {
      setLeaving(true)
      setTimeout(() => {
        setActive(s)
        setLeaving(false)
        if (isMobile) setSidebarOpen(false)
      }, 500)
    } else {
      setActive(s)
      if (isMobile) setSidebarOpen(false)
    }
  }

  // Main-tab arrow-key nav. Active only when the current section has no inner
  // sub-list nav of its own (Projects + Experience own Up/Down on their lists).
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return
      if (SECTIONS_WITH_SUB_NAV.has(active)) return
      const t = document.activeElement
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return
      e.preventDefault()
      const idx = SECTION_ORDER.indexOf(active)
      const dir = e.key === 'ArrowDown' ? 1 : -1
      const nextIdx = idx + dir
      if (nextIdx < 0 || nextIdx >= SECTION_ORDER.length) return
      const target = SECTION_ORDER[nextIdx]
      if (active === 'me' && target !== 'me') {
        setLeaving(true)
        setTimeout(() => {
          setActive(target)
          setLeaving(false)
        }, 500)
      } else {
        setActive(target)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [active])

  const isSmall = isMobile || isTablet

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#060608',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isSmall ? 0 : '16px',
    }}>
      {/* TV / laptop bezel */}
      <div style={{
        width: '100%',
        height: '100%',
        maxWidth: '1440px',
        background: 'linear-gradient(145deg, #222228, #161619)',
        borderRadius: isSmall ? 0 : '32px',
        padding: isSmall ? 0 : '10px',
        boxShadow: isSmall ? 'none' : [
          '0 0 0 1px rgba(255,255,255,0.07)',
          '0 0 0 1px rgba(0,0,0,0.8)',
          '0 30px 80px rgba(0,0,0,0.9)',
          '0 60px 120px rgba(0,0,0,0.5)',
          'inset 0 1px 0 rgba(255,255,255,0.09)',
          'inset 0 -1px 0 rgba(0,0,0,0.6)',
        ].join(', '),
        display: 'flex',
        flexDirection: 'column',
      }}>

        {/* Top bezel pip */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '10px', flexShrink: 0 }}>
          <div style={{ width: '36px', height: '3px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px' }} />
        </div>

        {/* Terminal screen */}
        <div
          className="scanlines"
          style={{
            flex: 1,
            background: '#0c0c0e',
            borderRadius: isSmall ? 0 : '22px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            boxShadow: [
              'inset 0 0 120px rgba(0,0,0,0.5)',
              'inset 0 0 0 0.5px rgba(0,0,0,0.8)',
            ].join(', '),
            animation: 'bezelGlow 6s ease-in-out infinite',
          }}
        >
          <Topbar showMenu={isSmall} onMenuClick={() => setSidebarOpen(v => !v)} />

          <div style={{ flex: 1, display: 'flex', flexDirection: isMobile ? 'column' : 'row', overflow: 'hidden' }}>
            <Sidebar
              active={active}
              onSelect={handleSelect}
              isOpen={sidebarOpen}
              onClose={() => { setSidebarOpen(false); setMobileSubMenu(null) }}
              mobileSubMenu={mobileSubMenu}
              onMobileSubMenuChange={setMobileSubMenu}
            />

            {/* Content — key forces remount = section-enter animation plays.
                overflow: visible lets the Me-leaving avatar fly across into the AvatarPanel.
                minHeight: 0 is required because `overflow: visible` removes the implicit
                `min-height: 0` flex items normally get when overflow is non-visible —
                without this override, the wrapper grows to fit content and sections lose
                the constrained height that overflow-y: auto needs to scroll. */}
            <div style={{ flex: 1, overflow: 'visible', display: 'flex', flexDirection: 'column', position: 'relative', minHeight: 0, minWidth: 0, marginLeft: '12px' }}>
              <div style={{ flex: 1, overflow: 'visible', minHeight: 0, minWidth: 0 }} key={active}>
                {hydrated && active === 'me'             ? <SectionMe leaving={leaving} /> : null}
                {hydrated && active === 'origin'         ? <SectionOrigin />                : null}
                {hydrated && active === 'projects'       ? <SectionProjects />              : null}
                {hydrated && active === 'stack'          ? <SectionStack />                 : null}
                {hydrated && active === 'changelog'      ? <SectionChangelog />             : null}
                {hydrated && active === 'achievements'   ? <SectionAchievements />          : null}
                {hydrated && active === 'certifications' ? <SectionCertifications />        : null}
                {hydrated && active === 'testimonials'   ? <SectionTestimonials />          : null}
                {hydrated && active === 'collab'         ? <SectionCollab />                : null}
              </div>
            </div>

            {!isMobile && <AvatarPanel active={active} />}
          </div>

          <Bottombar active={active} />
        </div>

        {/* Bottom bezel pip */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10px', flexShrink: 0 }}>
          <div style={{ width: '56px', height: '3px', background: 'rgba(255,255,255,0.03)', borderRadius: '2px' }} />
        </div>
      </div>
    </div>
  )
}
