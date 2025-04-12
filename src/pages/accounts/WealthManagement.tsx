
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clipboard, ChevronRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const WealthManagement = () => {
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
              <Link to="/accounts" className="text-sbi-blue hover:underline">Accounts</Link>
              <ChevronRight size={14} className="mx-1" />
              <span>Wealth Management</span>
            </div>
          </div>
        </div>
        
        {/* Page Header */}
        <div className="bg-sbi-blue text-white py-8">
          <div className="container">
            <div className="flex items-center">
              <TrendingUp className="h-12 w-12 mr-4" />
              <div>
                <h1 className="text-3xl font-bold">Wealth Management</h1>
                <p className="opacity-90 mt-1">Comprehensive financial planning and wealth growth solutions</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Account Types */}
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Wealth Builder</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <p className="text-xl font-semibold text-blue-600">₹5 Lakhs</p>
                  <p className="text-sm text-gray-500">Minimum Investment</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Diversified investment portfolio</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Quarterly portfolio review</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Basic financial planning</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wealth Premier</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <p className="text-xl font-semibold text-blue-600">₹25 Lakhs</p>
                  <p className="text-sm text-gray-500">Minimum Investment</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Dedicated wealth manager</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Monthly portfolio review</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Advanced tax planning</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wealth Elite</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <p className="text-xl font-semibold text-blue-600">₹1 Crore</p>
                  <p className="text-sm text-gray-500">Minimum Investment</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Senior wealth advisor team</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Access to exclusive investments</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Family office services</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WealthManagement;
