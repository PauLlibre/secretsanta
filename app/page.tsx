// app/[locale]/page.tsx or wherever your Home component is located
'use client';

import { useRouter, useParams } from 'next/navigation';
import { FaGift, FaSleigh } from 'react-icons/fa';
import Head from 'next/head';

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push(`/participants`);
  };

  return (
    <>
      <Head>
        <title>Easy Secret Santa - Organize Your Gift Exchange Effortlessly</title>
        <meta name="description" content="Join Easy Secret Santa to organize your gift exchange effortlessly. Create, manage, and share your Secret Santa event with ease." />
        <meta name="keywords" content="Secret Santa, gift exchange, holiday, Christmas, organize, manage, share" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-green-50">
        <div className="max-w-4xl mx-auto p-8 flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-12 text-center text-gray-800 flex flex-col items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <FaGift className="text-red-600 text-3xl md:text-5xl lg:text-6xl" />
              <span>Easy</span>
              <FaGift className="text-green-600 text-3xl md:text-5xl lg:text-6xl" />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <FaSleigh className="text-red-600 text-3xl md:text-5xl lg:text-6xl" />
              <span>Secret Santa</span>
              <FaSleigh className="text-green-600 text-3xl md:text-5xl lg:text-6xl" />
            </div>
          </h1>

          <button
            onClick={handleStart}
            className="bg-green-600 text-white px-8 py-3 md:px-12 md:py-4 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-3 shadow-md text-lg md:text-xl font-semibold"
          >
            <FaGift className="text-xl md:text-2xl" />
            Start Exchange
          </button>
        </div>
      </div>
    </>
  );
}
