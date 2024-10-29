"use client";

import { useRouter } from "next/navigation";
import { FaRedo, FaShareAlt, FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";
import Head from "next/head";

export default function Done() {
  const router = useRouter();

  const shareMessage = encodeURIComponent(
    "We just completed our Secret Santa exchange! It was so much fun! 🎅🎁 Check it out: https://easysecret-santa.com"
  );

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
    <>
      <Head>
        <title>Secret Santa Exchange Complete - Share the Holiday Joy!</title>
        <meta
          name="description"
          content="Your Secret Santa gift exchange was a success! Share the holiday joy with friends and family. Organize fun and easy gift exchanges with Easy Secret Santa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Secret Santa Exchange Complete - Share the Holiday Joy!"
        />
        <meta
          property="og:description"
          content="Your Secret Santa gift exchange was a success! Share the holiday joy with friends and family."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://easysecret-santa.com/done" />
        <meta property="og:image" content="https://easysecret-santa.com/og-image.jpg" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Secret Santa Exchange Complete" />
        <meta
          name="twitter:description"
          content="Your Secret Santa gift exchange was a success! Share the holiday joy with friends and family."
        />
        <meta name="twitter:image" content="https://easysecret-santa.com/twitter-image.jpg" />
        <link rel="canonical" href="https://easysecret-santa.com/done" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Secret Santa Exchange Complete",
              "url": "https://easysecret-santa.com/done",
              "description":
                "Your Secret Santa gift exchange was a success! Share the holiday joy with friends and family.",
            }),
          }}
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
        <header className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <button
              onClick={() => router.push("/")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 shadow-md"
              aria-label="Start a new Secret Santa exchange"
            >
              <FaRedo className="text-xl" aria-hidden="true" /> Start Over
            </button>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 flex items-center justify-center gap-4">
              <FaShareAlt className="text-blue-600 text-3xl" aria-hidden="true" />
              Secret Santa Completed!
              <FaShareAlt className="text-purple-600 text-3xl" aria-hidden="true" />
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Congratulations! Your Secret Santa gift exchange was a success. Spread the holiday cheer by sharing your experience with others!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={shareOnWhatsapp}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
                aria-label="Share on WhatsApp"
              >
                <FaWhatsapp className="text-xl" aria-hidden="true" /> Share on WhatsApp
              </button>
              <button
                onClick={shareOnFacebook}
                className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
                aria-label="Share on Facebook"
              >
                <FaFacebook className="text-xl" aria-hidden="true" /> Share on Facebook
              </button>
              <button
                onClick={shareOnTwitter}
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
                aria-label="Share on Twitter"
              >
                <FaTwitter className="text-xl" aria-hidden="true" /> Share on Twitter
              </button>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Keep the Fun Going!</h2>
            <p className="text-center text-gray-700 mb-6">
              Want to organize another exchange or explore more holiday activities? Check out our resources below.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => router.push("/")}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center gap-2 shadow-md"
                aria-label="Organize another Secret Santa"
              >
                <FaRedo className="text-xl" aria-hidden="true" /> Organize Another Exchange
              </button>
              <a
                href="/blog/holiday-activities"
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2 shadow-md"
                aria-label="Explore holiday activities"
              >
                <FaShareAlt className="text-xl" aria-hidden="true" /> Holiday Activities
              </a>
            </div>
          </section>
        </main>
        <footer className="py-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Easy Secret Santa. All rights reserved.
        </footer>
      </div>
    </>
  );
}
