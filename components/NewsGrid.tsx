import React from 'react';
import { MOCK_ARTICLES } from '../constants';
import ArticleCard from './ArticleCard';
import Button from './Button';

const NewsGrid: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-black pb-4">
            <div>
                <h2 className="text-5xl font-black uppercase tracking-tighter text-stroke">Latest Drops</h2>
                <p className="font-mono mt-2 text-lg font-bold">/// CURATED FOR THE BOLD</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
                VIEW ARCHIVE
            </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_ARTICLES.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        
        {/* Load More Section */}
        <div className="mt-16 text-center">
            <div className="inline-block p-2 border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000]">
                <span className="font-bold mr-4 text-xl">WANT MORE?</span>
                <Button variant="primary">LOAD FEED</Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;