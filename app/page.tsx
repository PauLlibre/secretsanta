"use client";

import { useRouter } from "next/navigation";
import { FaGift, FaSleigh } from "react-icons/fa";
import Head from "next/head";
import Faqs from "./components/faqs";

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push(`/participants`);
  };

  const handleHolidayActivities = () => {
    router.push('/blog/holiday-activities');
  };

  return (
    <>
      <Head>
        <title>
          Easy Secret Santa - Organize Your Holiday Gift Exchange Effortlessly
        </title>
        <meta
          name="description"
          content="Organize your Secret Santa gift exchange effortlessly with Easy Secret Santa. Set up participants, manage wishlists, and automate gift assignments in minutes!"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          property="og:title"
          content="Easy Secret Santa - Simplify Your Holiday Gift Exchange"
        />
        <meta
          property="og:description"
          content="Take the stress out of organizing Secret Santa! Our free tool handles everything from participant management to gift assignments."
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-green-50">
        <header className="py-12 md:py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 text-center text-gray-800 tracking-tight">
              <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8 animate-fade-in">
                  <FaGift
                    className="text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl transform hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  />
                  <span className="whitespace-nowrap font-extrabold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">Easy</span>
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
                  <span className="whitespace-nowrap font-extrabold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">Secret Santa</span>
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
              Organize your Secret Santa gift exchange effortlessly! Set up participants, manage wishlists, and let us handle the random assignments. Perfect for families, friends, and office celebrations.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleStart}
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-500 text-white px-8 sm:px-10 py-4 rounded-xl hover:from-green-700 hover:to-green-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg text-lg sm:text-xl md:text-2xl font-bold transform hover:scale-105 hover:shadow-xl"
              >
                <FaGift className="text-xl sm:text-2xl md:text-3xl" aria-hidden="true" />
                Start Exchange
              </button>
              <button
                onClick={handleHolidayActivities}
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 text-white px-8 sm:px-10 py-4 rounded-xl hover:from-red-700 hover:to-red-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg text-lg sm:text-xl md:text-2xl font-bold transform hover:scale-105 hover:shadow-xl"
              >
                <FaSleigh className="text-xl sm:text-2xl md:text-3xl" aria-hidden="true" />
                Holiday Activities
              </button>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
            <section className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <FaGift className="text-red-600" />
                Why Choose Easy Secret Santa?
              </h2>
              <ul className="space-y-4 text-left text-gray-700">
                <li className="flex items-center gap-2 text-lg">
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                  Simple and intuitive interface
                </li>
                <li className="flex items-center gap-2 text-lg">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  Automatic gift assignments
                </li>
                <li className="flex items-center gap-2 text-lg">
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                  Manage wishlists and budgets
                </li>
                <li className="flex items-center gap-2 text-lg">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  Perfect for any group size
                </li>
              </ul>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <FaSleigh className="text-green-600" />
                How It Works
              </h2>
              <ol className="space-y-4 text-left text-gray-700">
                <li className="flex items-center gap-3 text-lg">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-red-500 to-green-500 text-white text-sm font-bold">1</span>
                  Enter the names and emails of participants
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-red-500 to-green-500 text-white text-sm font-bold">2</span>
                  Set up wishlists and budgets
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-red-500 to-green-500 text-white text-sm font-bold">3</span>
                  We randomly assign gift givers
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-red-500 to-green-500 text-white text-sm font-bold">4</span>
                  Participants receive their assignments via email
                </li>
              </ol>
            </section>
          </div>

          <Faqs />
          
        </main>
        <footer className="py-8 text-center text-gray-600 border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-4">
            &copy; {new Date().getFullYear()} Easy Secret Santa. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
