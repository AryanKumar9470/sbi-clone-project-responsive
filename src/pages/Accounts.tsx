
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clipboard, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Accounts = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-gray-100 py-2 border-b border-gray-200">
          <div className="container">
            <div className="flex items-center text-sm">
              <Link to="/" className="text-sbi-blue hover:underline">Home</Link>
              <ChevronRight size={14} className="mx-1" />
              <span>Accounts</span>
            </div>
          </div>
        </div>
        
        {/* Page Header */}
        <div className="bg-sbi-blue text-white py-8">
          <div className="container">
            <div className="flex items-center">
              <Clipboard className="h-12 w-12 mr-4" />
              <div>
                <h1 className="text-3xl font-bold">Banking Accounts</h1>
                <p className="opacity-90 mt-1">Choose the right account for your banking needs</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Account Types */}
        <div className="py-8">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Savings Account */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="h-40 bg-gradient-to-r from-sbi-blue to-sbi-lightBlue flex items-center justify-center">
                  <img 
                    src="https://via.placeholder.com/120x120?text=Savings" 
                    alt="Savings Account" 
                    className="h-24 w-24 rounded-full bg-white p-2"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2">Savings Accounts</h2>
                  <p className="text-gray-600 mb-4">
                    Our savings accounts offer competitive interest rates and a range of benefits to help you save and grow your money.
                  </p>
                  <Link to="/accounts/savings" className="btn-primary inline-flex items-center">
                    Explore <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
              
              {/* Current Account */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="h-40 bg-gradient-to-r from-sbi-blue to-sbi-lightBlue flex items-center justify-center">
                  <img 
                    src="https://via.placeholder.com/120x120?text=Current" 
                    alt="Current Account" 
                    className="h-24 w-24 rounded-full bg-white p-2"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2">Current Accounts</h2>
                  <p className="text-gray-600 mb-4">
                    Perfect for businesses, our current accounts provide flexible banking solutions with enhanced transaction capabilities.
                  </p>
                  <Link to="/accounts/current" className="btn-primary inline-flex items-center">
                    Explore <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
              
              {/* Salary Account */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="h-40 bg-gradient-to-r from-sbi-blue to-sbi-lightBlue flex items-center justify-center">
                  <img 
                    src="https://via.placeholder.com/120x120?text=Salary" 
                    alt="Salary Account" 
                    className="h-24 w-24 rounded-full bg-white p-2"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2">Salary Accounts</h2>
                  <p className="text-gray-600 mb-4">
                    Enjoy special benefits and privileges with our salary accounts, designed specifically for salaried individuals.
                  </p>
                  <Link to="/accounts/salary" className="btn-primary inline-flex items-center">
                    Explore <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="py-8 bg-gray-100">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Banking Accounts?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-sbi-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Competitive Interest Rates</h3>
                <p className="text-gray-600">Earn more with our competitive interest rates on savings accounts.</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-sbi-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure Banking</h3>
                <p className="text-gray-600">Advanced security features for safe and secure banking transactions.</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-sbi-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Banking</h3>
                <p className="text-gray-600">Access your accounts anytime, anywhere with our online and mobile banking.</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-sbi-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Zero Paperwork</h3>
                <p className="text-gray-600">Open accounts online with minimal documentation and paperwork.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Accounts;
