import { setRequestLocale } from 'next-intl/server';
import HolidayActivitiesContent from './components/HolidayActivitiesContent';

interface HolidayActivitiesProps {
  params: { locale: string };
}

export default async function HolidayActivities(
  props: HolidayActivitiesProps
): Promise<JSX.Element> {
  setRequestLocale(props.params.locale);

  return <HolidayActivitiesContent />;
}
