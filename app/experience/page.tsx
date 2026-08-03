// Route for the "changelog" section. Server component on purpose — that is what puts
// SeoContent into out/experience/index.html. Adding 'use client' here would strip this
// URL's content back out of the static HTML.
import SectionPage from '@/app/SectionPage'
import { sectionMetadata } from '@/app/section-meta'

export const metadata = sectionMetadata('changelog')

export default function Page() {
  return <SectionPage id="changelog" />
}
