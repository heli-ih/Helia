'use client'
import { useEffect, useRef, useState } from 'react'

const entries = [
  {
    v: 'v2.4',
    date: 'Nov 2025 – Present',
    title: 'Developer & Analyst @ Milele',
    note: 'Developed an internal product tasting and evaluation portal using PHP and MySQL, replacing manual spreadsheets with a centralized web-based system for structured data collection, scoring, and analysis across food SKUs. Digitized data workflows, improving accuracy, traceability, and cross-functional collaboration between Product, Marketing, and Operations.\n\nConducted market and competitor research using public datasets and industry reports to identify product gaps and emerging opportunities; analyzed large datasets and delivered Power BI dashboards to support product planning, benchmarking, and strategic decision-making.\n\nDeveloped automated trading system using Python to monitor 100+ cryptocurrency pairs in real-time, detecting profitable trading opportunities, achieving <1-second latency. Integrated Binance API and built analysis engine using technical indicators (RSI, EMA, SMA) to identify high-probability trades.\n\nImplemented instant mobile notifications via Telegram bot and automated backtesting framework analyzing 30-day performance with win-rate calculations. Processed 2,880+ data points per asset daily, generating comprehensive reports with risk-reward analysis using pandas/NumPy.',
    tag: 'current',
  },
  {
    v: 'v2.2',
    date: 'Jan 2025 – Nov 2025',
    title: 'Technical Business Analyst @ Milele',
    note: 'As a Business Analyst, drove business growth by translating strategic vision into technical execution. Focused on process optimization, digital transformation, and leading key initiatives that bridge the gap between business, marketing, and IT.\n\nLed critical transformation projects, including the transition of Milele.com into a modern e-commerce platform and the SAP S/4HANA consolidation strategy. Documented end-to-end business processes, provided ongoing SAP support, and ensured alignment with strategic goals.\n\nDrove operational efficiency and digital transformation by leading a strategic team to address inefficiencies in order fulfillment and automating high-volume manual tasks.\n\nBridged the gap between departments by translating business needs into actionable technical requirements and providing a technical perspective on solution structuring, enabling efficient collaboration and accelerating operational excellence.\n\nPartnered directly with the COO to plan, monitor, and deliver key company initiatives, ensuring targets were met successfully.\n\nCollaborated closely with external consultants to modernize internal structures, aligning processes with high standards of operational excellence.',
    tag: 'milestone',
  },
  {
    v: 'v2.0',
    date: 'Oct 2024 – May 2025',
    title: 'Software Developer @ Milele',
    note: 'Engineered an end-to-end secure testing platform with anti-cheating mechanisms leveraging Laravel 11. Developed bulk question import system and invitation email infrastructure, reducing creation time by 60%. Integrated TensorFlow.js for advanced anti-cheating detection, including tab switching and window blur monitoring, achieving 95% fraud prevention rate. Implemented comprehensive time-based analytics dashboard, generating detailed performance metrics. Developed a secure file storage system and session management, maintaining 80% data integrity and scalability.',
    tag: 'milestone',
  },
  {
    v: 'v1.8',
    date: 'May 2024 – Oct 2024',
    title: 'UI/UX Team Lead & Designer @ Peekabox',
    note: 'Directed end-to-end user research and wireframing for SaaS products, improving user engagement metrics by implementing data-driven design solutions. Created high-fidelity prototypes and design systems using Figma, conducting user testing sessions to optimize interface accessibility and user flows. Collaborated closely with product managers and developers to ensure seamless handoff from design to development and alignment with business goals. Led multiple design iterations based on usability testing and analytics feedback, resulting in a 20% increase in feature adoption rates.',
    tag: 'work',
  },
  {
    v: 'v1.7',
    date: 'Jun 2024',
    title: 'IEEE Best Software Engineering Project',
    note: 'Won Best Software Engineering Project for FoodGuardian at the IEEE showcase.',
    tag: 'award',
  },
  {
    v: 'v1.6',
    date: 'Apr 2024',
    title: 'Best Poster — Zayed University Research Conference',
    note: 'Won Best Poster Presentation for "A Dynamic Priority Queue for Food Pickup Scheduling" at Zayed University 15th Annual Undergraduate Research Conference on Applied Computing.',
    tag: 'award',
  },
  {
    v: 'v1.55',
    date: 'Apr 2024',
    title: 'Best Research + Best Software — CUD Engineering Day',
    note: 'Won Best Research for the Dynamic Priority Queue project and Best Software for CUD Navigator at the CUD Engineering Project Showcase Competition.',
    tag: 'award',
  },
  {
    v: 'v1.4',
    date: 'Jan 2024 – May 2024',
    title: 'Full-Stack Developer @ AccentEMC',
    note: 'Engineered a comprehensive learning management system with Next.js, Firebase, secure authentication, and PayPal integration. Developed responsive UI components using React and TailwindCSS, including an intuitive course catalog and real-time analytics dashboard. Architected scalable data models for complex course structures and content management, reducing administrative overhead by 35%.',
    tag: 'work',
  },
  {
    v: 'v1.2',
    date: 'Jun 2023 – Aug 2023',
    title: 'RPA Developer @ AccuMed',
    note: 'Spearheaded the implementation of Robotic Process Automation (RPA) solutions, reducing human error by 25% and increasing work speed by 30% in daily operations. Conducted comprehensive workflow analyses to identify and execute high-impact automation opportunities, enhancing overall operational efficiency. Collaborated with cross-functional teams to gather requirements and align automation projects with organizational objectives, ensuring seamless integration of RPA solutions and web scrapping. Developed and maintained detailed documentation for all RPA solutions, facilitating knowledge transfer and supporting long-term maintenance efforts.',
    tag: 'work',
  },
  {
    v: 'v1.0',
    date: 'Apr 2023',
    title: 'CUD Engineering Day — Best Project Showcase',
    note: 'Won Project Showcase and Posters Competition for CUD Navigator.',
    tag: 'award',
  },
  {
    v: 'v0.5',
    date: 'May 2023',
    title: 'Meta — Programming with JavaScript',
    note: 'Completed Meta Programming with JavaScript certification.',
    tag: 'certification',
  },
  {
    v: 'v0.1',
    date: 'Dec 2021',
    title: 'Web Design Certificate',
    note: 'First certification shipped. The beginning.',
    tag: 'certification',
  },
]

