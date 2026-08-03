// Route for the "me" section. Server component on purpose — that is what puts
// SeoContent into out/index.html. Adding 'use client' here would strip this
// URL's content back out of the static HTML.
import SectionPage from './SectionPage'
import { sectionMetadata } from './section-meta'

export const metadata = sectionMetadata('me')

export default function Page() {
  return <SectionPage id="me" />
}
