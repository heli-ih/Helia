// Server component (no 'use client') — this is the part of each page that exists
// in the static HTML `next build` writes to out/<route>/index.html.
//
// Why it exists: the SPA in SiteShell.tsx is a client component that renders one
// section at a time. Crawlers that do not run JavaScript — Bing, LinkedIn/Slack/
// WhatsApp unfurlers, GPTBot, ClaudeBot, PerplexityBot — would otherwise see only
// sidebar chrome. This puts the real content in the HTML on first byte.
//
// It renders ONLY the requested section. Emitting every section on every route
// would make nine near-identical pages, and Google would collapse them into one
// — the opposite of what per-section routes are for.
//
// Every string comes from the same data/ modules the visible SPA renders, so the
// two can never disagree. That is what keeps this legitimate rather than
// cloaking: there is no text here a visitor cannot reach in the UI.
//
// aria-hidden is deliberate. Screen-reader users navigate the real SPA, which is
// fully accessible; without this they would hear each page twice. Hidden from
// assistive tech is not hidden from crawlers — the text is still in the DOM.

import {
  NAME, ROLE, LOCATION, TAGLINE, BIO, ORIGIN_STORY, FACTS, LINKS, EMAIL, SERVICES,
} from '@/data/profile'
import { SECTIONS, SECTION_BY_ID, type SectionId } from '@/data/sections'
import { stackEntries } from '@/data/stack'
import { experienceEntries } from '@/data/experience'
import { projects } from '@/data/projects'
import { awards } from '@/data/awards'
import { certifications } from '@/data/certifications'
import { testimonials } from '@/data/testimonials'

// Clipped, not `display: none`. Google discounts or ignores text hidden with
// display:none / visibility:hidden / the hidden attribute; a 1px clip rect is
// the long-standing accessible-hiding pattern and stays indexable.
const srOnly: React.CSSProperties = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
}

function SectionBody({ id }: { id: SectionId }) {
  switch (id) {
    case 'me':
      return (
        <>
          <p>{TAGLINE}</p>
          <p>{BIO}</p>
          <p>Based in {LOCATION}.</p>
          <h2>What I do</h2>
          <ul>
            {SERVICES.map(s => (
              <li key={s.name}>
                <strong>{s.name}</strong>: {s.description}
              </li>
            ))}
          </ul>
        </>
      )

    case 'origin':
      return (
        <>
          {ORIGIN_STORY.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <ul>
            {FACTS.map(f => (
              <li key={f.label}>
                {f.label}: {f.value}
              </li>
            ))}
          </ul>
        </>
      )

    case 'stack':
      return (
        <>
          {stackEntries.map(([category, items]) => (
            <section key={category}>
              <h2>{category}</h2>
              <p>{items.join(', ')}</p>
            </section>
          ))}
        </>
      )

    case 'changelog':
      return (
        <>
          {experienceEntries.map(e => (
            <article key={e.v}>
              <h2>{e.title}</h2>
              <p>{e.date}</p>
              {e.note.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </article>
          ))}
        </>
      )

    case 'projects':
      return (
        <>
          {projects.map(p => (
            <article key={p.id}>
              <h2>
                {p.name}: {p.type}
              </h2>
              <p>{p.desc}</p>
              <p>Built with: {p.stack.join(', ')}</p>
              {p.live && (
                <p>
                  <a href={p.live} rel="noopener">
                    {p.name} live site
                  </a>
                </p>
              )}
              {p.github && (
                <p>
                  <a href={p.github} rel="noopener">
                    {p.name} source on GitHub
                  </a>
                </p>
              )}
            </article>
          ))}
        </>
      )

    case 'achievements':
      return (
        <>
          {awards.map(a => (
            <article key={a.v}>
              <h2>{a.title}</h2>
              <p>{a.date}</p>
              <p>{a.note}</p>
              {a.link && (
                <p>
                  <a href={a.link} rel="noopener">
                    {a.title}: announcement
                  </a>
                </p>
              )}
            </article>
          ))}
        </>
      )

    case 'certifications':
      return (
        <ul>
          {certifications.map(c => (
            <li key={c.title + c.year}>
              {c.title} ({c.year}){c.note ? `: ${c.note}` : ''}
            </li>
          ))}
        </ul>
      )

    case 'testimonials':
      return (
        <>
          {testimonials.map(t => (
            <article key={t.id}>
              <h2>
                {t.name}: {t.role}
              </h2>
              <p>{t.relationship}</p>
              <p>{t.date}</p>
              {t.text.split('\n').filter(Boolean).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </article>
          ))}
        </>
      )

    case 'collab':
      return (
        <>
          <p>
            Whether it&apos;s a project, a role, or just a question, send it through. I read
            every message.
          </p>
          <h2>Services</h2>
          <ul>
            {SERVICES.map(s => (
              <li key={s.name}>
                <strong>{s.name}</strong>: {s.description}
              </li>
            ))}
          </ul>
          <p>
            Email: <a href={LINKS.email}>{EMAIL}</a>
          </p>
          <p>
            <a href={LINKS.github} rel="noopener">
              GitHub
            </a>
          </p>
          <p>
            <a href={LINKS.linkedin} rel="noopener">
              LinkedIn
            </a>
          </p>
        </>
      )
  }
}

export default function SeoContent({ section }: { section: SectionId }) {
  const meta = SECTION_BY_ID[section]

  return (
    <div style={srOnly} aria-hidden="true">
      <h1>{meta.heading}</h1>
      <p>{meta.description}</p>

      <SectionBody id={section} />

      {/* Real <a href> to every other route. The sidebar renders links too, but
          keeping a plain list here guarantees a crawler can walk the whole site
          from any entry point even if it never executes the SPA. */}
      <nav>
        <h2>More about {NAME}</h2>
        <ul>
          {SECTIONS.filter(s => s.id !== section).map(s => (
            <li key={s.id}>
              <a href={s.href}>
                {s.heading}: {s.description}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <p>
        {NAME}, {ROLE}, {LOCATION}.
      </p>
    </div>
  )
}
