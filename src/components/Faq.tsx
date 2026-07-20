import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold rounded-full uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-2">
            Find answers to commonly asked questions about our turnaround times, delivery procedures, and practice utilities.
          </p>
        </div>

        {/* Accordions list */}
        <div className="space-y-3" id="faqs-accordion-list">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            
            return (
              <div 
                key={faq.id} 
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="font-extrabold text-sm md:text-base text-gray-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1 bg-gray-50 rounded-lg text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-gray-50/50 bg-gray-50/20">
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium pl-8">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
