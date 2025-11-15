import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, DollarSign, Users, GraduationCap } from 'lucide-react';

const FoundationSidebar = () => {
  const foundationItems = [
    { title: "Message from the President", link: "/foundation/president-message" },
    { title: "Board of Trustees", link: "/foundation/board-trustees" },
    { title: "Donation", link: "/foundation/donation", active: true }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="font-semibold text-lg mb-4 text-fcms-dark">FCMS Foundation</h3>
      <nav className="space-y-2">
        {foundationItems.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className={`block py-2 px-3 rounded-md transition-colors ${
              item.active
                ? 'bg-fcms-light-red text-fcms-red font-medium'
                : 'text-fcms-dark hover:bg-gray-50 hover:text-fcms-red'
            }`}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  );
};

const Donation: React.FC = () => {
  const breadcrumbs = [
    { title: "Home", link: "/" },
    { title: "FCMS Foundation", link: "/foundation" },
    { title: "Donation" }
  ];

  return (
    <PageLayout 
      title="Donation" 
      breadcrumbs={breadcrumbs}
      sidebar={<FoundationSidebar />}
    >
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-fcms-dark mb-4">Support the FCMS Foundation</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your generous donation helps advance medical education, research, and healthcare initiatives 
            within the Chinese American and Chinese Canadian medical communities.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader className="pb-3">
              <GraduationCap className="w-8 h-8 text-fcms-red mx-auto mb-2" />
              <CardTitle className="text-lg">Scholarships</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Supporting the next generation of medical professionals through educational funding.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-3">
              <Users className="w-8 h-8 text-fcms-red mx-auto mb-2" />
              <CardTitle className="text-lg">Community Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Funding initiatives that strengthen our medical community and promote collaboration.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-3">
              <Heart className="w-8 h-8 text-fcms-red mx-auto mb-2" />
              <CardTitle className="text-lg">Healthcare Access</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Improving healthcare access and quality for underserved communities.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-3">
              <DollarSign className="w-8 h-8 text-fcms-red mx-auto mb-2" />
              <CardTitle className="text-lg">Research Grants</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Advancing medical research and innovation through targeted funding opportunities.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Donation Options */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-fcms-dark">Make a Donation</CardTitle>
            <CardDescription>
              Choose from our suggested donation amounts or enter a custom amount that works for you.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['$50', '$100', '$250', '$500'].map((amount) => (
                <Button
                  key={amount}
                  variant="outline"
                  className="h-16 text-lg font-semibold hover:bg-fcms-light-red hover:text-fcms-red hover:border-fcms-red"
                >
                  {amount}
                </Button>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="number"
                placeholder="Enter custom amount"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fcms-red focus:border-transparent"
                min="1"
              />
              <Button className="bg-fcms-red hover:bg-fcms-dark-red text-white px-8 py-3">
                Donate Now
              </Button>
            </div>

            <div className="text-sm text-gray-600 text-center">
              <p>All donations are tax-deductible. You will receive a receipt for your records.</p>
            </div>
          </CardContent>
        </Card>

        {/* Other Ways to Give */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-fcms-dark">Other Ways to Give</CardTitle>
            <CardDescription>
              Explore additional options for supporting the FCMS Foundation.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-fcms-dark">Monthly Giving</h4>
                <p className="text-gray-600">
                  Set up a recurring monthly donation to provide sustained support for our programs.
                </p>
                <Button variant="outline" className="hover:bg-fcms-light-red hover:text-fcms-red">
                  Set Up Monthly Giving
                </Button>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-fcms-dark">Corporate Sponsorship</h4>
                <p className="text-gray-600">
                  Partner with us as a corporate sponsor to support our mission and gain visibility.
                </p>
                <Button variant="outline" className="hover:bg-fcms-light-red hover:text-fcms-red">
                  Learn About Sponsorship
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-fcms-dark">Questions About Donating?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              For questions about donations, planned giving, or corporate partnerships, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> foundation@fcms.org</p>
              <p><strong>Phone:</strong> (555) 123-4567</p>
              <p><strong>Address:</strong> FCMS Foundation, 123 Medical Drive, Suite 100, City, State 12345</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Donation;
