import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
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
            <div className="p-3 bg-purple-300 border-2 border-black">
              <FileText size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black">TERMS OF SERVICE</h1>
          </div>

          <p className="text-neutral-500 font-mono text-sm mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">1. ACCEPTANCE OF TERMS</h2>
              <p className="text-neutral-700">
                By accessing and using FostoryLap.AI, you accept and agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">2. USE OF SERVICE</h2>
              <p className="text-neutral-700 mb-4">You agree to use our services only for lawful purposes. You must not:</p>
              <ul className="list-none space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span>Use the service for any illegal or unauthorized purpose</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span>Violate any laws in your jurisdiction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span>Infringe upon the intellectual property rights of others</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span>Harass, abuse, or harm other users</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                  <span>Attempt to gain unauthorized access to our systems</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">3. USER CONTENT</h2>
              <p className="text-neutral-700">
                You retain ownership of content you submit to our platform. By posting content, you grant us a
                non-exclusive, worldwide, royalty-free license to use, display, and distribute your content
                in connection with our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">4. AI-GENERATED CONTENT</h2>
              <p className="text-neutral-700">
                Our platform discusses and showcases AI-generated content. Users are responsible for ensuring
                their use of AI tools complies with applicable laws and the terms of those tools. We encourage
                transparency and proper disclosure of AI-generated content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">5. INTELLECTUAL PROPERTY</h2>
              <p className="text-neutral-700">
                The FostoryLap.AI name, logo, and all related content are our intellectual property. You may not
                use our branding without prior written permission. Third-party trademarks and content belong
                to their respective owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">6. DISCLAIMER</h2>
              <p className="text-neutral-700">
                Our services are provided "as is" without warranties of any kind. We do not guarantee that our
                services will be uninterrupted, secure, or error-free. Use of our services is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">7. LIMITATION OF LIABILITY</h2>
              <p className="text-neutral-700">
                To the fullest extent permitted by law, FostoryLap.AI shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">8. CHANGES TO TERMS</h2>
              <p className="text-neutral-700">
                We reserve the right to modify these terms at any time. Changes will be effective immediately
                upon posting. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black border-b-2 border-black pb-2">9. CONTACT</h2>
              <p className="text-neutral-700">
                For questions about these Terms of Service, contact us at:
                <br />
                <strong>legal@fostorylap.ai</strong>
              </p>
            </section>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/privacy" className="font-bold hover:underline">Privacy Policy →</Link>
          <Link to="/cookies" className="font-bold hover:underline">Cookie Policy →</Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
