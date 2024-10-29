import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'done.metadata' });
  
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('og.title'),
      description: t('og.description'),
      type: 'website',
      url: 'https://easysecret-santa.com/done',
      images: [{
        url: 'https://easysecret-santa.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: t('og.imageAlt'),
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitter.title'),
      description: t('twitter.description'),
      images: ['https://easysecret-santa.com/twitter-image.jpg'],
    },
  };
} 