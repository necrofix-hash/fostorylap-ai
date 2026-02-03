import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowLeft, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { MOCK_ARTICLES, HERO_TAGS } from '../constants';
import ArticleCard from '../components/ArticleCard';
import Button from '../components/Button';

const ITEMS_PER_PAGE = 6;

const SearchResultsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const selectedCategory = searchParams.get('category') || '';

  const allCategories = useMemo(() => {
    const categories = new Set(MOCK_ARTICLES.map(article => article.category));
    return Array.from(categories);
  }, []);

  const filteredArticles = useMemo(() => {
    return MOCK_ARTICLES.filter(article => {
      const matchesQuery = query === '' ||
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.category.toLowerCase().includes(query.toLowerCase()) ||
        article.author.toLowerCase().includes(query.toLowerCase());

      const matchesCategory = selectedCategory === '' ||
        article.category === selectedCategory;

      return matchesQuery && matchesCategory;
    });
  }, [query, selectedCategory]);

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryFilter = (category: string) => {
    const params = new URLSearchParams(searchParams);
    if (category === selectedCategory) {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    params.set('page', '1');
    setSearchParams(params);
  };

  const handleNewSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newQuery = formData.get('search') as string;
    const params = new URLSearchParams();
    if (newQuery) params.set('q', newQuery);
    params.set('page', '1');
    setSearchParams(params);
  };

  const relatedTags = HERO_TAGS.filter(tag =>
    query && tag.toLowerCase().includes(query.toLowerCase().replace('#', ''))
  );

  return (
    <div className="min-h-screen bg-neutral-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-bold mb-8 hover:underline group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          BACK TO HOME
        </Link>

        {/* Search Header */}
        <div className="mb-8 border-b-4 border-black pb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-300 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
              <Search size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              SEARCH RESULTS
            </h1>
          </div>

          {query && (
            <p className="text-xl font-medium text-neutral-600">
              Showing results for: <span className="font-black text-black">"{query}"</span>
            </p>
          )}
        </div>

        {/* Search Bar */}
        <form onSubmit={handleNewSearch} className="mb-8">
          <div className="flex items-stretch max-w-2xl">
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-black" />
              </div>
              <input
                type="text"
                name="search"
                defaultValue={query}
                placeholder="Search articles, tutorials, tools..."
                className="block w-full pl-12 pr-4 py-3 text-lg font-bold border-2 border-black bg-white placeholder-neutral-500 focus:outline-none focus:bg-yellow-50 shadow-[4px_4px_0px_0px_#000]"
              />
            </div>
            <button
              type="submit"
              className="ml-2 bg-black text-white px-6 font-bold text-lg border-2 border-transparent hover:bg-neutral-800 shadow-[4px_4px_0px_0px_#888] active:translate-y-1 active:shadow-none transition-all"
            >
              SEARCH
            </button>
          </div>
        </form>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Filter size={20} />
            <span className="font-bold text-lg">FILTER BY CATEGORY:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {allCategories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-4 py-2 border-2 border-black font-bold text-sm transition-all shadow-[2px_2px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-y-0.5 ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-lime-300'
                }`}
              >
                {category}
              </button>
            ))}
            {selectedCategory && (
              <button
                onClick={() => handleCategoryFilter(selectedCategory)}
                className="px-4 py-2 border-2 border-red-500 bg-red-100 text-red-700 font-bold text-sm hover:bg-red-200 transition-colors"
              >
                CLEAR FILTER ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-sm font-bold bg-black text-white px-3 py-1">
            {filteredArticles.length} RESULT{filteredArticles.length !== 1 ? 'S' : ''} FOUND
          </span>
          {totalPages > 1 && (
            <span className="font-mono text-sm font-bold">
              PAGE {currentPage} OF {totalPages}
            </span>
          )}
        </div>

        {/* Results Grid */}
        {paginatedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border-4 border-dashed border-black bg-white">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-black mb-2">NO RESULTS FOUND</h3>
            <p className="text-neutral-600 font-medium mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Link to="/">
              <Button variant="primary">BROWSE ALL ARTICLES</Button>
            </Link>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-3 border-2 border-black font-bold transition-all shadow-[2px_2px_0px_0px_#000] ${
                currentPage === 1
                  ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                  : 'bg-white hover:bg-lime-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000]'
              }`}
            >
              <ChevronLeft size={24} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-12 h-12 border-2 border-black font-black text-lg transition-all shadow-[2px_2px_0px_0px_#000] ${
                  currentPage === page
                    ? 'bg-black text-white'
                    : 'bg-white hover:bg-lime-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000]'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-3 border-2 border-black font-bold transition-all shadow-[2px_2px_0px_0px_#000] ${
                currentPage === totalPages
                  ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                  : 'bg-white hover:bg-lime-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000]'
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        {/* Related Tags Section */}
        {(relatedTags.length > 0 || query) && (
          <div className="mt-16 p-6 border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000]">
            <h3 className="text-xl font-black mb-4 flex items-center gap-2">
              <span className="bg-cyan-300 px-2 py-1 border-2 border-black">RELATED</span>
              EXPLORE MORE
            </h3>
            <div className="flex flex-wrap gap-3">
              {HERO_TAGS.map(tag => (
                <Link
                  key={tag}
                  to={`/search?q=${encodeURIComponent(tag.replace('#', ''))}`}
                  className="px-4 py-2 bg-neutral-100 border-2 border-black font-mono text-sm font-bold hover:bg-black hover:text-white cursor-pointer transition-colors shadow-[2px_2px_0px_0px_#000]"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/tools"
            className="p-6 bg-lime-300 border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] hover:-translate-y-1 transition-all text-center"
          >
            <h4 className="text-xl font-black">🛠️ BROWSE TOOLS</h4>
            <p className="font-medium">Explore AI design tools</p>
          </Link>
          <Link
            to="/tutorials"
            className="p-6 bg-purple-300 border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] hover:-translate-y-1 transition-all text-center"
          >
            <h4 className="text-xl font-black">📚 TUTORIALS</h4>
            <p className="font-medium">Learn new techniques</p>
          </Link>
          <Link
            to="/community"
            className="p-6 bg-orange-300 border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] hover:-translate-y-1 transition-all text-center"
          >
            <h4 className="text-xl font-black">👥 COMMUNITY</h4>
            <p className="font-medium">Connect with creators</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
