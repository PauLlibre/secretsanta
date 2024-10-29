import { setRequestLocale } from 'next-intl/server';
import HolidayActivitiesContent from './components/HolidayActivitiesContent';

interface HolidayActivitiesProps {
  params: { locale: string };
}

export default async function HolidayActivities(
  props: Promise<HolidayActivitiesProps>
): Promise<JSX.Element> {
  const { params } = await props;
  setRequestLocale(params.locale);

  return <HolidayActivitiesContent />;
}
