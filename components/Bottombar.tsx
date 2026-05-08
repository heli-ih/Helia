'use client'
import { useClock } from '@/hooks/useClock'

type Section = 'me' | 'origin' | 'projects' | 'stack' | 'changelog' | 'achievements' | 'certifications' | 'testimonials' | 'collab'

export default function Bottombar(_: { active: Section }) {
  const time = useClock()

  return (
    <div style={{
      height: '36px',
      minHeight: '36px',
      background: '#0e0e11',
      borderTop: '0.5px solid rgba(255,255,255,0.06)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 18px',
      flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{
          fontSize: '14px',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-mono)',
        }}>
          {time} <span style={{ opacity: 0.6 }}>UAE</span>
        </span>
      </div>
    </div>
  )
}
