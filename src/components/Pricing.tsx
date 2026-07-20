import React from 'react';
import { Star, ShieldCheck, Check, MessageSquare } from 'lucide-react';
import { PRICING_PLANS } from '../data';

interface PricingProps {
  onOrderClick: (pkgId: 'basic' | 'premium') => void;
}

export default function Pricing({ onOrderClick }: PricingProps) {
  return (
    <section id="pricing-section" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold rounded-full uppercase tracking-wider">
            Premium Packages
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3">
            Bespoke Pricing Built for You
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-2">
            No recurring fees or subscriptions. Invest once to secure a lifetime of executive status.
          </p>
        </div>

        {/* Two Pricing Cards Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto" id="pricing-cards-grid">
          {PRICING_PLANS.map((plan) => {
            const isPremium = plan.id === 'premium';
            
            const premiumWhatsappText = `Hi 👋

I want to choose the ₹199 Premium Signature Rewrite Package! ✍️

💎 Premium Bundle – ₹199
✅ 3 Signature Designs
✅ High Quality PNG
✅ Transparent PNG
✅ PDF Practice Sheet
✅ Multiple Design Options
✅ Unlimited Minor Revisions

Please share the next steps to complete my order 😊`;

            const basicWhatsappText = `Hi 👋

I want to choose the ₹99 Basic Signature Rewrite Package! ✍️

💙 Basic Package – ₹99
✅ 1 Signature Design
✅ High Quality PNG
✅ PDF File
✅ WhatsApp Delivery

Please share the next steps to complete my order 😊`;

            const cardClasses = `border rounded-3xl p-6 md:p-8 flex flex-col justify-between relative transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px] text-left ${
              isPremium 
                ? 'border-emerald-500 bg-emerald-50/10 shadow-xl shadow-emerald-50/40 ring-1 ring-emerald-500/20' 
                : 'border-gray-100 bg-white shadow-md'
            }`;

            const whatsappSvg = (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.135-1.347a9.921 9.921 0 0 0 4.87 1.287h.005c5.505 0 9.988-4.478 9.99-9.985A9.993 9.993 0 0 0 12.012 2zm5.72 14.195c-.247.695-1.21 1.27-1.662 1.342-.451.072-.894.12-2.903-.711-2.414-.997-3.953-3.461-4.073-3.621-.12-.16-1.047-1.393-1.047-2.656 0-1.263.66-1.884.894-2.136.234-.251.51-.314.681-.314.17 0 .341.001.489.008.156.007.366-.06.574.453.214.53.731 1.785.795 1.916.064.13.107.283.021.453-.086.17-.129.282-.256.429-.128.147-.269.328-.384.44-.128.125-.262.261-.112.518.15.256.666 1.096 1.428 1.775.98.874 1.802 1.144 2.058 1.272.256.128.405.107.554-.064.149-.17.639-.744.81-1 .17-.256.34-.213.575-.128.234.085 1.491.703 1.747.831.256.128.426.192.489.303.064.111.064.64-.183 1.335z"/>
              </svg>
            );

            const cardContent = (
              <>
                {/* Best Value Ribbon */}
                {plan.isBestValue && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow-xs">
                    ★ Best Value
                  </div>
                )}

                {/* Card Top */}
                <div className="space-y-6">
                  <div>
                    <span className={`px-3 py-1 text-[10px] font-black rounded-full uppercase tracking-widest ${
                      isPremium ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {plan.name}
                    </span>
                    
                    {/* Price Tag */}
                    <div className="flex items-baseline gap-1 mt-4">
                      <span className="text-4xl md:text-5xl font-black text-gray-900">₹{plan.price}</span>
                      <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">/ one-time</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4" id={`pricing-features-${plan.id}`}>
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs md:text-sm">
                        <div className={`p-1 rounded-full shrink-0 mt-0.5 ${
                          isPremium ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="font-semibold text-gray-700 leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA Button */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  {isPremium ? (
                    <a
                      href={`https://wa.me/919600123098?text=${encodeURIComponent(premiumWhatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-2xl font-extrabold flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/15 cursor-pointer"
                    >
                      {whatsappSvg}
                      {plan.ctaText}
                    </a>
                  ) : (
                    <a
                      href={`https://wa.me/919600123098?text=${encodeURIComponent(basicWhatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-2xl font-extrabold flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/10"
                    >
                      {whatsappSvg}
                      {plan.ctaText}
                    </a>
                  )}
                  <p className="text-[10px] text-gray-400 text-center mt-2 font-medium">
                    ⚡ Instant order confirmation directly on WhatsApp
                  </p>
                </div>
              </>
            );

            return (
              <div 
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={cardClasses}
              >
                {cardContent}
              </div>
            );
          })}
        </div>

        {/* Lower Secure Trust badges */}
        <div className="flex items-center justify-center gap-6 mt-12 text-gray-400 text-xs" id="pricing-trust-bar">
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>100% Risk Free Moneyback</span>
          </div>
          <div className="w-1 h-1 bg-gray-200 rounded-full" />
          <div className="flex items-center gap-1.5 font-medium">
            <Star className="w-4 h-4 text-amber-500 fill-amber-100" />
            <span>Unlimited Revisions</span>
          </div>
        </div>

      </div>
    </section>
  );
}
