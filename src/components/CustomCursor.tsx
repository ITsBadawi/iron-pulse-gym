import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch devices to avoid custom cursor on mobile/tablets
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive = Boolean(
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('[role="button"]') ||
        target.closest('.interactive-target')
      );
      setIsHovering(isInteractive);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Center sharp red reticle */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div
          className={`rounded-full bg-[#FF2D2D] transition-all duration-150 ${
            isHovering
              ? 'w-4 h-4 shadow-[0_0_15px_#FF2D2D] scale-125'
              : 'w-2 h-2 shadow-[0_0_8px_#FF2D2D]'
          }`}
        />
      </div>

      {/* Trailing aggressive crosshair ring */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-200 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div
          className={`border border-[#FF2D2D]/60 rounded-full transition-all duration-200 flex items-center justify-center ${
            isHovering
              ? 'w-12 h-12 border-[#FF2D2D] bg-[#FF2D2D]/10 scale-110 shadow-[0_0_20px_rgba(255,45,45,0.4)]'
              : 'w-8 h-8 scale-100 opacity-60'
          }`}
        >
          {isHovering && (
            <div className="w-1 h-1 bg-white rounded-full animate-ping" />
          )}
        </div>
      </div>
    </>
  );
};
