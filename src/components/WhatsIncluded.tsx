import React from 'react';
import { Tag, Sparkles, Image, FileText, BookOpen, LayoutGrid, RotateCw } from 'lucide-react';
import deliverablesShowcase from '../assets/images/deliverables_bundle_showcase_1784580020755.jpg';

export default function WhatsIncluded() {
  const items = [
    {
      id: 'inc-rewrite',
      title: 'Signature Rewrite',
      desc: 'Complete stylistic redesign of your current handwritten name.',
      icon: <Tag className="w-5 h-5 text-emerald-600" />,
    },
    {
      id: 'inc-png',
      title: 'High Quality PNG',
      desc: 'Bespoke high-resolution drafts for digital use.',
      icon: <Sparkles className="w-5 h-5 text-blue-600" />,
    },
    {
      id: 'inc-transparent',
      title: 'Transparent PNG',
      desc: 'Perfect transparent backdrop for overlaying on documents.',
      icon: <Image className="w-5 h-5 text-blue-600" />,
    },
    {
      id: 'inc-pdf',
      title: 'PDF Practice Sheet',
      desc: 'Printable guides with trace lines to master muscle memory.',
      icon: <FileText className="w-5 h-5 text-blue-600" />,
    },
    {
      id: 'inc-guide',
      title: 'Writing Guide',
      desc: 'Step-by-step hand movement and flow guidelines.',
      icon: <BookOpen className="w-5 h-5 text-emerald-600" />,
    },
    {
      id: 'inc-options',
      title: 'Multiple Design Options',
      desc: 'Choose from distinct creative calligraphic shapes.',
      icon: <LayoutGrid className="w-5 h-5 text-blue-600" />,
    },
    {
      id: 'inc-revisions',
      title: 'Unlimited Minor Revisions',
      desc: 'Adjust angles, loops, and dots until you love the outcome.',
      icon: <RotateCw className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <section id="whats-included-section" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">
            Bespoke Deliverables
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3">
            What's Included
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-2">
            Every signature rewrite is treated with professional care. We deliver full packages to help you master and use your new mark immediately.
          </p>
        </div>

        {/* 7-Item Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="whats-included-grid">
          {items.map((item, idx) => (
            <div 
              key={item.id} 
              className={`bg-gray-50/50 hover:bg-gray-50 border border-gray-100 p-6 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left group ${
                idx === 6 ? 'sm:col-span-2 lg:col-span-3 xl:col-span-1' : ''
              }`}
            >
              <div>
                <div className="p-3 bg-white border border-gray-100/80 rounded-xl inline-block shadow-2xs group-hover:scale-110 transition-transform duration-300 shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-base font-extrabold text-gray-900 mt-5 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mt-2 font-medium">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-1.5 text-[10px] text-emerald-600 font-bold bg-emerald-50/50 px-2.5 py-1 rounded-lg w-fit">
                <span>✓ Included</span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Showcase Banner */}
        <div className="mt-12 md:mt-16 relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 bg-slate-950">
          <img 
            src={deliverablesShowcase} 
            alt="Your signature deliverables package including printable practice sheets and high-resolution PNGs" 
            className="w-full h-auto object-cover max-h-[500px] block transition-transform duration-700 hover:scale-[1.02]"
            referrerPolicy="no-referrer"
          />
        </div>

      </div>
    </section>
  );
}
