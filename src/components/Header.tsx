
import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';
import MobileMenu from './MobileMenu';
import { navigationItems } from '../data/navigation';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-18">
          <Logo />
          <NavMenu items={navigationItems} />
          <MobileMenu items={navigationItems} />
        </div>
      </div>
    </header>
  );
};

export default Header;
