import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Check, ShieldCheck, Download, MessageSquare } from 'lucide-react';
import { OrderDetails } from '../types';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage: 'basic' | 'premium';
  prefilledName?: string;
}

export default function OrderModal({ isOpen, onClose, initialPackage, prefilledName = '' }: OrderModalProps) {
  const [details, setDetails] = useState<OrderDetails>({
    nameToDesign: prefilledName,
    selectedStyle: 'Elegant Cursive',
    packageId: initialPackage,
    email: '',
    whatsapp: '',
    status: 'draft',
  });

  const [utrNumber, setUtrNumber] = useState('');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCompletePayment = () => {
    if (!details.nameToDesign.trim()) {
      alert('Please enter your name to design.');
      return;
    }
    if (!details.email.trim() || !details.email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!details.whatsapp.trim() || details.whatsapp.replace(/\D/g, '').length < 10) {
      alert('Please enter a valid 10-digit WhatsApp number.');
      return;
    }

    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setIsSuccess(true);
    }, 2000);
  };

  const downloadMockPNG = () => {
    const link = document.createElement('a');
    link.download = `${details.nameToDesign.replace(/\s+/g, '_')}_Signature.png`;
    
    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" width="600" height="200" viewBox="0 0 600 200">
        <rect width="100%" height="100%" fill="none"/>
        <text x="50%" y="60%" font-family="'Mrs Saint Delafield', cursive" font-size="90" fill="#1e3a8a" text-anchor="middle">${details.nameToDesign}</text>
        <path d="M 150,130 C 250,150 400,120 450,115" fill="none" stroke="#1e3a8a" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `;
    
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadMockPracticeSheet = () => {
    const link = document.createElement('a');
    link.download = `${details.nameToDesign.replace(/\s+/g, '_')}_Practice_Sheet.pdf`;
    
    const htmlContent = `
      <html>
        <head>
          <style>
            body { font-family: sans-serif; text-align: center; padding: 40px; }
            h1 { color: #1e3a8a; }
            .guide-line { border-bottom: 1px dashed #93c5fd; height: 100px; margin: 40px 0; position: relative; }
            .guide-text { font-family: 'cursive'; font-size: 72px; color: #cbd5e1; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); }
          </style>
        </head>
        <body>
          <h1>Practice Sheet: ${details.nameToDesign}</h1>
          <p>Trace along the dotted lines to master your custom professional signature.</p>
          <div class="guide-line"><span class="guide-text">${details.nameToDesign}</span></div>
          <div class="guide-line"><span class="guide-text">${details.nameToDesign}</span></div>
          <div class="guide-line"><span class="guide-text">${details.nameToDesign}</span></div>
          <script>window.print();</script>
        </body>
      </html>
    `;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const price = 99; // Set standard flat ₹99 for everyone

  // Standard upi payment URI pointing to the real number 9600123098
  const upiUri = `upi://pay?pa=9600123098@paytm&pn=Signature%20Rewrite&am=${price}&cu=INR`;
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUri)}`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        id="order-modal-container"
        className="relative w-full max-w-lg overflow-hidden bg-white rounded-2xl shadow-2xl flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 shrink-0">
          <div>
            <span className="text-xs font-semibold tracking-widest text-emerald-600 uppercase">
              {details.packageId === 'premium' ? 'Premium Package Redesign' : 'Basic Package Redesign'}
            </span>
            <h3 className="text-xl font-black text-gray-900 mt-0.5">
              {isSuccess ? 'Order Confirmed! 🎉' : 'Configure & Pay'}
            </h3>
          </div>
          {!isSuccess && (
            <button onClick={onClose} className="p-1 text-gray-400 transition-colors rounded-full hover:bg-gray-100 cursor-pointer" id="close-modal-btn">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5">
          {!isSuccess ? (
            <div className="space-y-5">
              {/* Package/Pricing Info Banner */}
              <div className="p-3.5 bg-amber-50 border border-amber-200/80 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase text-amber-800 tracking-wider">Limited Time Offer</p>
                  <p className="text-xs font-semibold text-gray-700">Special Redesign Upgrade</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-amber-900">₹{price}</span>
                  <span className="text-[9px] text-gray-400 font-bold block">Flat Rate</span>
                </div>
              </div>

              {/* Input Name to Design */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Name to Redesign
                </label>
                <input 
                  type="text" 
                  value={details.nameToDesign}
                  onChange={(e) => setDetails({ ...details, nameToDesign: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-hidden transition-all text-gray-900 text-sm font-semibold"
                  id="modal-name-input"
                />
              </div>

              {/* Input Email Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input 
                  type="email" 
                  value={details.email}
                  onChange={(e) => setDetails({ ...details, email: e.target.value })}
                  placeholder="e.g. john@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-hidden transition-all text-gray-900 text-sm font-semibold"
                  id="modal-email-input"
                />
                <p className="text-[10px] text-gray-400 mt-1">For receiving digital signature files and practice sheets</p>
              </div>

              {/* Input WhatsApp Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  WhatsApp Number (+91)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 font-bold text-sm">
                    +91
                  </span>
                  <input 
                    type="tel" 
                    maxLength={10}
                    value={details.whatsapp}
                    onChange={(e) => setDetails({ ...details, whatsapp: e.target.value.replace(/\D/g, '') })}
                    placeholder="98765 43210"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-hidden transition-all text-gray-900 text-sm font-semibold"
                    id="modal-whatsapp-input"
                  />
                </div>
                <p className="text-[10px] text-gray-400 mt-1">Our designers will share design drafts with you directly on WhatsApp</p>
              </div>

              <div className="border-t border-gray-200/60 my-2 pt-4">
                <p className="text-xs font-black uppercase text-gray-800 tracking-wider mb-3">Pay ₹{price} to Complete Order</p>
                
                {/* Real UPI QR Code Container */}
                <div className="flex flex-col items-center justify-center p-5 border border-gray-150 rounded-2xl bg-slate-50 relative overflow-hidden">
                  <div className="w-44 h-44 bg-white p-2.5 border border-gray-200 rounded-xl flex items-center justify-center shadow-md">
                    <img 
                      src={qrImageUrl}
                      alt="Scan to Pay QR Code"
                      className="w-full h-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="text-center mt-4 space-y-1">
                    <p className="text-xs font-extrabold text-gray-800 uppercase tracking-wider">Scan QR with GPay, PhonePe, Paytm, or BHIM</p>
                    <p className="text-[11px] text-gray-500">Or transfer to UPI Phone Number: <span className="font-bold text-gray-800 bg-yellow-100 px-1 py-0.5 rounded">9600123098</span></p>
                  </div>

                  <div className="w-full border-t border-gray-200/60 my-4 pt-3 space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-600 mb-1.5 uppercase tracking-wider">
                        Enter UPI Ref / Transaction ID / UTR (Optional)
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. 4152xxxxxxxx"
                        value={utrNumber}
                        onChange={(e) => setUtrNumber(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-900 font-mono"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-gray-400 text-[10px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                <span>100% Secure SSL Direct Calligraphy Rewriting Order System</span>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div>
                <h4 className="text-lg font-black text-gray-900">Payment Confirmed! 🎉</h4>
                <p className="text-xs text-gray-500 mt-1">Thank you! Your signature redesign has been queued successfully.</p>
              </div>

              {/* Order Details Receipt */}
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-left space-y-2 text-xs">
                <div className="flex justify-between border-b border-gray-200 pb-1.5">
                  <span className="text-gray-500">Order ID:</span>
                  <span className="font-mono font-bold text-gray-800">#SIG-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Name to Design:</span>
                  <span className="font-bold text-gray-800">{details.nameToDesign}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Amount Paid:</span>
                  <span className="font-bold text-gray-900">₹{price}.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">WhatsApp:</span>
                  <span className="font-bold text-gray-800">+91 {details.whatsapp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Email:</span>
                  <span className="font-bold text-gray-800">{details.email}</span>
                </div>
              </div>

              {/* Practice Materials Download links */}
              <div className="space-y-2.5 pt-2">
                <p className="text-xs text-left font-bold text-gray-700">✍️ Download Instant Practice Materials:</p>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={downloadMockPNG}
                    className="py-2.5 px-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" /> Practice SVG/PNG
                  </button>
                  <button 
                    onClick={downloadMockPracticeSheet}
                    className="py-2.5 px-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" /> Printable PDF Guide
                  </button>
                </div>

                <div className="border-t border-gray-100 pt-4 mt-2">
                  <a 
                    href={`https://wa.me/919600123098?text=Hi! I just ordered a signature rewrite for "${details.nameToDesign}". Email: ${details.email}. Please assign a designer.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-emerald-600/10 text-xs uppercase tracking-wider"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" /> Chat on WhatsApp with Designer
                  </a>
                  <p className="text-[10px] text-gray-400 mt-1.5">Connect with your dedicated signature calligraphy artist for instant drafts!</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        {!isSuccess && (
          <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between shrink-0">
            <button 
              onClick={onClose}
              className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-800 cursor-pointer"
            >
              Cancel
            </button>

            <button 
              onClick={handleCompletePayment}
              disabled={isProcessingPayment}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white text-sm font-extrabold rounded-xl flex items-center gap-1.5 shadow-md shadow-emerald-600/10 cursor-pointer transition-all"
            >
              {isProcessingPayment ? 'Verifying...' : 'I Have Paid ₹99'}
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
