import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, FileText, CheckCircle, Video } from 'lucide-react';
import practiceShowcase from '../assets/images/modern_calligraphy_practice_1784584643279.jpg';

interface InteractiveCustomizerProps {
  onOrderClick: (name: string) => void;
}

export default function InteractiveCustomizer({ onOrderClick }: InteractiveCustomizerProps) {
  const whatsappUrl = "https://wa.me/919600123098?text=Hi%20%F0%9F%91%8B%20I%20want%20to%20get%20my%20custom%20signature%20redesigned%20and%20receive%20my%20printable%20practice%20sheets!%20%E2%9C%8D%EF%B8%8F";

  return (
    <section id="customizer-section" className="py-20 bg-slate-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3.5 py-1.5 bg-emerald-100 text-emerald-800 text-xs font-black rounded-full uppercase tracking-wider">
            Signature Practice Materials
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
            Printable Practice Sheets & Tracing Guides
          </h2>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            Mastering your new signature is incredibly easy. We design personalized, dotted trace guides and stroke-by-stroke video guides tailored to help you build motor memory in minutes.
          </p>
        </div>

        {/* Practice Showcase Box */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="customizer-box" 
          className="block bg-white border border-gray-200/80 rounded-3xl shadow-2xl shadow-slate-200/40 overflow-hidden hover:shadow-emerald-100/50 hover:border-emerald-500/40 transition-all duration-300 group cursor-pointer"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            {/* Left Info Panel */}
            <div className="md:col-span-5 p-8 md:p-10 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> High-Value Deliverables
                </span>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
                  Your Personalized Writing Kit
                </h3>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Every redesign package includes printable worksheet templates, guidelines, and transparent overlays. Perfect for learning at your own pace.
              </p>

              {/* Bullet list of features */}
              <div className="space-y-3.5" id="practice-features-list">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <FileText className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Custom Printable Worksheets</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">Dotted trace lines with pen direction markers</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">High Quality Digital Assets</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">Perfect transparent PNGs for online documents & profiles</p>
                  </div>
                </div>
              </div>

              {/* Action Prompt */}
              <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors">
                <span>Request Your Practice Kit on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Right Showcase Image Panel */}
            <div className="md:col-span-7 bg-slate-950 relative min-h-[300px] md:min-h-[480px] self-stretch overflow-hidden flex items-center justify-center">
              <img 
                src={practiceShowcase} 
                alt="Personalized signature rewrite practice materials bundle" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none md:block hidden" />
            </div>

          </div>
        </a>

        {/* Call to action below the canvas */}
        <div className="mt-10 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 px-10 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl text-sm shadow-xl shadow-emerald-600/20 cursor-pointer transition-all hover:scale-[1.02] uppercase tracking-wider flex items-center gap-2"
          >
            Get My Practice Sheets Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
