import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2, Bookmark, ArrowUpRight } from 'lucide-react';
import { MOCK_ARTICLES } from '../constants';
import ArticleCard from '../components/ArticleCard';
import Button from '../components/Button';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const article = useMemo(() => {
    return MOCK_ARTICLES.find(a => a.id === id);
  }, [id]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return MOCK_ARTICLES
      .filter(a => a.id !== id && a.category === article.category)
      .slice(0, 3);
  }, [id, article]);

  const otherArticles = useMemo(() => {
    if (!article) return [];
    if (relatedArticles.length >= 3) return [];
    return MOCK_ARTICLES
      .filter(a => a.id !== id && a.category !== article.category)
      .slice(0, 3 - relatedArticles.length);
  }, [id, article, relatedArticles]);

  if (!article) {
    return (
      <div className="min-h-screen bg-neutral-100 py-20 px-4 flex items-center justify-center">
        <div className="text-center p-12 border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000]">
          <div className="text-6xl mb-4">404</div>
          <h1 className="text-3xl font-black mb-4">ARTICLE NOT FOUND</h1>
          <p className="text-neutral-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link to="/">
            <Button variant="primary">GO HOME</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-6 left-6">
          <Link
            to="/search"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black font-bold shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-0.5 transition-all"
          >
            <ArrowLeft size={20} />
            BACK
          </Link>
        </div>

        {/* Article Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <span className={`inline-block px-3 py-1 border-2 border-black text-sm font-black ${article.bgColor} shadow-[2px_2px_0px_0px_#000] mb-4`}>
              {article.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 drop-shadow-lg">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <span className="flex items-center gap-2 font-bold">
                <User size={18} />
                {article.author}
              </span>
              <span className="flex items-center gap-2 font-bold">
                <Calendar size={18} />
                {article.date}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-8 pb-8 border-b-2 border-black">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-black font-bold shadow-[2px_2px_0px_0px_#000] hover:bg-lime-300 transition-colors">
            <Share2 size={18} />
            SHARE
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-black font-bold shadow-[2px_2px_0px_0px_#000] hover:bg-yellow-300 transition-colors">
            <Bookmark size={18} />
            SAVE
          </button>
          <Link
            to={`/search?category=${article.category}`}
            className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-black font-bold shadow-[2px_2px_0px_0px_#000] hover:bg-cyan-300 transition-colors"
          >
            <Tag size={18} />
            {article.category}
          </Link>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000]">
            <p className="text-xl font-medium leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            <h2 className="text-2xl font-black mt-8 mb-4 border-l-4 border-black pl-4">
              Key Highlights
            </h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                <span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-black mt-8 mb-4 border-l-4 border-black pl-4">
              What This Means for Designers
            </h2>
            <p className="mb-6">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
            </p>
            <p className="mb-6">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>

            <div className="mt-8 p-6 bg-lime-100 border-2 border-black">
              <h3 className="font-black text-lg mb-2">TLDR;</h3>
              <p className="font-medium">
                This article explores the latest developments and their impact on the creative industry. Key takeaways include new tools, techniques, and considerations for modern designers.
              </p>
            </div>
          </div>
        </article>

        {/* Author Box */}
        <div className="mt-12 p-6 bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-black flex items-center justify-center text-white text-2xl font-black">
              {article.author.charAt(0)}
            </div>
            <div>
              <h4 className="font-black text-lg">{article.author}</h4>
              <p className="text-neutral-600">Contributing Writer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {(relatedArticles.length > 0 || otherArticles.length > 0) && (
        <div className="bg-neutral-200 border-t-4 border-black py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
              <span className="bg-purple-300 px-3 py-1 border-2 border-black">MORE</span>
              ARTICLES TO EXPLORE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...relatedArticles, ...otherArticles].map(relatedArticle => (
                <ArticleCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="bg-white border-t-4 border-black py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-between gap-4">
          <Link
            to="/search"
            className="flex items-center gap-2 px-6 py-3 bg-black text-white font-bold hover:bg-neutral-800 transition-colors"
          >
            <ArrowLeft size={20} />
            ALL ARTICLES
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 border-2 border-black font-bold hover:bg-lime-300 transition-colors"
          >
            HOME
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
