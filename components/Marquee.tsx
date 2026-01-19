import React from 'react';
import { MARQUEE_TEXT } from '../constants';

const Marquee: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b-4 border-black py-3 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content font-mono font-bold text-lg tracking-widest">
          {Array(10).fill(MARQUEE_TEXT).join(' ')}
        </div>
      </div>
    </div>
  );
};

export default Marquee;