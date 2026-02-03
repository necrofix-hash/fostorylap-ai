import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-4xl font-black mb-6 tracking-tighter inline-block hover:text-lime-400 transition-colors">
              FostoryLap.AI
            </Link>
            <p className="text-neutral-400 font-mono text-sm max-w-xs mb-6">
              Anti-design patterns for the post-human era.
              We track the evolution of synthetic media and creative intelligence.
            </p>
            <div className="flex gap-4">
                {['TWITTER', 'DISCORD', 'GITHUB'].map(social => (
                    <a key={social} href="#" className="font-bold underline decoration-lime-400 hover:text-lime-400 decoration-2 underline-offset-4">{social}</a>
                ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold border-b-2 border-white pb-2 mb-4 inline-block">SECTIONS</h3>
            <ul className="space-y-3 font-medium text-neutral-300">
              <li>
                <Link to="/search" className="hover:text-lime-400 hover:pl-2 transition-all inline-block">
                  Latest News
                </Link>
              </li>
              <li>
                <Link to="/tools" className="hover:text-lime-400 hover:pl-2 transition-all inline-block">
                  Tools Directory
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="hover:text-lime-400 hover:pl-2 transition-all inline-block">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/manifesto" className="hover:text-lime-400 hover:pl-2 transition-all inline-block">
                  Manifesto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold border-b-2 border-white pb-2 mb-4 inline-block">LEGAL</h3>
            <ul className="space-y-3 font-medium text-neutral-300">
              <li>
                <Link to="/privacy" className="hover:text-lime-400 hover:pl-2 transition-all inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-lime-400 hover:pl-2 transition-all inline-block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-lime-400 hover:pl-2 transition-all inline-block">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t-2 border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm font-mono text-neutral-500">
          <p>© 2025 FostoryLap.AI. ALL RIGHTS RESERVED.</p>
          <p className="mt-2 md:mt-0">DESIGNED IN THE VOID.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
