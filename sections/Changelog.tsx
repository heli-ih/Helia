'use client'
import { useEffect, useRef, useState } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

import { entries, experienceEntries } from '@/data/experience'

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

// Splits a multi-sentence note into bullet items. Blank lines are hard breaks
// between points; within a paragraph it splits on "period + space + capital"
// so abbreviations like "U.S." or "Inc." don't trigger false splits.
function toBullets(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .flatMap(para => {
      const parts = para.split(/\. (?=[A-Z])/)
      return parts.map((p, i) => (i < parts.length - 1 ? p + '.' : p))
    })
    .map(p => p.trim())
    .filter(Boolean)
}

// Awards live in /achievements, certs live in /certifications — this tab is work history only.

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
export const groups: Group[] = (() => {
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
  const { isMobile, isTablet } = useBreakpoint()
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
      {/* Company list — hidden on mobile (sidebar exposes the sub-menu instead) */}
      {!isMobile && (
        <div style={{
          width: isTablet ? '180px' : '260px',
          minWidth: isTablet ? '180px' : '260px',
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
                  padding: isTablet ? '10px 14px' : '12px 20px',
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
                  <span style={{ fontSize: isTablet ? '10px' : '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    [{String(i).padStart(2, '0')}]
                  </span>
                  <span style={{
                    fontSize: isTablet ? '13px' : '15px',
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
                <div style={{ fontSize: isTablet ? '11px' : '13px', color: 'var(--text-secondary)', paddingLeft: isTablet ? '28px' : '34px', fontFamily: 'var(--font-mono)' }}>
                  {g.dateRange}
                </div>
              </button>
            )
          })}
        </div>
      )}

      {/* Detail panel */}
      <div style={{ flex: 1, overflowY: 'auto', padding: isMobile ? '20px' : '28px 32px', marginLeft: isMobile ? 0 : '12px' }}>
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
              fontSize: isMobile ? '22px' : '28px',
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
                <div style={{ width: isMobile ? '100%' : '85%', ...lineStyle(2) }}>
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: isMobile ? '100%' : '85%' }}>
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
