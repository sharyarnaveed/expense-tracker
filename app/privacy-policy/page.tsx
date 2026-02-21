import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: February 21, 2026</p>

        <p className="text-gray-700 mb-6">
          This Privacy Policy explains how <strong>MoneyLynx</strong> collects, uses,
          stores, and protects your information when you use our finance and expense
          tracking application (the &quot;App&quot;).
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Account details such as name, email, and login credentials.</li>
            <li>Financial entries you add, including expenses, budgets, categories, notes, and receipts.</li>
            <li>Device and usage information such as browser type, app activity, and error logs.</li>
            <li>Optional contact information when you submit support requests.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Provide core app features like expense tracking, budgeting, and reporting.</li>
            <li>Improve performance, reliability, and user experience.</li>
            <li>Send service-related communications, security alerts, and account notices.</li>
            <li>Provide customer support and respond to your requests.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Legal Basis for Processing</h2>
          <p className="text-gray-700">
            We process your information to deliver the services you request, comply with legal
            obligations, protect against fraud and abuse, and pursue legitimate interests such as
            maintaining and improving the App.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Data Sharing</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>We do not sell your personal financial data.</li>
            <li>We may share limited data with trusted service providers for hosting, analytics, and support.</li>
            <li>We may disclose data when required by law or to protect legal rights and security.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Data Security</h2>
          <p className="text-gray-700">
            We apply administrative, technical, and organizational safeguards to protect your data,
            including encryption in transit and access controls. No system is 100% secure, but we
            continuously work to reduce risk.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Data Retention</h2>
          <p className="text-gray-700">
            We retain your information as long as your account is active or as needed to provide
            services, resolve disputes, enforce agreements, and satisfy legal requirements.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Your Privacy Rights</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Access, update, or delete your account information where available.</li>
            <li>Request a copy of your data.</li>
            <li>Object to or restrict certain processing where permitted by law.</li>
            <li>Withdraw consent for optional communications at any time.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Children&apos;s Privacy</h2>
          <p className="text-gray-700">
            The App is not intended for children under 13. We do not knowingly collect personal
            information from children under 13.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Policy Updates</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Updated versions will be posted
            on this page with a revised &quot;Last Updated&quot; date.
          </p>
        </section>

        <section className="mb-2">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Contact Us</h2>
          <p className="text-gray-700">
            For privacy questions or requests, contact us at{" "}
            <a href="mailto:privacy@moneylynx.app" className="text-blue-600 hover:underline">
              privacy@moneylynx.app
            </a>
            .
          </p>
        </section>

        <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-600 flex flex-wrap items-center justify-center gap-2">
          <span>Read also:</span>
          <Link href="/termsandcondition" className="text-blue-600 hover:underline">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}
