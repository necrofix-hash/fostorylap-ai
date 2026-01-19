import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-lime-400 border-t-4 border-b-4 border-black py-20 px-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none hidden md:block">
            <div className="w-32 h-32 border-8 border-black rounded-full"></div>
            <div className="w-32 h-32 border-8 border-black absolute top-12 right-12 bg-black"></div>
        </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block bg-black text-white px-4 py-1 font-mono font-bold text-lg mb-6 transform -rotate-2">
            NO SPAM. ONLY SIGNAL.
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none">
          JOIN THE <span className="underline decoration-4 decoration-white">RESISTANCE</span>.
        </h2>
        <p className="text-xl font-bold mb-10 max-w-2xl mx-auto">
            Get the weekly digest of AI tools, prompts, and design theory sent straight to your inbox.
        </p>

        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="flex-grow relative">
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-6 w-6 text-black" />
             </div>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 pl-12 py-4 bg-white border-4 border-black text-black font-bold text-lg focus:outline-none focus:ring-0 shadow-[4px_4px_0px_0px_#000]"
              required
            />
          </div>
          <button
            type="submit"
            className="px-8 py-4 bg-black text-white font-black text-xl border-4 border-black hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_#fff] active:translate-y-1 active:shadow-none"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;