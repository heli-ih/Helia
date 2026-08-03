// Plain data module — see data/profile.ts for why this lives outside the
// 'use client' section files.

export type Award = {
  v: string
  date: string
  title: string
  note: string
  link?: string
  image?: string
}

export const awards: Award[] = [
  {
    v: 'a1',
    date: 'June 2024',
    title: 'IEEE Best Software Engineering Project',
    note: 'A winner of the "The Best Software Engineering Project" for the "FoodGaurdian" project',
    link: 'https://www.cud.ac.ae/news/canadian-university-dubai-students-secure-third-place-ieee-uae-student-day-competitions',
    image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FIEEE2024-Comp%20Science-Cover.jpeg?alt=media&token=b0c8ad1b-caee-4620-8913-65bd9e446b6a',
  },
  {
    v: 'a2',
    date: 'April 2024',
    title: 'Zayed University 15th Annual Undergraduate Research Conference on Applied Computing',
    note: 'A winner of the "The Best Poster Presentation" for the research and project titled "A Dynamic Priority Queue for Food Pickup Scheduling"',
    link: 'https://www.cud.ac.ae/news/cud-students-won-the-15th-annual-undergraduate-research-conference-and-applied-computing',
    image: 'https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FIMG_6010.jpg?alt=media&token=6538197d-1af5-418a-acdc-642b2a4ad96d',
  },
  {
    v: 'a3',
    date: 'April 2024',
    title: 'CUD Engineering Project Showcase Competition — Best Research',
    note: 'A winner of the "The Best Research" category for the research and project titled "A Dynamic Priority Queue for Food Pickup Scheduling"',
  },
  {
    v: 'a4',
    date: 'April 2024',
    title: 'CUD Engineering Project Showcase Competition — Best Software',
    note: 'A winner of the "The Best Software" category for the project titled "CUD Navigator"',
  },
]
