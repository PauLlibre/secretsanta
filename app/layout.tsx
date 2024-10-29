// app/[locale]/layout.tsx

import type { Metadata } from 'next';
import './globals.css';
import { Comic_Neue } from 'next/font/google';

const comicNeue = Comic_Neue({
  weight: ['400', '700'],
  variable: '--font-comic-neue',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Easy Secret Santa',
  description: 'An easy way to organize Secret Santa exchanges',
};

export default async function LocaleLayout(
  props: {
    children: React.ReactNode;
  }
) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={`${comicNeue.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
