
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clipboard, ChevronRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const CurrentAccounts = () => {
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
              <span>Current Accounts</span>
            </div>
          </div>
        </div>
        
        {/* Page Header */}
        <div className="bg-sbi-blue text-white py-8">
          <div className="container">
            <div className="flex items-center">
              <Briefcase className="h-12 w-12 mr-4" />
              <div>
                <h1 className="text-3xl font-bold">Current Accounts</h1>
                <p className="opacity-90 mt-1">Efficient business banking solutions</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Account Types */}
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Business</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <p className="text-xl font-semibold text-blue-600">₹10,000</p>
                  <p className="text-sm text-gray-500">Minimum Balance</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>20 free transactions per month</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Business debit card</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Mobile & internet banking</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Open Account</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Premium Business</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <p className="text-xl font-semibold text-blue-600">₹50,000</p>
                  <p className="text-sm text-gray-500">Minimum Balance</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Unlimited transactions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Business relationship manager</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Premium business credit card</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Open Account</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Startup Special</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <p className="text-xl font-semibold text-blue-600">₹5,000</p>
                  <p className="text-sm text-gray-500">Minimum Balance</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>First year free banking</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>50 free transactions per month</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Startup advisory services</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Open Account</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CurrentAccounts;
