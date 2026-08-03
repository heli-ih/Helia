'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
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
import { SECTION_BY_ID, SECTION_ORDER, type SectionId } from '@/data/sections'

// Sections with their own internal ArrowUp/Down sub-list nav. The page-level
// handler skips these so the inner listener handles the keys.
const SECTIONS_WITH_SUB_NAV = new Set<SectionId>(['projects', 'changelog'])

// The URL is the source of truth for which section is showing — `active` comes
// from the route, not from component state. (It used to be state restored from
// localStorage; that is gone, because a section is now a real, linkable,
// indexable address and silently overriding it would break both sharing and
// crawling.) Navigation goes through the Next router, so it is still a
// client-side transition with no full page reload.
export default function SiteShell({ active }: { active: SectionId }) {
  const router = useRouter()
  const [leaving, setLeaving] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  // On mobile, tapping projects/experience first expands a sub-list inside the
  // sidebar; selecting a sub-item then opens the section. null means main nav.
  const [mobileSubMenu, setMobileSubMenu] = useState<SectionId | null>(null)
  const { isMobile, isTablet } = useBreakpoint()

  // Guards the 500ms avatar fly-out below: without it, a double-click queues two
  // navigations and the second lands after the animation has already reset.
  const navigating = useRef(false)
  useEffect(() => {
    navigating.current = false
    setLeaving(false)
  }, [active])

  // Prefetch every sibling route on mount so a sidebar click feels instant.
  useEffect(() => {
    for (const id of SECTION_ORDER) {
      if (id !== active) router.prefetch(SECTION_BY_ID[id].href)
    }
  }, [active, router])

  // When leaving the landing /me section, hold the page on `me` for 500ms
  // so the big avatar can play its fly-into-side-panel animation, then navigate.
  const go = (id: SectionId) => {
    if (navigating.current || id === active) {
      if (isMobile) setSidebarOpen(false)
      return
    }
    const href = SECTION_BY_ID[id].href
    if (isMobile) setSidebarOpen(false)

    if (active === 'me' && id !== 'me') {
      navigating.current = true
      setLeaving(true)
      setTimeout(() => router.push(href), 500)
    } else {
      router.push(href)
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
      const nextIdx = idx + (e.key === 'ArrowDown' ? 1 : -1)
      if (nextIdx < 0 || nextIdx >= SECTION_ORDER.length) return
      go(SECTION_ORDER[nextIdx])
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, isMobile])

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
              onNavigate={go}
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
                {active === 'me'             ? <SectionMe leaving={leaving} /> : null}
                {active === 'origin'         ? <SectionOrigin />                : null}
                {active === 'projects'       ? <SectionProjects />              : null}
                {active === 'stack'          ? <SectionStack />                 : null}
                {active === 'changelog'      ? <SectionChangelog />             : null}
                {active === 'achievements'   ? <SectionAchievements />          : null}
                {active === 'certifications' ? <SectionCertifications />        : null}
                {active === 'testimonials'   ? <SectionTestimonials />          : null}
                {active === 'collab'         ? <SectionCollab />                : null}
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
