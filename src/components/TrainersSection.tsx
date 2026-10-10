import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from './BrandIcons';
import { TRAINERS } from '../data/gymData';

export const TrainersSection: React.FC = () => {
  return (
    <section id="trainers" className="py-24 bg-[#050505] relative overflow-hidden border-b border-[#1c1c1c]">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF2D2D]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#FF2D2D] font-mono text-xs uppercase tracking-widest mb-3 font-bold">
            <span className="w-2 h-2 bg-[#FF2D2D]" />
            <span>CERTIFIED MASTERS OF DISCIPLINE</span>
          </div>
          <h2 className="font-display-ar font-black text-3xl sm:text-4xl md:text-5xl text-white">
            كادر تدريبي <span className="text-[#FF2D2D]">لا يقبل بأنصاف الحلول</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
            أبطال بطولات دولية ومدربون معتمدون بأعلى الشهادات العالمية. هدفهم ليس مجرد تدريبك، بل تحويلك إلى أقوى نسخة من نفسك.
          </p>
        </div>

        {/* 4 Trainer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS.map((trainer, idx) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group bg-[#141414] border border-[#222222] hover:border-[#FF2D2D] clip-diagonal-sm transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-[0_10px_35px_rgba(255,45,45,0.25)]"
            >
              
              {/* Photo: Shifts from Grayscale to Color on Hover with Red Glow */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-[#0A0A0A]">
                <img
                  src={trainer.image}
                  alt={trainer.nameAr}
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                  loading="lazy"
                />

                {/* Dark to red gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 bg-[#FF2D2D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Experience Badge */}
                <div className="absolute top-3 right-3 bg-[#050505]/90 border border-[#2B2B2B] px-2.5 py-1 text-xs font-bold text-white font-mono flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#FF2D2D]" />
                  <span>{trainer.experience}</span>
                </div>

                {/* Social handle tag */}
                <div className="absolute bottom-3 left-3 bg-[#050505]/80 px-2 py-0.5 border border-[#262626] text-[11px] font-mono text-gray-400 group-hover:text-white transition-colors flex items-center gap-1">
                  <InstagramIcon className="w-3 h-3 text-[#FF2D2D]" />
                  <span>{trainer.instagram}</span>
                </div>
              </div>

              {/* Trainer Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display-ar font-black text-xl text-white group-hover:text-[#FF2D2D] transition-colors">
                    {trainer.nameAr}
                  </h3>
                  <p className="text-xs text-[#FF2D2D] font-display-en tracking-wider font-bold mt-0.5">
                    {trainer.nameEn}
                  </p>
                  
                  <p className="text-xs text-gray-300 font-semibold mt-2 pb-3 border-b border-[#222222]">
                    {trainer.roleAr}
                  </p>

                  {/* Specialty */}
                  <div className="my-3 text-xs bg-[#0B0B0B] p-2.5 border border-[#1E1E1E]">
                    <span className="text-gray-400 block font-semibold mb-1">التخصص الأساسي:</span>
                    <span className="text-white font-bold">{trainer.specialty}</span>
                  </div>

                  {/* Quote */}
                  <p className="text-xs italic text-gray-400 leading-relaxed bg-[#191919] p-3 border-r-2 border-[#FF2D2D]">
                    "{trainer.quote}"
                  </p>
                </div>

                {/* Key certificates summary */}
                <div className="mt-4 pt-4 border-t border-[#1F1F1F]">
                  <ul className="space-y-1 text-[11px] text-gray-400">
                    {trainer.certificates.slice(0, 2).map((cert, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#FF2D2D] shrink-0" />
                        <span className="truncate">{cert}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Booking CTA link */}
                  <a
                    href="#contact"
                    className="mt-4 w-full block text-center py-2 bg-[#1A1A1A] hover:bg-[#FF2D2D] text-white font-bold text-xs clip-diagonal-sm transition-colors duration-200"
                  >
                    احجز جلسة تدريب خاصة
                  </a>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
