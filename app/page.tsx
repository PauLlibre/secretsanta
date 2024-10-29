// app/[locale]/page.tsx or wherever your Home component is located
'use client';

import { useRouter, useParams } from 'next/navigation';
import { FaGift, FaSleigh } from 'react-icons/fa';

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push(`/participants`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-green-50">
      <div className="max-w-4xl mx-auto p-8 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl md:text-8xl font-bold mb-12 text-center text-gray-800 flex flex-col items-center gap-8">
          <div className="flex items-center gap-6">
            <FaGift className="text-red-600 text-5xl md:text-6xl" />
            <span>Easy</span>
            <FaGift className="text-green-600 text-5xl md:text-6xl" />
          </div>
          <div className="flex items-center gap-6">
            <FaSleigh className="text-red-600 text-5xl md:text-6xl" />
            <span>Secret Santa</span>
            <FaSleigh className="text-green-600 text-5xl md:text-6xl" />
          </div>
        </h1>

        <button
          onClick={handleStart}
          className="bg-green-600 text-white px-12 py-4 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-3 shadow-md text-xl font-semibold"
        >
          <FaGift className="text-2xl" />
          Start Exchange
        </button>
      </div>
    </div>
  );
}
