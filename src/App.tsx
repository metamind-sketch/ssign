import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import AnnounceBar from './components/AnnounceBar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import InteractiveCustomizer from './components/InteractiveCustomizer';
import ProblemSolution from './components/ProblemSolution';
import SpeaksBanner from './components/SpeaksBanner';
import HowItWorks from './components/HowItWorks';
import WhatsIncluded from './components/WhatsIncluded';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import FooterBanner from './components/FooterBanner';
import OrderModal from './components/OrderModal';

// Import generated imagery
import fountainPenWriting from './assets/images/agreement_signing_hero_1784579549246.jpg';
import successSignature from './assets/images/success_signature_1784578982003.jpg';
import footerSignature from './assets/images/footer_signature_1784578998844.jpg';

const OFFERS = [
  "⚠️ LIMITED TIME OFFER: GET YOUR SIGNATURE REWRITE FOR JUST ₹99 ONLY! ⚠️",
  "⚡ UPGRADE YOUR SIGNATURE TODAY AND STAND OUT PROFESSIONALLY! ⚡",
  "✍️ 100% PERSONALIZED & HAND-CRAFTED DESIGNS BY EXPERT CALLIGRAPHERS! ✍️",
  "🚀 EXPRESS 24-HOUR DELIVERY AVAILABLE • SATISFACTION GUARANTEED! 🚀"
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<'basic' | 'premium'>('premium');
  const [prefilledName, setPrefilledName] = useState('');
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % OFFERS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const openOrderModal = (pkgId: 'basic' | 'premium') => {
    setSelectedPackage(pkgId);
    setPrefilledName('');
    setIsModalOpen(true);
  };

  const handleCustomizerOrder = (name: string) => {
    setPrefilledName(name);
    setSelectedPackage('premium'); // Default customizer order to premium for best value
    setIsModalOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      {/* 1. Top Announcement Strip */}
      <AnnounceBar />

      {/* 2. Main Hero Section */}
      <Hero 
        onRewriteClick={() => openOrderModal('premium')} 
        onViewSamplesClick={() => handleScrollToSection('customizer-section')}
        heroImage={fountainPenWriting}
      />

      {/* 3. Trust Metric Stats Bar */}
      <StatsBar />

      {/* 4. Interactive Signature Generator Canvas */}
      <InteractiveCustomizer onOrderClick={handleCustomizerOrder} />

      {/* 5. Problem vs Solution Comparison Card block */}
      <ProblemSolution />

      {/* 6. Signature Speaks Banner with generated success graphic */}
      <SpeaksBanner successImage={successSignature} />

      {/* 7. Strategic 4-Step Diagram */}
      <HowItWorks />

      {/* 8. Deliverables Grid */}
      <WhatsIncluded />

      {/* 9. Verified Customer Reviews & Interactive Reviewer form */}
      <Testimonials />

      {/* 10. Clear Side-By-Side Transparent Pricing Cards */}
      <Pricing onOrderClick={openOrderModal} />

      {/* 11. Fully Interactive FAQ Accordion list */}
      <Faq />

      {/* 12. Bottom Banner upgrade, trust details & footer copyright */}
      <FooterBanner 
        onRewriteClick={() => openOrderModal('premium')} 
        footerImage={footerSignature}
      />

      {/* 13. Step-by-Step Order & Checkout Simulator Modal */}
      <OrderModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPackage={selectedPackage}
        prefilledName={prefilledName}
      />

      {/* Global Fixed Bottom Red Announcement Strip - Dynamic Scrollable */}
      <div className="fixed bottom-0 left-0 right-0 w-full bg-red-600 text-white py-3 px-4 text-center text-xs md:text-sm font-extrabold uppercase tracking-widest flex items-center justify-center border-t border-red-700 overflow-hidden select-none z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.3)]">
        <div className="relative w-full h-5 md:h-6 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentOfferIndex}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center gap-2"
            >
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse flex-shrink-0" />
              <span className="truncate max-w-[90vw]">{OFFERS[currentOfferIndex]}</span>
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse flex-shrink-0" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Persistent Floating WhatsApp Assistance Button */}
      <motion.a
        href="https://wa.me/919600123098?text=Hi! I am interested in getting a professional signature rewrite."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed right-5 bottom-16 sm:right-6 sm:bottom-18 z-40 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white p-3 sm:py-3.5 sm:px-4.5 rounded-full shadow-[0_4px_20px_rgba(16,185,129,0.4)] transition-all group select-none cursor-pointer"
        title="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25" />
        <MessageSquare className="w-5.5 h-5.5 fill-current shrink-0" />
        <span className="hidden sm:inline text-xs font-black uppercase tracking-wider">Chat with Designer</span>
      </motion.a>
    </div>
  );
}

