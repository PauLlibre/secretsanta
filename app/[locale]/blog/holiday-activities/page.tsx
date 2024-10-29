import { setRequestLocale } from 'next-intl/server';
import HolidayActivitiesContent from './components/HolidayActivitiesContent';

export default function HolidayActivities({
  params,
}: {
  params: { locale: string };
}): JSX.Element {
  setRequestLocale(params.locale);

  return <HolidayActivitiesContent />;
}