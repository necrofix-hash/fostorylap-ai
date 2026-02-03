import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import NewsGrid from './components/NewsGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ToolsPage from './pages/ToolsPage';
import TutorialsPage from './pages/TutorialsPage';
import EthicsPage from './pages/EthicsPage';
import CommunityPage from './pages/CommunityPage';
import SearchResultsPage from './pages/SearchResultsPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ToolDetailPage from './pages/ToolDetailPage';
import TutorialDetailPage from './pages/TutorialDetailPage';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <NewsGrid />
      <Newsletter />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-black selection:bg-pink-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/article/:id" element={<ArticleDetailPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/tool/:id" element={<ToolDetailPage />} />
            <Route path="/tutorials" element={<TutorialsPage />} />
            <Route path="/tutorial/:id" element={<TutorialDetailPage />} />
            <Route path="/ethics" element={<EthicsPage />} />
            <Route path="/community" element={<CommunityPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
