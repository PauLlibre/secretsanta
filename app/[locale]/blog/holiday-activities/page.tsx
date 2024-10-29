import { setRequestLocale } from 'next-intl/server';
import HolidayActivitiesContent from './components/HolidayActivitiesContent';

export const generateStaticParams = () => {
  return [
    { locale: 'en' },
    { locale: 'es' },
    { locale: 'cat' },
    { locale: 'fr' },
    { locale: 'it' },
  ];
};

interface PageProps {
  params: { locale: string };
}

export default function HolidayActivities({ params }: PageProps) {
  setRequestLocale(params.locale);

  return <HolidayActivitiesContent />;
}
