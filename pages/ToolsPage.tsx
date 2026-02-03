import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ArrowRight, Star } from 'lucide-react';
import { TOOLS_DATA } from '../constants';
import Button from '../components/Button';

const categoryColors: Record<string, string> = {
  'IMAGE': 'bg-purple-300',
  'VIDEO': 'bg-orange-300',
  'DESIGN': 'bg-cyan-300',
};

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
            <Link
              key={tool.id}
              to={`/tool/${tool.id}`}
              className="group bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`px-2 py-1 border-2 border-black text-xs font-bold ${categoryColors[tool.category] || 'bg-gray-300'}`}>
                  {tool.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{tool.rating}</span>
                </div>
              </div>
              <h3 className="text-2xl font-black mb-2 group-hover:text-blue-700 transition-colors">{tool.name}</h3>
              <p className="text-neutral-600 mb-4">{tool.description}</p>
              <span className="inline-flex items-center gap-2 font-bold group-hover:underline">
                View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
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
