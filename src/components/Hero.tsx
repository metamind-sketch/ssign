import React from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, MessageSquare, Star, Eye, PenLine } from 'lucide-react';
import heroLeftBg from '../assets/images/signature_hero_bg_premium_1784581036749.jpg';

interface HeroProps {
  onRewriteClick: () => void;
  onViewSamplesClick: () => void;
  heroImage: string;
}

export default function Hero({ onRewriteClick, onViewSamplesClick, heroImage }: HeroProps) {
  return (
    <section id="hero-section" className="relative bg-[#FAF9F6] pt-16 pb-24 overflow-hidden border-b border-gray-100">
      
      {/* Background ambient accents */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-amber-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
        
        {/* Left Copy Panel with subtle professional background artwork */}
        <div className="lg:col-span-7 space-y-6 md:space-y-7 text-left relative p-6 sm:p-8 md:p-10 rounded-3xl overflow-hidden border border-slate-200/50 bg-white/70 shadow-xs backdrop-blur-xs">
          
          {/* Subtle Background Art Overlay */}
          <div 
            className="absolute inset-0 opacity-60 bg-cover bg-center pointer-events-none -z-10 transition-all duration-300"
            style={{ backgroundImage: `url(${heroLeftBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/10 pointer-events-none -z-10" />

          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-50 border border-amber-200/80 rounded-full">
            <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-pulse" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-amber-800">
              Time to Upgrade Your Signature!
            </span>
          </div>

          {/* Main Display Heading */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
              Transform Your <br />
              <span className="font-sig-3 font-normal text-6xl sm:text-7xl md:text-8xl text-blue-600 block my-1 py-1 drop-shadow-xs italic">
                Signature
              </span>
              Into a Professional Identity
            </h1>
          </div>

          {/* Description Text */}
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-medium">
            Your signature is more than just your name. It's a hallmark of your professional identity. Get a stylish, custom & personalized signature redesigned by a master artist that leaves a lasting impression on contracts, emails, and documents.
          </p>

          {/* Key Bullet Features Grid */}
          <div className="grid grid-cols-2 gap-4 max-w-lg" id="hero-features-list">
            {[
              { label: 'Fast Delivery', desc: '12 - 24 Hour Turnaround', icon: <Zap className="w-4 h-4 text-blue-600" /> },
              { label: 'Unlimited Revisions', desc: 'Satisfied 100%', icon: <ShieldCheck className="w-4 h-4 text-blue-600" /> },
              { 
                label: 'WhatsApp Support', 
                desc: 'Friendly Support Line', 
                icon: <MessageSquare className="w-4 h-4 text-emerald-600" />,
                href: 'https://wa.me/919600123098?text=Hi! I am interested in getting a professional signature rewrite.'
              },
              { label: '100% Satisfaction', desc: 'Love It Or Refunded', icon: <Star className="w-4 h-4 text-blue-600 fill-blue-100" /> },
            ].map((feat, idx) => {
              const content = (
                <>
                  <div className={`p-2 rounded-lg shrink-0 ${feat.href ? 'bg-emerald-50/60 text-emerald-600' : 'bg-blue-50/60 text-blue-600'}`}>
                    {feat.icon}
                  </div>
                  <div>
                    <p className={`text-xs font-bold ${feat.href ? 'text-emerald-700 hover:underline' : 'text-gray-900'}`}>{feat.label}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{feat.desc}</p>
                  </div>
                </>
              );

              if (feat.href) {
                return (
                  <a 
                    key={idx} 
                    href={feat.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 bg-emerald-50/20 hover:bg-emerald-50/40 p-2.5 rounded-xl border border-emerald-100/50 transition-all cursor-pointer transform hover:scale-[1.02]"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={idx} className="flex items-start gap-3 bg-white/40 p-2.5 rounded-xl border border-gray-100/50 hover:bg-white/70 transition-colors">
                  {content}
                </div>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="https://wa.me/919600123098?text=Hi! I am interested in getting a professional signature rewrite."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-2xl flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
              id="hero-primary-cta"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              Rewrite My Signature Now
            </a>
            
            <button
              onClick={onViewSamplesClick}
              className="px-8 py-4 bg-white hover:bg-gray-50 border border-gray-200 text-blue-800 font-bold rounded-2xl flex items-center justify-center gap-2.5 transition-all shadow-xs cursor-pointer text-sm sm:text-base"
              id="hero-secondary-cta"
            >
              <Eye className="w-5 h-5" />
              View Samples
            </button>
          </div>

        </div>

        {/* Right Graphical Signature/Pen Container */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Floating Moving Pen Indicator */}
          <motion.div
            className="absolute -top-12 left-4 md:-left-12 z-30 bg-white p-3.5 rounded-2xl shadow-2xl border border-gray-150/80 flex items-center gap-2.5 pointer-events-none select-none"
            animate={{
              y: [0, -10, 0],
              rotate: [12, 22, 12],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="p-2 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 rounded-xl border border-blue-100/50 shadow-inner">
              <PenLine className="w-5 h-5 animate-pulse" />
            </div>
            <div className="text-left pr-2">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Live Tracing</p>
              <p className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 relative flex">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Active Flow
              </p>
            </div>
          </motion.div>

          {/* Starting Price Badge Sticked in Corner */}
          <div className="absolute top-[-10px] right-[10px] md:right-[-10px] z-20 w-28 h-28 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white transform rotate-12 transition-transform hover:scale-105 select-none">
            <span className="text-[9px] uppercase font-black tracking-widest opacity-80">Starting At</span>
            <span className="text-2xl font-black">₹99</span>
            <span className="text-[8px] tracking-wide font-medium bg-blue-700 px-2 py-0.5 rounded-full mt-1">Only! ★★★</span>
          </div>

          {/* Elegant Card with Rounded Corners Containing the Pen Image */}
          <div 
            id="hero-img-card" 
            className="w-full max-w-[420px] bg-white border border-gray-100 rounded-3xl shadow-2xl p-4 md:p-5 relative transform -rotate-1 hover:rotate-0 transition-transform duration-500"
          >
            <div className="aspect-ratio-16-9 w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 relative group">
              <img 
                src={heroImage} 
                alt="Fountain pen writing a cursive signature" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Signature Card Accents */}
            <div className="mt-4 flex items-center justify-between px-1">
              <div>
                <p className="text-xs font-bold text-gray-400 font-mono tracking-widest uppercase">Artist Redesign</p>
                <p className="text-sm font-extrabold text-gray-800 mt-0.5">Luxurious Golden Ink Style</p>
              </div>
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

          </div>

          {/* Background Decorative Rings */}
          <div className="absolute inset-0 border border-gray-200/50 rounded-full scale-110 pointer-events-none -z-10" />
          <div className="absolute inset-0 border border-gray-100 rounded-full scale-125 pointer-events-none -z-10" />

        </div>

      </div>
    </section>
  );
}
