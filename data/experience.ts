// Plain data module — see data/profile.ts for why this lives outside the
// 'use client' section files.

export type Entry = {
  v: string
  date: string
  title: string
  note: string
  tag: string
}

export const entries: Entry[] = [
  {
    v: 'v2.4',
    date: 'Nov 2025 – Present',
    title: 'Developer & Analyst @ Milele',
    note: 'Developed an internal product tasting and evaluation portal using PHP and MySQL, replacing manual spreadsheets with a centralized web-based system for structured data collection, scoring, and analysis across food SKUs. Digitized data workflows, improving accuracy, traceability, and cross-functional collaboration between Product, Marketing, and Operations.\n\nConducted market and competitor research using public datasets and industry reports to identify product gaps and emerging opportunities; analyzed large datasets and delivered Power BI dashboards to support product planning, benchmarking, and strategic decision-making.\n\nDeveloped automated trading system using Python to monitor 100+ cryptocurrency pairs in real-time, detecting profitable trading opportunities, achieving <1-second latency. Integrated Binance API and built analysis engine using technical indicators (RSI, EMA, SMA) to identify high-probability trades.\n\nImplemented instant mobile notifications via Telegram bot and automated backtesting framework analyzing 30-day performance with win-rate calculations. Processed 2,880+ data points per asset daily, generating comprehensive reports with risk-reward analysis using pandas/NumPy.',
    tag: 'current',
  },
  {
    v: 'v2.2',
    date: 'Jan 2025 – Nov 2025',
    title: 'Technical Business Analyst @ Milele',
    note: 'As a Business Analyst, drove business growth by translating strategic vision into technical execution. Focused on process optimization, digital transformation, and leading key initiatives that bridge the gap between business, marketing, and IT.\n\nLed critical transformation projects, including the transition of Milele.com into a modern e-commerce platform and the SAP S/4HANA consolidation strategy. Documented end-to-end business processes, provided ongoing SAP support, and ensured alignment with strategic goals.\n\nDrove operational efficiency and digital transformation by leading a strategic team to address inefficiencies in order fulfillment and automating high-volume manual tasks.\n\nBridged the gap between departments by translating business needs into actionable technical requirements and providing a technical perspective on solution structuring, enabling efficient collaboration and accelerating operational excellence.\n\nPartnered directly with the COO to plan, monitor, and deliver key company initiatives, ensuring targets were met successfully.\n\nCollaborated closely with external consultants to modernize internal structures, aligning processes with high standards of operational excellence.',
    tag: 'milestone',
  },
  {
    v: 'v2.0',
    date: 'Oct 2024 – May 2025',
    title: 'Software Developer @ Milele',
    note: 'Engineered an end-to-end secure testing platform with anti-cheating mechanisms leveraging Laravel 11. Developed bulk question import system and invitation email infrastructure, reducing creation time by 60%. Integrated TensorFlow.js for advanced anti-cheating detection, including tab switching and window blur monitoring, achieving 95% fraud prevention rate. Implemented comprehensive time-based analytics dashboard, generating detailed performance metrics. Developed a secure file storage system and session management, maintaining 80% data integrity and scalability.',
    tag: 'milestone',
  },
  {
    v: 'v1.8',
    date: 'May 2024 – Oct 2024',
    title: 'UI/UX Team Lead & Designer @ Peekabox',
    note: 'Directed end-to-end user research and wireframing for SaaS products, improving user engagement metrics by implementing data-driven design solutions. Created high-fidelity prototypes and design systems using Figma, conducting user testing sessions to optimize interface accessibility and user flows. Collaborated closely with product managers and developers to ensure seamless handoff from design to development and alignment with business goals. Led multiple design iterations based on usability testing and analytics feedback, resulting in a 20% increase in feature adoption rates.',
    tag: 'work',
  },
  {
    v: 'v1.7',
    date: 'Jun 2024',
    title: 'IEEE Best Software Engineering Project',
    note: 'Won Best Software Engineering Project for FoodGuardian at the IEEE showcase.',
    tag: 'award',
  },
  {
    v: 'v1.6',
    date: 'Apr 2024',
    title: 'Best Poster — Zayed University Research Conference',
    note: 'Won Best Poster Presentation for "A Dynamic Priority Queue for Food Pickup Scheduling" at Zayed University 15th Annual Undergraduate Research Conference on Applied Computing.',
    tag: 'award',
  },
  {
    v: 'v1.55',
    date: 'Apr 2024',
    title: 'Best Research + Best Software — CUD Engineering Day',
    note: 'Won Best Research for the Dynamic Priority Queue project and Best Software for CUD Navigator at the CUD Engineering Project Showcase Competition.',
    tag: 'award',
  },
  {
    v: 'v1.4',
    date: 'Jan 2024 – May 2024',
    title: 'Full-Stack Developer @ AccentEMC',
    note: 'Engineered a comprehensive learning management system with Next.js, Firebase, secure authentication, and PayPal integration. Developed responsive UI components using React and TailwindCSS, including an intuitive course catalog and real-time analytics dashboard. Architected scalable data models for complex course structures and content management, reducing administrative overhead by 35%.',
    tag: 'work',
  },
  {
    v: 'v1.2',
    date: 'Jun 2023 – Aug 2023',
    title: 'RPA Developer @ AccuMed',
    note: 'Spearheaded the implementation of Robotic Process Automation (RPA) solutions, reducing human error by 25% and increasing work speed by 30% in daily operations. Conducted comprehensive workflow analyses to identify and execute high-impact automation opportunities, enhancing overall operational efficiency. Collaborated with cross-functional teams to gather requirements and align automation projects with organizational objectives, ensuring seamless integration of RPA solutions and web scrapping. Developed and maintained detailed documentation for all RPA solutions, facilitating knowledge transfer and supporting long-term maintenance efforts.',
    tag: 'work',
  },
  {
    v: 'v1.0',
    date: 'Apr 2023',
    title: 'CUD Engineering Day — Best Project Showcase',
    note: 'Won Project Showcase and Posters Competition for CUD Navigator.',
    tag: 'award',
  },
  {
    v: 'v0.5',
    date: 'May 2023',
    title: 'Meta — Programming with JavaScript',
    note: 'Completed Meta Programming with JavaScript certification.',
    tag: 'certification',
  },
  {
    v: 'v0.1',
    date: 'Dec 2021',
    title: 'Web Design Certificate',
    note: 'First certification shipped. The beginning.',
    tag: 'certification',
  },
]

// Awards live in /achievements, certs live in /certifications — the experience
// tab is work history only.
export const experienceEntries = entries.filter(e => e.tag !== 'award' && e.tag !== 'certification')
