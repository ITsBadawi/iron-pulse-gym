import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Flame, Clock, Zap, ArrowLeft } from 'lucide-react';
import type { Program } from '../types';
import { PROGRAMS } from '../data/gymData';

interface ProgramsSectionProps {
  onSelectProgram: (program: Program) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // In RTL, scrolling right goes backwards (toward beginning) and left goes forward
  const handleScroll = (direction: 'next' | 'prev') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = 400;

    // In RTL mode, scrollLeft is negative or reversed depending on browser
    const delta = direction === 'next' ? -scrollAmount : scrollAmount;
    container.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <section id="programs" className="py-24 bg-[#050505] relative overflow-hidden border-b border-[#1c1c1c]">
      
      {/* Background Section Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#FF2D2D]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#FF2D2D] font-mono text-xs uppercase tracking-widest mb-2 font-bold">
              <span className="w-2 h-2 bg-[#FF2D2D]" />
              <span>ELITE TRAINING DISCIPLINES</span>
            </div>
            <h2 className="font-display-ar font-black text-3xl sm:text-4xl md:text-5xl text-white">
              برامج تدريبية <span className="text-[#FF2D2D]">لا ترحم</span>
            </h2>
            <p className="text-gray-400 mt-2 max-w-xl text-sm sm:text-base">
              اختر مسارك الرياضي وتدرب وفق خطط احترافية صُممت لتمزيق الحواجز والوصول إلى أقصى طاقاتك الجسدية.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll('prev')}
              className="w-12 h-12 bg-[#141414] hover:bg-[#FF2D2D] border border-[#2B2B2B] hover:border-[#FF2D2D] flex items-center justify-center text-white transition-all duration-200 clip-diagonal-sm group"
              aria-label="البرنامج السابق"
            >
              <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-white" />
            </button>
            <button
              onClick={() => handleScroll('next')}
              className="w-12 h-12 bg-[#141414] hover:bg-[#FF2D2D] border border-[#2B2B2B] hover:border-[#FF2D2D] flex items-center justify-center text-white transition-all duration-200 clip-diagonal-sm group"
              aria-label="البرنامج التالي"
            >
              <ChevronLeft className="w-5 h-5 text-gray-300 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PROGRAMS.map((prog, index) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-none w-[310px] sm:w-[350px] md:w-[380px] bg-[#141414] border border-[#222222] hover:border-[#FF2D2D] clip-diagonal-sm transition-all duration-300 group flex flex-col justify-between overflow-hidden snap-start hover:shadow-[0_10px_35px_rgba(255,45,45,0.2)]"
            >
              {/* Card Image with Dramatic Filter */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.titleAr}
                  className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />

                {/* English Category Badge */}
                <div className="absolute top-4 right-4 bg-[#050505]/80 backdrop-blur-md border border-[#2A2A2A] px-2.5 py-1 text-[11px] font-display-en font-bold tracking-wider text-[#FF2D2D]">
                  {prog.titleEn}
                </div>

                {/* Duration & Calories Pill */}
                <div className="absolute bottom-3 right-4 flex items-center gap-3 text-xs font-mono text-gray-300">
                  <span className="flex items-center gap-1 bg-[#050505]/80 px-2 py-0.5 border border-[#262626]">
                    <Clock className="w-3 h-3 text-[#FF2D2D]" />
                    {prog.duration}
                  </span>
                  <span className="flex items-center gap-1 bg-[#050505]/80 px-2 py-0.5 border border-[#262626]">
                    <Flame className="w-3 h-3 text-[#FF2D2D]" />
                    {prog.caloriesBurn}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display-ar font-black text-2xl text-white group-hover:text-[#FF2D2D] transition-colors mb-2">
                    {prog.titleAr}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5 line-clamp-2">
                    {prog.tagline}
                  </p>

                  {/* Intensity Meter Bar */}
                  <div className="space-y-1.5 mb-6 bg-[#0B0B0B] p-3 border border-[#1F1F1F]">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400 font-bold flex items-center gap-1">
                        <Zap className="w-3 h-3 text-[#FF2D2D]" />
                        مستوى الشدة والجهد
                      </span>
                      <span className="font-mono font-bold text-[#FF2D2D]">{prog.intensity}%</span>
                    </div>
                    <div className="w-full bg-[#1F1F1F] h-2 rounded-xs overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#D41818] to-[#FF2D2D] h-full transition-all duration-700 group-hover:brightness-125"
                        style={{ width: `${prog.intensity}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Details Button */}
                <button
                  onClick={() => onSelectProgram(prog)}
                  className="w-full py-3 px-4 bg-[#1A1A1A] hover:bg-[#FF2D2D] text-white font-display-ar font-bold text-sm border border-[#2B2B2B] hover:border-[#FF2D2D] transition-all duration-200 flex items-center justify-center gap-2 group-hover:text-white"
                >
                  <span>استكشف تفاصيل البرنامج</span>
                  <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-6 flex items-center justify-between text-xs text-gray-500 font-mono">
          <span>* اسحب يميناً ويساراً لاستعراض جميع التخصصات</span>
          <span className="text-[#FF2D2D]">5 برامج متخصصة متوفرة</span>
        </div>

      </div>
    </section>
  );
};
