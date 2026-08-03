import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/data/profile'
import { SECTIONS } from '@/data/sections'

// One entry per real route. Adding a section to data/sections.ts puts it in the
// sitemap automatically — there is no second list to keep in sync.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return SECTIONS.map(s => ({
    url: new URL(s.href, SITE_URL).toString(),
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: s.priority,
  }))
}
