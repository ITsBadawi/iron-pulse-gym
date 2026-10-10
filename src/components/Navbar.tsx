import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, Zap, PhoneCall } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'البرامج', href: '#programs' },
    { label: 'المدربون', href: '#trainers' },
    { label: 'الجدول', href: '#schedule' },
    { label: 'الاشتراكات', href: '#pricing' },
    { label: 'قصص التحول', href: '#transformations' },
    { label: 'حاسبة BMI', href: '#bmi' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#222222] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-[#050505]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-10 h-10 bg-[#141414] border border-[#FF2D2D]/50 flex items-center justify-center clip-diagonal-sm group-hover:border-[#FF2D2D] group-hover:shadow-[0_0_15px_rgba(255,45,45,0.6)] transition-all duration-300">
              <Dumbbell className="w-5 h-5 text-[#FF2D2D] transition-transform duration-300 group-hover:rotate-45" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF2D2D] animate-ping" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display-ar font-black text-xl text-white tracking-wide">
                  آيرون بلس
                </span>
                <span className="text-[10px] bg-[#FF2D2D] text-white px-1.5 py-0.2 font-mono font-bold tracking-tighter uppercase rounded-xs">
                  PRO
                </span>
              </div>
              <span className="font-display-en text-xs tracking-widest text-[#FF2D2D] -mt-1 font-bold">
                IRON PULSE GYM
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-200 relative py-1 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF2D2D] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-right" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Live 24/7 status badge */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-[#141414] border border-[#262626] rounded-xs text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-gray-300 font-medium font-mono text-[11px]">مفتوح الآن 24/7</span>
            </div>

            {/* Quick Contact phone */}
            <a
              href={`tel:${GYM_CONTACT.phone}`}
              className="text-gray-300 hover:text-[#FF2D2D] p-2 transition-colors duration-200"
              title="اتصل بنا"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            {/* Aggressive CTA Button */}
            <a
              href="#pricing"
              className="relative inline-flex items-center gap-2 bg-[#FF2D2D] hover:bg-[#d91e1e] text-white font-display-ar font-bold text-sm px-6 py-2.5 clip-diagonal transition-all duration-200 shadow-[0_0_20px_rgba(255,45,45,0.4)] hover:shadow-[0_0_30px_rgba(255,45,45,0.7)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>ابدأ الآن</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#pricing"
              className="sm:hidden bg-[#FF2D2D] text-white text-xs font-bold px-3 py-1.5 clip-diagonal-sm"
            >
              اشترك
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white bg-[#141414] border border-[#262626] rounded-xs focus:outline-none"
              aria-label="القائمة"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-b border-[#262626] px-4 pt-4 pb-6 mt-2 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#1c1c1c]">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>مفتوح 24 ساعة - طريق الملك فهد</span>
            </div>
            <a
              href={`tel:${GYM_CONTACT.phone}`}
              className="text-[#FF2D2D] font-mono text-xs font-bold"
            >
              {GYM_CONTACT.phoneDisplay}
            </a>
          </div>

          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-bold text-gray-200 hover:text-[#FF2D2D] hover:bg-[#141414] px-3 py-2.5 rounded-xs transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#FF2D2D]/40 text-xs font-mono">→</span>
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#FF2D2D] hover:bg-[#d91e1e] text-white font-bold py-3 text-center clip-diagonal shadow-[0_0_20px_rgba(255,45,45,0.4)]"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>انضم إلى آيرون بلس اليوم</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
