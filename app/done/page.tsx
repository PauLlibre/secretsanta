"use client"

import { useRouter } from 'next/navigation';
import { FaRedo, FaShareAlt, FaWhatsapp } from 'react-icons/fa';

export default function Done() {
  const router = useRouter();

  const shareOnWhatsapp = () => {
    const message = "We just completed our Secret Santa exchange! Check it out!";
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 shadow-md mb-4 md:mb-0"
          >
            <FaRedo className="text-xl" /> Start Over
          </button>
        </div>

        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800 flex items-center justify-center gap-4">
          <FaShareAlt className="text-blue-600 text-3xl" />
          Secret Santa Completed!
          <FaShareAlt className="text-purple-600 text-3xl" />
        </h1>
        
        <div className="bg-white p-8 rounded-xl shadow-xl mb-12 backdrop-blur-sm bg-opacity-90">
          <h2 className="text-2xl mb-6 text-center text-gray-800 font-semibold">Share the Fun</h2>
          <div className="space-y-6">
            <button
              onClick={shareOnWhatsapp}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
            >
              <FaWhatsapp className="text-xl" /> Share on Whatsapp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
