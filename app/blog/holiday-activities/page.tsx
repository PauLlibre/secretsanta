"use client";

import { FaTree, FaSnowman, FaCookieBite, FaSleigh, FaGifts, FaMusic, FaFilm } from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import decorateTree from "../../../public/images/decorate-tree.jpg";
import buildSnowman from "../../../public/images/build-snowman.jpg";
import bakeCookies from "../../../public/images/bake-cookies.jpg";
import goSledding from "../../../public/images/sledding.jpg";
import exchangeGifts from "../../../public/images/gifts.jpg";
import singCarols from "../../../public/images/carols.jpg";
import watchMovies from "../../../public/images/movies.jpg";
import christmasMarket from "../../../public/images/christmas-market.jpg";

export default function HolidayActivities() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Fun Holiday Activities - Easy Secret Santa</title>
        <meta
          name="description"
          content="Explore a variety of fun holiday activities to enjoy this season. From decorating the tree to baking cookies, get inspired with our festive ideas!"
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-green-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <button
            onClick={() => router.push("/")}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-2 shadow-md"
          >
            <FaSleigh className="text-xl" /> Return Home
          </button>
        </div>
        <header className="py-12 md:py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 text-center text-gray-800 tracking-tight">
              Fun Holiday Activities
            </h1>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center gap-3">
                <FaTree className="text-green-600" aria-hidden="true" /> Decorate the Tree
              </h2>
              <p className="text-gray-700 mb-4">
                Gather around and bring the holiday spirit to life by decorating the Christmas tree with lights, ornaments, and tinsel.
              </p>
              <div className="relative w-full aspect-square">
                <Image
                  src={decorateTree}
                  alt="Decorate the Tree"
                  fill
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center gap-3">
                <FaCookieBite className="text-yellow-600" aria-hidden="true" /> Bake Cookies
              </h2>
              <p className="text-gray-700 mb-4">
                Whip up some delicious holiday cookies. Get creative with shapes, decorations, and flavors that everyone will enjoy.
              </p>
              <div className="relative w-full aspect-square">
                <Image
                  src={bakeCookies}
                  alt="Bake Cookies"
                  fill
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center gap-3">
                <FaSnowman className="text-blue-600" aria-hidden="true" /> Build a Snowman
              </h2>
              <p className="text-gray-700 mb-4">
                Embrace the snowy weather by building a snowman. Don&apos;t forget the carrot nose and cozy scarf!
              </p>
              <div className="relative w-full aspect-square">
                <Image
                  src={buildSnowman}
                  alt="Build a Snowman"
                  fill
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center gap-3">
                <FaSleigh className="text-red-600" aria-hidden="true" /> Go Sledding
              </h2>
              <p className="text-gray-700 mb-4">
                Hit the slopes for some sledding fun. Feel the rush as you slide down snowy hills with friends and family.
              </p>
              <div className="relative w-full aspect-square">
                <Image
                  src={goSledding}
                  alt="Go Sledding"
                  fill
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center gap-3">
                <FaGifts className="text-purple-600" aria-hidden="true" /> Exchange Gifts
              </h2>
              <p className="text-gray-700 mb-4">
                Organize a gift exchange with loved ones. Share joy and surprises through thoughtful presents.
              </p>
              <div className="relative w-full aspect-square">
                <Image
                  src={exchangeGifts}
                  alt="Exchange Gifts"
                  fill
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center gap-3">
                <FaMusic className="text-red-500" aria-hidden="true" /> Sing Carols
              </h2>
              <p className="text-gray-700 mb-4">
                Spread cheer by singing holiday carols. Gather a group and bring joy to your neighborhood with festive songs.
              </p>
              <div className="relative w-full aspect-square">
                <Image
                  src={singCarols}
                  alt="Sing Carols"
                  fill
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center gap-3">
                <FaFilm className="text-green-500" aria-hidden="true" /> Watch Holiday Movies
              </h2>
              <p className="text-gray-700 mb-4">
                Cozy up with classic holiday movies. From heartwarming tales to comedic adventures, there&apos;s something for everyone.
              </p>
              <div className="relative w-full aspect-square">
                <Image
                  src={watchMovies}
                  alt="Watch Holiday Movies"
                  fill
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center gap-3">
                <FaTree className="text-green-600" aria-hidden="true" /> Visit a Christmas Market
              </h2>
              <p className="text-gray-700 mb-4">
                Explore a local Christmas market. Enjoy festive foods, handcrafted gifts, and the warm holiday atmosphere.
              </p>
              <div className="relative w-full aspect-square">
                <Image
                  src={christmasMarket}
                  alt="Visit a Christmas Market"
                  fill
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
            </div>
          </section>
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
