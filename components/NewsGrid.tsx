import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_ARTICLES } from '../constants';
import ArticleCard from './ArticleCard';
import Button from './Button';
import { Loader2 } from 'lucide-react';

const ITEMS_PER_LOAD = 6;

const NewsGrid: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [isLoading, setIsLoading] = useState(false);

  const visibleArticles = MOCK_ARTICLES.slice(0, visibleCount);
  const hasMore = visibleCount < MOCK_ARTICLES.length;
  const remainingCount = MOCK_ARTICLES.length - visibleCount;

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + ITEMS_PER_LOAD, MOCK_ARTICLES.length));
      setIsLoading(false);
    }, 500);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-black pb-4">
            <div>
                <h2 className="text-5xl font-black uppercase tracking-tighter text-stroke">Latest Drops</h2>
                <p className="font-mono mt-2 text-lg font-bold">/// CURATED FOR THE BOLD</p>
            </div>
            <Link to="/search">
              <Button variant="outline" className="mt-4 md:mt-0">
                  VIEW ARCHIVE
              </Button>
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Load More Section */}
        <div className="mt-16 text-center">
          {hasMore ? (
            <div className="inline-block p-2 border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000]">
              <span className="font-bold mr-4 text-xl">WANT MORE?</span>
              <Button
                variant="primary"
                onClick={handleLoadMore}
                disabled={isLoading}
                className="min-w-[140px]"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 size={18} className="animate-spin" />
                    LOADING...
                  </span>
                ) : (
                  `LOAD FEED (${remainingCount})`
                )}
              </Button>
            </div>
          ) : (
            <div className="inline-block p-4 border-2 border-black bg-lime-300 shadow-[4px_4px_0px_0px_#000]">
              <span className="font-bold text-xl">🎉 YOU'VE SEEN IT ALL!</span>
              <p className="text-sm mt-2">Check back later for more content</p>
              <Link to="/search" className="inline-block mt-3">
                <Button variant="secondary" className="!border-black">
                  BROWSE ARCHIVE
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Progress indicator */}
        {hasMore && (
          <div className="mt-8 max-w-md mx-auto">
            <div className="flex justify-between text-sm font-mono mb-2">
              <span className="font-bold">{visibleCount} of {MOCK_ARTICLES.length} articles</span>
              <span className="font-bold">{Math.round((visibleCount / MOCK_ARTICLES.length) * 100)}% loaded</span>
            </div>
            <div className="h-3 bg-white border-2 border-black overflow-hidden">
              <div
                className="h-full bg-lime-400 transition-all duration-500 ease-out"
                style={{ width: `${(visibleCount / MOCK_ARTICLES.length) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsGrid;
