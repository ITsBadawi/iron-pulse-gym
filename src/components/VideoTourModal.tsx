import React from 'react';
import { X, Play, Dumbbell } from 'lucide-react';

interface VideoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoTourModal: React.FC<VideoTourModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const facilities = [
    { title: 'صالة الحديد الثقيل', desc: 'أجهزة Hammer Strength الأصلية مع أوزان حتى 70 كجم' },
    { title: 'أرينا الكروس فت', desc: 'حبال تسلق، أطواق جمباز، ودراجات Assault Bikes' },
    { title: 'حلبة الملاكمة الدولية', desc: 'حلبة مطابقة للمواصفات وأكياس جلدية ثقيلة' },
    { title: 'سبا الاستشفاء وحمامات الجليد', desc: 'غرف ساونا فنلندية وأحواض ثلج بدرجة حرارة 3°C' },
    { title: 'البار الصحي والمكملات', desc: 'شيكات بروتين طازجة ومكملات غذائية معتمدة' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#141414] border-2 border-[#FF2D2D] clip-diagonal overflow-hidden shadow-[0_0_60px_rgba(255,45,45,0.5)] animate-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 bg-[#0A0A0A] border-b border-[#222222]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#FF2D2D] rounded-full animate-ping" />
            <h3 className="font-display-ar font-black text-lg text-white">
              جولة تفقدية داخل نادي آيرون بلس (الرياض)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-[#181818] hover:bg-[#FF2D2D] text-white flex items-center justify-center border border-[#333333] transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative w-full h-64 sm:h-96 bg-black flex items-center justify-center overflow-hidden">
          {/* Unsplash High-res Athletic Action Scene */}
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=85&w=1280&auto=format&fit=crop"
            alt="IRON PULSE Gym Tour Arena"
            className="w-full h-full object-cover filter contrast-125 brightness-80"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/40" />

          {/* Center Play Button Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF2D2D]/90 border-2 border-white flex items-center justify-center shadow-red-glow animate-pulse">
              <Play className="w-8 h-8 text-white fill-current ml-1" />
            </div>
            <p className="font-display-ar font-bold text-white text-base mt-4 drop-shadow-md">
              فيديو استعراضي: مساحة تزيد عن 3,500 متر مربع
            </p>
            <span className="text-xs text-gray-300 font-mono mt-1 bg-black/60 px-3 py-1 rounded-xs border border-white/20">
              4K ULTRA HD • 60 FPS
            </span>
          </div>
        </div>

        {/* Facilities Highlights */}
        <div className="p-6 bg-[#0E0E0E]">
          <h4 className="font-display-ar font-black text-sm text-[#FF2D2D] uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <Dumbbell className="w-4 h-4" />
            <span>المرافق والتجهيزات المتاحة لك على مدار الساعة</span>
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {facilities.map((fac, idx) => (
              <div key={idx} className="bg-[#141414] border border-[#222222] p-3 text-right">
                <span className="font-display-ar font-bold text-white text-xs block mb-0.5">
                  {fac.title}
                </span>
                <span className="text-[11px] text-gray-400 block leading-tight">
                  {fac.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-4 bg-[#141414] border-t border-[#222222] flex items-center justify-between">
          <span className="text-xs text-gray-400 font-mono hidden sm:inline">
            طريق الملك فهد، الرياض • مواقف مجانية خاصة
          </span>
          <a
            href="#pricing"
            onClick={onClose}
            className="w-full sm:w-auto py-2.5 px-6 bg-[#FF2D2D] hover:bg-[#D41818] text-white font-display-ar font-bold text-xs clip-diagonal transition-colors text-center"
          >
            احجز زيارتك الميدانية الآن
          </a>
        </div>

      </div>
    </div>
  );
};
