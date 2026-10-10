import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { StatsSection } from './components/StatsSection';
import { ProgramsSection } from './components/ProgramsSection';
import { TrainersSection } from './components/TrainersSection';
import { ScheduleSection } from './components/ScheduleSection';
import { MembershipSection } from './components/MembershipSection';
import { TransformationsSection } from './components/TransformationsSection';
import { BmiCalculator } from './components/BmiCalculator';
import { JoinCtaSection } from './components/JoinCtaSection';
import { CustomCursor } from './components/CustomCursor';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProgramModal } from './components/ProgramModal';
import { VideoTourModal } from './components/VideoTourModal';
import type { Program } from './types';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isVideoTourOpen, setIsVideoTourOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Scroll progress bar calculation
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // GSAP ScrollTrigger animation for subtle atmospheric entrance
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.gsap-fade-up').forEach((elem) => {
        gsap.fromTo(
          elem,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#FF2D2D] selection:text-white font-tajawal antialiased">
      
      {/* Film Grain Texture Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Top Red Laser Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D41818] via-[#FF2D2D] to-white z-[60] transition-all duration-75 origin-right pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenVideoTour={() => setIsVideoTourOpen(true)} />

        {/* 2. Marquee Ticker */}
        <Marquee />

        {/* 3. Numbers & Statistics */}
        <StatsSection />

        {/* 4. Programs Section */}
        <ProgramsSection onSelectProgram={(prog) => setSelectedProgram(prog)} />

        {/* 5. Elite Trainers */}
        <TrainersSection />

        {/* 6. Class Schedule */}
        <ScheduleSection />

        {/* 7. Membership Plans */}
        <MembershipSection />

        {/* 8. Before & After Transformations */}
        <TransformationsSection />

        {/* 9. Interactive BMI Calculator */}
        <BmiCalculator />

        {/* 10. Join CTA & Footer */}
        <JoinCtaSection />
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Program Details Modal */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />

      {/* Gym Video Tour Modal */}
      <VideoTourModal
        isOpen={isVideoTourOpen}
        onClose={() => setIsVideoTourOpen(false)}
      />

    </div>
  );
}

export default App;
