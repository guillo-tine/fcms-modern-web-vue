
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface MenuItem {
  title: string;
  children?: MenuItem[];
  link?: string;
}

interface NavMenuProps {
  items: MenuItem[];
}

const NavMenu: React.FC<NavMenuProps> = ({ items }) => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (title: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const renderSubMenu = (item: MenuItem, level = 0) => {
    return (
      <li key={item.title}>
        {item.link ? (
          <a 
            href={item.link} 
            className="block px-5 py-2.5 hover:bg-fcms-light-red text-fcms-dark hover:text-fcms-red transition-colors duration-200 font-medium text-sm"
          >
            {item.title}
          </a>
        ) : (
          <span className="block px-5 py-2.5 text-fcms-dark font-medium text-sm">
            {item.title}
          </span>
        )}
        
        {item.children && item.children.length > 0 && (
          <ul className="pl-4 border-l border-fcms-light-red ml-4">
            {item.children.map((child) => renderSubMenu(child, level + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <ul className="hidden md:flex items-center gap-10">
      {items.map((item) => (
        <li key={item.title} className="relative group">
          <button 
            onClick={() => toggleMenu(item.title)}
            className="flex items-center gap-2 text-fcms-dark hover:text-fcms-red transition-colors duration-200 py-3 font-medium text-sm tracking-wide"
          >
            {item.title}
            {item.children && item.children.length > 0 && (
              <ChevronDown size={16} className={`transition-transform duration-200 ${openMenus[item.title] ? 'rotate-180' : ''}`} />
            )}
          </button>
          
          {item.children && item.children.length > 0 && (
            <div 
              className={`absolute left-0 top-full bg-white shadow-xl rounded-lg min-w-[220px] z-50 transition-all duration-200 origin-top transform border border-gray-100 ${
                openMenus[item.title] ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
              }`}
            >
              <ul className="py-3">
                {item.children.map((child) => renderSubMenu(child))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
