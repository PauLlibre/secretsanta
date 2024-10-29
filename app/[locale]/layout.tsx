// app/[locale]/layout.tsx

import type { Metadata } from "next";
import "../globals.css";
import { Comic_Neue } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from '../components/LanguageSwitcher';

const comicNeue = Comic_Neue({
  weight: ["400", "700"],
  variable: "--font-comic-neue",
  subsets: ["latin"],
});

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  const { locale } = await params;
  try {
    const t = await getTranslations({ locale, namespace: 'metadata' });
    
    return {
      title: t('title'),
      description: t('description'),
      keywords: t('keywords'),
      openGraph: {
        title: t('og.title'),
        description: t('og.description'),
        type: "website",
        url: "https://easysecret-santa.com",
        images: [
          {
            url: "https://easysecret-santa.com/og-image.jpg",
            width: 1200,
            height: 630,
            alt: t('og.imageAlt'),
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: t('twitter.title'),
        description: t('twitter.description'),
        site: "@easysecretsanta",
        creator: "@easysecretsanta",
      },
    };
  } catch (error) {
    return {
      title: 'Easy Secret Santa',
      description: 'Organize your Secret Santa gift exchange'
    };
  }
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'cat' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className={comicNeue.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="fixed top-0 right-0 p-4 sm:p-6 z-50">
            <LanguageSwitcher />
          </div>
          <main className="flex-grow">
            {children}
          </main>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
