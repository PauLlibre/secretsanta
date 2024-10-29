"use client";

import { useTranslations } from 'next-intl';

export default function Faqs() {
  const t = useTranslations('faqs');

  return (
    <section className="py-12 md:py-16" id="faqs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center gap-4">
          {t('title')}
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{t('questions.assignments.title')}</h3>
            <p className="text-gray-700">
              {t('questions.assignments.answer')}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{t('questions.security.title')}</h3>
            <p className="text-gray-700">
              {t('questions.security.answer')}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{t('questions.budget.title')}</h3>
            <p className="text-gray-700">
              {t('questions.budget.answer')}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{t('questions.participants.title')}</h3>
            <p className="text-gray-700">
              {t('questions.participants.answer')}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{t('questions.emails.title')}</h3>
            <p className="text-gray-700">
              {t('questions.emails.answer')}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{t('questions.multiple.title')}</h3>
            <p className="text-gray-700">
              {t('questions.multiple.answer')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}