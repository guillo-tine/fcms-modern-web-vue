
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h3 className="font-bold text-xl mb-6 text-fcms-red border-b border-fcms-light-red pb-3 tracking-wide">General Information</h3>
      
      <div className="space-y-8">
        <div>
          <h4 className="font-semibold text-fcms-dark mb-3 text-lg tracking-wide">Contact Us</h4>
          <p className="text-fcms-gray mb-3 font-medium leading-relaxed">Federation of Chinese American and Chinese Canadian Medical Societies</p>
          <p className="text-fcms-gray leading-relaxed">Email: info@fcms.org</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-fcms-dark mb-3 text-lg tracking-wide">Membership</h4>
          <p className="text-fcms-gray mb-3 leading-relaxed">Current membership: 3,000+ healthcare providers</p>
          <a href="#" className="text-fcms-red hover:text-fcms-dark-red transition-colors duration-200 font-medium tracking-wide">Join FCMS →</a>
        </div>
        
        <div>
          <h4 className="font-semibold text-fcms-dark mb-3 text-lg tracking-wide">Upcoming Events</h4>
          <div className="space-y-4">
            <div className="bg-fcms-light-gray p-4 rounded-lg">
              <p className="font-semibold text-fcms-dark">22nd Annual Conference</p>
              <p className="text-fcms-gray text-sm mt-1">June 15-18, 2024</p>
              <p className="text-fcms-gray text-sm">New York, NY</p>
            </div>
            <div className="bg-fcms-light-gray p-4 rounded-lg">
              <p className="font-semibold text-fcms-dark">Virtual Webinar Series</p>
              <p className="text-fcms-gray text-sm mt-1">Monthly, Every First Thursday</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-fcms-dark mb-3 text-lg tracking-wide">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-fcms-red hover:text-fcms-dark-red transition-colors duration-200 font-medium tracking-wide">COVID-19 Information</a></li>
            <li><a href="#" className="text-fcms-red hover:text-fcms-dark-red transition-colors duration-200 font-medium tracking-wide">Vaccination Resources</a></li>
            <li><a href="#" className="text-fcms-red hover:text-fcms-dark-red transition-colors duration-200 font-medium tracking-wide">Medical Education</a></li>
            <li><a href="#" className="text-fcms-red hover:text-fcms-dark-red transition-colors duration-200 font-medium tracking-wide">Donate to FCMS Foundation</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
