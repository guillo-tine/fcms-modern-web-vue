
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  title: string;
  link?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight size={14} className="text-gray-400" />}
          {item.link ? (
            <a 
              href={item.link} 
              className="text-fcms-red hover:text-fcms-dark-red transition-colors"
            >
              {item.title}
            </a>
          ) : (
            <span className="text-gray-600">{item.title}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
