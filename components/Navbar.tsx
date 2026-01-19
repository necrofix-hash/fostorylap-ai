import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-black group-hover:bg-lime-400 transition-colors border-2 border-black"></div>
              <span className="text-2xl font-black tracking-tighter uppercase">
                FostoryLap<span className="text-blue-600">.</span>AI
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-lg font-bold hover:bg-black hover:text-white px-2 py-1 transition-all border-2 border-transparent hover:border-black hover:shadow-[2px_2px_0px_0px_#000]"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="secondary" className="!py-2 !px-4 text-sm">
              SUBSCRIBE
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-2 border-black shadow-[2px_2px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none bg-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-black bg-lime-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="block px-3 py-4 text-xl font-black border-b-2 border-black hover:bg-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="p-4">
              <Button className="w-full">SUBSCRIBE NOW</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;