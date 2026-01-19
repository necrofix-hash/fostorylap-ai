import React from 'react';
import { Scale, AlertTriangle, Shield, FileText } from 'lucide-react';

const EthicsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 border-b-4 border-black pb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-orange-300 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
              <Scale size={32} />
            </div>
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">ETHICS</h1>
          </div>
          <p className="text-xl font-medium text-neutral-600 max-w-2xl">
            Navigating the moral landscape of AI-generated content. Guidelines, debates, and best practices.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Article */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_#000]">
              <h2 className="text-3xl font-black mb-6">OUR STANCE ON AI ETHICS</h2>
              <div className="prose prose-lg max-w-none space-y-4 text-neutral-700">
                <p>
                  As AI-generated content becomes increasingly prevalent, we believe in establishing
                  clear ethical guidelines for creators and consumers alike.
                </p>
                <p>
                  We advocate for transparency in AI usage, proper attribution, and respect for
                  original artists whose work may have influenced training data.
                </p>
                <p>
                  Our platform is committed to fostering responsible AI use while pushing the
                  boundaries of creative possibility.
                </p>
              </div>
            </div>

            {/* Guidelines */}
            <div className="bg-yellow-300 border-2 border-black p-8 shadow-[4px_4px_0px_0px_#000]">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                <FileText /> COMMUNITY GUIDELINES
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="font-black text-xl">01.</span>
                  <span>Always disclose when content is AI-generated</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-black text-xl">02.</span>
                  <span>Never use AI to create deceptive or harmful content</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-black text-xl">03.</span>
                  <span>Respect copyright and intellectual property rights</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-black text-xl">04.</span>
                  <span>Credit tools and models used in your workflow</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-black text-xl">05.</span>
                  <span>Engage in constructive dialogue about AI impact</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
              <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                <AlertTriangle className="text-orange-500" /> HOT TOPICS
              </h3>
              <ul className="space-y-3">
                <li className="border-b-2 border-black pb-3">
                  <a href="#" className="font-bold hover:underline">Copyright & Training Data</a>
                </li>
                <li className="border-b-2 border-black pb-3">
                  <a href="#" className="font-bold hover:underline">Deepfakes & Misinformation</a>
                </li>
                <li className="border-b-2 border-black pb-3">
                  <a href="#" className="font-bold hover:underline">Artist Compensation</a>
                </li>
                <li className="pb-3">
                  <a href="#" className="font-bold hover:underline">Environmental Impact</a>
                </li>
              </ul>
            </div>

            <div className="bg-black text-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_#444]">
              <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                <Shield className="text-lime-400" /> RESOURCES
              </h3>
              <ul className="space-y-2 text-neutral-300">
                <li><a href="#" className="hover:text-lime-400">→ AI Ethics Framework</a></li>
                <li><a href="#" className="hover:text-lime-400">→ Legal Guidelines PDF</a></li>
                <li><a href="#" className="hover:text-lime-400">→ Best Practices Checklist</a></li>
                <li><a href="#" className="hover:text-lime-400">→ Report Misuse</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthicsPage;
