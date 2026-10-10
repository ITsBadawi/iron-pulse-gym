import React, { useState, useMemo } from 'react';
import { Activity, Dumbbell, Flame, CheckCircle, ArrowLeft } from 'lucide-react';

export const BmiCalculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(80);
  const [height, setHeight] = useState<number>(178);

  const { bmi, category, color, advice, recommendedProgram } = useMemo(() => {
    if (!weight || !height || height <= 0) {
      return {
        bmi: 0,
        category: 'غير محدد',
        color: 'text-gray-400',
        advice: 'يرجى إدخال وزنك وطولك لحساب المؤشر بدقة.',
        recommendedProgram: 'استشارة مدرب'
      };
    }

    const heightInMeters = height / 100;
    const val = Number((weight / (heightInMeters * heightInMeters)).toFixed(1));

    if (val < 18.5) {
      return {
        bmi: val,
        category: 'نقص في الوزن (نحافة)',
        color: 'text-sky-400',
        advice: 'تحتاج إلى برنامج تضخيم عضلي مكثف مع زيادة السعرات الحرارية والتركيز على رفع الأثقال المركبة (سكوات، بنش، ديدلفت).',
        recommendedProgram: 'برنامج الحديد وبناء الأجسام (HYPERTROPHY)'
      };
    } else if (val >= 18.5 && val < 25) {
      return {
        bmi: val,
        category: 'وزن مثالي ورشيق',
        color: 'text-emerald-400',
        advice: 'كتلتك ممتازة! هدفك الآن هو تحسين القوة الانفجارية، بناء عضلات صلبة، وتطوير التحمل القلبي العضلي.',
        recommendedProgram: 'برنامج الكروس فت التكتيكي أو الملاكمة'
      };
    } else if (val >= 25 && val < 30) {
      return {
        bmi: val,
        category: 'زيادة في الوزن',
        color: 'text-amber-400',
        advice: 'يمكنك تحويل هذا الوزن الزائد إلى درع عضلي ضخم عبر دمج تمارين المقاومة الثقيلة مع كارديو عالي الكثافة (HIIT).',
        recommendedProgram: 'برنامج تحول بدني وحرق دهون (METABOLIC SHRED)'
      };
    } else {
      return {
        bmi: val,
        category: 'سمنة / كتلة زائدة',
        color: 'text-[#FF2D2D]',
        advice: 'حان وقت الحسم! لا مزيد من التأجيل، ابدأ فوراً بنظام تدريب لحرق الدهون وإعادة ضبط معدل الحرق اليومي تحت إشراف مدربنا.',
        recommendedProgram: 'برنامج التحول الشامل + متابعة InBody أسبوعية'
      };
    }
  }, [weight, height]);

  // Calculate pointer position on the gauge (15 to 35 scale)
  const gaugePercent = useMemo(() => {
    const min = 15;
    const max = 35;
    const clamped = Math.max(min, Math.min(max, bmi));
    return ((clamped - min) / (max - min)) * 100;
  }, [bmi]);

  return (
    <section id="bmi" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-b border-[#1c1c1c]">
      
      {/* Background Grid & Red Flare */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#FF2D2D]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#FF2D2D] font-mono text-xs uppercase tracking-widest mb-3 font-bold">
            <Activity className="w-4 h-4 text-[#FF2D2D]" />
            <span>BODY MASS COMPOSITION ENGINE</span>
          </div>
          <h2 className="font-display-ar font-black text-3xl sm:text-4xl md:text-5xl text-white">
            حاسبة <span className="text-[#FF2D2D]">مؤشر كتلة الجسم (BMI)</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            أدخل قياساتك الحالية لتعرف موقعك على مقياس القوة واكتشف البرنامج الرياضي الأنسب لجسمك في آيرون بلس.
          </p>
        </div>

        {/* Calculator Main Interactive Card */}
        <div className="bg-[#141414] border border-[#242424] p-6 sm:p-10 clip-diagonal shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls (6 cols) */}
            <div className="lg:col-span-6 space-y-7">
              
              {/* Weight Slider & Input */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label htmlFor="weight-range" className="font-display-ar font-bold text-white text-base">
                    الوزن (كيلوجرام)
                  </label>
                  <div className="flex items-center gap-1 bg-[#0A0A0A] border border-[#2B2B2B] px-3 py-1">
                    <span className="font-display-en text-2xl font-black text-[#FF2D2D]">{weight}</span>
                    <span className="text-xs text-gray-400 font-mono">كجم</span>
                  </div>
                </div>
                <input
                  id="weight-range"
                  type="range"
                  min="40"
                  max="160"
                  step="1"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-2 bg-[#222222] rounded-xs appearance-none cursor-pointer accent-[#FF2D2D]"
                />
                <div className="flex justify-between text-[11px] text-gray-500 font-mono">
                  <span>40 كجم</span>
                  <span>100 كجم</span>
                  <span>160 كجم</span>
                </div>
              </div>

              {/* Height Slider & Input */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label htmlFor="height-range" className="font-display-ar font-bold text-white text-base">
                    الطول (سنتيمتر)
                  </label>
                  <div className="flex items-center gap-1 bg-[#0A0A0A] border border-[#2B2B2B] px-3 py-1">
                    <span className="font-display-en text-2xl font-black text-white">{height}</span>
                    <span className="text-xs text-gray-400 font-mono">سم</span>
                  </div>
                </div>
                <input
                  id="height-range"
                  type="range"
                  min="130"
                  max="220"
                  step="1"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-[#222222] rounded-xs appearance-none cursor-pointer accent-[#FF2D2D]"
                />
                <div className="flex justify-between text-[11px] text-gray-500 font-mono">
                  <span>130 سم</span>
                  <span>175 سم</span>
                  <span>220 سم</span>
                </div>
              </div>

              {/* Quick Preset Buttons */}
              <div className="pt-2 flex items-center gap-2">
                <span className="text-xs text-gray-500 font-mono">نماذج سريعة:</span>
                <button
                  type="button"
                  onClick={() => { setWeight(72); setHeight(175); }}
                  className="text-xs bg-[#1C1C1C] hover:bg-[#2A2A2A] text-gray-300 px-2.5 py-1 rounded-xs font-mono"
                >
                  رشيق (72/175)
                </button>
                <button
                  type="button"
                  onClick={() => { setWeight(88); setHeight(180); }}
                  className="text-xs bg-[#1C1C1C] hover:bg-[#2A2A2A] text-gray-300 px-2.5 py-1 rounded-xs font-mono"
                >
                  قوي (88/180)
                </button>
                <button
                  type="button"
                  onClick={() => { setWeight(102); setHeight(176); }}
                  className="text-xs bg-[#1C1C1C] hover:bg-[#2A2A2A] text-gray-300 px-2.5 py-1 rounded-xs font-mono"
                >
                  تحول (102/176)
                </button>
              </div>

            </div>

            {/* Results & Colored Gauge (6 cols) */}
            <div className="lg:col-span-6 bg-[#0B0B0B] border border-[#222222] p-6 sm:p-8 clip-diagonal-sm flex flex-col justify-between">
              
              {/* Score Display */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#1C1C1C]">
                  <div>
                    <span className="text-xs text-gray-400 font-mono block">مؤشر كتلة جسمك الحالي</span>
                    <span className={`text-sm font-bold font-display-ar ${color}`}>
                      {category}
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="font-display-en text-5xl font-black text-white tracking-tight">
                      {bmi}
                    </span>
                    <span className="text-xs text-gray-500 font-mono block">BMI</span>
                  </div>
                </div>

                {/* Visual Gradient Gauge Bar */}
                <div className="my-6">
                  <div className="relative h-3 rounded-full bg-gradient-to-r from-sky-500 via-emerald-500 via-amber-500 to-[#FF2D2D] p-0.5">
                    {/* Draggable/Current Pointer */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-2 border-[#050505] shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300"
                      style={{ left: `${gaugePercent}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1.5">
                    <span>نحافة (&lt;18.5)</span>
                    <span>مثالي (18.5-24.9)</span>
                    <span>زيادة (25-29.9)</span>
                    <span>سمنة (30+)</span>
                  </div>
                </div>

                {/* Tailored Recommendation */}
                <div className="bg-[#141414] p-4 border border-[#222222] rounded-xs space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Flame className="w-4 h-4 text-[#FF2D2D]" />
                    <span>توصية خبراء آيرون بلس:</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {advice}
                  </p>
                  <div className="pt-2 text-xs font-bold text-[#FF2D2D] flex items-center gap-1.5 font-display-ar">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>البرنامج المقترح: {recommendedProgram}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-[#1C1C1C]">
                <a
                  href="#pricing"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FF2D2D] hover:bg-[#D41818] text-white font-display-ar font-bold text-sm py-3 clip-diagonal transition-all duration-200 shadow-red-glow"
                >
                  <Dumbbell className="w-4 h-4" />
                  <span>انضم وابدأ برنامجك الآن</span>
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
