import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, User, Zap, CheckCircle2 } from 'lucide-react';
import { WEEK_DAYS } from '../data/gymData';
import type { ScheduleClass } from '../types';

export const ScheduleSection: React.FC = () => {
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [bookedClassId, setBookedClassId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'iron', label: 'حديد وقوة' },
    { id: 'crossfit', label: 'كروس فت' },
    { id: 'boxing', label: 'ملاكمة' },
    { id: 'mobility', label: 'استشفاء' },
    { id: 'hiit', label: 'حرق دهون' },
  ];

  const currentDay = WEEK_DAYS[selectedDayIdx];

  const filteredClasses = currentDay.classes.filter((cls) => {
    if (selectedCategory === 'all') return true;
    return cls.category === selectedCategory;
  });

  const handleBookClass = (cls: ScheduleClass) => {
    setBookedClassId(cls.id);
    setTimeout(() => {
      setBookedClassId(null);
    }, 2800);
  };

  return (
    <section id="schedule" className="py-24 bg-[#050505] relative overflow-hidden border-b border-[#1c1c1c]">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#FF2D2D] font-mono text-xs uppercase tracking-widest mb-2 font-bold">
              <Calendar className="w-4 h-4 text-[#FF2D2D]" />
              <span>WARRIOR WEEKLY SCHEDULE</span>
            </div>
            <h2 className="font-display-ar font-black text-3xl sm:text-4xl md:text-5xl text-white">
              جدول الحصص <span className="text-[#FF2D2D]">الأسبوعي</span>
            </h2>
            <p className="text-gray-400 mt-2 max-w-xl text-sm sm:text-base">
              حصص مكثفة يومياً من الصباح الباكر حتى آخر الليل. اختر يومك وانطلق لميدان القوة.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-bold font-display-ar clip-diagonal-sm transition-all duration-200 border ${
                  selectedCategory === cat.id
                    ? 'bg-[#FF2D2D] text-white border-[#FF2D2D] shadow-red-glow'
                    : 'bg-[#141414] text-gray-400 border-[#262626] hover:text-white hover:border-[#383838]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Day of Week Navigation Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {WEEK_DAYS.map((day, idx) => {
            const isSelected = selectedDayIdx === idx;
            return (
              <button
                key={day.dayNameAr}
                onClick={() => setSelectedDayIdx(idx)}
                className={`flex-1 min-w-[100px] py-3.5 px-4 text-center transition-all duration-200 clip-diagonal-sm border ${
                  isSelected
                    ? 'bg-[#1A1A1A] border-[#FF2D2D] shadow-[0_4px_20px_rgba(255,45,45,0.25)]'
                    : 'bg-[#0E0E0E] border-[#1F1F1F] hover:bg-[#141414] hover:border-[#2D2D2D]'
                }`}
              >
                <span
                  className={`block font-display-ar font-black text-base sm:text-lg ${
                    isSelected ? 'text-[#FF2D2D]' : 'text-gray-300'
                  }`}
                >
                  {day.dayNameAr}
                </span>
                <span className="block font-display-en text-[11px] text-gray-500 font-bold uppercase tracking-wider">
                  {day.dayNameEn}
                </span>
              </button>
            );
          })}
        </div>

        {/* Classes Timetable */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {filteredClasses.length > 0 ? (
              <motion.div
                key={`${selectedDayIdx}-${selectedCategory}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {filteredClasses.map((cls) => {
                  const isBooked = bookedClassId === cls.id;
                  return (
                    <div
                      key={cls.id}
                      className="group bg-[#141414] border border-[#222222] hover:border-[#FF2D2D] p-5 clip-diagonal-sm transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-[0_4px_25px_rgba(255,45,45,0.15)]"
                    >
                      {/* Left Block: Time & Category */}
                      <div className="flex items-center gap-5">
                        <div className="w-24 shrink-0 bg-[#0A0A0A] border border-[#262626] group-hover:border-[#FF2D2D] py-2 px-3 text-center">
                          <span className="font-display-en text-xl font-black text-white group-hover:text-[#FF2D2D] transition-colors block">
                            {cls.time}
                          </span>
                          <span className="text-[10px] text-gray-500 font-mono block">
                            {cls.duration}
                          </span>
                        </div>

                        {/* Title & Trainer */}
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-display-en text-xs font-bold text-[#FF2D2D] tracking-wider uppercase">
                              {cls.titleEn}
                            </span>
                            <span className="text-gray-600 font-mono">•</span>
                            <span className="text-[11px] px-2 py-0.5 bg-[#1F1F1F] text-gray-300 font-mono rounded-xs">
                              كثافة: {cls.intensity}
                            </span>
                          </div>
                          <h4 className="font-display-ar font-black text-xl text-white group-hover:text-gray-100">
                            {cls.titleAr}
                          </h4>
                          <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-gray-400">
                            <span className="flex items-center gap-1.5">
                              <User className="w-3.5 h-3.5 text-[#FF2D2D]" />
                              كابتن {cls.trainer}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-gray-500" />
                              {cls.room}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right Block: Action Button */}
                      <div className="shrink-0 flex items-center justify-end">
                        <button
                          onClick={() => handleBookClass(cls)}
                          className={`w-full md:w-auto px-6 py-2.5 font-display-ar font-bold text-xs clip-diagonal-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                            isBooked
                              ? 'bg-emerald-600 text-white border border-emerald-500'
                              : 'bg-[#1E1E1E] hover:bg-[#FF2D2D] text-white border border-[#2B2B2B] hover:border-[#FF2D2D]'
                          }`}
                        >
                          {isBooked ? (
                            <>
                              <CheckCircle2 className="w-4 h-4" />
                              <span>تم تأكيد المقعد!</span>
                            </>
                          ) : (
                            <>
                              <Zap className="w-3.5 h-3.5 fill-current" />
                              <span>احجز مقعدك الآن</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            ) : (
              <div className="text-center py-12 bg-[#101010] border border-[#1E1E1E] p-8">
                <p className="text-gray-400 font-bold mb-2">لا توجد حصص في هذا التصنيف لهذا اليوم.</p>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="text-xs text-[#FF2D2D] underline font-bold hover:text-white"
                >
                  عرض جميع حصص اليوم
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