function splitTitle(title: string): { role: string; company: string | null } {
  const at = title.lastIndexOf(' @ ')
  if (at === -1) return { role: title, company: null }
  return { role: title.slice(0, at), company: title.slice(at + 3) }
}

// Splits a date like "Oct 2024 – May 2025" or "Jun 2024" into start/end strings.
function dateBounds(date: string): { start: string; end: string } {
  const parts = date.split(' – ')
  return { start: parts[0].trim(), end: (parts[1] ?? parts[0]).trim() }
}

// Splits a multi-sentence note into bullet items. Uses "period + space + capital"
// so abbreviations like "U.S." or "Inc." don't trigger false splits.
function toBullets(text: string): string[] {
  const parts = text.split(/\. (?=[A-Z])/)
  return parts
    .map((p, i) => (i < parts.length - 1 ? p + '.' : p))
    .map(p => p.trim())
    .filter(Boolean)
}

// Awards live in /achievements, certs live in /certifications — this tab is work history only.
const experienceEntries = entries.filter(e => e.tag !== 'award' && e.tag !== 'certification')

type Entry = (typeof entries)[number]
type Group = {
  key: string          // company name OR unique title for ungrouped items
  label: string        // display label
  isCompany: boolean   // true when 1+ entries share this company
  entries: Entry[]     // most-recent first (input order is already chronological desc)
  dateRange: string    // aggregated "earliest start – latest end"
}

// Group entries by their `@ Company` suffix; entries without a company become
// their own single-item group keyed by the full title.
const groups: Group[] = (() => {
  const map = new Map<string, Group>()
  const list: Group[] = []
  for (const e of experienceEntries) {
    const { company } = splitTitle(e.title)
    const key = company ?? e.title
    let g = map.get(key)
    if (!g) {
      g = { key, label: key, isCompany: company !== null, entries: [], dateRange: '' }
      map.set(key, g)
      list.push(g)
    }
    g.entries.push(e)
  }
  // Aggregate date range per group.
  for (const g of list) {
    const newest = dateBounds(g.entries[0].date).end
    const oldest = dateBounds(g.entries[g.entries.length - 1].date).start
    g.dateRange = newest === oldest ? newest : `${oldest} – ${newest}`
  }
  return list
})()

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const lineStyle = (i: number): React.CSSProperties => ({
  opacity: 0,
  animation: 'typeIn 0.3s ease forwards',
  animationDelay: `${i * 0.06}s`,
})

const STORAGE_KEY = 'changelog-selected'

