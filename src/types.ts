export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: 'basic' | 'premium';
  name: string;
  price: number;
  badge?: string;
  isBestValue?: boolean;
  features: string[];
  ctaText: string;
  theme: 'blue' | 'green';
}

export interface OrderDetails {
  nameToDesign: string;
  selectedStyle: string;
  packageId: 'basic' | 'premium';
  email: string;
  whatsapp: string;
  status: 'draft' | 'payment_pending' | 'success';
}
