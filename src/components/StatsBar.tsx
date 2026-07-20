import React from 'react';
import { Users, Zap, ShieldCheck, Lock } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      id: 'stat-customers',
      icon: <Users className="w-5 h-5 text-blue-600" />,
      title: '500+',
      subtitle: 'Happy Customers',
    },
    {
      id: 'stat-delivery',
      icon: <Zap className="w-5 h-5 text-blue-600" />,
      title: 'Fast',
      subtitle: 'Delivery',
    },
    {
      id: 'stat-satisfaction',
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      title: '100%',
      subtitle: 'Satisfaction',
    },
    {
      id: 'stat-payment',
      icon: <Lock className="w-5 h-5 text-blue-600" />,
      title: 'Secure',
      subtitle: 'Payment',
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-[-24px] relative z-10">
      <div 
        id="stats-bar-container" 
        className="bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-200/50 p-5 md:p-6 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100"
      >
        {stats.map((stat, idx) => (
          <div 
            key={stat.id} 
            className={`flex items-center gap-3.5 justify-center ${idx >= 2 ? 'pt-4 lg:pt-0' : ''} ${idx === 1 ? 'pt-0' : ''} lg:px-6`}
          >
            <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-50/80 shrink-0">
              {stat.icon}
            </div>
            <div>
              <p className="text-lg md:text-xl font-black text-gray-900 leading-none">{stat.title}</p>
              <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">{stat.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
