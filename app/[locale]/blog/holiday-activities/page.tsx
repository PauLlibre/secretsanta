import { FaTree, FaSnowman, FaCookieBite, FaSleigh, FaGifts, FaMusic, FaFilm } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';
import decorateTree from "../../../../public/images/decorate-tree.jpg";
import buildSnowman from "../../../../public/images/build-snowman.jpg";
import bakeCookies from "../../../../public/images/bake-cookies.jpg";
import goSledding from "../../../../public/images/sledding.jpg";
import exchangeGifts from "../../../../public/images/gifts.jpg";
import singCarols from "../../../../public/images/carols.jpg";
import watchMovies from "../../../../public/images/movies.jpg";
import christmasMarket from "../../../../public/images/christmas-market.jpg";
import { setRequestLocale } from 'next-intl/server';

export default function HolidayActivities({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  
  const router = useRouter();
  const t = useTranslations('holidayActivities');
  const common = useTranslations('common');

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-green-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => router.push("/")}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-2 shadow-md"
        >
          <FaSleigh className="text-xl" /> {t('buttons.returnHome')}
        </button>
      </div>
      <header className="py-12 md:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 text-center text-gray-800 tracking-tight">
            {t('title')}
          </h1>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center gap-3">
              <FaTree className="text-green-600" aria-hidden="true" /> {t('activities.decorateTree.title')}
            </h2>
            <p className="text-gray-700 mb-4">
              {t('activities.decorateTree.description')}
            </p>
            <div className="relative w-full aspect-square">
              <Image
                src={decorateTree}
                alt={t('activities.decorateTree.title')}
                fill
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center gap-3">
              <FaCookieBite className="text-yellow-600" aria-hidden="true" /> {t('activities.bakeCookies.title')}
            </h2>
            <p className="text-gray-700 mb-4">
              {t('activities.bakeCookies.description')}
            </p>
            <div className="relative w-full aspect-square">
              <Image
                src={bakeCookies}
                alt={t('activities.bakeCookies.title')}
                fill
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center gap-3">
              <FaSnowman className="text-blue-600" aria-hidden="true" /> {t('activities.buildSnowman.title')}
            </h2>
            <p className="text-gray-700 mb-4">
              {t('activities.buildSnowman.description')}
            </p>
            <div className="relative w-full aspect-square">
              <Image
                src={buildSnowman}
                alt={t('activities.buildSnowman.title')}
                fill
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center gap-3">
              <FaSleigh className="text-red-600" aria-hidden="true" /> {t('activities.goSledding.title')}
            </h2>
            <p className="text-gray-700 mb-4">
              {t('activities.goSledding.description')}
            </p>
            <div className="relative w-full aspect-square">
              <Image
                src={goSledding}
                alt={t('activities.goSledding.title')}
                fill
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center gap-3">
              <FaGifts className="text-purple-600" aria-hidden="true" /> {t('activities.exchangeGifts.title')}
            </h2>
            <p className="text-gray-700 mb-4">
              {t('activities.exchangeGifts.description')}
            </p>
            <div className="relative w-full aspect-square">
              <Image
                src={exchangeGifts}
                alt={t('activities.exchangeGifts.title')}
                fill
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center gap-3">
              <FaMusic className="text-red-500" aria-hidden="true" /> {t('activities.singCarols.title')}
            </h2>
            <p className="text-gray-700 mb-4">
              {t('activities.singCarols.description')}
            </p>
            <div className="relative w-full aspect-square">
              <Image
                src={singCarols}
                alt={t('activities.singCarols.title')}
                fill
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center gap-3">
              <FaFilm className="text-green-500" aria-hidden="true" /> {t('activities.watchMovies.title')}
            </h2>
            <p className="text-gray-700 mb-4">
              {t('activities.watchMovies.description')}
            </p>
            <div className="relative w-full aspect-square">
              <Image
                src={watchMovies}
                alt={t('activities.watchMovies.title')}
                fill
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center gap-3">
              <FaTree className="text-green-600" aria-hidden="true" /> {t('activities.christmasMarket.title')}
            </h2>
            <p className="text-gray-700 mb-4">
              {t('activities.christmasMarket.description')}
            </p>
            <div className="relative w-full aspect-square">
              <Image
                src={christmasMarket}
                alt={t('activities.christmasMarket.title')}
                fill
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 text-center text-gray-600 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          {common('copyright', { year: new Date().getFullYear() })}
        </div>
      </footer>
    </div>
  );
}
