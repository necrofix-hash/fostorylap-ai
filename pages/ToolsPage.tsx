import React from 'react';
import { Wrench, ExternalLink, Star } from 'lucide-react';
import Button from '../components/Button';

const TOOLS_DATA = [
  {
    name: 'Midjourney',
    description: 'AI image generation with stunning artistic quality',
    category: 'IMAGE',
    rating: 4.9,
    url: '#',
  },
  {
    name: 'Stable Diffusion',
    description: 'Open-source image generation model',
    category: 'IMAGE',
    rating: 4.7,
    url: '#',
  },
  {
    name: 'Runway ML',
    description: 'AI-powered video editing and generation',
    category: 'VIDEO',
    rating: 4.8,
    url: '#',
  },
  {
    name: 'DALL-E 3',
    description: 'OpenAI\'s text-to-image generation',
    category: 'IMAGE',
    rating: 4.6,
    url: '#',
  },
  {
    name: 'Figma AI',
    description: 'AI-assisted design tools in Figma',
    category: 'DESIGN',
    rating: 4.5,
    url: '#',
  },
  {
    name: 'Adobe Firefly',
    description: 'Generative AI for creative workflows',
    category: 'DESIGN',
    rating: 4.4,
    url: '#',
  },
];

const ToolsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 border-b-4 border-black pb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-lime-300 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
              <Wrench size={32} />
            </div>
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">TOOLS</h1>
          </div>
          <p className="text-xl font-medium text-neutral-600 max-w-2xl">
            Curated directory of the best AI design tools. Tested and reviewed by our team.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS_DATA.map((tool) => (
            <div
              key={tool.name}
              className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="px-2 py-1 bg-cyan-300 border-2 border-black text-xs font-bold">
                  {tool.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{tool.rating}</span>
                </div>
              </div>
              <h3 className="text-2xl font-black mb-2">{tool.name}</h3>
              <p className="text-neutral-600 mb-4">{tool.description}</p>
              <a
                href={tool.url}
                className="inline-flex items-center gap-2 font-bold hover:underline"
              >
                Visit Tool <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-4 border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000]">
            <span className="font-bold mr-4 text-xl">SUGGEST A TOOL?</span>
            <Button variant="primary">SUBMIT</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
