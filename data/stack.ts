// Plain data module — see data/profile.ts for why this lives outside the
// 'use client' section files.

export const stackData: Record<string, string[]> = {
  frontend:   ['React', 'NextJS', 'React Native', 'SvelteKit', 'TypeScript', 'TailwindCSS', 'Bootstrap', 'React Three Fiber', 'ThreeJS'],
  backend:    ['PHP', 'Laravel 11', 'Python', 'FastAPI', 'Node.js'],
  data:       ['MySQL', 'PostgreSQL', 'Prisma', 'Supabase', 'Power BI'],
  infra:      ['Railway', 'Firebase', 'GitHub Actions', 'Vercel', 'Github'],
  automation: ['n8n', 'MS Power Automate', 'Selenium', 'UiPath'],
  design:     ['Figma', 'Canva'],
  tools:      ['MS365', 'Slack', 'Trello', 'Jira', 'Confluence'],
  'soft skills': ['Analytical Thinking', 'Project Management', 'Teamwork', 'Problem-solving', 'Adaptability', 'Agile Methodologies', 'Leadership', 'Detail-oriented', 'Self-learner'],
}

export const stackEntries = Object.entries(stackData)

// Flat list of concrete technologies (skills, not soft skills) — used for
// Person.knowsAbout in the JSON-LD graph.
export const knowsAbout = stackEntries
  .filter(([category]) => category !== 'soft skills')
  .flatMap(([, items]) => items)
