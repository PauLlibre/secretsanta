// app/[locale]/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import { Comic_Neue } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';

const comicNeue = Comic_Neue({
  weight: ["400", "700"],
  variable: "--font-comic-neue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Easy Secret Santa | The Ultimate Holiday Gift Exchange Organizer",
  description: "Organize your Secret Santa exchanges effortlessly! Perfect for family, friends, and work parties, with customizable wishlists, budgets, and easy-to-share invites.",
  keywords: "Secret Santa, gift exchange, holiday gift organizer, Christmas exchange, online Secret Santa, family gift exchange, easy gift coordination",
  openGraph: {
    title: "Easy Secret Santa - Organize Your Holiday Gift Exchange",
    description: "Take the hassle out of Secret Santa! Easy setup for participants, budgets, wishlists, and automatic assignments for a perfect holiday.",
    type: "website",
    url: "https://easysecret-santa.com",
    images: [
      {
        url: "https://easysecret-santa.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Easy Secret Santa - Organize Your Gift Exchange",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy Secret Santa - Organize Your Holiday Gift Exchange",
    description: "Your ultimate tool for organizing a fun and simple Secret Santa exchange.",
    site: "@easysecretsanta",
    creator: "@easysecretsanta",
  },
};

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Comic+Neue&display=swap" />
        <link href="https://fonts.googleapis.com/css?family=Comic+Neue&display=swap" rel="stylesheet" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://easysecret-santa.com",
              "name": "Easy Secret Santa",
              "description": "Organize your Secret Santa exchanges with ease, perfect for families, offices, and friends.",
              "sameAs": [
                "https://facebook.com/easysecretsanta",
                "https://twitter.com/easysecretsanta",
                "https://instagram.com/easysecretsanta"
              ],
            }),
          }}
        />
        
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6085265425953301"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${comicNeue.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
