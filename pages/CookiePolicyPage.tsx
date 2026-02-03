import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie } from 'lucide-react';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-100 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-bold mb-8 hover:underline group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          BACK TO HOME
        </Link>

        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-orange-300 border-2 border-black">
              <Cookie size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black">COOKIE POLICY</h1>
          </div>

          <p className="text-neutral-500 font-mono text-sm mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">1. WHAT ARE COOKIES?</h2>
              <p className="text-neutral-700">
                Cookies are small text files that are stored on your device when you visit a website.
                They help websites remember your preferences and improve your browsing experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">2. HOW WE USE COOKIES</h2>
              <p className="text-neutral-700 mb-4">We use cookies for the following purposes:</p>

              <div className="space-y-4">
                <div className="p-4 bg-lime-100 border-2 border-black">
                  <h3 className="font-black mb-2">Essential Cookies</h3>
                  <p className="text-sm text-neutral-600">
                    Required for basic site functionality. These cannot be disabled.
                  </p>
                </div>

                <div className="p-4 bg-cyan-100 border-2 border-black">
                  <h3 className="font-black mb-2">Analytics Cookies</h3>
                  <p className="text-sm text-neutral-600">
                    Help us understand how visitors interact with our site. Used to improve our services.
                  </p>
                </div>

                <div className="p-4 bg-purple-100 border-2 border-black">
                  <h3 className="font-black mb-2">Preference Cookies</h3>
                  <p className="text-sm text-neutral-600">
                    Remember your settings and preferences for a better experience.
                  </p>
                </div>

                <div className="p-4 bg-orange-100 border-2 border-black">
                  <h3 className="font-black mb-2">Marketing Cookies</h3>
                  <p className="text-sm text-neutral-600">
                    Used to deliver relevant advertisements and track campaign effectiveness.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">3. THIRD-PARTY COOKIES</h2>
              <p className="text-neutral-700">
                We may use third-party services that set their own cookies, including:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span><strong>Google Analytics:</strong> For website analytics and usage tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span><strong>Discord:</strong> For community integration features</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span><strong>Social Media:</strong> For sharing functionality</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">4. MANAGING COOKIES</h2>
              <p className="text-neutral-700 mb-4">
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-none space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span>View what cookies are stored on your device</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span>Delete individual or all cookies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span>Block cookies from specific or all websites</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span>Set preferences for certain types of cookies</span>
                </li>
              </ul>
              <p className="text-neutral-500 mt-4 text-sm">
                Note: Blocking certain cookies may affect site functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">5. COOKIE RETENTION</h2>
              <p className="text-neutral-700">
                Different cookies are retained for different periods:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span><strong>Session cookies:</strong> Deleted when you close your browser</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span><strong>Persistent cookies:</strong> Remain for a set period (typically 30 days to 2 years)</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">6. UPDATES TO THIS POLICY</h2>
              <p className="text-neutral-700">
                We may update this Cookie Policy periodically. Changes will be posted on this page
                with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">7. CONTACT US</h2>
              <p className="text-neutral-700">
                For questions about our use of cookies, contact us at:
                <br />
                <strong>privacy@fostorylap.ai</strong>
              </p>
            </section>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/privacy" className="font-bold hover:underline">Privacy Policy →</Link>
          <Link to="/terms" className="font-bold hover:underline">Terms of Service →</Link>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
