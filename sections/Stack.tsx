'use client'

const stackData: Record<string, string[]> = {
  frontend:   ['React', 'NextJS', 'React Native', 'SvelteKit', 'TypeScript', 'TailwindCSS', 'Bootstrap', 'React Three Fiber', 'ThreeJS'],
  backend:    ['PHP', 'Laravel 11', 'Python', 'FastAPI', 'Node.js'],
  data:       ['MySQL', 'PostgreSQL', 'Prisma', 'Supabase', 'Power BI'],
  infra:      ['Railway', 'Firebase', 'GitHub Actions', 'Vercel', 'Github'],
  automation: ['n8n', 'MS Power Automate', 'Selenium', 'UiPath'],
  design:     ['Figma', 'Canva'],
  tools:      ['MS365', 'Slack', 'Trello', 'Jira', 'Confluence'],
  'soft skills': ['Analytical Thinking', 'Project Management', 'Teamwork', 'Problem-solving', 'Adaptability', 'Agile Methodologies', 'Leadership', 'Detail-oriented', 'Self-learner'],
}

const stackEntries = Object.entries(stackData)

const lineStyle = (i: number): React.CSSProperties => ({
  opacity: 0,
  animation: 'typeIn 0.3s ease forwards',
  animationDelay: `${i * 0.06}s`,
})

export default function SectionStack() {
  return (
    <div className="section-enter" style={{ padding: '32px 36px', overflowY: 'auto', height: '100%' }}>
      <div style={{ fontSize: '14px', color: 'var(--green)', letterSpacing: '0.1em', marginBottom: '20px', ...lineStyle(0) }}>
        200 OK — GET /stack
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
        Stack
      </h2>
      <div style={{ maxWidth: '640px', marginTop: '20px' }}>
        {stackEntries.map(([category, items], i) => (
          <div
            key={category}
            style={{
              padding: '16px 0',
              borderBottom: i < stackEntries.length - 1 ? '0.5px solid rgba(255,255,255,0.06)' : 'none',
              ...lineStyle(3 + i),
            }}
          >
            <div style={{
              fontSize: '14px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-primary)',
              letterSpacing: '0.14em',
              marginBottom: '10px',
            }}>
              {category.toUpperCase()}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {items.map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: '14px',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--purple)',
                    padding: '3px 10px',
                    border: '0.5px solid var(--purple-border)',
                    background: 'var(--purple-bg)',
                    borderRadius: '4px',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
