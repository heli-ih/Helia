import type { Metadata } from 'next'
import { SITE_URL, NAME, ROLE } from '@/data/profile'
import { SECTION_BY_ID, type SectionId } from '@/data/sections'

// Per-route <head>. Without this every URL would inherit the layout's title and
// description, and nine near-identical pages is a duplicate-content problem
// rather than nine rankable ones. The canonical + og:url must point at the
// route's own address, not at the site root.
export function sectionMetadata(id: SectionId): Metadata {
  const s = SECTION_BY_ID[id]
  const url = new URL(s.href, SITE_URL).toString()

  return {
    title: { absolute: s.title },
    description: s.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'profile',
      firstName: 'Helia',
      lastName: 'Haghighi',
      locale: 'en_US',
      url,
      title: s.title,
      description: s.description,
      siteName: NAME,
      images: [
        {
          url: '/og.jpg',
          width: 1200,
          height: 630,
          alt: `${NAME}, ${ROLE}, Dubai, UAE`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: s.title,
      description: s.description,
      images: ['/og.jpg'],
    },
  }
}
