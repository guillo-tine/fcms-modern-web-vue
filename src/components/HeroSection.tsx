
import React, { useEffect, useRef, useState } from 'react';

interface HeroSectionProps {
  onScrollDown: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollDown }) => {
  const scrollIconRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = () => {
      onScrollDown();
    };

    const scrollIcon = scrollIconRef.current;
    if (scrollIcon) {
      scrollIcon.addEventListener('click', handleClick);
      return () => {
        scrollIcon.removeEventListener('click', handleClick);
      };
    }
  }, [onScrollDown]);

  // Calculate scale and position based on scroll
  const scale = Math.max(0.3, 1 - scrollY * 0.002);
  const translateY = scrollY * 0.5;
  const opacity = Math.max(0.2, 1 - scrollY * 0.003);

  return (
    <div ref={heroRef} className="relative h-[75vh] flex flex-col items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out" 
        style={{ 
          backgroundImage: `url('${import.meta.env.BASE_URL}uploads/0f4fb270-fce1-43e3-a0e5-cc194026c298.png')`,
          transform: `scale(${scale}) translateY(${translateY}px)`,
          opacity: opacity
        }}
      ></div>
      
      <div className="container relative z-10 text-center px-6">
        <p 
          className="text-xl md:text-2xl text-white max-w-4xl mx-auto animate-fade-in font-light tracking-wide leading-relaxed"
          style={{ 
            opacity: Math.max(0, 1 - scrollY * 0.004),
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        >
          Enhancing medical care and facilitating professional development since 1994
        </p>
      </div>
      
      <div 
        ref={scrollIconRef}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10 animate-scroll-down hover:scale-110 transition-transform duration-200"
        aria-label="Scroll down"
        style={{ 
          opacity: Math.max(0, 1 - scrollY * 0.005)
        }}
      >
        <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-sm">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-white"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
