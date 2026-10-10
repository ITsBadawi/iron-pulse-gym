import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Send, CheckCircle2, MapPin, Phone, Clock, Mail, ExternalLink } from 'lucide-react';
import { InstagramIcon, TwitterXIcon, YouTubeIcon } from './BrandIcons';
import confetti from 'canvas-confetti';
import { GYM_CONTACT } from '../data/gymData';

export const JoinCtaSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'hypertrophy',
    experience: 'intermediate',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsLoading(true);

    // Simulate instant process & trigger Canvas Confetti
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      // Trigger high-octane confetti celebration
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF2D2D', '#ffffff', '#D41818', '#000000']
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 700);
  };

  return (
    <section id="contact" className="pt-24 pb-12 bg-[#050505] relative overflow-hidden">
      
      {/* Background Gradients and Outlined English Words */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF2D2D]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Background Outlined Words */}
      <div className="absolute top-12 left-0 right-0 overflow-hidden pointer-events-none select-none text-center opacity-10">
        <span className="font-display-en text-8xl md:text-[13rem] font-black text-stroke-heavy tracking-wider">
          UNLEASH THE BEAST
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card with Form */}
        <div className="bg-[#101010] border-2 border-[#262626] p-8 sm:p-12 md:p-16 clip-diagonal shadow-[0_20px_60px_rgba(0,0,0,0.9)] mb-20 relative">
          
          {/* Red Corner Badge */}
          <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
            <div className="absolute transform rotate-45 bg-[#FF2D2D] text-white text-[10px] font-bold font-mono py-1 right-[-35px] top-[20px] w-[120px] text-center shadow-md">
              JOIN NOW
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[#FF2D2D] font-mono text-xs uppercase tracking-widest mb-3 font-bold">
                <Flame className="w-4 h-4 text-[#FF2D2D]" />
                <span>NO MORE EXCUSES — START TODAY</span>
              </div>
              
              <h2 className="font-display-ar font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
                ابدأ تحولك <span className="text-[#FF2D2D]">اليوم</span>
              </h2>

              <p className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed max-w-xl">
                سجّل بياناتك الآن لتحصل على <span className="text-white font-bold">يوم تجريبي مجاني بالكامل</span> مع فحص كتلة الجسم InBody واستشارة تدريبية مع أحد مدربينا الأولمبيين.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-2 h-2 bg-[#FF2D2D]" />
                  <span>دخول مجاني لصالة الحديد وحضور حصة جماعية مجانية</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-2 h-2 bg-[#FF2D2D]" />
                  <span>خطة غذائية أولية متوافقة مع هدفك الرياضي</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-2 h-2 bg-[#FF2D2D]" />
                  <span>سريان العرض خلال 48 ساعة فقط من التسجيل</span>
                </div>
              </div>
            </div>

            {/* Right Form Column (5 cols) */}
            <div className="lg:col-span-5 bg-[#141414] border border-[#2B2B2B] p-6 sm:p-8 clip-diagonal-sm">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-4"
                >
                  <div className="w-16 h-16 bg-[#FF2D2D]/20 border-2 border-[#FF2D2D] rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#FF2D2D]" />
                  </div>
                  <h3 className="font-display-ar font-black text-2xl text-white">
                    تم استلام طلبك بنجاح!
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    أهلاً بك يا بطل! سيتواصل معك أحد مدربي آيرون بلس عبر الواتساب خلال أقل من ساعتين لتأكيد موعد جلستك التجريبية المجانية.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-xs text-[#FF2D2D] hover:underline font-bold"
                  >
                    تسجيل متدرب آخر
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display-ar font-black text-xl text-white mb-2">
                    احجز يومك التجريبي المجاني
                  </h3>

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1.5">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: سلطان القحطاني"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#FF2D2D] focus:outline-none text-white px-4 py-3 text-sm rounded-xs transition-colors"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1.5">
                      رقم الجوال (واتساب) *
                    </label>
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      placeholder="05XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#FF2D2D] focus:outline-none text-white px-4 py-3 text-sm rounded-xs transition-colors text-right"
                    />
                  </div>

                  {/* Fitness Goal */}
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1.5">
                      هدفك الرياضي الأساسي
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#FF2D2D] focus:outline-none text-white px-4 py-3 text-sm rounded-xs transition-colors"
                    >
                      <option value="hypertrophy">بناء عضلات وقوة ضخمة (حديد)</option>
                      <option value="crossfit">لياقة وتحمل شامل (كروس فت)</option>
                      <option value="boxing">ملاكمة ودفاع عن النفس</option>
                      <option value="fatloss">حرق دهون ونحت الجسم</option>
                      <option value="mobility">استشفاء وزيادة مرونة</option>
                    </select>
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1.5">
                      مستواك الرياضي الحالي
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'beginner', label: 'مبتدئ' },
                        { id: 'intermediate', label: 'متوسط' },
                        { id: 'advanced', label: 'محترف' },
                      ].map((lvl) => (
                        <button
                          key={lvl.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, experience: lvl.id })}
                          className={`py-2 text-xs font-bold border transition-colors ${
                            formData.experience === lvl.id
                              ? 'bg-[#FF2D2D] text-white border-[#FF2D2D]'
                              : 'bg-[#0A0A0A] text-gray-400 border-[#2A2A2A]'
                          }`}
                        >
                          {lvl.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Main Action Button with Screen Shake on Hover! */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="screen-shake-hover w-full py-4 bg-[#FF2D2D] hover:bg-[#D41818] text-white font-display-ar font-black text-base clip-diagonal shadow-red-glow hover:shadow-red-glow-lg transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      {isLoading ? (
                        <span className="font-mono text-sm">جاري الإرسال...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 fill-current transition-transform group-hover:scale-110" />
                          <span>احجز يومك المجاني الآن</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[10px] text-gray-500 text-center font-mono">
                    * خصوصيتك محمية 100%. لا نرسل رسائل إعلانية مزعجة.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Footer Area */}
        <footer className="pt-12 border-t border-[#1C1C1C] text-gray-400">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Col 1: Brand & Bio */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-display-ar font-black text-2xl text-white">آيرون بلس</span>
                <span className="font-display-en text-xs font-bold text-[#FF2D2D]">IRON PULSE</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                النادي الرياضي الرائد في المملكة العربية السعودية لصناعة الأبطال. بيئة تدريب قتالية، أجهزة عالمية، وتدريب احترافي دون تهاون.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 bg-[#141414] hover:bg-[#FF2D2D] border border-[#2B2B2B] hover:border-[#FF2D2D] flex items-center justify-center text-white transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 bg-[#141414] hover:bg-[#FF2D2D] border border-[#2B2B2B] hover:border-[#FF2D2D] flex items-center justify-center text-white transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterXIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 bg-[#141414] hover:bg-[#FF2D2D] border border-[#2B2B2B] hover:border-[#FF2D2D] flex items-center justify-center text-white transition-colors"
                  aria-label="YouTube"
                >
                  <YouTubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Location */}
            <div>
              <h4 className="font-display-ar font-bold text-white text-sm mb-3 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#FF2D2D]" />
                <span>الموقع والفرع</span>
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed mb-2">
                {GYM_CONTACT.addressAr}
              </p>
              <p className="text-[11px] text-gray-500 font-mono mb-3">
                {GYM_CONTACT.addressEn}
              </p>
              <a
                href={GYM_CONTACT.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#FF2D2D] hover:underline font-bold"
              >
                <span>فتح في خرائط Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Col 3: Hours & Contact */}
            <div>
              <h4 className="font-display-ar font-bold text-white text-sm mb-3 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#FF2D2D]" />
                <span>أوقات العمل والتواصل</span>
              </h4>
              <p className="text-xs text-emerald-400 font-bold mb-1">
                {GYM_CONTACT.hoursAr}
              </p>
              <p className="text-xs text-gray-400 mb-4">
                لا نغلق أبوابنا حتى في الإجازات الرسمية.
              </p>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-3.5 h-3.5 text-[#FF2D2D]" />
                  <a href={`tel:${GYM_CONTACT.phone}`} dir="ltr" className="hover:text-white font-mono">
                    {GYM_CONTACT.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-3.5 h-3.5 text-[#FF2D2D]" />
                  <a href={`mailto:${GYM_CONTACT.email}`} className="hover:text-white font-mono">
                    {GYM_CONTACT.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Col 4: Quick Links */}
            <div>
              <h4 className="font-display-ar font-bold text-white text-sm mb-3">
                روابط سريعة
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#programs" className="hover:text-[#FF2D2D] transition-colors">برامج التدريب</a></li>
                <li><a href="#trainers" className="hover:text-[#FF2D2D] transition-colors">الكادر التدريبي</a></li>
                <li><a href="#schedule" className="hover:text-[#FF2D2D] transition-colors">جدول الحصص اليومي</a></li>
                <li><a href="#pricing" className="hover:text-[#FF2D2D] transition-colors">باقات الاشتراك</a></li>
                <li><a href="#transformations" className="hover:text-[#FF2D2D] transition-colors">أبطال التحول</a></li>
                <li><a href="#bmi" className="hover:text-[#FF2D2D] transition-colors">حاسبة BMI الرياضية</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright Strip */}
          <div className="pt-8 border-t border-[#141414] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-mono">
            <div>
              © 2026 IRON PULSE (آيرون بلس). جميع الحقوق محفوظة. لا عذر للتراجع.
            </div>
            <div className="flex items-center gap-4">
              <span>BUILT FOR WARRIORS</span>
              <span>•</span>
              <span>RIYADH, SAUDI ARABIA</span>
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
};
