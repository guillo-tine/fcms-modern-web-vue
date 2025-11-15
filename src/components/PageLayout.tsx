
import React from 'react';
import Header from './Header';
import Breadcrumb from './Breadcrumb';

interface PageLayoutProps {
  title: string;
  breadcrumbs: Array<{ title: string; link?: string }>;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, breadcrumbs, children, sidebar }) => {
  return (
    <div className="min-h-screen bg-fcms-light flex flex-col font-inter">
      <Header />
      
      {/* Page Banner */}
      <div className="bg-fcms-red text-white h-[98px] flex items-center">
        <div className="container mx-auto px-6">
          <h1 className="text-2xl font-semibold">{title}</h1>
        </div>
      </div>
      
      {/* Breadcrumb */}
      <div className="bg-gray-100 h-[31px] flex items-center border-b border-gray-200">
        <div className="container mx-auto px-6">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 overflow-y-auto">
            {children}
          </div>
          
          {sidebar && (
            <div className="lg:sticky lg:top-28 h-fit">
              {sidebar}
            </div>
          )}
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

export default PageLayout;
