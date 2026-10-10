import React from 'react';

export const Marquee: React.FC = () => {
  const marqueeItems = [
    { text: 'STRENGTH', isEn: true },
    { text: 'قوة وفولاذ', isEn: false },
    { text: 'POWER', isEn: true },
    { text: 'انضباط حقيقي', isEn: false },
    { text: 'DISCIPLINE', isEn: true },
    { text: 'عرق وتحدي', isEn: false },
    { text: 'IRON PULSE', isEn: true },
    { text: 'بلا حدود', isEn: false },
    { text: 'NO WEAKNESS', isEn: true },
    { text: 'تحطيم الأوزان', isEn: false },
  ];

  return (
    <section className="relative overflow-hidden py-8 bg-[#0A0A0A] border-y border-[#222222] select-none">
      
      {/* Background Red Glow Flares */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-20 bg-[#FF2D2D]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-20 bg-[#FF2D2D]/10 blur-3xl pointer-events-none" />

      {/* Row 1: Leftward Marquee (Aggressive White & Signal Red) */}
      <div className="relative flex overflow-x-hidden -rotate-1 py-1">
        <div className="flex shrink-0 animate-marquee items-center gap-10 whitespace-nowrap">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center gap-8">
              <span
                className={`text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider ${
                  item.isEn ? 'font-display-en' : 'font-display-ar'
                } ${
                  idx % 3 === 0 ? 'text-[#FF2D2D]' : 'text-white'
                }`}
              >
                {item.text}
              </span>
              <span className="w-3 h-3 bg-[#FF2D2D] rotate-45 transform" />
            </div>
          ))}
        </div>

        {/* Duplicate for seamless infinite loop */}
        <div className="flex shrink-0 animate-marquee items-center gap-10 whitespace-nowrap" aria-hidden="true">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div key={`m1-dup-${idx}`} className="flex items-center gap-8">
              <span
                className={`text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider ${
                  item.isEn ? 'font-display-en' : 'font-display-ar'
                } ${
                  idx % 3 === 0 ? 'text-[#FF2D2D]' : 'text-white'
                }`}
              >
                {item.text}
              </span>
              <span className="w-3 h-3 bg-[#FF2D2D] rotate-45 transform" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Rightward Reversed Marquee (Text Stroke Outline Aesthetic) */}
      <div className="relative flex overflow-x-hidden rotate-1 mt-4 py-1">
        <div className="flex shrink-0 animate-marquee-reverse items-center gap-10 whitespace-nowrap">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center gap-8">
              <span
                className={`text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-stroke-outline ${
                  item.isEn ? 'font-display-en' : 'font-display-ar'
                }`}
              >
                {item.text}
              </span>
              <span className="w-2.5 h-2.5 border border-[#FF2D2D] rotate-45 transform" />
            </div>
          ))}
        </div>

        {/* Duplicate for seamless infinite loop */}
        <div className="flex shrink-0 animate-marquee-reverse items-center gap-10 whitespace-nowrap" aria-hidden="true">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div key={`m2-dup-${idx}`} className="flex items-center gap-8">
              <span
                className={`text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-stroke-outline ${
                  item.isEn ? 'font-display-en' : 'font-display-ar'
                }`}
              >
                {item.text}
              </span>
              <span className="w-2.5 h-2.5 border border-[#FF2D2D] rotate-45 transform" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
