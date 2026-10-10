import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowLeft, Flame, Award } from 'lucide-react';

interface HeroProps {
  onOpenVideoTour: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVideoTour }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-20 pb-16"
    >
      {/* Background Media: Dark Dramatic Image with Video Overlay & Atmospheric Gradients */}
      <div className="absolute inset-0 z-0">
        {/* High performance Unsplash gym background image */}
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=85&w=1920&auto=format&fit=crop"
          alt="Iron Pulse Heavy Gym Background"
          className="w-full h-full object-cover object-center filter grayscale brightness-[0.28] contrast-125 scale-105 transform motion-safe:animate-pulse-slow"
          loading="eager"
        />

        {/* Deep Vignette and Signal Red Laser Fog */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF2D2D]/15 via-transparent to-[#050505]" />
        
        {/* Athletic Grid Line Texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Horizontal Laser Glow Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF2D2D]/40 to-transparent pointer-events-none" />
      </div>

      {/* Floating Athletic Badges (Corner Highlights) */}
      <div className="hidden lg:flex absolute top-28 right-12 z-10 items-center gap-3 bg-[#141414]/80 backdrop-blur-md border border-[#2A2A2A] px-4 py-2 clip-diagonal-sm">
        <Flame className="w-5 h-5 text-[#FF2D2D]" />
        <div className="text-right">
          <p className="text-[11px] text-gray-400 font-mono">طاقة الحصص الحالية</p>
          <p className="text-xs font-bold text-white font-mono">100% MAXIMUM POWER</p>
        </div>
      </div>

      <div className="hidden lg:flex absolute bottom-24 left-12 z-10 items-center gap-3 bg-[#141414]/80 backdrop-blur-md border border-[#2A2A2A] px-4 py-2 clip-diagonal-sm">
        <Award className="w-5 h-5 text-[#FF2D2D]" />
        <div className="text-right">
          <p className="text-[11px] text-gray-400 font-mono">الاعتماد الدولي</p>
          <p className="text-xs font-bold text-white">OLYMPIC CERTIFIED GYM</p>
        </div>
      </div>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        
        {/* Top Tag: Athletic Warning / Motto */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 bg-[#141414] border border-[#FF2D2D]/40 rounded-xs"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF2D2D] animate-ping" />
          <span className="font-display-en text-xs font-bold tracking-widest text-[#FF2D2D]">
            IRON PULSE FITNESS CLUB • RIYADH
          </span>
          <span className="text-gray-500 font-mono">|</span>
          <span className="text-xs font-bold text-gray-300">أقوى صالة حديد ولياقة</span>
        </motion.div>

        {/* Massive Layered Headline: NO EXCUSES behind + ما فيه عذر in front with mask reveal */}
        <div className="relative w-full flex items-center justify-center my-2 select-none">
          
          {/* Background Outlined English Display Words */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.35, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="absolute -top-12 sm:-top-16 md:-top-20 lg:-top-24 font-display-en text-6xl sm:text-8xl md:text-9xl lg:text-[13rem] font-black text-stroke-heavy tracking-wider pointer-events-none whitespace-nowrap"
          >
            NO EXCUSES
          </motion.div>

          {/* Foreground Giant Arabic Headline with Mask Reveal */}
          <div className="overflow-hidden relative py-2">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
              className="font-display-ar font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
            >
              ما فيه <span className="text-[#FF2D2D] underline decoration-[#FF2D2D]/60 decoration-wavy underline-offset-8">عُـذر!</span>
            </motion.h1>
          </div>
        </div>

        {/* Secondary Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed mb-10 mt-2"
        >
          المكان الذي تُصنع فيه الأجساد الفولاذية وتتحطم فيه الأعذار. 
          أجهزة هامر وأوزان أولمبية مع نخبة مدربي المملكة — لا مكان للمتكاسلين.
        </motion.p>

        {/* Action Buttons: ابدأ الآن & جولة في النادي */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          {/* Main Action: ابدأ الآن */}
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FF2D2D] hover:bg-[#D41818] text-white font-display-ar font-black text-lg px-8 py-4 clip-diagonal shadow-red-glow hover:shadow-red-glow-lg transition-all duration-300 hover:-translate-y-1 group"
          >
            <span>ابدأ الآن واستلم خطتك</span>
            <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
          </a>

          {/* Secondary Action: جولة في النادي */}
          <button
            onClick={onOpenVideoTour}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#141414] hover:bg-[#1f1f1f] text-white font-display-ar font-bold text-base px-7 py-4 border border-[#2E2E2E] hover:border-[#FF2D2D] clip-diagonal transition-all duration-300 group"
          >
            <div className="w-8 h-8 rounded-full bg-[#FF2D2D]/20 border border-[#FF2D2D] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3.5 h-3.5 text-[#FF2D2D] fill-current ml-0.5" />
            </div>
            <span>جولة في النادي (فيديو)</span>
          </button>
        </motion.div>

        {/* Micro-features highlight strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-14 pt-8 border-t border-[#1F1F1F] w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          <div className="flex flex-col items-center">
            <span className="font-display-en text-xl md:text-2xl font-bold text-white tracking-wider">24/7 OPEN</span>
            <span className="text-xs text-gray-400 font-medium">مفتوح طوال العام</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display-en text-xl md:text-2xl font-bold text-[#FF2D2D] tracking-wider">HAMMER & ELEIKO</span>
            <span className="text-xs text-gray-400 font-medium">أجهزة وبنشات أولمبية</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display-en text-xl md:text-2xl font-bold text-white tracking-wider">ZERO EXCUSES</span>
            <span className="text-xs text-gray-400 font-medium">انضباط والتزام تام</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display-en text-xl md:text-2xl font-bold text-[#FF2D2D] tracking-wider">RECOVERY SPA</span>
            <span className="text-xs text-gray-400 font-medium">ساونا وأحواض جليد</span>
          </div>
        </motion.div>

      </div>

      {/* Bottom Jagged Decorative Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF2D2D] to-transparent" />
    </section>
  );
};
