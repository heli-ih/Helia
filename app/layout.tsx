import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Helia",
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
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className="bg-gray-900">{children}</body>
    </html>
  );
}
