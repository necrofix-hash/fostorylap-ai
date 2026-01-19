import React from 'react';
import { BookOpen, Clock, User } from 'lucide-react';

const TUTORIALS_DATA = [
  {
    title: 'Getting Started with Midjourney V7',
    author: 'Sarah Jenkins',
    duration: '15 min',
    level: 'BEGINNER',
    bgColor: 'bg-lime-300',
  },
  {
    title: 'Advanced Prompt Engineering Techniques',
    author: 'Devin K.',
    duration: '25 min',
    level: 'ADVANCED',
    bgColor: 'bg-purple-300',
  },
  {
    title: 'Training Your Own LoRA Model',
    author: 'AI Whisperer',
    duration: '45 min',
    level: 'EXPERT',
    bgColor: 'bg-orange-300',
  },
  {
    title: 'Stable Diffusion XL Basics',
    author: 'M. Robson',
    duration: '20 min',
    level: 'BEGINNER',
    bgColor: 'bg-cyan-300',
  },
  {
    title: 'ComfyUI Workflow Masterclass',
    author: 'Node Master',
    duration: '60 min',
    level: 'ADVANCED',
    bgColor: 'bg-pink-300',
  },
  {
    title: 'AI Video Generation with Runway',
    author: 'Video Synth',
    duration: '30 min',
    level: 'INTERMEDIATE',
    bgColor: 'bg-yellow-300',
  },
];

const TutorialsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 border-b-4 border-black pb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-300 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
              <BookOpen size={32} />
            </div>
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">TUTORIALS</h1>
          </div>
          <p className="text-xl font-medium text-neutral-600 max-w-2xl">
            Step-by-step guides to master AI design tools. From beginner to expert.
          </p>
        </div>

        {/* Tutorials List */}
        <div className="space-y-6">
          {TUTORIALS_DATA.map((tutorial, index) => (
            <div
              key={index}
              className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all cursor-pointer"
            >
              <div className="flex flex-col md:flex-row">
                <div className={`${tutorial.bgColor} w-full md:w-48 h-32 md:h-auto border-b-2 md:border-b-0 md:border-r-2 border-black flex items-center justify-center`}>
                  <span className="text-4xl font-black">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-black text-white text-xs font-bold">
                      {tutorial.level}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black mb-3">{tutorial.title}</h3>
                  <div className="flex flex-wrap gap-4 text-neutral-600">
                    <span className="flex items-center gap-1">
                      <User size={16} /> {tutorial.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={16} /> {tutorial.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex items-center border-t-2 md:border-t-0 md:border-l-2 border-black">
                  <span className="font-bold text-lg hover:underline">START →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;
