import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Trophy, Clock, Dumbbell } from 'lucide-react';
import { GYM_STATS } from '../data/gymData';

const StatCounter: React.FC<{
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}> = ({ target, prefix = '', suffix = '', duration = 1.8 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quartic
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(start + (end - start) * easeProgress);

      setCount(current);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-mono">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const StatsSection: React.FC = () => {
  const icons = [Users, Trophy, Clock, Dumbbell];

  return (
    <section className="py-20 bg-[#050505] relative overflow-hidden border-b border-[#1c1c1c]">
      
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-[#FF2D2D]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[#FF2D2D] font-mono text-xs uppercase tracking-widest mb-2 font-bold">
              <span className="w-2 h-2 bg-[#FF2D2D]" />
              <span>NUMBERS SPEAK LOUDER THAN WORDS</span>
            </div>
            <h2 className="font-display-ar font-black text-3xl sm:text-4xl md:text-5xl text-white">
              أرقام تُثبت <span className="text-[#FF2D2D]">هيمنتنا</span> الرياضية
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm sm:text-base">
            لا نعد بالمعجزات، نعدك بالانضباط. هذه الأرقام تمثل العرق والمجهود اليومي لكل بطل يتدرب بين جدران آيرون بلس.
          </p>
        </div>

        {/* 4 Big Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GYM_STATS.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-[#141414] border border-[#222222] hover:border-[#FF2D2D]/60 p-8 clip-diagonal-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,45,45,0.15)] flex flex-col justify-between"
              >
                {/* Diagonal cut corner accent */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-[#262626] group-hover:bg-[#FF2D2D] transition-colors" />

                {/* Top Icon & English Label */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-[#0B0B0B] border border-[#262626] group-hover:border-[#FF2D2D] flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-[#FF2D2D] group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-display-en text-xs tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors font-bold">
                    {stat.labelEn}
                  </span>
                </div>

                {/* Number Display */}
                <div className="my-2">
                  <div className="font-display-en text-5xl sm:text-6xl font-black text-white tracking-tight group-hover:text-[#FF2D2D] transition-colors">
                    <StatCounter
                      target={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                </div>

                {/* Arabic Label */}
                <div className="pt-4 border-t border-[#1F1F1F]">
                  <p className="font-display-ar font-bold text-gray-200 text-sm sm:text-base">
                    {stat.labelAr}
                  </p>
                </div>

                {/* Hover Laser Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF2D2D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
