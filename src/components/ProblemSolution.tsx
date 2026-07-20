import React from 'react';
import { XCircle, CheckCircle, Flame } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    'Looks Unprofessional on business papers',
    'Difficult to Write quickly under pressure',
    'No Unique Style or artistic elegance',
    'Doesn\'t Match Your Personality or status',
    'Feels Old & Outdated for modern signing',
  ];

  const solutions = [
    'Elegant & Stylish with luxury aesthetic',
    'Personal Branding that leaves a mark',
    'Smooth Hand Movement for swift signing',
    'Easy Daily Writing with master tutorials',
    'Professional Appearance to stand out',
  ];

  return (
    <section id="comparison-section" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider">
            <Flame className="w-3 h-3 text-amber-500 fill-current" /> Redesign Assessment
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3 leading-tight">
            Should You Upgrade Your Signature?
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-2">
            Compare how a poorly constructed signature holds you back compared to our designer-crafted signatures.
          </p>
        </div>

        {/* Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch" id="comparison-cards-grid">
          
          {/* Problem Card (Light Red background) */}
          <div 
            id="comparison-problem-card" 
            className="bg-rose-50/40 hover:bg-rose-50/60 border border-rose-100 rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-300 flex flex-col justify-between"
          >
            {/* Giant X Watermark */}
            <div className="absolute right-[-20px] bottom-[-20px] text-[200px] font-black text-rose-500/5 select-none pointer-events-none font-sans leading-none">
              ✕
            </div>

            <div className="space-y-6">
              <h3 className="text-lg md:text-xl font-extrabold text-rose-700 uppercase tracking-wide flex items-center gap-2">
                Is Your Signature Like This?
              </h3>

              <ul className="space-y-4 relative z-10" id="problem-items-list">
                {problems.map((prob, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-gray-700 text-sm md:text-base">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-rose-100/60 relative z-10">
              <p className="text-xs md:text-sm font-bold text-rose-900 bg-rose-100/50 p-4 rounded-xl leading-relaxed text-center">
                <strong>Don't worry!</strong> We'll redesign it into a highly stylish, memorable, and unique signature tailored just for you.
              </p>
            </div>

          </div>

          {/* Solution Card (Light Green background) */}
          <div 
            id="comparison-solution-card" 
            className="bg-emerald-50/40 hover:bg-emerald-50/60 border border-emerald-100 rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-300 flex flex-col justify-between"
          >
            {/* Giant Check Watermark */}
            <div className="absolute right-[-10px] bottom-[-20px] text-[220px] font-black text-emerald-500/5 select-none pointer-events-none font-sans leading-none">
              ✓
            </div>

            <div className="space-y-6">
              <h3 className="text-lg md:text-xl font-extrabold text-emerald-700 uppercase tracking-wide flex items-center gap-2">
                We Create Signatures That Stand Out
              </h3>

              <ul className="space-y-4 relative z-10" id="solution-items-list">
                {solutions.map((sol, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-gray-700 text-sm md:text-base">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-semibold text-gray-800">{sol}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-100/60 relative z-10">
              <p className="text-xs md:text-sm font-bold text-emerald-900 bg-emerald-100/40 p-4 rounded-xl leading-relaxed text-center">
                🎯 <strong>Stand out in style!</strong> Redesign your signature today and present yourself with premium confidence.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
