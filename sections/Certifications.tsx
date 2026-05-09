'use client'
import { useEffect, useState } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

const certifications: { title: string; year: string; image: string; note?: string; link?: string }[] = [
  { title: 'IBM Professional Business Analyst - Certificate',                                       year: 'September 2025', image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2F2024%2FBusiness_Analyst.jpeg?alt=media&token=e3410ac4-18ba-46bf-ad1c-d6d15c0cdae6', link: 'https://www.coursera.org/account/accomplishments/professional-cert/FOXWC9O6T2YU?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof' },
  { title: '1 MILLION PROMPTERS',                                                                  year: 'February 2025',  image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2F2025%2F1%20MILLION%20PROMPTERS.png?alt=media&token=fafe88bf-c3ad-433d-9d2f-796aa16a8dda' },
  { title: 'Ethics in the Age of Generative AI',                                                   year: 'December 2024',  image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2F2024%2FEthics%20in%20the%20Age%20of%20Generative%20AI.pdf?alt=media&token=19c68800-20ec-4817-96d1-0933f94551d8' },
  { title: 'Generative AI - The Evolution of Thoughtful Online',                                   year: 'December 2024',  image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2F2024%2FGenerative%20AI%20-The%20Evolution%20%20of%20Thoughtful%20Online.pdf?alt=media&token=75ea548f-9ceb-428e-9046-6daa1238a7a7' },
  { title: 'Generative AI for Business Leaders',                                                   year: 'December 2024',  image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2F2024%2FGenerative%20AI%20for%20Business%20Leaders.pdf?alt=media&token=a79a1dda-a538-4473-a35e-b7b154069314' },
  { title: 'Google Cloud - Introduction to AI',                                                    year: 'December 2024',  image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2F2024%2FGoogle_Cloud_Introduction_to_AI.pdf?alt=media&token=7a4a5ce0-2b1f-4759-8049-da620b3d9bf4' },
  { title: 'Google Cloud - Large Language Models',                                                 year: 'December 2024',  image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2F2024%2FLarge%20Language%20Models.pdf?alt=media&token=63787fd7-6d3e-4db4-a49e-be6c1fe3168d' },
  { title: 'What Is Generative AI?',                                                               year: 'December 2024',  image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2F2024%2FWhat%20Is%20Generative%20AI.pdf?alt=media&token=c78e10af-7363-4e76-b1c7-1e2a6230902a' },
  { title: 'UOWD Innovation Fair - Research',                                                      year: 'June 2024',      image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FUOWD_Certificate_2024.png?alt=media&token=358bce80-24e9-4f31-beed-d4bedd573ffa' },
  { title: 'IEEE Best Software Engineering Project',                                               year: 'June 2024',      image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FIEEE_Best_Software_Engineering_Project.pdf?alt=media&token=295ee156-c6b1-4355-aac5-570d388d648a',  note: 'A winner of the "The Best Software Engineering Project" for the "FoodGaurdian" project' },
  { title: 'Zayed University 15th Annual Undergraduate Research Conference on Applied Computing', year: 'April 2024',     image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FZURC2024.png?alt=media&token=229e3148-60d6-4a61-9a8c-f2bd3dacc8b3',                          note: 'A winner of the "The Best Poster Presentation" for the research and project titled "A Dynamic Priority Queue for Food Pickup Scheduling"' },
  { title: 'CUD Engineering Project Showcase Competition — Best Research',                          year: 'April 2024',     image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FCUDResearch_Engineering_Day_2024.png?alt=media&token=e5c2e486-cc83-49b2-982b-f849f66b5b72',          note: 'A winner of the "The Best Research" category for the research and project titled "A Dynamic Priority Queue for Food Pickup Scheduling"' },
  { title: 'CUD Engineering Project Showcase Competition — Best Software',                          year: 'April 2024',     image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FCUDNav_Engineering_Day_2024.png?alt=media&token=dbb635a2-f183-43d4-b5b1-879db6858d2d',              note: 'A winner of the "The Best Software" category for the project titled "CUD Navigator"' },
  { title: 'Emirates Robotics Competition',                                                         year: 'March 2023',     image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FRIT%20Robotics%20Competition.png?alt=media&token=11f22865-c84a-4d3c-8c3f-4295b41fc4f5' },
  { title: 'CUD ICPC',                                                                              year: 'April 2023',     image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FICPC.png?alt=media&token=dfe10622-e0c0-494f-b1bd-2f3b7d127728' },
  { title: 'CUD Engineering Project Showcase Competition — Project Showcase',                       year: 'April 2023',     image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FCUD_Projects_Showcase_2023.png?alt=media&token=534cacf1-5608-4676-9e31-1a02c049380e',                  note: 'A winner of the "Project Showcase and Posters Competition" for the project titled "CUD Navigator"' },
  { title: 'Meta Programming with JavaScript',                                                      year: 'May 2023',       image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FMeta%20-%20Programming%20with%20JavaScript.png?alt=media&token=a877d3d3-c844-4aed-96b9-6254d851c010' },
  { title: 'SKYLINE University College Innovation Competition',                                     year: 'May 2023',       image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FIEEE_Innovation_Competition.png?alt=media&token=e2e7d358-6609-4d1d-82b5-599035b6044d' },
  { title: 'IBM - SQL: A Practical Introduction for Querying Databases',                            year: 'July 2023',      image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FSQL.png?alt=media&token=4c24720a-cf43-491a-b14b-da70cc3c7d11' },
  { title: 'Certificate of Academic Excellence',                                                    year: 'September 2023', image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FAcademic_Excellence.png?alt=media&token=08f88b74-94bb-4bfb-98f6-4e0f723eb08f' },
  { title: 'Volunteering with nybl at Gitex Global Dubai',                                          year: 'October 2022',   image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2Fnybl.png?alt=media&token=65524097-4f2d-4ce8-b252-403374d3b472' },
  { title: 'CUD Global Entrepreneurship Week',                                                      year: 'November 2022',  image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FCUD_Global_Entrepreneurship_Week.png?alt=media&token=e378bec4-1719-46e8-a70a-3326fc3dcf0f' },
  { title: 'Web Design Certificate',                                                                year: 'December 2021',  image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FWeb_Design_Certification.png?alt=media&token=a187f74a-373f-471f-aba9-ab4d3dd7d656' },
]

const isPdf = (url: string) => url.toLowerCase().includes('.pdf')

/* PDFs render via <iframe>, which works without CORS configuration on the
   bucket. Safari's PDF viewer overlays a toolbar at the bottom of the iframe
   content area — we hide it by oversizing the iframe (extra height below)
   inside an overflow:hidden wrapper, so the toolbar falls outside the
   visible region. pointer-events: none keeps the iframe from intercepting
   clicks (the parent button handles those) and from triggering hover-only
   toolbar surfaces. */
const PDF_TOOLBAR_CLIP_PX = 60

function TilePlaceholder() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(160deg, #13112a 0%, #0d0c1a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        border: '1.5px solid rgba(96,112,200,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
      }}>
        🎖️
      </div>
    </div>
  )
}

function CertTileVisual({ image, fullSize = false, pdfAspect }: { image: string; fullSize?: boolean; pdfAspect?: number }) {
  const [loaded, setLoaded] = useState(false)

  if (isPdf(image)) {
    // Match the IBM (first card) image's intrinsic aspect on small viewports so
    // every PDF tile renders at the same dynamic dimensions as that reference.
    const aspect = pdfAspect && fullSize ? `${pdfAspect}` : (fullSize ? '8.5 / 11' : undefined)
    return (
      <div style={{
        width: '100%',
        aspectRatio: aspect,
        height: fullSize ? undefined : 160,
        position: 'relative',
        overflow: 'hidden',
        background: '#fff',
        borderBottom: '0.5px solid rgba(255,255,255,0.06)',
      }}>
        {!loaded && <TilePlaceholder />}
        <iframe
          src={`${image}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
          title=""
          aria-hidden="true"
          tabIndex={-1}
          onLoad={() => setLoaded(true)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: `calc(100% + ${PDF_TOOLBAR_CLIP_PX}px)`,
            border: 'none',
            pointerEvents: 'none',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.2s ease',
          }}
        />
      </div>
    )
  }

  // Non-PDF: in fullSize the wrapper takes the image's intrinsic aspect
  // (img is in flow, height auto) so the card matches the picture exactly.
  if (fullSize) {
    return (
      <div style={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '0.5px solid rgba(255,255,255,0.06)',
        minHeight: !loaded ? 180 : undefined,
      }}>
        {!loaded && <TilePlaceholder />}
        <img
          src={image}
          alt=""
          onLoad={() => setLoaded(true)}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            background: '#0a0a0e',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.2s ease',
          }}
        />
      </div>
    )
  }

  return (
    <div style={{
      width: '100%',
      height: 160,
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '0.5px solid rgba(255,255,255,0.06)',
    }}>
      {!loaded && <TilePlaceholder />}
      <img
        src={image}
        alt=""
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top center',
          display: 'block',
          background: '#0a0a0e',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      />
    </div>
  )
}

function CertModalDoc({ cert }: { cert: { title: string; image: string } }) {
  if (isPdf(cert.image)) {
    return (
      <div style={{
        width: 'min(60vw, 720px)',
        height: 'min(62vh, 540px)',
        position: 'relative',
        overflow: 'hidden',
        background: '#fff',
      }}>
        <iframe
          src={`${cert.image}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
          title={cert.title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: `calc(100% + ${PDF_TOOLBAR_CLIP_PX}px)`,
            border: 'none',
            pointerEvents: 'none',
          }}
        />
      </div>
    )
  }

  return (
    <img
      src={cert.image}
      alt={cert.title}
      style={{ maxWidth: 'min(60vw, 720px)', maxHeight: 'min(62vh, 540px)', objectFit: 'contain', display: 'block' }}
    />
  )
}

const cardStyle = (i: number, fluidHeight: boolean): React.CSSProperties => ({
  display: 'flex',
  flexDirection: 'column',
  height: fluidHeight ? 'auto' : '260px',
  width: '100%',
  borderRadius: '10px',
  overflow: 'hidden',
  background: '#111114',
  border: '0.5px solid rgba(255,255,255,0.08)',
  cursor: 'pointer',
  textAlign: 'left',
  padding: 0,
  font: 'inherit',
  color: 'inherit',
  transition: 'border-color 0.2s ease, transform 0.2s ease',
  opacity: 0,
  animation: 'typeIn 0.35s cubic-bezier(0.16,1,0.3,1) forwards',
  animationDelay: `${0.05 + (i % 8) * 0.04}s`,
})

export default function SectionCertifications() {
  const { isMobile, isTablet } = useBreakpoint()
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const open = openIdx !== null ? certifications[openIdx] : null

  // Measure the first non-PDF cert (IBM) so PDF previews can match its
  // width/height ratio dynamically — keeps the grid visually consistent.
  const [pdfAspect, setPdfAspect] = useState<number | null>(null)
  useEffect(() => {
    const ref = certifications.find(c => !isPdf(c.image))
    if (!ref) return
    const img = new Image()
    img.onload = () => {
      if (img.naturalWidth && img.naturalHeight) {
        setPdfAspect(img.naturalWidth / img.naturalHeight)
      }
    }
    img.src = ref.image
  }, [])

  // ESC closes the lightbox.
  useEffect(() => {
    if (openIdx === null) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpenIdx(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openIdx])

  return (
    <div className="section-enter" style={{ padding: isMobile ? '20px' : '32px 36px', overflowY: 'auto', height: '100%' }}>
      <div style={{ fontSize: '14px', color: 'var(--green)', letterSpacing: '0.1em', marginBottom: '20px' }}>
        200 OK — GET /certifications
      </div>
      <h2 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: isMobile ? '22px' : '28px',
        fontWeight: 700,
        color: 'var(--text-primary)',
        letterSpacing: '-0.02em',
        marginBottom: '6px',
      }}>
        Certifications
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(auto-fill, minmax(240px, 1fr))',
        // Don't stretch tiles to row height on small viewports — let each card
        // hug its own image so the wrapper matches the certificate exactly.
        alignItems: (isMobile || isTablet) ? 'start' : undefined,
        gap: '14px',
        maxWidth: isMobile ? '100%' : '1040px',
        marginTop: '22px',
      }}>
        {certifications.map((c, i) => {
          const interactive = !(isMobile || isTablet)
          return (
          <button
            key={`${c.title}-${c.year}`}
            type="button"
            onClick={interactive ? () => setOpenIdx(i) : undefined}
            disabled={!interactive}
            aria-label={interactive ? `Open certificate: ${c.title}` : c.title}
            style={{ ...cardStyle(i, isMobile || isTablet), cursor: interactive ? 'pointer' : 'default' }}
            onMouseEnter={(e) => {
              if (!interactive) return
              const el = e.currentTarget
              el.style.borderColor = 'rgba(96,112,200,0.5)'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              if (!interactive) return
              const el = e.currentTarget
              el.style.borderColor = 'rgba(255,255,255,0.08)'
              el.style.transform = 'translateY(0)'
            }}
          >
            <CertTileVisual image={c.image} fullSize={isMobile || isTablet} pdfAspect={pdfAspect ?? undefined} />

            {/* Bottom info */}
            <div style={{
              padding: '14px 16px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div>
                <div style={{
                  fontSize: 13,
                  color: '#e8e8f0',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  marginBottom: 4,
                  lineHeight: 1.4,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {c.title}
                </div>
                {c.note && (
                  <div style={{
                    fontSize: 11,
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                    lineHeight: 1.5,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {c.note}
                  </div>
                )}
              </div>

              <div style={{ marginTop: 10 }}>
                <span style={{ fontSize: 11, color: 'var(--purple)', fontFamily: 'var(--font-mono)' }}>
                  {c.year}
                </span>
              </div>
            </div>
          </button>
          )
        })}
      </div>

      {/* Lightbox — opens on tile click. Click backdrop / caption / margins to
          dismiss; only the white document box stops propagation. ESC also closes. */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpenIdx(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(6,6,8,0.82)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            opacity: 0,
            animation: 'fadeIn 0.2s cubic-bezier(0.16,1,0.3,1) forwards',
            cursor: 'zoom-out',
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setOpenIdx(null) }}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.06)',
              border: '0.5px solid rgba(255,255,255,0.12)',
              color: 'var(--text-primary)',
              fontSize: '18px',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.15s ease, border-color 0.15s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.background = 'rgba(255,255,255,0.12)'
              el.style.borderColor = 'rgba(255,255,255,0.25)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.background = 'rgba(255,255,255,0.06)'
              el.style.borderColor = 'rgba(255,255,255,0.12)'
            }}
          >
            ×
          </button>

          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '14px',
              cursor: 'default',
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                background: '#fff',
                boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 0.5px rgba(135,206,250,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'default',
              }}
            >
              <CertModalDoc cert={open} />
            </div>

            <div style={{ textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
              <div style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: 500, marginBottom: '4px' }}>
                {open.title}
              </div>
              <div style={{ fontSize: '12px', color: '#87CEFA', letterSpacing: '0.06em' }}>
                {open.year}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
