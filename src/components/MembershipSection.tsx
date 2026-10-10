import React from 'react';
import { motion } from 'framer-motion';
import { Check, MessageSquare, ShieldCheck, Star } from 'lucide-react';
import { MEMBERSHIP_PLANS, GYM_CONTACT } from '../data/gymData';

export const MembershipSection: React.FC = () => {
  const handleSubscribeWhatsApp = (whatsAppText: string) => {
    const encodedText = encodeURIComponent(whatsAppText);
    const url = `https://wa.me/${GYM_CONTACT.whatsAppNumber}?text=${encodedText}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="pricing" className="py-24 bg-[#050505] relative overflow-hidden border-b border-[#1c1c1c]">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#FF2D2D]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#FF2D2D] font-mono text-xs uppercase tracking-widest mb-3 font-bold">
            <span className="w-2 h-2 bg-[#FF2D2D]" />
            <span>INVEST IN YOUR LEGACY</span>
          </div>
          <h2 className="font-display-ar font-black text-3xl sm:text-4xl md:text-5xl text-white">
            اختر باقتك <span className="text-[#FF2D2D]">وابدأ القتال</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
            لا توجد عقود معقدة أو رسوم خفية. اشتراكك يمنحك حق الدخول غير المحدود لصالات آيرون بلس 24 ساعة يومياً.
          </p>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan, idx) => {
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative flex flex-col justify-between clip-diagonal transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#1C0808] via-[#141414] to-[#141414] border-2 border-[#FF2D2D] shadow-red-glow lg:-translate-y-3'
                    : 'bg-[#141414] border border-[#242424] hover:border-[#FF2D2D]/60'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 right-6 z-20">
                    <span className="bg-[#FF2D2D] text-white font-display-ar font-black text-xs px-4 py-1 tracking-wide clip-diagonal-sm shadow-md flex items-center gap-1.5 uppercase">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{plan.savingsBadge || 'الأكثر طلباً'}</span>
                    </span>
                  </div>
                )}

                {/* Card Top: Plan Title & Price */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display-en text-sm tracking-widest text-gray-400 font-bold uppercase">
                      {plan.nameEn}
                    </span>
                    <span className="text-xs bg-[#0B0B0B] border border-[#2B2B2B] px-2.5 py-1 text-gray-300 font-mono">
                      {plan.periodAr}
                    </span>
                  </div>

                  <h3 className="font-display-ar font-black text-2xl sm:text-3xl text-white mb-4">
                    {plan.nameAr}
                  </h3>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-[#242424]">
                    <span className="font-display-en text-5xl sm:text-6xl font-black text-white tracking-tight">
                      {plan.price.toLocaleString()}
                    </span>
                    <span className="text-sm font-bold text-gray-400 font-mono">ر.س</span>
                    
                    {plan.originalPrice && (
                      <span className="text-sm line-through text-gray-600 font-mono mr-2">
                        {plan.originalPrice.toLocaleString()} ر.س
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5">
                    <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2 font-bold">
                      المزايا المتضمنة:
                    </p>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                        <div
                          className={`w-5 h-5 rounded-xs flex items-center justify-center shrink-0 mt-0.5 ${
                            isPopular
                              ? 'bg-[#FF2D2D] text-white'
                              : 'bg-[#222222] text-[#FF2D2D]'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: WhatsApp Subscribe Button */}
                <div className="p-8 pt-0">
                  <button
                    onClick={() => handleSubscribeWhatsApp(plan.whatsAppText)}
                    type="button"
                    className={`w-full py-4 px-6 font-display-ar font-black text-base clip-diagonal flex items-center justify-center gap-3 transition-all duration-300 shadow-md ${
                      isPopular
                        ? 'bg-[#FF2D2D] hover:bg-[#D41818] text-white shadow-red-glow hover:shadow-red-glow-lg hover:scale-[1.02]'
                        : 'bg-[#1E1E1E] hover:bg-[#FF2D2D] text-white border border-[#2F2F2F] hover:border-[#FF2D2D]'
                    }`}
                  >
                    <MessageSquare className="w-5 h-5 fill-current" />
                    <span>اشترك عبر واتساب</span>
                  </button>
                  
                  <p className="text-center text-[11px] text-gray-500 font-mono mt-3">
                    تفعيل فوري + فحص InBody مجاني عند الزيارة
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Security & Guarantee Strip */}
        <div className="mt-14 p-6 bg-[#0E0E0E] border border-[#222222] clip-diagonal-sm flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#FF2D2D] shrink-0" />
            <div>
              <p className="font-bold text-white text-sm">ضمان استرجاع خلال 48 ساعة</p>
              <p className="text-xs text-gray-400">إذا لم تجد التجربة كما وُعدت، يمكنك استرداد قيمة اشتراكك كاملة دون أي تعقيد.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>نقبل مدى، فيزا، ماستركارد، وApple Pay</span>
          </div>
        </div>

      </div>
    </section>
  );
};
