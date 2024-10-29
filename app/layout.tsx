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
  title: "Easy Secret Santa",
  description: "An easy way to organize Secret Santa exchanges",
};

export default async function LocaleLayout(props: {
  children: React.ReactNode;
}) {
  const { children } = props;

  return (
    <html lang="en">
      <head>
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
