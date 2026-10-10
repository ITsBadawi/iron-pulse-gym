import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent('مرحباً كابتن، أود الاستفسار عن باقات واشتراكات نادي آيرون بلس وحجز موعد زيارة.');
    window.open(`https://wa.me/${GYM_CONTACT.whatsAppNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
      
      {/* Tooltip Pill */}
      <div
        className={`bg-[#141414] border border-[#FF2D2D]/60 text-white px-3.5 py-1.5 text-xs font-bold font-display-ar clip-diagonal-sm shadow-[0_0_20px_rgba(255,45,45,0.3)] transition-all duration-300 hidden sm:flex items-center gap-1.5 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-85 translate-x-1'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#FF2D2D] animate-ping" />
        <span>تحدث مع كابتن آيرون بلس مباشرة</span>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={handleOpenWhatsApp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-14 h-14 bg-[#141414] hover:bg-[#FF2D2D] border-2 border-[#FF2D2D] flex items-center justify-center text-white clip-diagonal-sm shadow-[0_0_25px_rgba(255,45,45,0.5)] hover:shadow-[0_0_40px_rgba(255,45,45,0.85)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
        aria-label="تواصل عبر الواتساب"
      >
        {/* Pulsing beacon ring */}
        <span className="absolute -inset-1 rounded-none border border-[#FF2D2D]/60 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageSquare className="w-6 h-6 text-[#FF2D2D] group-hover:text-white transition-colors fill-current" />
      </button>

    </div>
  );
};
