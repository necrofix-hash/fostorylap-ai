import React from 'react';
import { Article } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="group h-full flex flex-col bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-y-1 transition-all duration-200 cursor-pointer overflow-hidden relative">
      
      {/* Header/Image Section */}
      <div className="relative border-b-4 border-black h-48 overflow-hidden">
        <div className="absolute top-2 left-2 z-10">
             <span className={`inline-block px-2 py-1 border-2 border-black text-xs font-black ${article.bgColor} shadow-[2px_2px_0px_0px_#000]`}>
                {article.category}
            </span>
        </div>
        <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow relative bg-white">
        <div className="flex justify-between items-start mb-4">
            <span className="font-mono text-xs font-bold bg-black text-white px-1 py-0.5">{article.date}</span>
        </div>
        
        <h3 className="text-2xl font-black leading-tight mb-4 group-hover:text-blue-700 transition-colors line-clamp-3">
          {article.title}
        </h3>

        <div className="mt-auto flex items-center justify-between border-t-2 border-neutral-200 pt-4">
            <span className="text-sm font-bold truncate pr-4">BY {article.author.toUpperCase()}</span>
            <div className="bg-black text-white p-1 rounded-full group-hover:bg-lime-400 group-hover:text-black transition-colors">
                <ArrowUpRight size={20} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;