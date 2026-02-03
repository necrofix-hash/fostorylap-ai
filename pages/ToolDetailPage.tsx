import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ExternalLink, Check, Monitor, DollarSign, Wrench } from 'lucide-react';
import { TOOLS_DATA } from '../constants';
import Button from '../components/Button';

const ToolDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const tool = useMemo(() => {
    return TOOLS_DATA.find(t => t.id === id);
  }, [id]);

  const relatedTools = useMemo(() => {
    if (!tool) return [];
    return TOOLS_DATA
      .filter(t => t.id !== id && t.category === tool.category)
      .slice(0, 3);
  }, [id, tool]);

  const categoryColors: Record<string, string> = {
    'IMAGE': 'bg-purple-300',
    'VIDEO': 'bg-orange-300',
    'DESIGN': 'bg-cyan-300',
  };

  if (!tool) {
    return (
      <div className="min-h-screen bg-neutral-100 py-20 px-4 flex items-center justify-center">
        <div className="text-center p-12 border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000]">
          <div className="text-6xl mb-4">404</div>
          <h1 className="text-3xl font-black mb-4">TOOL NOT FOUND</h1>
          <p className="text-neutral-600 mb-6">The tool you're looking for doesn't exist.</p>
          <Link to="/tools">
            <Button variant="primary">BROWSE ALL TOOLS</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header */}
      <div className="bg-white border-b-4 border-black">
        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Back Button */}
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 font-bold mb-6 hover:underline group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            BACK TO TOOLS
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 border-2 border-black text-sm font-bold ${categoryColors[tool.category] || 'bg-gray-300'}`}>
                  {tool.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star size={20} className="fill-yellow-400 text-yellow-400" />
                  <span className="font-black text-lg">{tool.rating}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
                {tool.name}
              </h1>
              <p className="text-xl text-neutral-600 font-medium max-w-2xl">
                {tool.description}
              </p>
            </div>

            <a
              href={tool.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold text-lg hover:bg-neutral-800 shadow-[4px_4px_0px_0px_#888] active:translate-y-1 active:shadow-none transition-all flex-shrink-0"
            >
              VISIT TOOL
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
              <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
                <span className="bg-lime-300 px-2 py-1 border-2 border-black">ABOUT</span>
              </h2>
              <p className="text-lg leading-relaxed">
                {tool.fullDescription}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
              <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
                <span className="bg-purple-300 px-2 py-1 border-2 border-black">FEATURES</span>
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tool.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-lime-300 border-2 border-black flex items-center justify-center flex-shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
              <h3 className="font-black text-lg mb-4 border-b-2 border-black pb-2">QUICK INFO</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <DollarSign size={20} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">Pricing</span>
                    <span className="text-neutral-600">{tool.pricing}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Monitor size={20} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">Platforms</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {tool.platforms.map((platform, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-neutral-100 border border-black text-sm font-medium"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Star size={20} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">Rating</span>
                    <div className="flex items-center gap-2 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          className={star <= Math.round(tool.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}
                        />
                      ))}
                      <span className="font-bold">{tool.rating}/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-lime-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
              <h3 className="font-black text-lg mb-2">TRY IT NOW</h3>
              <p className="text-sm mb-4">Start creating with {tool.name} today.</p>
              <a
                href={tool.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 bg-black text-white font-bold hover:bg-neutral-800 transition-colors"
              >
                GET STARTED
              </a>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
              <Wrench size={24} />
              SIMILAR {tool.category} TOOLS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTools.map((relatedTool) => (
                <Link
                  key={relatedTool.id}
                  to={`/tool/${relatedTool.id}`}
                  className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 transition-all"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-2 py-1 border-2 border-black text-xs font-bold ${categoryColors[relatedTool.category] || 'bg-gray-300'}`}>
                      {relatedTool.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-sm">{relatedTool.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-2">{relatedTool.name}</h3>
                  <p className="text-sm text-neutral-600">{relatedTool.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Browse All */}
        <div className="mt-12 text-center">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 px-8 py-4 border-4 border-black font-bold text-lg hover:bg-lime-300 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-all"
          >
            <Wrench size={24} />
            BROWSE ALL TOOLS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToolDetailPage;
