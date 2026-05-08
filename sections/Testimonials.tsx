'use client'

type Link = { label: string; url: string }

type Testimonial = {
  id: string
  name: string
  role: string
  date: string
  relationship: string
  text: string
  links: Link[]
}

const testimonials: Testimonial[] = [
  {
    id: 't7',
    name: 'Feroz Riaz',
    role: 'Non Executive Director at Milele | Automotive | Real Estate',
    date: 'September 6, 2025',
    relationship: 'Feroz managed Helia directly',
    text: 'In every high-growth company, you hope to find individuals who don’t just contribute to the journey but help design the path forward. Helia is one of those rare people.\n\nHer technical expertise and strategic insight were pivotal in projects like Skill Sage, where she turned complexity into clarity. She builds bridges, creates alignment, and transforms vision into realihas worked along diverse team members to move project in unison\n\nWhat makes Helia truly stand out is her impact on peers. She lifts those around her, shares ownership generously, and brings a mindset that excellence is always a team effort. In doing so, she doesn’t just solve problems but also raises the game for everyone.\n\nIt has been a privilege to see her grow, and her journey is already woven into the success we’re building together. Her potential is extraordinary, and being part of her story is an honor.',
    links: [{ label: 'linkedin', url: 'https://www.linkedin.com/in/helia-haghighi-3a9a99166/details/recommendations/?detailScreenTabIndex=0' }],
  },
  {
    id: 't1',
    name: 'Hasan Sarwar',
    role: 'CEO & Co-Founder @ Peekabox',
    date: 'October 9, 2025',
    relationship: 'Hasan managed Helia directly',
    text: 'I had the pleasure of working with Helia on building out our product and I couldn’t recommend her more highly. She has an incredible ability to translate detailed ideas into clean and thought-out designs. What stood out most was her attention to detail, creativity, and ability to understand the product vision quickly. Helia was proactive, reliable, and an absolute pleasure to collaborate with and a true asset to any team.',
    links: [{ label: 'linkedin', url: 'https://www.linkedin.com/in/helia-haghighi-3a9a99166/details/recommendations/?detailScreenTabIndex=0' }],
  },
  {
    id: 't4',
    name: 'Said Elnaffar',
    role: 'Educator | Researcher | Consultant',
    date: 'September 7, 2025',
    relationship: 'Said was Helia’s mentor',
    text: 'Since she appeared in my second-year CS course, I knew she was different. Helia is a determined young woman who does not give up easily. From experience, whenever I delegate a task or a project to her, she always comes banswer or a solution. Despite her young age, she has proven to be reliable and someone you can count on. Her strengths? Resilience and adaptability.',
    links: [{ label: 'linkedin', url: 'https://www.linkedin.com/in/helia-haghighi-3a9a99166/details/recommendations/?detailScreenTabIndex=0' }],
  },
  {
    id: 't5',
    name: 'Nick Luna, CPQC',
    role: 'Executive Communication Advisor | I help Latin American C-suite executives protect their biggest deals and keep their best people by communicating clearly under pressure.',
    date: 'September 6, 2025',
    relationship: 'Nick was Helia’s mentor',
    text: 'I had the privilege of serving as Helia\'s executive coach for six months, and she is one of the most remarkable professionals I\'ve worked with.\n\nHer growth mindset sets her apart from other high achievers. She recognized the need to strengthen her interpersonal communication skills and dove headfirst into this personal development work, achieving remarkable transformation over our six months together. Her leadership qualities stand out as she successfully integrates emotional intelligence with her analytical strengths.\n\nEverything she does stems from a genuine desire to create value for others. Sllingly makes personal sacrifices because she believes deeply in that mission. I recommend her without reservation.',
    links: [{ label: 'linkedin', url: 'https://www.linkedin.com/in/helia-haghighi-3a9a99166/details/recommendations/?detailScreenTabIndex=0' }],
  },
  {
    id: 't2',
    name: 'Ilya Brezhnev',
    role: 'Junior Architect',
    date: 'October 7, 2025',
    relationship: 'Ilya and Helia studied together',
    text: 'We worked on a 3D Navigator prototype for university campus for a competition, winning an award. Helia is well organised, communicative and posesses problem-solving skills when facing obstacles, it was a pleasure to work with her.',
    links: [{ label: 'linkedin', url: 'https://www.linkedin.com/in/helia-haghighi-3a9a99166/details/recommendations/?detailScreenTabIndex=0' }],
  },
  {
    id: 't3',
    name: 'Dr. Arash Kermani Kolankeh',
    role: 'Technical Consultant in AI applications | University Professor of AI and Computer Science',
    date: 'September 19, 2025',
    relationship: 'Dr. Arash was Helia’s teacher',
    text: 'Helia was my student in the Artificial Intelligence course. She stood out with her excellent mathematical skills. She helped me in improving the lab materials. She got an A+, which was no surprise for me. I was happy to see her motivation, attention and commitment.\nIn one short sentence, Helia is smart by nature, has a trained brain and big goals that I am sure she will achieve.\nI do not recommend her for repetitive simple tasks. If you have unsolved problems which needs deep analysis, scalable planning and accurate implementation, Helia is the right person for your work.',
    links: [{ label: 'linkedin', url: 'https://www.linkedin.com/in/helia-haghighi-3a9a99166/details/recommendations/?detailScreenTabIndex=0' }],
  },
  {
    id: 't6',
    name: 'Farzan Ali Syed',
    role: 'Sales & Operations Leader | Automotive Rental & Mobility | People, Revenue, & Strategy',
    date: 'September 6, 2025',
    relationship: 'Farzan Ali worked with Helia on the same team',
    text: 'Helia is always a professional and always a pleasure to work with her.\nIf you’re looking for to the point no nonsense execution, you need not look anywhere else :)',
    links: [{ label: 'linkedin', url: 'https://www.linkedin.com/in/helia-haghighi-3a9a99166/details/recommendations/?detailScreenTabIndex=0' }],
  },
]

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
  return (
    <div className="section-enter" style={{ padding: '32px 36px', overflowY: 'auto', height: '100%' }}>
      <div style={{ fontSize: '14px', color: 'var(--green)', letterSpacing: '0.1em', marginBottom: '20px' }}>
        200 OK — GET /testimonials
      </div>
      <h2 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '28px',
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
        maxWidth: '640px',
        marginBottom: '24px',
      }}>
        What managers, mentors, and collaborators have said.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '760px' }}>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                aria-hidden="true"
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  background: '#1a1830',
                  border: '1px solid rgba(96,112,200,0.4)',
                  boxShadow: '0 0 10px rgba(96,112,200,0.25)',
                  fontSize: 28,
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
