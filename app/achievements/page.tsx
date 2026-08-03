// Route for the "achievements" section. Server component on purpose — that is what puts
// SeoContent into out/achievements/index.html. Adding 'use client' here would strip this
// URL's content back out of the static HTML.
import SectionPage from '@/app/SectionPage'
import { sectionMetadata } from '@/app/section-meta'

export const metadata = sectionMetadata('achievements')

export default function Page() {
  return <SectionPage id="achievements" />
}
