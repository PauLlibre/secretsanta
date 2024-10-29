import { setRequestLocale } from 'next-intl/server';
import HolidayActivitiesContent from './components/HolidayActivitiesContent';

export const generateStaticParams = () => {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'cat' }];
};

export default async function HolidayActivities({ 
  params 
}: { 
  params: { locale: string } 
}) {
  setRequestLocale(params.locale);

  return (
    <HolidayActivitiesContent />
  );
}
