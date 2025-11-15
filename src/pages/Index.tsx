
import React, { useRef } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MainContent from '@/components/MainContent';
import Sidebar from '@/components/Sidebar';

const Index = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-fcms-light flex flex-col font-inter">
      <Header />
      
      <HeroSection onScrollDown={scrollToContent} />
      
      <div ref={contentRef} className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 overflow-y-auto">
            <MainContent />
          </div>
          
          <div className="lg:sticky lg:top-28 h-fit">
            <Sidebar />
          </div>
        </div>
      </div>
      
      <footer className="bg-fcms-red text-white py-12 mt-auto">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold text-xl mb-3 tracking-wide">FCMS</h3>
              <p className="text-sm opacity-90 leading-relaxed max-w-md">Federation of Chinese American and Chinese Canadian Medical Societies</p>
            </div>
            
            <div className="text-right">
              <p className="text-sm opacity-90">© {new Date().getFullYear()} FCMS. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
