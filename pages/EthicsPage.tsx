import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, AlertTriangle, Shield, FileText, ArrowRight } from 'lucide-react';
import { ETHICS_DATA } from '../constants';

const EthicsPage: React.FC = () => {
  const hotTopics = ETHICS_DATA.filter(t => t.category === 'topic');
  const resources = ETHICS_DATA.filter(t => t.category === 'resource');

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

            {/* Hot Topics Grid */}
            <div>
              <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                <AlertTriangle className="text-orange-500" /> EXPLORE HOT TOPICS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hotTopics.map((topic) => (
                  <Link
                    key={topic.id}
                    to={`/ethics/${topic.id}`}
                    className={`${topic.bgColor} border-2 border-black p-6 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 transition-all group`}
                  >
                    <h4 className="text-xl font-black mb-2 group-hover:underline">{topic.title}</h4>
                    <p className="text-sm text-neutral-700 mb-4 line-clamp-2">{topic.description}</p>
                    <span className="inline-flex items-center gap-2 font-bold text-sm">
                      READ MORE <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
              <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                <AlertTriangle className="text-orange-500" /> HOT TOPICS
              </h3>
              <ul className="space-y-3">
                {hotTopics.map((topic, index) => (
                  <li key={topic.id} className={index !== hotTopics.length - 1 ? "border-b-2 border-black pb-3" : "pb-3"}>
                    <Link to={`/ethics/${topic.id}`} className="font-bold hover:underline flex items-center justify-between group">
                      {topic.shortTitle}
                      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black text-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_#444]">
              <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                <Shield className="text-lime-400" /> RESOURCES
              </h3>
              <ul className="space-y-2 text-neutral-300">
                {resources.map((resource) => (
                  <li key={resource.id}>
                    <Link to={`/ethics/${resource.id}`} className="hover:text-lime-400 flex items-center gap-2 group">
                      <span>→</span>
                      <span className="group-hover:underline">{resource.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthicsPage;
