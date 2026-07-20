import React from 'react';
import { Star, Check } from 'lucide-react';

interface SpeaksBannerProps {
  successImage: string;
}

export default function SpeaksBanner({ successImage }: SpeaksBannerProps) {
  const checkmarks = [
    'Unique Style',
    'Personal Identity',
    'Professional Impact',
    'Lasting Impression',
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <div 
        id="speaks-banner-card" 
        className="relative bg-slate-950 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12"
      >
        {/* Background Decorative Mesh */}
        <div className="absolute inset-0 bg-radial-gradient(from_top_left,_var(--color-slate-900)_30%,_transparent_70%) opacity-50 pointer-events-none" />

        {/* Left Side Info */}
        <div className="lg:col-span-6 p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6 md:space-y-8 relative z-10 text-left">
          
          <div className="space-y-2">
            <span className="text-[10px] md:text-xs font-black text-amber-400 tracking-widest uppercase block">
              Redesign Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              SIGNATURE THAT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-300 font-extrabold">
                SPEAKS
              </span>{' '}
              ABOUT YOU
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="speaks-checkmarks-list">
            {checkmarks.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-500/15 border border-amber-500/35 flex items-center justify-center text-amber-400 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-sm font-bold text-slate-200">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium">
            Every curve and stroke in your signature reflects your personal authority. Our signature designs marry modern corporate aesthetics with traditional calligraphic elegance to amplify your branding.
          </p>

          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="text-xs text-slate-400 font-semibold ml-2">Rating 4.9/5 from corporate executives</span>
          </div>

        </div>

        {/* Right Side Visual (Generated Pen Image) */}
        <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-auto overflow-hidden">
          <img 
            src={successImage} 
            alt="Golden fountain pen lying next to a golden signature" 
            className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          {/* Shadow vignette overlay to seamlessly blend on left */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none hidden lg:block" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none block lg:hidden" />
        </div>

      </div>
    </div>
  );
}
