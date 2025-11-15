
import React from 'react';

const ChampionsSidebar: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h3 className="font-bold text-xl mb-6 text-fcms-red border-b border-fcms-light-red pb-3 tracking-wide">FCMS Champions</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-fcms-dark mb-3 text-lg tracking-wide">New York</h4>
          <ul className="space-y-2">
            <li><a href="/fcms-champions/new-york/dr-david-tw-chiu" className="text-fcms-red hover:text-fcms-dark-red transition-colors text-sm">Dr. David T.W. Chiu</a></li>
            <li><a href="/fcms-champions/new-york/dr-john-kh-li" className="text-fcms-red hover:text-fcms-dark-red transition-colors text-sm">Dr. John K.H. Li</a></li>
            <li><a href="/fcms-champions/new-york/dr-bryan-oyoung" className="text-fcms-red hover:text-fcms-dark-red transition-colors text-sm">Dr. Bryan O'Young</a></li>
            <li><a href="/fcms-champions/new-york/dr-sun-hoo-foo" className="text-fcms-red hover:text-fcms-dark-red transition-colors text-sm">Dr. Sun-Hoo Foo</a></li>
            <li><a href="/fcms-champions/new-york/dr-hsueh-hwa-wang" className="text-fcms-red hover:text-fcms-dark-red transition-colors text-sm">Dr. Hsueh Hwa Wang</a></li>
            <li><a href="/fcms-champions/new-york/dr-warren-w-chin" className="text-fcms-red hover:text-fcms-dark-red transition-colors text-sm">Dr. Warren W. Chin</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-fcms-dark mb-3 text-lg tracking-wide">Oakland</h4>
          <ul className="space-y-2">
            <li><a href="/fcms-champions/oakland/dr-david-f-der" className="text-fcms-red hover:text-fcms-dark-red transition-colors text-sm">Dr. David F. Der</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-fcms-dark mb-3 text-lg tracking-wide">Toronto</h4>
          <ul className="space-y-2">
            <li><a href="/fcms-champions/toronto/dr-ming-tat-cheung" className="text-fcms-red hover:text-fcms-dark-red transition-colors text-sm">Dr. Ming-Tat Cheung</a></li>
            <li><a href="/fcms-champions/toronto/dr-john-hc-chiu" className="text-fcms-red hover:text-fcms-dark-red transition-colors text-sm">Dr. John H.C. Chiu</a></li>
            <li><a href="/fcms-champions/toronto/mrs-yvonne-yan-kiu-chiu" className="text-fcms-red hover:text-fcms-dark-red transition-colors text-sm">Mrs. Yvonne Yan-Kiu Chiu</a></li>
            <li><a href="/fcms-champions/toronto/dr-michael-ho" className="text-fcms-red hover:text-fcms-dark-red transition-colors text-sm">Dr. Michael Ho</a></li>
            <li><a href="/fcms-champions/toronto/dr-david-lam" className="text-fcms-red hover:text-fcms-dark-red transition-colors text-sm">Dr. David Lam</a></li>
            <li><a href="/fcms-champions/toronto/dr-sim-fai-liu" className="text-fcms-red hover:text-fcms-dark-red transition-colors text-sm">Dr. Sim Fai Liu</a></li>
            <li><a href="/fcms-champions/toronto/dr-hung-tat-lo" className="text-fcms-red hover:text-fcms-dark-red transition-colors text-sm">Dr. Hung-Tat Lo</a></li>
            <li><a href="/fcms-champions/toronto/prof-tak-w-mak" className="text-fcms-red hover:text-fcms-dark-red transition-colors text-sm">Prof. Tak W. Mak</a></li>
            <li><a href="/fcms-champions/toronto/dr-ken-ng" className="text-fcms-red hover:text-fcms-dark-red transition-colors text-sm">Dr. Ken Ng</a></li>
            <li><a href="/fcms-champions/toronto/prof-lap-chee-tsui" className="text-fcms-red hover:text-fcms-dark-red transition-colors text-sm">Prof. Lap-Chee Tsui</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-fcms-dark mb-3 text-lg tracking-wide">Ventura County</h4>
          <ul className="space-y-2">
            <li><a href="/fcms-champions/ventura-county/dr-madalene-cy-heng" className="text-fcms-red hover:text-fcms-dark-red transition-colors text-sm">Dr. Madalene C.Y. Heng</a></li>
            <li><a href="/fcms-champions/ventura-county/dr-ming-k-heng" className="text-fcms-red hover:text-fcms-dark-red transition-colors text-sm">Dr. Ming K. Heng</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChampionsSidebar;
