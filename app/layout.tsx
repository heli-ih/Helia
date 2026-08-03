import type { Metadata, Viewport } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";
import {
  SITE_URL, NAME, ROLE, EMAIL, LINKS, BIO, TAGLINE, SERVICES,
} from "@/data/profile";
import { knowsAbout } from "@/data/stack";
import { awards } from "@/data/awards";

const TITLE = "Helia Haghighi — Software & Web Developer in Dubai, UAE";
const DESCRIPTION =
  "Software developer and data analyst in Dubai, UAE. I design and build websites, web applications, and mobile apps — Next.js, React, Laravel, React Native.";

// 1200x630 is the size LinkedIn / X / Facebook expect for a large card. The
// dimensions declared below must match the real file: public/og.jpg.
const OG_IMAGE = "/og.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Helia Haghighi",
  },
  description: DESCRIPTION,
  keywords: [
    "Helia Haghighi",
    "Helia",
    "Haghighi",
    "software developer Dubai",
    "web developer Dubai",
    "web developer UAE",
    "website design Dubai",
    "website development UAE",
    "freelance web developer Dubai",
    "React developer Dubai",
    "Next.js developer UAE",
    "mobile app developer Dubai",
    "data analyst Dubai",
    "UI UX designer Dubai",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  publisher: NAME,
  applicationName: NAME,
  category: "technology",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "profile",
    firstName: "Helia",
    lastName: "Haghighi",
    locale: "en_US",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${NAME} — ${ROLE}, Dubai, UAE`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  // Paste the token from Google Search Console → Settings → Ownership
  // verification → HTML tag, then uncomment. Until the property is verified,
  // none of the indexing reports are available.
  // verification: { google: "..." },
};

export const viewport: Viewport = {
  themeColor: "#060608",
  colorScheme: "dark",
};

// One @graph rather than several loose blocks, so the entities can reference
// each other by @id. Everything asserted here is backed by content rendered on
// the page (see app/SeoContent.tsx) — never add a claim the page does not show.
const PERSON_ID = `${SITE_URL}#person`;
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: NAME,
      givenName: "Helia",
      familyName: "Haghighi",
      url: SITE_URL,
      image: `${SITE_URL}/Helia.jpg`,
      jobTitle: ROLE,
      description: `${TAGLINE} ${BIO}`,
      email: `mailto:${EMAIL}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Canadian University Dubai",
        url: "https://www.cud.ac.ae/",
      },
      knowsAbout,
      knowsLanguage: "en",
      award: awards.map(a => a.title),
      makesOffer: SERVICES.map(s => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
          provider: { "@id": PERSON_ID },
          areaServed: {
            "@type": "Country",
            name: "United Arab Emirates",
          },
        },
      })),
      sameAs: [LINKS.github, LINKS.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: NAME,
      description: DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Fonts and project imagery are third-party origins on the critical
            path; warming the connections early cuts a DNS + TLS round trip off
            the first render and off the first project image. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://firebasestorage.googleapis.com" />
        <link rel="dns-prefetch" href="https://firebasestorage.googleapis.com" />
        {/* Only the two families the CSS actually references: Inter (--font-mono)
            and Syne (--font-sans). Moved out of an @import in globals.css so the
            request starts as soon as the HTML is parsed. */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className="bg-gray-900">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
