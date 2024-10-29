"use client";

import { useRouter } from "next/navigation";
import { FaGift, FaSleigh } from "react-icons/fa";
import Head from "next/head";
import Faqs from "../components/faqs";
import { useTranslations } from 'next-intl';

export default function Home({ params }: { params: { locale: string } }) {
  const router = useRouter();
  const t = useTranslations('home');
  const commonT = useTranslations('common');

  const handleStart = () => {
    router.push(`/participants`);
  };

  const handleHolidayActivities = () => {
    router.push('/blog/holiday-activities');
  };

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta
          name="description"
          content={t('description')}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          property="og:title"
          content={t('title')}
        />
        <meta
          property="og:description"
          content={t('description')}
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-green-50 pt-16">
        <header className="py-12 md:py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 text-center text-gray-800 tracking-tight">
              <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8 animate-fade-in">
                  <FaGift
                    className="text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl transform hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  />
                  <span className="whitespace-nowrap font-extrabold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">{t('subtitle.easy')}</span>
                  <FaGift
                    className="text-green-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl transform hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8 animate-fade-in-delayed">
                  <FaSleigh
                    className="text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl transform hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  />
                  <span className="whitespace-nowrap font-extrabold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">{t('subtitle.secretSanta')}</span>
                  <FaSleigh
                    className="text-green-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl transform hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </h1>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="text-center mb-16 md:mb-20">
            <p className="text-gray-700 max-w-3xl mx-auto mb-10 text-lg sm:text-xl md:text-2xl leading-relaxed">
              {t('description')}
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleStart}
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-500 text-white px-8 sm:px-10 py-4 rounded-xl hover:from-green-700 hover:to-green-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg text-lg sm:text-xl md:text-2xl font-bold transform hover:scale-105 hover:shadow-xl"
              >
                <FaGift className="text-xl sm:text-2xl md:text-3xl" aria-hidden="true" />
                {t('buttons.startExchange')}
              </button>
              <button
                onClick={handleHolidayActivities}
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 text-white px-8 sm:px-10 py-4 rounded-xl hover:from-red-700 hover:to-red-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg text-lg sm:text-xl md:text-2xl font-bold transform hover:scale-105 hover:shadow-xl"
              >
                <FaSleigh className="text-xl sm:text-2xl md:text-3xl" aria-hidden="true" />
                {t('buttons.holidayActivities')}
              </button>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
            <section className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <FaGift className="text-red-600" />
                {t('features.title')}
              </h2>
              <ul className="space-y-4 text-left text-gray-700">
                <li className="flex items-center gap-2 text-lg">
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                  {t('features.list.interface')}
                </li>
                <li className="flex items-center gap-2 text-lg">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  {t('features.list.assignments')}
                </li>
                <li className="flex items-center gap-2 text-lg">
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                  {t('features.list.wishlists')}
                </li>
                <li className="flex items-center gap-2 text-lg">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  {t('features.list.groupSize')}
                </li>
              </ul>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <FaSleigh className="text-green-600" />
                {t('howItWorks.title')}
              </h2>
              <ol className="space-y-4 text-left text-gray-700">
                <li className="flex items-center gap-3 text-lg">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-red-500 to-green-500 text-white text-sm font-bold">1</span>
                  {t('howItWorks.steps.step1')}
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-red-500 to-green-500 text-white text-sm font-bold">2</span>
                  {t('howItWorks.steps.step2')}
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-red-500 to-green-500 text-white text-sm font-bold">3</span>
                  {t('howItWorks.steps.step3')}
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-red-500 to-green-500 text-white text-sm font-bold">4</span>
                  {t('howItWorks.steps.step4')}
                </li>
              </ol>
            </section>
          </div>

          <Faqs />
          
        </main>
        <footer className="py-8 text-center text-gray-600 border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-4">
            {commonT('copyright', { year: new Date().getFullYear() })}
          </div>
        </footer>
      </div>
    </>
  );
}
