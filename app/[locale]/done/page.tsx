"use client";

import { useRouter } from "next/navigation";
import { FaRedo, FaShareAlt, FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';

export default function Done() {
  const t = useTranslations('done');
  const router = useRouter();
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // Display confetti for 5 seconds

    // Set window dimensions after mount
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Handle window resize
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shareMessage = encodeURIComponent(t('description'));

  const shareOnWhatsapp = () => {
    const url = `https://wa.me/?text=${shareMessage}`;
    window.open(url, "_blank");
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=https://easysecret-santa.com&quote=${shareMessage}`;
    window.open(url, "_blank");
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${shareMessage}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {showConfetti && windowDimensions.width > 0 && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          numberOfPieces={400}
          recycle={false}
          gravity={0.3}
        />
      )}
      
      <header className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <button
            onClick={() => router.push("/")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 shadow-md"
            aria-label={t('buttons.startOver')}
          >
            <FaRedo className="text-xl" aria-hidden="true" /> {t('buttons.startOver')}
          </button>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 text-gray-800 flex items-center justify-center gap-4">
            <FaShareAlt className="text-blue-600 text-3xl" aria-hidden="true" />
            {t('congratulations')}
            <FaShareAlt className="text-purple-600 text-3xl" aria-hidden="true" />
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            {t('description')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={shareOnWhatsapp}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
              aria-label={t('share.whatsapp')}
            >
              <FaWhatsapp className="text-xl" aria-hidden="true" /> {t('share.whatsapp')}
            </button>
            <button
              onClick={shareOnFacebook}
              className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
              aria-label={t('share.facebook')}
            >
              <FaFacebook className="text-xl" aria-hidden="true" /> {t('share.facebook')}
            </button>
            <button
              onClick={shareOnTwitter}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
              aria-label={t('share.twitter')}
            >
              <FaTwitter className="text-xl" aria-hidden="true" /> {t('share.twitter')}
            </button>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Keep the Fun Going!</h2>
          <p className="text-center text-gray-700 mb-6">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => router.push("/")}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center gap-2 shadow-md"
              aria-label={t('buttons.organizeAnother')}
            >
              <FaRedo className="text-xl" aria-hidden="true" /> {t('buttons.organizeAnother')}
            </button>
            <a
              href="/blog/holiday-activities"
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2 shadow-md"
              aria-label={t('buttons.holidayActivities')}
            >
              <FaShareAlt className="text-xl" aria-hidden="true" /> {t('buttons.holidayActivities')}
            </a>
          </div>
        </section>
      </main>
      
      <footer className="py-8 text-center text-gray-500">
        {t('common.copyright', { year: new Date().getFullYear() })}
      </footer>
    </div>
  );
}
