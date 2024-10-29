// app/[locale]/layout.tsx

import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
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
    params: { locale: string };
  }
) {
  const { children, params } = props;
  const locale = params.locale;

  return (
    <html lang={locale}>
      <body className={`${comicNeue.variable} antialiased`}>
          {children}
      </body>
    </html>
  );
}
