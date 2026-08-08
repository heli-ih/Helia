// The single registry of the site's nine sections. Everything that needs to know
// what sections exist reads this: the sidebar nav, the router shell, the
// per-route <head> metadata, the crawlable block, and the sitemap. Adding a
// section here + creating app/<path>/page.tsx is the whole job.
//
// `label` is the terminal-style string the sidebar prints; `href` is the real
// URL. They are kept identical on purpose so the UI never lies about where a
// click goes. Trailing slashes are required — next.config.js sets
// `trailingSlash: true` so the static export emits <path>/index.html, which any
// host serves without extra rewrite rules.

export type SectionId =
  | 'me'
  | 'origin'
  | 'stack'
  | 'changelog'
  | 'projects'
  | 'achievements'
  | 'certifications'
  | 'testimonials'
  | 'collab'

export type SectionMeta = {
  id: SectionId
  href: string
  label: string
  method: 'GET' | 'POST'
  /** <h1> of the crawlable block and the visible section heading. */
  heading: string
  /** <title>, used absolute — each one is already self-contained, so the
   *  layout's "%s | Helia Haghighi" template is bypassed to avoid a doubled brand. */
  title: string
  description: string
  /** Sitemap weight. The landing page is the strongest URL. */
  priority: number
}

export const SECTIONS: SectionMeta[] = [
  {
    id: 'me',
    href: '/',
    label: '/me',
    method: 'GET',
    heading: 'Helia Haghighi, Software Developer & Data Analyst',
    title: 'Helia Haghighi, Software & Web Developer in Dubai, UAE',
    description:
      'Software developer and data analyst in Dubai, UAE. I design and build websites, web applications, and mobile apps using Next.js, React, Laravel, and React Native.',
    priority: 1,
  },
  {
    id: 'origin',
    href: '/me/origin/',
    label: '/me/origin',
    method: 'GET',
    heading: 'About Helia Haghighi',
    title: 'About Helia Haghighi | Developer & CS Grad in Dubai',
    description:
      'Computer Science graduate of Canadian University Dubai (3.95 GPA), now building full-stack products, data pipelines, and systems from Dubai, UAE.',
    priority: 0.8,
  },
  {
    id: 'stack',
    href: '/stack/',
    label: '/stack',
    method: 'GET',
    heading: 'Tech Stack',
    title: 'Tech Stack: React, Next.js, Laravel | Helia Haghighi',
    description:
      'The technologies I build with: React, Next.js, React Native, TypeScript, Laravel, PHP, Python, FastAPI, PostgreSQL, Firebase, Power BI, Figma, and more.',
    priority: 0.7,
  },
  {
    id: 'changelog',
    href: '/experience/',
    label: '/experience',
    method: 'GET',
    heading: 'Experience',
    title: 'Experience | Helia Haghighi, Developer in Dubai',
    description:
      'Technical Lead at Milele Prime, plus roles at Milele, Peekabox, AccentEMC and AccuMed in Dubai. Trading infrastructure, full-stack development, business analysis.',
    priority: 0.8,
  },
  {
    id: 'projects',
    href: '/projects/',
    label: '/projects',
    method: 'GET',
    heading: 'Projects',
    title: 'Projects | Websites & Apps by Helia Haghighi, Dubai',
    description:
      'Client websites, enterprise platforms, and mobile apps: SkillSage, fahadriaz.com, nicolaslunacoaching.com, Food Guardian, CUD Navigator and more.',
    priority: 0.9,
  },
  {
    id: 'achievements',
    href: '/achievements/',
    label: '/achievements',
    method: 'GET',
    heading: 'Achievements & Awards',
    title: 'Awards & Achievements | Helia Haghighi',
    description:
      'Award-winning software and research: IEEE Best Software Engineering Project, Best Poster at Zayed University, Best Research and Best Software at CUD.',
    priority: 0.6,
  },
  {
    id: 'certifications',
    href: '/certifications/',
    label: '/certifications',
    method: 'GET',
    heading: 'Certifications',
    title: 'Certifications | Helia Haghighi, Dubai Developer',
    description:
      'Professional certifications in business analysis, JavaScript, SQL, generative AI, cloud, and web design, from IBM, Meta, Google Cloud and others.',
    priority: 0.6,
  },
  {
    id: 'testimonials',
    href: '/testimonials/',
    label: '/testimonials',
    method: 'GET',
    heading: 'Testimonials',
    title: 'Testimonials | Helia Haghighi, Developer in Dubai',
    description:
      'Recommendations from managers, founders, mentors and teammates at Milele, Peekabox and Canadian University Dubai.',
    priority: 0.6,
  },
  {
    id: 'collab',
    href: '/collab/',
    label: '/collab',
    method: 'POST',
    heading: 'Work with Helia Haghighi',
    title: 'Hire a Web Developer in Dubai | Helia Haghighi',
    description:
      'Available for website design and development, web applications, mobile apps, dashboards, and automation work in Dubai and across the UAE. Get in touch.',
    priority: 0.9,
  },
]

export const SECTION_BY_ID = Object.fromEntries(
  SECTIONS.map(s => [s.id, s]),
) as Record<SectionId, SectionMeta>

// Sidebar tab order doubles as the arrow-key nav order.
export const SECTION_ORDER: SectionId[] = SECTIONS.map(s => s.id)
