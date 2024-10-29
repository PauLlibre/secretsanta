"use client";

import { useRouter } from "next/navigation";
import { FaRedo, FaShareAlt, FaWhatsapp } from "react-icons/fa";
import Head from "next/head";

export default function Done() {
  const router = useRouter();

  const shareOnWhatsapp = () => {
    const message =
      "We just completed our Secret Santa exchange! Check it out!";
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Head>
        <title>Secret Santa Exchange Complete - Share the Holiday Joy!</title>
        <meta
          name="description"
          content="Secret Santa gift exchange successfully completed! Share the holiday joy with friends and family. Easy and fun way to organize gift exchanges."
        />
        <meta
          name="keywords"
          content="Secret Santa complete, gift exchange, holiday celebration, Christmas gifts, share Secret Santa, WhatsApp sharing"
        />
        <meta
          property="og:title"
          content="Secret Santa Exchange Complete - Share the Holiday Joy!"
        />
        <meta
          property="og:description"
          content="Secret Santa gift exchange successfully completed! Share the holiday joy with friends and family."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Secret Santa Exchange Complete" />
        <meta
          name="twitter:description"
          content="Gift exchange successfully completed! Share the holiday joy with friends and family."
        />
        <link rel="canonical" href="https://yourdomain.com/done" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto p-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <button
              onClick={() => router.push("/")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 shadow-md mb-4 md:mb-0"
              aria-label="Start a new Secret Santa exchange"
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
            <h2 className="text-2xl mb-6 text-center text-gray-800 font-semibold">
              Share the Holiday Joy
            </h2>
            <div className="space-y-6">
              <button
                onClick={shareOnWhatsapp}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
                aria-label="Share on WhatsApp"
              >
                <FaWhatsapp className="text-xl" /> Share on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
