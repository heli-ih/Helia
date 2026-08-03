// Route for the "certifications" section. Server component on purpose — that is what puts
// SeoContent into out/certifications/index.html. Adding 'use client' here would strip this
// URL's content back out of the static HTML.
import SectionPage from '@/app/SectionPage'
import { sectionMetadata } from '@/app/section-meta'

export const metadata = sectionMetadata('certifications')

export default function Page() {
  return <SectionPage id="certifications" />
}
