import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
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
            <div className="p-3 bg-cyan-300 border-2 border-black">
              <Shield size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black">PRIVACY POLICY</h1>
          </div>

          <p className="text-neutral-500 font-mono text-sm mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">1. INTRODUCTION</h2>
              <p className="text-neutral-700">
                FostoryLap.AI ("we," "our," or "us") respects your privacy and is committed to protecting your personal data.
                This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">2. INFORMATION WE COLLECT</h2>
              <p className="text-neutral-700 mb-4">We may collect the following types of information:</p>
              <ul className="list-none space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span><strong>Personal Information:</strong> Name, email address when you subscribe to our newsletter or create an account.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and time spent.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span><strong>Device Information:</strong> Browser type, operating system, and device identifiers.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">3. HOW WE USE YOUR INFORMATION</h2>
              <p className="text-neutral-700 mb-4">We use collected information to:</p>
              <ul className="list-none space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span>Provide and maintain our services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span>Send you newsletters and updates (with your consent)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span>Analyze usage patterns to improve our platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span>Respond to your inquiries and support requests</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">4. DATA SHARING</h2>
              <p className="text-neutral-700">
                We do not sell your personal information. We may share data with trusted third-party service providers
                who assist us in operating our website, conducting our business, or serving our users. These parties
                are obligated to keep your information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">5. YOUR RIGHTS</h2>
              <p className="text-neutral-700 mb-4">You have the right to:</p>
              <ul className="list-none space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span>Access the personal data we hold about you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span>Request correction of inaccurate data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span>Request deletion of your data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span>Opt-out of marketing communications</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">6. CONTACT US</h2>
              <p className="text-neutral-700">
                If you have questions about this Privacy Policy, please contact us at:
                <br />
                <strong>privacy@fostorylap.ai</strong>
              </p>
            </section>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/terms" className="font-bold hover:underline">Terms of Service →</Link>
          <Link to="/cookies" className="font-bold hover:underline">Cookie Policy →</Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
