import SeoContent from './SeoContent'
import SiteShell from './SiteShell'
import { SITE_URL } from '@/data/profile'
import { SECTION_BY_ID, type SectionId } from '@/data/sections'
import { projects } from '@/data/projects'
import { awards } from '@/data/awards'
import { certifications } from '@/data/certifications'

const PERSON_ID = `${SITE_URL}#person`

// JSON.stringify leaves "<" intact, so a literal "</script>" anywhere in the data
// would terminate the tag early. Escaping it is cheap insurance.
const toJsonLd = (o: unknown) => JSON.stringify(o).replace(/</g, '\\u003c')


// Page-level structured data. The site-wide Person and WebSite entities live in
// layout.tsx and repeat on every route by design; what belongs *here* is the
// per-URL WebPage, its breadcrumb trail, and any list of things that page is
// actually about. Emitting the project list on all nine routes would assert that
// every URL is a project listing, which is both wrong and a duplicate signal.
function pageJsonLd(id: SectionId) {
  const s = SECTION_BY_ID[id]
  const url = new URL(s.href, SITE_URL).toString()
  const pageId = `${url}#webpage`
  const isProfile = id === 'me' || id === 'origin'

  const graph: Record<string, unknown>[] = [
    {
      '@type': isProfile ? 'ProfilePage' : 'WebPage',
      '@id': pageId,
      url,
      name: s.title,
      description: s.description,
      isPartOf: { '@id': `${SITE_URL}#website` },
      about: { '@id': PERSON_ID },
      ...(isProfile ? { mainEntity: { '@id': PERSON_ID } } : {}),
      inLanguage: 'en',
    },
  ]

  if (id !== 'me') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: s.heading, item: url },
      ],
    })
  }

  if (id === 'projects') {
    graph.push({
      '@type': 'ItemList',
      '@id': `${url}#projects`,
      name: 'Projects by Helia Haghighi',
      itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          '@id': `${url}#project-${p.id}`,
          name: p.name,
          headline: `${p.name}: ${p.type}`,
          description: p.desc,
          creator: { '@id': PERSON_ID },
          keywords: p.stack.join(', '),
          ...(p.live ? { url: p.live } : {}),
          ...(p.github ? { codeRepository: p.github } : {}),
        },
      })),
    })
  }

  if (id === 'achievements') {
    graph.push({
      '@type': 'ItemList',
      '@id': `${url}#awards`,
      name: 'Awards won by Helia Haghighi',
      itemListElement: awards.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          name: a.title,
          description: a.note,
          dateCreated: a.date,
          ...(a.link ? { url: a.link } : {}),
        },
      })),
    })
  }

  if (id === 'certifications') {
    graph.push({
      '@type': 'ItemList',
      '@id': `${url}#certifications`,
      name: 'Certifications held by Helia Haghighi',
      itemListElement: certifications.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'EducationalOccupationalCredential',
          name: c.title,
          dateCreated: c.year,
          ...(c.link ? { url: c.link } : {}),
        },
      })),
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

// Every route renders the same two things: the server-rendered crawlable block
// scoped to that section, and the interactive shell with that section active.
export default function SectionPage({ id }: { id: SectionId }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(pageJsonLd(id)) }}
      />
      <SeoContent section={id} />
      <SiteShell active={id} />
    </>
  )
}
