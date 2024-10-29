export default function Faqs() {
  return (
    <section className="py-12 md:py-16" id="faqs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center gap-4">
          Frequently Asked Questions
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">How does the Secret Santa assignment work?</h3>
            <p className="text-gray-700">
              Our system uses a secure random assignment algorithm to match gift givers with recipients. Each participant is guaranteed to both give and receive a gift, and no one will be assigned to themselves. Assignments are sent via email to maintain the surprise!
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Is my information secure?</h3>
            <p className="text-gray-700">
              Yes! We only collect essential information needed for the gift exchange (names, emails, wishlists). Your data is used solely for Secret Santa assignments and communications. We never share your information with third parties.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Can I set a budget for the gift exchange?</h3>
            <p className="text-gray-700">
              Absolutely! You can set either a global budget for all participants or individual budgets. This helps ensure everyone's comfort level and creates a fair exchange experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">How do I add participants?</h3>
            <p className="text-gray-700">
              You can add participants individually through our form or bulk upload them using a CSV file. We provide a template to make the process easier. Each participant needs a name and email address, with optional wishlist and budget fields.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">What if someone doesn't receive their assignment email?</h3>
            <p className="text-gray-700">
              Assignment emails are sent immediately after the exchange is started. If someone doesn't receive their email, check their spam folder first. You can also restart the assignment process if needed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Can I organize multiple gift exchanges?</h3>
            <p className="text-gray-700">
              Yes! You can organize as many gift exchanges as you want. Each exchange is handled separately, making it perfect for different groups like family, friends, or office celebrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}