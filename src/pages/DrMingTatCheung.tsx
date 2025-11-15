
import React from 'react';
import PageLayout from '@/components/PageLayout';
import ChampionsSidebar from '@/components/ChampionsSidebar';

const DrMingTatCheung = () => {
  const breadcrumbs = [
    { title: 'Home', link: '/' },
    { title: 'FCMS Champions', link: '/fcms-champions' },
    { title: 'Toronto', link: '/fcms-champions/toronto' },
    { title: 'Dr. Ming-Tat Cheung' }
  ];

  return (
    <PageLayout 
      title="Dr. Ming-Tat Cheung" 
      breadcrumbs={breadcrumbs}
      sidebar={<ChampionsSidebar />}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-fcms-red mb-4">About Dr. Ming-Tat Cheung</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Dr. Ming-Tat Cheung is a distinguished member of the FCMS Champions program, representing the Toronto region. 
            His contributions to the medical community and commitment to advancing healthcare for Chinese populations in 
            North America have been invaluable.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            As an FCMS Champion, Dr. Cheung has been instrumental in promoting communication and cooperation among 
            medical societies, helping to enhance medical care and facilitate professional development for Chinese 
            American and Chinese Canadian physicians.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-fcms-red mb-4">Professional Background</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Dr. Cheung's extensive medical background and dedication to the FCMS mission have made him a respected 
            leader in the Toronto medical community. His work continues to inspire and guide the next generation 
            of healthcare professionals.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-fcms-red mb-4">Contributions to FCMS</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Active participation in FCMS conferences and educational programs</li>
            <li>Mentorship of young physicians in the Chinese medical community</li>
            <li>Advocacy for healthcare policies benefiting the Chinese community</li>
            <li>Support for international medical and scientific exchange</li>
          </ul>
        </section>
      </div>
    </PageLayout>
  );
};

export default DrMingTatCheung;
