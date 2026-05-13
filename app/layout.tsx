import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";

const SITE_URL = "https://heliahaghighi.com";
const NAME = "Helia Haghighi";
const TITLE = "Helia Haghighi — Software Developer & Data Analyst";
const DESCRIPTION =
  "Helia Haghighi — Software Developer and Data Analyst. I turn complex problems into systems that work, delivering enterprise solutions and innovative products that drive business impact.";

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
    "Software Developer",
    "Data Analyst",
    "Full Stack Developer",
    "Computer Science",
    "UAE",
    "Dubai",
    "Portfolio",
  ],
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  publisher: NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: NAME,
    images: [
      {
        url: "/Helia.jpg",
        width: 1200,
        height: 630,
        alt: NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/Helia.jpg"],
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
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  url: SITE_URL,
  image: `${SITE_URL}/Helia.jpg`,
  jobTitle: "Software Developer · Data Analyst",
  description: DESCRIPTION,
  sameAs: [
    "https://github.com/heli-ih",
    "https://www.linkedin.com/in/helia-haghighi-3a9a99166/",
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=NTR:wght@400&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-gray-900">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
