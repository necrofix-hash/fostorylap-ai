import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Search, Zap } from 'lucide-react';
import { HERO_TAGS } from '../constants';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/search');
    }
  };

  const handleTagClick = (tag: string) => {
    navigate(`/search?q=${encodeURIComponent(tag.replace('#', ''))}`);
  };

  return (
    <div className="relative w-full bg-white border-b-4 border-black overflow-hidden">

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-16 pb-20 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Floating Badge */}
        <div className="mb-8 inline-block transform -rotate-2 hover:rotate-0 transition-transform duration-300">
          <span className="bg-lime-300 border-2 border-black px-4 py-2 font-bold shadow-[4px_4px_0px_0px_#000] text-sm md:text-base flex items-center gap-2">
            <Zap size={18} className="fill-current" />
            LIVE FEED: AI DESIGN NEWS
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9] text-black drop-shadow-[4px_4px_0px_#rgba(0,0,0,0.1)]">
          CRAFTING THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 underline decoration-black decoration-4 underline-offset-4">
            SYNTHETIC
          </span>
          <br />FUTURE
        </h1>

        <p className="max-w-2xl text-xl md:text-2xl font-medium text-neutral-800 mb-10 border-l-4 border-black pl-6 text-left md:text-center md:border-l-0 md:pl-0">
          The unapologetic daily digest for designers surviving the algorithm.
          Tools, prompts, and raw inspiration.
        </p>

        {/* Interactive "Prompt" Bar */}
        <form onSubmit={handleSearch} className="w-full max-w-2xl relative group mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-stretch">
                <div className="flex-grow relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-6 w-6 text-black" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for 'Cyberpunk UI layout'..."
                        className="block w-full pl-12 pr-4 py-4 text-lg font-bold border-2 border-black bg-white placeholder-neutral-500 focus:outline-none focus:ring-0 focus:bg-yellow-50 shadow-[4px_4px_0px_0px_#000]"
                    />
                </div>
                <button
                    type="submit"
                    className="ml-2 bg-black text-white px-8 font-bold text-lg border-2 border-transparent hover:bg-neutral-800 shadow-[4px_4px_0px_0px_#888] active:translate-y-1 active:shadow-none transition-all hidden sm:block"
                >
                    SEARCH
                </button>
            </div>
        </form>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3">
            {HERO_TAGS.map((tag) => (
                <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className="px-3 py-1 bg-white border-2 border-black font-mono text-sm font-bold hover:bg-black hover:text-white cursor-pointer transition-colors shadow-[2px_2px_0px_0px_#000]"
                >
                    {tag}
                </button>
            ))}
        </div>
      </div>

      {/* Visual Divider */}
      <div className="h-4 bg-stripes w-full border-t-4 border-black"></div>
    </div>
  );
};

export default Hero;