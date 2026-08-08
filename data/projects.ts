// Plain data module — see data/profile.ts for why this lives outside the
// 'use client' section files.

export type Project = {
  id: string
  name: string
  type: string
  status: string
  stack: string[]
  desc: string
  /** null when there is no screenshot yet — the card falls back to a placeholder. */
  image: string | null
  live: string | null
  github: string | null
}

export const projects: Project[] = [
  {
    id: 'skillsage',
    name: 'SkillSage',
    type: 'hiring assessment platform',
    status: 'live',
    stack: ['PHP', 'PostgreSQL', 'Livewire', 'TailwindCSS', 'Alpine.js', 'TensorFlow.js', 'Vite', 'Laravel Excel', 'PHPMailer', 'GeoIP'],
    desc: 'An enterprise-grade test management system with comprehensive assessment capabilities. Features advanced anti-cheating via TensorFlow.js (tab switching and window blur monitoring, 95% fraud prevention), dual authentication, bulk question import reducing creation time by 60%, automated test processing, secure file storage, and a sophisticated analytics dashboard for performance tracking and reporting.',
    image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/SkillSage.png?alt=media&token=b649fd63-c4c5-40a8-b68d-c2defe8fc91a',
    live: null,
    github: 'https://github.com/heli-ih',
  },
  {
    id: 'linkedin-automation',
    name: 'LinkedIn Content Automation Pipeline',
    type: 'content automation pipeline',
    status: 'live',
    stack: ['Node.js', 'Claude API', 'Telegram Bot API', 'LinkedIn API', 'Supabase', 'PostgreSQL', 'Prisma', 'Railway'],
    desc: 'Built an autonomous LinkedIn posting pipeline: Claude API drafts posts, a Telegram approval bot routes them for human sign-off, and approved posts publish automatically via the official LinkedIn API. Node.js with Supabase PostgreSQL and Prisma ORM managing scheduling and post state, deployed on Railway.',
    image: '/linkedin-automation.png',
    live: null,
    github: null,
  },
  {
    id: 'fahad-riaz',
    name: 'Fahad Riaz',
    type: 'personal website',
    status: 'live',
    stack: ['HTML', 'TailwindCSS', 'JavaScript', 'GitHub Pages'],
    desc: 'Personal brand and portfolio site for a Dubai-based entrepreneur, showcasing his multi-vertical ventures across automotive export, car rental, luxury real estate, and fintech. Cinematic hero presentation, structured navigation across about, ventures, socials, and impact, with full SEO and structured-data metadata.',
    image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Screenshot%202026-05-08%20at%2020.13.45.png?alt=media&token=75434944-82f7-423d-b8db-118a3880df89',
    live: 'https://fahadriaz.com',
    github: null,
  },
  {
    id: 'nicolas-luna',
    name: 'Nicolas Luna',
    type: 'professional website',
    status: 'live',
    stack: ['NextJS', 'React', 'TailwindCSS', 'Figma'],
    desc: 'Designed and developed a user-focused website for a professional coach, combining intensive UX research with a polished portfolio-style presentation.',
    image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Screenshot%202026-05-08%20at%2020.13.37.png?alt=media&token=96d67fc2-6e2b-4159-a1b5-56893c92cd37',
    live: 'https://www.nicolaslunacoaching.com',
    github: null,
  },
  {
    id: 'food-pickup',
    name: 'Fresh Food Pickup',
    type: 'mobile app',
    status: 'live',
    stack: ['React Native', 'TypeScript', 'Python', 'FastAPI', 'Firebase', 'Google Maps API', 'Figma'],
    desc: 'A dynamic priority queue algorithm running behind a user-centric React Native app, optimising restaurant operations with a focus on resource efficiency, operational enhancements, and user experience. Won Best Poster Presentation at Zayed University 15th Annual Undergraduate Research Conference 2024.',
    image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Food-Pickup.png?alt=media&token=4b0ce615-dc93-4fc1-b96d-fe5d1701e97e',
    live: null,
    github: 'https://github.com/CS-Graduation-Project',
  },
  {
    id: 'food-guardian',
    name: 'Food Guardian',
    type: 'mobile app',
    status: 'live',
    stack: ['React Native', 'TypeScript', 'Nativewind', 'Firestore', 'Gemini API', 'Google Maps API', 'Figma'],
    desc: 'Food inventory management via manual entry, barcode scanning, and AI recognition. Features custom category management, local food bank finder, donation tracking, and badge system. Winner of IEEE Best Software Engineering Project 2024.',
    image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/FoodGaurdian.png?alt=media&token=9d49e742-f8eb-4b42-889c-061b0c6e9328',
    live: null,
    github: 'https://github.com/heli-ih/FoodGaurdian',
  },
  {
    id: 'cud-events',
    name: 'CUD Event Management',
    type: 'event organizing platform',
    status: 'live',
    stack: ['Svelte', 'TypeScript', 'SQLite', 'Prisma'],
    desc: 'Centralised hub for organising, browsing, and registering for events within a university environment, hosted by clubs, societies and workshop organisers.',
    image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/CUD-Event-Management.png?alt=media&token=30d60421-22b3-416c-ba96-540d0dca2153',
    live: null,
    github: 'https://github.com/heli-ih/CUD-Event-Management',
  },
  {
    id: 'cud-navigator',
    name: 'CUD Navigator',
    type: '3d indoor navigation system',
    status: 'live',
    stack: ['NextJS', 'React', 'TailwindCSS', 'Prisma', 'PostgreSQL', 'React Three Fiber'],
    desc: 'Interactive indoor navigator for Canadian University Dubai using routing concepts from Next.js and a .glb 3D map rendered with React Three Fiber. Winner of Best Software Engineering Project at IEEE and Best Software at CUD Engineering Day 2024.',
    image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/CUD-Nav.png?alt=media&token=f0e59167-6bfd-45b1-a61b-4245f8f8f4dd',
    live: null,
    github: 'https://github.com/heli-ih/CUD-Navigator',
  },
]
