import React from 'react';
import { MessageSquare, Palette, Edit3, FileDown, ArrowRight, Sparkles } from 'lucide-react';
import signatureBeforeAfter from '../assets/images/signature_before_after_1784585010930.jpg';

export default function HowItWorks() {
  const steps = [
    {
      id: 'step-1',
      num: 'Step 1',
      title: 'Send Your Name on WhatsApp',
      desc: 'Submit your text details smoothly over direct chat support.',
      icon: <MessageSquare className="w-6 h-6 text-emerald-600 fill-emerald-50" />,
      circleBg: 'bg-emerald-100 border-emerald-200',
    },
    {
      id: 'step-2',
      num: 'Step 2',
      title: 'Choose Your Style',
      desc: 'Select from elegant cursive, modern, or bold authoritative.',
      icon: <Palette className="w-6 h-6 text-blue-600" />,
      circleBg: 'bg-blue-100 border-blue-200',
    },
    {
      id: 'step-3',
      num: 'Step 3',
      title: 'We Design Your Signature',
      desc: 'Our master calligraphers carefully craft bespoke options.',
      icon: <Edit3 className="w-6 h-6 text-blue-600" />,
      circleBg: 'bg-blue-100 border-blue-200',
    },
    {
      id: 'step-4',
      num: 'Step 4',
      title: 'Receive Final PNG & PDF',
      desc: 'Download transparent ink assets and custom practice sheets.',
      icon: <FileDown className="w-6 h-6 text-emerald-600" />,
      circleBg: 'bg-emerald-100 border-emerald-200',
    },
  ];

  return (
    <section id="how-it-works-section" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold rounded-full uppercase tracking-wider">
            Operational Blueprint
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3">
            How It Works
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-2">
            Get your professional signature redesigned in four simple, highly responsive steps.
          </p>
        </div>

        {/* Steps Flex/Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative" id="how-it-works-grid">
          {steps.map((step, idx) => (
            <div key={step.id} className="relative flex flex-col items-center text-center group">
              
              {/* Connector Arrow (Desktop only, between steps 1-3) */}
              {idx < 3 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] z-0">
                  <div className="flex items-center justify-center">
                    <span className="h-0.5 w-full bg-slate-200 border-t border-dashed border-gray-300" />
                    <ArrowRight className="w-4 h-4 text-blue-400 shrink-0 ml-[-2px]" />
                  </div>
                </div>
              )}

              {/* Step Circle Icon */}
              <div 
                className={`w-20 h-20 rounded-full border-2 ${step.circleBg} flex items-center justify-center relative z-10 shadow-lg shadow-gray-200/50 hover:scale-105 transition-transform duration-300`}
              >
                {step.icon}
                {/* Step badge */}
                <span className="absolute -top-1 -right-1 bg-slate-950 text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                  {idx + 1}
                </span>
              </div>

              {/* Step Copy */}
              <div className="mt-5 space-y-1.5 max-w-xs relative z-10">
                <span className="text-[10px] uppercase font-black tracking-widest text-blue-600 block">
                  {step.num}
                </span>
                <h3 className="text-base font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Real-life Signature Transformation Showcase */}
        <div className="mt-16 max-w-md mx-auto bg-white border border-gray-150 rounded-3xl shadow-xl overflow-hidden p-6 text-center space-y-6" id="before-after-showcase-container">
          <div className="relative rounded-2xl overflow-hidden border border-gray-200/60 shadow-sm aspect-square w-full">
            <img 
              src={signatureBeforeAfter} 
              alt="Real custom signature transformation before and after comparison" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div>
            <a
              href="https://wa.me/919600123098?text=Hi%20%F0%9F%91%8B%20I%20saw%20the%20John%20Doe%20signature%20transformation.%20I%20want%20to%20get%20my%20signature%20redesigned%20today!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/20 transition-all cursor-pointer hover:scale-[1.01]"
            >
              Rewrite My Signature <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
