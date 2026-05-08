'use client'

const facts: { label: string; value: string }[] = [
  { label: 'Degree',     value: 'BSc Computer Science, Canadian University Dubai' },
  { label: 'Status',   value: 'Golden Vista Holder' },
  { label: 'Based',      value: 'Dubai, UAE' },
  { label: 'Languages',  value: 'English' },
]

const lineStyle = (i: number): React.CSSProperties => ({
  opacity: 0,
  animation: 'typeIn 0.3s ease forwards',
  animationDelay: `${i * 0.06}s`,
})

export default function SectionOrigin() {
  return (
    <div className="section-enter" style={{ padding: '32px 36px', overflowY: 'auto', height: '100%' }}>
      <div style={{ fontSize: '14px', color: 'var(--green)', letterSpacing: '0.1em', marginBottom: '20px', ...lineStyle(0) }}>
        200 OK — GET /me/origin
      </div>
      <h2 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '28px',
        fontWeight: 700,
        color: 'var(--text-primary)',
        letterSpacing: '-0.02em',
        marginBottom: '6px',
        ...lineStyle(1),
      }}>
        Origin story
      </h2>
      <p style={{
        fontSize: '15px',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-mono)',
        lineHeight: 1.9,
        maxWidth: '560px',
        marginBottom: '28px',
        ...lineStyle(3),
      }}>
        Driven by challenges, fueled by learning.<br /><br />
      Completed my Computer Science degree at Canadian University Dubai, 3.95 GPA.
      With a desire to solve problems through software and automation.
      I bring products to life by sharpening my skills across full-stack development, data pipelines, and system design. My goal: to contribute to the industry by building things that actually make a difference.
      </p>

      {/* Two-column labeled grid */}
      <div style={{ maxWidth: '560px' }}>
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
