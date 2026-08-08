// Plain data module — NO 'use client'. Imported by both the client SPA sections
// and the server-rendered crawlable block (app/SeoContent.tsx), so the text a
// crawler sees is literally the same text a visitor sees. Never fork these
// strings; edit here and both surfaces update together.

export const SITE_URL = 'https://heliahaghighi.com'
export const NAME = 'Helia Haghighi'
export const EMAIL = 'heliaa.haghighi@gmail.com'

export const ROLE = 'Software Developer · Data Analyst'
export const LOCATION = 'Dubai, UAE'

export const TAGLINE =
  'Software Developer and Data Analyst based in Dubai, UAE. I build websites, web applications, and mobile apps.'

export const BIO =
  'I turn complex problems into systems that work. My expertise spans enterprise solutions, continuously delivering innovative products that drive business impact.'

export const ORIGIN_STORY: string[] = [
  'Driven by challenges, fueled by learning.',
  'Completed my Computer Science degree at Canadian University Dubai, 3.95 GPA. With a desire to solve problems through software and automation. I bring products to life by sharpening my skills across full-stack development, data pipelines, and system design. My goal: to contribute to the industry by building things that actually make a difference.',
]

export const FACTS: { label: string; value: string }[] = [
  { label: 'Degree', value: 'BSc Computer Science, Canadian University Dubai' },
  { label: 'Status', value: 'Golden Vista Holder' },
  { label: 'Based', value: 'Dubai, UAE' },
  { label: 'Languages', value: 'English' },
]

export const LINKS = {
  github: 'https://github.com/heli-ih',
  linkedin: 'https://www.linkedin.com/in/helia-haghighi-3a9a99166/',
  email: `mailto:${EMAIL}`,
}

// Services actually evidenced elsewhere on this site — client websites shipped
// (fahadriaz.com, nicolaslunacoaching.com), a UI/UX lead role at Peekabox, a web
// design certification, React Native apps, Power BI dashboards, RPA work.
// Do not add a service here that no project or role on the site backs up:
// unsupported claims are both dishonest and a structured-data violation.
export const SERVICES: { name: string; description: string }[] = [
  {
    name: 'Web Development',
    description:
      'Custom websites and web applications built with Next.js, React, Laravel and PHP, from a single-page personal brand site to an enterprise platform, for clients in Dubai and across the UAE.',
  },
  {
    name: 'Website Design & UI/UX',
    description:
      'User research, wireframing, and high-fidelity design systems in Figma, carried through to a developed, responsive, accessible front end.',
  },
  {
    name: 'Mobile App Development',
    description:
      'Cross-platform iOS and Android apps in React Native and TypeScript, backed by Firebase, FastAPI, and Google Maps integrations.',
  },
  {
    name: 'Data Analysis & Dashboards',
    description:
      'Power BI dashboards, market and competitor analysis, and Python data pipelines that turn raw operational data into decisions.',
  },
  {
    name: 'Process Automation',
    description:
      'RPA and workflow automation with UiPath, Selenium, n8n, and Power Automate, replacing manual spreadsheet processes with reliable systems.',
  },
]