export default function SectionChangelog() {
  const [selectedKey, setSelectedKey] = useState<string | null>(groups[0]?.key ?? null)
  const group = groups.find(g => g.key === selectedKey) ?? groups[0]
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && groups.some(g => g.key === stored)) setSelectedKey(stored)
  }, [])

  const restoredOnce = useRef(false)
  useEffect(() => {
    if (!restoredOnce.current) {
      restoredOnce.current = true
      return
    }
    if (selectedKey) localStorage.setItem(STORAGE_KEY, selectedKey)
  }, [selectedKey])

  // ArrowUp / ArrowDown step through the company list.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return
      const active = document.activeElement
      if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) return
      e.preventDefault()
      setSelectedKey((current) => {
        const idx = groups.findIndex(g => g.key === current)
        const direction = e.key === 'ArrowDown' ? 1 : -1
        const nextIdx = idx + direction
        if (nextIdx < 0 || nextIdx >= groups.length) return current
        queueMicrotask(() => {
          const btn = buttonRefs.current[nextIdx]
          btn?.focus({ preventScroll: true })
          btn?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
        })
        return groups[nextIdx].key
      })
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className="section-enter" style={{ display: 'flex', height: '100%', overflow: 'hidden', marginLeft: '-12px' }}>
      {/* Company list */}
      <div style={{
        width: '260px',
        minWidth: '260px',
        borderRight: '0.5px solid rgba(255,255,255,0.06)',
        overflowY: 'auto',
        padding: '24px 0',
      }}>
        {groups.map((g, i) => {
          const isActive = selectedKey === g.key
          return (
            <button
              key={g.key}
              ref={(el) => { buttonRefs.current[i] = el }}
              onClick={() => setSelectedKey(g.key)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '12px 20px',
                background: isActive ? 'rgba(96,112,200,0.06)' : 'transparent',
                borderLeft: `2px solid ${isActive ? 'var(--purple)' : 'transparent'}`,
                border: 'none',
                borderLeftWidth: '2px',
                borderLeftStyle: 'solid',
                borderLeftColor: isActive ? 'var(--purple)' : 'transparent',
                cursor: 'pointer',
                transition: 'background-color 0.18s cubic-bezier(0.16,1,0.3,1), border-left-color 0.18s ease',
              }}
              onMouseEnter={ev => { if (!isActive) (ev.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.02)' }}
              onMouseLeave={ev => { if (!isActive) (ev.currentTarget as HTMLButtonElement).style.background = 'transparent' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  [{String(i).padStart(2, '0')}]
                </span>
                <span style={{
                  fontSize: '15px',
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  flex: 1,
                  minWidth: 0,
                }}>
                  {g.label}
                </span>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', paddingLeft: '34px', fontFamily: 'var(--font-mono)' }}>
                {g.dateRange}
              </div>
            </button>
          )
        })}
      </div>

      {/* Detail panel */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '28px 32px', marginLeft: '12px' }}>
        {!group ? (
          <div style={{ color: 'var(--text-secondary)', fontSize: '15px', fontFamily: 'var(--font-mono)', marginTop: '40px' }}>
            <span style={{ color: 'var(--purple)', opacity: 0.5 }}>←</span>  select a company to inspect
          </div>
        ) : (
          <div key={group.key} className="section-enter">
            <div style={{ fontSize: '14px', color: 'var(--green)', letterSpacing: '0.1em', marginBottom: '20px', ...lineStyle(0) }}>
              200 OK — GET /experience/{slugify(group.label)}
            </div>

            {/* Company title — same typography as the project H3 in /projects.
                The timeline lives at the per-role level only. */}
            <h3 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '28px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              ...lineStyle(1),
            }}>
              {group.label}
            </h3>

            {/* Single role: role + date row, then note. Same role/date row
                layout as the multi-role sub-blocks. */}
            {group.entries.length === 1 && (() => {
              const e = group.entries[0]
              const { role } = splitTitle(e.title)
              const showRole = group.isCompany && role !== group.label
              return (
                <div style={{ width: '85%', ...lineStyle(2) }}>
                  {showRole && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      gap: '12px',
                      flexWrap: 'wrap',
                      paddingBottom: '8px',
                      marginBottom: '12px',
                      borderBottom: '0.5px solid rgba(255,255,255,0.16)',
                    }}>
                      <span style={{
                        fontSize: '16px',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 500,
                      }}>
                        {role}
                      </span>
                      <span style={{
                        fontSize: '14px',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 400,
                        opacity: 0.7,
                        whiteSpace: 'nowrap',
                      }}>
                        {e.date}
                      </span>
                    </div>
                  )}
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}>
                    {toBullets(e.note).map((b, bi) => (
                      <li key={bi} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '15px',
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-mono)',
                        lineHeight: 1.7,
                      }}>
                        <span aria-hidden="true" style={{ color: 'var(--purple)', flexShrink: 0, marginTop: '1px' }}>›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })()}

            {/* Multi-role: stacked sub-blocks separated by hairlines */}
            {group.entries.length > 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '85%' }}>
                {group.entries.map((e, idx) => {
                  const { role } = splitTitle(e.title)
                  return (
                    <div
                      key={e.v}
                      style={{
                        paddingTop: idx === 0 ? '0' : '16px',
                        ...lineStyle(2 + idx),
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        gap: '12px',
                        flexWrap: 'wrap',
                        paddingBottom: '8px',
                        marginBottom: '12px',
                        borderBottom: '0.5px solid rgba(255,255,255,0.16)',
                      }}>
                        <span style={{
                          fontSize: '16px',
                          color: 'var(--text-primary)',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 500,
                        }}>
                          {role}
                        </span>
                        <span style={{
                          fontSize: '14px',
                          color: 'var(--text-primary)',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 400,
                          opacity: 0.7,
                          whiteSpace: 'nowrap',
                        }}>
                          {e.date}
                        </span>
                      </div>
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '7px',
                      }}>
                        {toBullets(e.note).map((b, bi) => (
                          <li key={bi} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            fontSize: '15px',
                            color: 'var(--text-secondary)',
                            fontFamily: 'var(--font-mono)',
                            lineHeight: 1.7,
                          }}>
                            <span aria-hidden="true" style={{ color: 'var(--purple)', flexShrink: 0, marginTop: '1px' }}>›</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
