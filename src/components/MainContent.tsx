
import React from 'react';

const MainContent: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-fcms-blue mb-4">About FCMS</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Selected members of an appointed National Steering Committee founded the FCMS in June 1994 in New York City 
          and later were incorporated in California. The combined membership of the organizations is 3,000 healthcare providers.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          In concept the FCMS was initially proposed over a decade prior to its formation primarily by the leadership at CAMS. 
          An organized committee developed a framework and initial outlines for the Constitution and Bylaws of FCMS.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold text-fcms-blue mb-4">FCMS Mission Statement</h2>
        <div className="bg-fcms-light-blue p-6 rounded-lg border-l-4 border-fcms-blue">
          <p className="text-gray-700 italic leading-relaxed">
            "To promote the communication and cooperation of medical societies in North America in order to advocate for the 
            common goal of enhancing the medical care of Chinese in North America and facilitate the professional development 
            of Chinese American and Chinese Canadian Physicians."
          </p>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold text-fcms-blue mb-4">Goals & Objectives</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Promote communication and cooperation among Chinese American and Chinese Canadian medical societies</li>
          <li>Enhance medical care for the Chinese communities in North America</li>
          <li>Support the professional development of Chinese American and Chinese Canadian physicians</li>
          <li>Advocate for healthcare policies benefiting the Chinese community</li>
          <li>Foster international medical and scientific exchange</li>
          <li>Provide continuing medical education opportunities</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold text-fcms-blue mb-4">Member Organizations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold">CAIPA</h3>
            <p className="text-sm text-gray-600">Chinese American Independent Practice Association</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold">CAMASC</h3>
            <p className="text-sm text-gray-600">Chinese American Medical Association of Southern California</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold">CAMS</h3>
            <p className="text-sm text-gray-600">Chinese American Medical Society</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold">CAPS</h3>
            <p className="text-sm text-gray-600">Chinese American Physicians Society</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold">CCHCA</h3>
            <p className="text-sm text-gray-600">Chinese Community Health Care Association</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold">CCMS</h3>
            <p className="text-sm text-gray-600">Chinese Canadian Medical Society</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
