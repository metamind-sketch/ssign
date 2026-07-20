import { Testimonial, FAQ, PricingPlan } from './types';

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul',
    rating: 5,
    comment: 'Very professional design. Everyone appreciated my new signature. It looks clean, sophisticated, and is actually easy to reproduce!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    date: 'July 18, 2026'
  },
  {
    id: '2',
    name: 'Priya',
    rating: 5,
    comment: 'Easy to practice and looks premium. The PDF practice sheet helped me master the hand movement in just 2 days. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    date: 'July 15, 2026'
  },
  {
    id: '3',
    name: 'Karthik',
    rating: 5,
    comment: 'Worth every rupee. Highly recommended. I received 3 premium options and fell in love with all of them. Fast support over WhatsApp!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
    date: 'July 10, 2026'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How long does it take to get my signature?',
    answer: 'Our standard delivery is extremely fast! You will receive your high-quality drafts on WhatsApp or via email within 12 to 24 hours of placing your order.'
  },
  {
    id: 'faq-2',
    question: 'Can I request changes?',
    answer: 'Absolutely! We offer unlimited minor revisions. If you need small adjustments to the curves, sizing, or styling of your selected signature, we will happily tweak it until you are 100% satisfied.'
  },
  {
    id: 'faq-3',
    question: 'What do I need to send?',
    answer: 'All we need is your name (exactly as you want it designed) and your preference of style (e.g., modern, elegant, bold, or initials-based). You can specify these when ordering or over WhatsApp.'
  },
  {
    id: 'faq-4',
    question: 'Will I receive a practice sheet?',
    answer: 'Yes! If you choose our Premium plan, you will receive a custom-designed printable PDF Practice Sheet. It includes a dotted stroke-by-stroke guide so you can practice tracing and easily master your new professional signature.'
  },
  {
    id: 'faq-5',
    question: 'Which format will I receive?',
    answer: 'You will receive ultra-high-resolution, print-ready files including transparent PNG format (perfect for digital documents, watermarks, and emails) and high-quality vector-supported PDF format.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'BASIC',
    price: 99,
    badge: 'BASIC',
    features: [
      '1 Unique Signature Design',
      'High-Quality Transparent PNG',
      'Digital Document Ready File',
      'Delivery directly on WhatsApp'
    ],
    ctaText: 'Buy Now for ₹99',
    theme: 'blue'
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    price: 199,
    badge: 'PREMIUM',
    isBestValue: true,
    features: [
      '3 Distinct Signature Designs',
      'High-Quality Transparent PNG',
      'Print-Ready PDF Practice Sheet',
      'Multiple Style Options (Elegant/Bold/Chic)',
      'Unlimited Minor Revisions',
      'Fast 12-Hour Priority Support'
    ],
    ctaText: 'Buy Now for ₹199',
    theme: 'green'
  }
];
