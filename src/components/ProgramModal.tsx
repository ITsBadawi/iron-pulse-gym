import React from 'react';
import { X, Flame, Clock, Zap, CheckCircle2, Dumbbell } from 'lucide-react';
import type { Program } from '../types';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({ program, onClose }) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#141414] border-2 border-[#FF2D2D]/60 clip-diagonal overflow-hidden shadow-[0_0_50px_rgba(255,45,45,0.4)] animate-in zoom-in-95 duration-200">
        
        {/* Top Image with Badge */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden">
          <img
            src={program.image}
            alt={program.titleAr}
            className="w-full h-full object-cover filter contrast-125 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 w-10 h-10 bg-[#050505]/80 hover:bg-[#FF2D2D] border border-[#2B2B2B] hover:border-[#FF2D2D] text-white flex items-center justify-center transition-colors clip-diagonal-sm"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Badge */}
          <div className="absolute bottom-4 right-6 left-6 flex items-end justify-between">
            <div>
              <span className="font-display-en text-xs font-bold text-[#FF2D2D] tracking-wider uppercase bg-[#050505]/80 px-2 py-0.5 border border-[#2A2A2A] inline-block mb-1">
                {program.titleEn}
              </span>
              <h3 className="font-display-ar font-black text-2xl sm:text-3xl text-white">
                {program.titleAr}
              </h3>
            </div>
            
            <div className="bg-[#FF2D2D] text-white font-mono font-bold text-xs px-3 py-1 clip-diagonal-sm">
              شدة {program.intensity}%
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 bg-[#0A0A0A] p-3 border border-[#222222]">
            <div className="text-center">
              <span className="block text-[11px] text-gray-400 font-mono flex items-center justify-center gap-1">
                <Clock className="w-3 h-3 text-[#FF2D2D]" />
                المدة
              </span>
              <span className="font-bold text-white text-sm">{program.duration}</span>
            </div>
            <div className="text-center border-x border-[#1F1F1F]">
              <span className="block text-[11px] text-gray-400 font-mono flex items-center justify-center gap-1">
                <Flame className="w-3 h-3 text-[#FF2D2D]" />
                الحرق المتوقع
              </span>
              <span className="font-bold text-[#FF2D2D] text-sm">{program.caloriesBurn}</span>
            </div>
            <div className="text-center">
              <span className="block text-[11px] text-gray-400 font-mono flex items-center justify-center gap-1">
                <Zap className="w-3 h-3 text-[#FF2D2D]" />
                الجدول
              </span>
              <span className="font-bold text-white text-xs truncate block">{program.schedulePreview}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-display-ar font-bold text-sm text-gray-400 mb-1">عن البرنامج</h4>
            <p className="text-gray-200 text-sm leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Target Goal */}
          <div className="bg-[#1C1C1C] p-3 border-r-2 border-[#FF2D2D]">
            <span className="block text-xs text-gray-400 font-semibold mb-0.5">الهدف الأساسي:</span>
            <span className="text-white font-bold text-sm">{program.targetGoal}</span>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-display-ar font-bold text-sm text-gray-400 mb-3">ماذا يشمل التدريب؟</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-gray-300 bg-[#0A0A0A] p-2.5 border border-[#1E1E1E]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF2D2D] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="p-6 bg-[#0E0E0E] border-t border-[#222222] flex flex-col sm:flex-row gap-3">
          <a
            href="#pricing"
            onClick={onClose}
            className="flex-1 py-3 px-6 bg-[#FF2D2D] hover:bg-[#D41818] text-white font-display-ar font-bold text-sm clip-diagonal flex items-center justify-center gap-2 shadow-red-glow transition-colors"
          >
            <Dumbbell className="w-4 h-4" />
            <span>اشترك في هذا البرنامج الآن</span>
          </a>
          <button
            onClick={onClose}
            className="py-3 px-6 bg-[#1A1A1A] hover:bg-[#252525] text-gray-300 font-bold text-sm border border-[#2E2E2E] transition-colors"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
};
