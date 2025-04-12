
import { CreditCard, Home, Briefcase, Clipboard, ShieldCheck, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturesSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-8">Our Banking Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-sbi-blue p-4 flex items-center text-white">
              <CreditCard className="h-8 w-8" />
              <h3 className="text-xl ml-3">Cards</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                Explore our range of credit and debit cards designed to meet your needs. Enjoy exclusive benefits, rewards, and security features.
              </p>
              <div className="grid grid-cols-1 gap-2">
                <Link to="/cards/credit-cards" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                  <span className="text-sbi-blue mr-2">•</span>
                  <span>Credit Cards</span>
                </Link>
                <Link to="/cards/debit-cards" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                  <span className="text-sbi-blue mr-2">•</span>
                  <span>Debit Cards</span>
                </Link>
                <Link to="/cards/prepaid-cards" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                  <span className="text-sbi-blue mr-2">•</span>
                  <span>Prepaid Cards</span>
                </Link>
              </div>
              <Link to="/cards" className="mt-4 inline-block text-sbi-blue hover:underline">Learn More →</Link>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-sbi-blue p-4 flex items-center text-white">
              <Home className="h-8 w-8" />
              <h3 className="text-xl ml-3">Loans</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                Find the perfect loan solution for your personal or business needs with competitive interest rates and flexible terms.
              </p>
              <div className="grid grid-cols-1 gap-2">
                <Link to="/loans/home-loans" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                  <span className="text-sbi-blue mr-2">•</span>
                  <span>Home Loans</span>
                </Link>
                <Link to="/loans/personal-loans" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                  <span className="text-sbi-blue mr-2">•</span>
                  <span>Personal Loans</span>
                </Link>
                <Link to="/loans/car-loans" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                  <span className="text-sbi-blue mr-2">•</span>
                  <span>Car Loans</span>
                </Link>
              </div>
              <Link to="/loans" className="mt-4 inline-block text-sbi-blue hover:underline">Learn More →</Link>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-sbi-blue p-4 flex items-center text-white">
              <Briefcase className="h-8 w-8" />
              <h3 className="text-xl ml-3">Investments</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                Grow your wealth with our range of investment products. Our expert advisors can guide you to make informed decisions.
              </p>
              <div className="grid grid-cols-1 gap-2">
                <Link to="/investments/mutual-funds" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                  <span className="text-sbi-blue mr-2">•</span>
                  <span>Mutual Funds</span>
                </Link>
                <Link to="/investments/fixed-deposits" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                  <span className="text-sbi-blue mr-2">•</span>
                  <span>Fixed Deposits</span>
                </Link>
                <Link to="/investments/sip" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                  <span className="text-sbi-blue mr-2">•</span>
                  <span>SIP Investments</span>
                </Link>
              </div>
              <Link to="/investments" className="mt-4 inline-block text-sbi-blue hover:underline">Learn More →</Link>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-sbi-blue p-4 flex items-center text-white">
              <Clipboard className="h-8 w-8" />
              <h3 className="text-xl ml-3">Accounts</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                Choose from our wide range of accounts designed to meet your financial needs, with convenient banking solutions.
              </p>
              <div className="grid grid-cols-1 gap-2">
                <Link to="/accounts/savings" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                  <span className="text-sbi-blue mr-2">•</span>
                  <span>Savings Accounts</span>
                </Link>
                <Link to="/accounts/current" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                  <span className="text-sbi-blue mr-2">•</span>
                  <span>Current Accounts</span>
                </Link>
                <Link to="/accounts/salary" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                  <span className="text-sbi-blue mr-2">•</span>
                  <span>Salary Accounts</span>
                </Link>
              </div>
              <Link to="/accounts" className="mt-4 inline-block text-sbi-blue hover:underline">Learn More →</Link>
            </div>
          </div>
          
          {/* Card 5 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-sbi-blue p-4 flex items-center text-white">
              <ShieldCheck className="h-8 w-8" />
              <h3 className="text-xl ml-3">Insurance</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                Protect what matters most with our comprehensive insurance solutions for individuals and businesses.
              </p>
              <div className="grid grid-cols-1 gap-2">
                <Link to="/insurance/life" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                  <span className="text-sbi-blue mr-2">•</span>
                  <span>Life Insurance</span>
                </Link>
                <Link to="/insurance/health" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                  <span className="text-sbi-blue mr-2">•</span>
                  <span>Health Insurance</span>
                </Link>
                <Link to="/insurance/vehicle" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                  <span className="text-sbi-blue mr-2">•</span>
                  <span>Vehicle Insurance</span>
                </Link>
              </div>
              <Link to="/insurance" className="mt-4 inline-block text-sbi-blue hover:underline">Learn More →</Link>
            </div>
          </div>
          
          {/* Card 6 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-sbi-blue p-4 flex items-center text-white">
              <Headphones className="h-8 w-8" />
              <h3 className="text-xl ml-3">Support</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                We're here to help with any banking queries you may have. Our support team is available 24/7 for assistance.
              </p>
              <div className="grid grid-cols-1 gap-2">
                <Link to="/support/customer-care" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                  <span className="text-sbi-blue mr-2">•</span>
                  <span>Customer Care</span>
                </Link>
                <Link to="/support/grievance" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                  <span className="text-sbi-blue mr-2">•</span>
                  <span>Grievance Redressal</span>
                </Link>
                <Link to="/support/branch-locator" className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors">
                  <span className="text-sbi-blue mr-2">•</span>
                  <span>Branch Locator</span>
                </Link>
              </div>
              <Link to="/support" className="mt-4 inline-block text-sbi-blue hover:underline">Contact Us →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
