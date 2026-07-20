import React from 'react';
import { ShieldCheck, MessageSquare, ArrowRight, Zap } from 'lucide-react';

interface FooterBannerProps {
  onRewriteClick: () => void;
  footerImage: string;
}

export default function FooterBanner({ onRewriteClick, footerImage }: FooterBannerProps) {
  return (
    <footer id="main-footer" className="bg-slate-950 text-white relative border-t border-slate-900 overflow-hidden">
      
      {/* Background soft lighting */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Large Upgrade Card Banner */}
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-12 relative z-10">
        
        <div 
          id="upgrade-banner-box" 
          className="bg-slate-900 rounded-3xl border border-slate-800 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden"
        >
          {/* Side Pen Graphic Overlay/Background on left for desktop */}
          <div className="lg:col-span-4 relative h-48 lg:h-64 rounded-2xl overflow-hidden order-2 lg:order-1">
            <img 
              src={footerImage} 
              alt="Luxurious golden fountain pen" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Dark gradient blur inside the photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Text Copy & CTAs */}
          <div className="lg:col-span-8 space-y-6 text-left order-1 lg:order-2">
            
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 text-xs font-black text-amber-400 uppercase tracking-widest">
                <Zap className="w-3.5 h-3.5 fill-amber-400" /> Instant Setup
              </span>
              <h2 className="text-2xl md:text-3.5xl font-black text-white leading-tight">
                READY TO UPGRADE <span className="text-amber-400">YOUR SIGNATURE?</span>
              </h2>
              <p className="text-slate-300 text-sm md:text-base font-semibold max-w-xl leading-relaxed">
                Professional Signature Rewrite Starting From Just <span className="text-amber-400">₹99</span>. Take the premium leap.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <a
                href="https://wa.me/919600123098?text=Hi! I am interested in getting a professional signature rewrite."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-2xl flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm w-full sm:w-auto"
                id="footer-rewrite-cta"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                Rewrite My Signature Now
              </a>
              
              <div className="hidden sm:flex items-center justify-center w-14 h-14 bg-white/5 border border-white/10 rounded-full text-slate-300 shrink-0">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

          </div>

          {/* Starting at 99 circle sticker */}
          <div className="absolute right-[-10px] top-[-10px] bg-blue-600 text-white w-24 h-24 rounded-full border-4 border-slate-900 flex flex-col items-center justify-center shadow-xl select-none transform rotate-12">
            <span className="text-[7px] uppercase font-bold tracking-widest opacity-80">Only</span>
            <span className="text-xl font-black">₹99</span>
            <span className="text-[7px] uppercase font-bold tracking-widest opacity-80">Start</span>
          </div>

        </div>

        {/* Mini Trust Footer Section (Three columns layout) */}
        <div 
          id="trust-footer-grid" 
          className="mt-14 pt-10 border-t border-slate-900 grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-400 text-xs text-left"
        >
          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-emerald-500 shrink-0">
              <ShieldCheck className="w-4.5 h-4.5" />
            </div>
            <div>
              <p className="font-bold text-slate-200">100% Secure Payments</p>
              <p className="text-[10px] text-slate-500 mt-0.5">SSL Encrypted Safe Transactions</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-blue-400 shrink-0">
              <MessageSquare className="w-4.5 h-4.5" />
            </div>
            <div>
              <p className="font-bold text-slate-200">Fast Support</p>
              <p className="text-[10px] text-slate-500 mt-0.5">We're Here to Help over email/chat</p>
            </div>
          </div>

          <a 
            href="https://wa.me/919600123098?text=Hi! I am interested in getting a professional signature rewrite."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 hover:bg-slate-900/50 p-2 -m-2 rounded-xl transition-all group"
          >
            <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-emerald-400 group-hover:border-emerald-500/30 group-hover:text-emerald-300 shrink-0">
              <MessageSquare className="w-4.5 h-4.5 fill-current" />
            </div>
            <div>
              <p className="font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">WhatsApp Assistance</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Quick & Friendly Customer Support</p>
            </div>
          </a>
        </div>

        {/* Trademark and copyright */}
        <div className="mt-12 pt-6 border-t border-slate-950 text-center text-[10px] text-slate-500 font-medium pb-12">
          <p>© 2026 MetaMinds. All Rights Reserved. Designed & Crafted with Executive Standards.</p>
        </div>

      </div>

    </footer>
  );
}
