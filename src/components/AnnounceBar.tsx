import React from 'react';

export default function AnnounceBar() {
  return (
    <div 
      id="announce-bar" 
      className="w-full bg-emerald-950 text-emerald-100 py-2.5 px-4 text-center text-xs md:text-sm font-bold flex items-center justify-center gap-1.5 border-b border-emerald-900 shadow-sm uppercase tracking-wider"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      <span>Get Your Signature Rewrite Starting From Just ₹99 Only!</span>
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
    </div>
  );
}
