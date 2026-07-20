import React, { useState, useEffect } from 'react';
import { Star, MessageSquare, Plus, Check } from 'lucide-react';
import { Testimonial } from '../types';
import { INITIAL_TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [showForm, setShowForm] = useState(false);
  
  // Form States
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('sig_testimonials');
    if (saved) {
      try {
        setTestimonials(JSON.parse(saved));
      } catch (e) {
        setTestimonials(INITIAL_TESTIMONIALS);
      }
    } else {
      setTestimonials(INITIAL_TESTIMONIALS);
    }
  }, []);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      alert('Please fill out all fields.');
      return;
    }

    const newReview: Testimonial = {
      id: `rev-${Date.now()}`,
      name: name,
      rating: rating,
      comment: comment,
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150&sig=${Math.floor(Math.random() * 100)}`,
      date: 'Today'
    };

    const updated = [newReview, ...testimonials];
    setTestimonials(updated);
    localStorage.setItem('sig_testimonials', JSON.stringify(updated));

    // Reset Form
    setName('');
    setRating(5);
    setComment('');
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setShowForm(false);
    }, 2000);
  };

  return (
    <section id="testimonials-section" className="py-20 bg-[#FAF9F6] border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="text-left max-w-xl">
            <span className="px-3.5 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider">
              Customer Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3 leading-tight">
              What Our Customers Say
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-2">
              Discover how business executives, doctors, and legal professionals transformed their signatures and boosted their branding.
            </p>
          </div>
          
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-5 py-3 bg-white hover:bg-gray-50 border border-gray-200 text-slate-800 text-sm font-bold rounded-xl flex items-center gap-1.5 shadow-2xs hover:shadow-xs shrink-0 cursor-pointer transition-all"
          >
            <Plus className="w-4 h-4 text-blue-600" /> Share Your Experience
          </button>
        </div>

        {/* Dynamic Review Submission Form */}
        {showForm && (
          <div className="mb-12 p-6 md:p-8 bg-white border border-gray-100 rounded-2xl shadow-xl max-w-xl mx-auto">
            {formSuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Review Submitted!</h4>
                <p className="text-sm text-gray-500">Thank you for sharing your experience with our community.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">Add Your Testimonial</h3>
                
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Anand Kumar"
                    className="w-full px-4 py-2 text-sm border border-gray-200 rounded-xl outline-hidden focus:ring-2 focus:ring-blue-500 text-gray-900"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">Rating</label>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="text-2xl transition-transform hover:scale-110 cursor-pointer"
                      >
                        <span className={star <= rating ? 'text-amber-400' : 'text-gray-200'}>★</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">Your Feedback</label>
                  <textarea
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share how your new signature helps you feel more professional!"
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl outline-hidden focus:ring-2 focus:ring-blue-500 text-gray-900"
                    required
                  />
                </div>

                <div className="flex gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 py-2.5 border border-gray-100 rounded-xl text-gray-500 hover:bg-gray-50 text-xs font-bold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md cursor-pointer"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Testimonial Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="testimonials-cards-grid">
          {testimonials.map((test) => (
            <div 
              key={test.id} 
              className="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl shadow-xs flex flex-col justify-between items-start text-left relative hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Mark background */}
              <div className="absolute top-5 right-6 text-7xl font-serif text-blue-50/70 pointer-events-none select-none">
                “
              </div>

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < test.rating ? 'fill-current' : 'text-gray-200'}`} 
                    />
                  ))}
                </div>

                {/* Comment text */}
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-medium">
                  "{test.comment}"
                </p>
              </div>

              {/* Customer Avatar & Bio */}
              <div className="mt-8 flex items-center gap-3.5 pt-4 border-t border-gray-50 w-full">
                <img 
                  src={test.avatar} 
                  alt={test.name} 
                  className="w-11 h-11 rounded-full object-cover border border-gray-100 shadow-2xs shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-black text-gray-900 leading-none">{test.name}</h4>
                  <p className="text-[10px] text-gray-400 mt-1">{test.date} • Verified Client</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
