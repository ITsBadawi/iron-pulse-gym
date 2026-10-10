import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, MoveHorizontal, Quote, Flame } from 'lucide-react';
import { TRANSFORMATIONS } from '../data/gymData';

export const TransformationsSection: React.FC = () => {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const activeStory = TRANSFORMATIONS[activeStoryIdx];

  const handleMove = useCallback((clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformations" className="py-24 bg-[#050505] relative overflow-hidden border-b border-[#1c1c1c]">
      
      {/* Background Section Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF2D2D]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#FF2D2D] font-mono text-xs uppercase tracking-widest mb-2 font-bold">
              <Trophy className="w-4 h-4 text-[#FF2D2D]" />
              <span>REAL BLOOD, SWEAT & TRANSFORMATIONS</span>
            </div>
            <h2 className="font-display-ar font-black text-3xl sm:text-4xl md:text-5xl text-white">
              قصص تحول <span className="text-[#FF2D2D]">حقيقية 100%</span>
            </h2>
            <p className="text-gray-400 mt-2 max-w-xl text-sm sm:text-base">
              هؤلاء لم يولدوا خارقين. دخلوا آيرون بلس بقرار واحد: إنهاء الأعذار. اسحب المؤشر لمشاهدة الفرق قبل وبعد.
            </p>
          </div>

          {/* Member Switcher Tabs */}
          <div className="flex gap-2 bg-[#101010] p-1.5 border border-[#222222] clip-diagonal-sm">
            {TRANSFORMATIONS.map((story, idx) => (
              <button
                key={story.id}
                onClick={() => {
                  setActiveStoryIdx(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 text-xs font-display-ar font-bold clip-diagonal-sm transition-all duration-200 ${
                  activeStoryIdx === idx
                    ? 'bg-[#FF2D2D] text-white shadow-red-glow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {story.name}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Before/After Split Viewer & Member Case Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Split Slider (7 cols) */}
          <div className="lg:col-span-7">
            <div
              ref={sliderContainerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
              className="relative h-[420px] sm:h-[480px] md:h-[520px] w-full overflow-hidden bg-[#141414] border-2 border-[#262626] clip-diagonal select-none cursor-ew-resize shadow-2xl"
            >
              {/* After Image (Full Background) */}
              <img
                src={activeStory.afterImage}
                alt={`${activeStory.name} بعد التحول`}
                className="absolute inset-0 w-full h-full object-cover object-center filter contrast-125 brightness-95"
                draggable={false}
              />
              <div className="absolute top-4 left-4 bg-[#FF2D2D] text-white text-xs font-bold font-display-ar px-3 py-1 clip-diagonal-sm shadow-md z-10">
                بعد التحول (AFTER)
              </div>

              {/* Before Image (Clipped Layer on Right in RTL / or Left) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeStory.beforeImage}
                  alt={`${activeStory.name} قبل التحول`}
                  className="absolute inset-0 w-full h-full object-cover object-center filter grayscale brightness-75 contrast-110"
                  style={{
                    width: sliderContainerRef.current ? `${sliderContainerRef.current.clientWidth}px` : '100%',
                    maxWidth: 'none',
                  }}
                  draggable={false}
                />
                <div className="absolute top-4 right-4 bg-[#050505]/90 border border-[#333333] text-gray-300 text-xs font-bold font-display-ar px-3 py-1 clip-diagonal-sm z-10">
                  قبل (BEFORE)
                </div>
              </div>

              {/* Draggable Divider Handle Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-[#FF2D2D] shadow-[0_0_15px_#FF2D2D] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Center Handle Button */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#050505] border-2 border-[#FF2D2D] shadow-[0_0_20px_#FF2D2D] flex items-center justify-center text-white">
                  <MoveHorizontal className="w-5 h-5 text-[#FF2D2D]" />
                </div>
              </div>

              {/* Bottom Instructions Badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#050505]/85 backdrop-blur-md border border-[#2B2B2B] px-4 py-1.5 text-[11px] text-gray-300 font-mono flex items-center gap-2 pointer-events-none z-10 rounded-xs">
                <span className="w-2 h-2 rounded-full bg-[#FF2D2D] animate-ping" />
                <span>اسحب المؤشر لليمين واليسار لرؤية الفرق</span>
              </div>
            </div>
          </div>

          {/* Member Case Details & Stats (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#141414] border border-[#242424] p-8 clip-diagonal"
              >
                {/* Member Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#202020]">
                  <div>
                    <h3 className="font-display-ar font-black text-2xl text-white">
                      {activeStory.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-mono mt-0.5">
                      العمر: {activeStory.age} سنة • {activeStory.program}
                    </p>
                  </div>
                  <span className="bg-[#FF2D2D]/15 border border-[#FF2D2D]/40 text-[#FF2D2D] text-xs font-mono font-bold px-3 py-1">
                    {activeStory.duration}
                  </span>
                </div>

                {/* Transformation Metrics 3 Cards */}
                <div className="grid grid-cols-3 gap-3 my-6">
                  <div className="bg-[#0B0B0B] border border-[#202020] p-3 text-center">
                    <span className="block text-[11px] text-gray-400 font-bold mb-1">تغير الوزن</span>
                    <span className="font-display-en text-lg sm:text-xl font-black text-[#FF2D2D] tracking-tight">
                      {activeStory.weightDiff}
                    </span>
                  </div>
                  <div className="bg-[#0B0B0B] border border-[#202020] p-3 text-center">
                    <span className="block text-[11px] text-gray-400 font-bold mb-1">نسبة الدهون</span>
                    <span className="font-display-en text-lg sm:text-xl font-black text-white tracking-tight">
                      {activeStory.fatDiff}
                    </span>
                  </div>
                  <div className="bg-[#0B0B0B] border border-[#202020] p-3 text-center">
                    <span className="block text-[11px] text-gray-400 font-bold mb-1">تطور العضل</span>
                    <span className="font-display-en text-lg sm:text-xl font-black text-emerald-400 tracking-tight">
                      {activeStory.muscleDiff}
                    </span>
                  </div>
                </div>

                {/* Member Testimonial */}
                <div className="relative bg-[#0E0E0E] p-4 border-r-2 border-[#FF2D2D]">
                  <Quote className="w-6 h-6 text-[#FF2D2D]/20 absolute top-2 left-2" />
                  <p className="text-sm text-gray-300 leading-relaxed italic relative z-10">
                    "{activeStory.story}"
                  </p>
                </div>

                {/* CTA to start their journey */}
                <div className="mt-6 pt-4 border-t border-[#202020]">
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#FF2D2D] hover:bg-[#D41818] text-white font-display-ar font-bold text-sm py-3.5 clip-diagonal shadow-red-glow transition-all duration-200"
                  >
                    <Flame className="w-4 h-4 fill-current" />
                    <span>اصنع قصة تحولك الخاصة معنا</span>
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
