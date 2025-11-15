
import React, { useState } from 'react';
import { Menu, ChevronDown, X } from 'lucide-react';

interface MenuItem {
  title: string;
  children?: MenuItem[];
  link?: string;
}

interface MobileMenuProps {
  items: MenuItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleItem = (title: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const renderMenuItems = (menuItems: MenuItem[], level = 0) => {
    return menuItems.map((item) => (
      <div key={item.title} className={`${level > 0 ? 'pl-6' : ''}`}>
        {item.children && item.children.length > 0 ? (
          <div>
            <button 
              onClick={() => toggleItem(item.title)}
              className="flex items-center justify-between w-full py-3 px-6 hover:bg-fcms-light-red transition-colors text-left font-medium tracking-wide"
            >
              <span className="text-fcms-dark">{item.title}</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 text-fcms-red ${expandedItems[item.title] ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {expandedItems[item.title] && (
              <div className="border-l-2 border-fcms-light-red ml-6 mt-1">
                {renderMenuItems(item.children, level + 1)}
              </div>
            )}
          </div>
        ) : (
          <a 
            href={item.link || '#'} 
            className="block py-3 px-6 hover:bg-fcms-light-red transition-colors text-fcms-dark font-medium tracking-wide"
          >
            {item.title}
          </a>
        )}
      </div>
    ));
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="p-2 text-fcms-dark hover:text-fcms-red transition-colors">
        <Menu size={24} />
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-4/5 h-full overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="font-bold text-lg text-fcms-red tracking-wide">Menu</h2>
              <button onClick={toggleMenu} className="text-fcms-dark hover:text-fcms-red transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <div className="py-2">
              {renderMenuItems(items)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
