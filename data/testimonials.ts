// Plain data module — see data/profile.ts for why this lives outside the
// 'use client' section files.

export type Link = { label: string; url: string }

export type Testimonial = {
  id: string
  name: string
  role: string
  date: string
  relationship: string
  text: string
  links: Link[]
}

export const testimonials: Testimonial[] = [
  {
    id: 't7',
    name: 'Feroz Riaz',
    role: 'Non Executive Director at Milele | Automotive | Real Estate',
    date: 'September 6, 2025',
    relationship: 'Feroz managed Helia directly',
    text: 'In every high-growth company, you hope to find individuals who don’t just contribute to the journey but help design the path forward. Helia is one of those rare people.\n\nHer technical expertise and strategic insight were pivotal in projects like Skill Sage, where she turned complexity into clarity. She builds bridges, creates alignment, and transforms vision into realihas worked along diverse team members to move project in unison\n\nWhat makes Helia truly stand out is her impact on peers. She lifts those around her, shares ownership generously, and brings a mindset that excellence is always a team effort. In doing so, she doesn’t just solve problems but also raises the game for everyone.\n\nIt has been a privilege to see her grow, and her journey is already woven into the success we’re building together. Her potential is extraordinary, and being part of her story is an honor.',
    links: [{ label: 'linkedin', url: 'https://www.linkedin.com/in/helia-haghighi-3a9a99166/details/recommendations/?detailScreenTabIndex=0' }],
  },
  {
    id: 't1',
    name: 'Hasan Sarwar',
    role: 'CEO & Co-Founder @ Peekabox',
    date: 'October 9, 2025',
    relationship: 'Hasan managed Helia directly',
    text: 'I had the pleasure of working with Helia on building out our product and I couldn’t recommend her more highly. She has an incredible ability to translate detailed ideas into clean and thought-out designs. What stood out most was her attention to detail, creativity, and ability to understand the product vision quickly. Helia was proactive, reliable, and an absolute pleasure to collaborate with and a true asset to any team.',
    links: [{ label: 'linkedin', url: 'https://www.linkedin.com/in/helia-haghighi-3a9a99166/details/recommendations/?detailScreenTabIndex=0' }],
  },
  {
    id: 't4',
    name: 'Said Elnaffar',
    role: 'Educator | Researcher | Consultant',
    date: 'September 7, 2025',
    relationship: 'Said was Helia’s mentor',
    text: 'Since she appeared in my second-year CS course, I knew she was different. Helia is a determined young woman who does not give up easily. From experience, whenever I delegate a task or a project to her, she always comes banswer or a solution. Despite her young age, she has proven to be reliable and someone you can count on. Her strengths? Resilience and adaptability.',
    links: [{ label: 'linkedin', url: 'https://www.linkedin.com/in/helia-haghighi-3a9a99166/details/recommendations/?detailScreenTabIndex=0' }],
  },
  {
    id: 't5',
    name: 'Nick Luna, CPQC',
    role: 'Executive Communication Advisor | I help Latin American C-suite executives protect their biggest deals and keep their best people by communicating clearly under pressure.',
    date: 'September 6, 2025',
    relationship: 'Nick was Helia’s mentor',
    text: 'I had the privilege of serving as Helia\'s executive coach for six months, and she is one of the most remarkable professionals I\'ve worked with.\n\nHer growth mindset sets her apart from other high achievers. She recognized the need to strengthen her interpersonal communication skills and dove headfirst into this personal development work, achieving remarkable transformation over our six months together. Her leadership qualities stand out as she successfully integrates emotional intelligence with her analytical strengths.\n\nEverything she does stems from a genuine desire to create value for others. Sllingly makes personal sacrifices because she believes deeply in that mission. I recommend her without reservation.',
    links: [{ label: 'linkedin', url: 'https://www.linkedin.com/in/helia-haghighi-3a9a99166/details/recommendations/?detailScreenTabIndex=0' }],
  },
  {
    id: 't2',
    name: 'Ilya Brezhnev',
    role: 'Junior Architect',
    date: 'October 7, 2025',
    relationship: 'Ilya and Helia studied together',
    text: 'We worked on a 3D Navigator prototype for university campus for a competition, winning an award. Helia is well organised, communicative and posesses problem-solving skills when facing obstacles, it was a pleasure to work with her.',
    links: [{ label: 'linkedin', url: 'https://www.linkedin.com/in/helia-haghighi-3a9a99166/details/recommendations/?detailScreenTabIndex=0' }],
  },
  {
    id: 't3',
    name: 'Dr. Arash Kermani Kolankeh',
    role: 'Technical Consultant in AI applications | University Professor of AI and Computer Science',
    date: 'September 19, 2025',
    relationship: 'Dr. Arash was Helia’s teacher',
    text: 'Helia was my student in the Artificial Intelligence course. She stood out with her excellent mathematical skills. She helped me in improving the lab materials. She got an A+, which was no surprise for me. I was happy to see her motivation, attention and commitment.\nIn one short sentence, Helia is smart by nature, has a trained brain and big goals that I am sure she will achieve.\nI do not recommend her for repetitive simple tasks. If you have unsolved problems which needs deep analysis, scalable planning and accurate implementation, Helia is the right person for your work.',
    links: [{ label: 'linkedin', url: 'https://www.linkedin.com/in/helia-haghighi-3a9a99166/details/recommendations/?detailScreenTabIndex=0' }],
  },
  {
    id: 't6',
    name: 'Farzan Ali Syed',
    role: 'Sales & Operations Leader | Automotive Rental & Mobility | People, Revenue, & Strategy',
    date: 'September 6, 2025',
    relationship: 'Farzan Ali worked with Helia on the same team',
    text: 'Helia is always a professional and always a pleasure to work with her.\nIf you’re looking for to the point no nonsense execution, you need not look anywhere else :)',
    links: [{ label: 'linkedin', url: 'https://www.linkedin.com/in/helia-haghighi-3a9a99166/details/recommendations/?detailScreenTabIndex=0' }],
  },
]
