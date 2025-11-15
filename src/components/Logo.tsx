
import React from 'react';

const Logo: React.FC = () => {
  return (
    <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
      <div className="w-12 h-12 flex items-center justify-center">
        <img 
          src="/lovable-uploads/9550363e-22bb-44c7-9b42-08cf304d5141.png" 
          alt="FCMS Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    </a>
  );
};

export default Logo;
