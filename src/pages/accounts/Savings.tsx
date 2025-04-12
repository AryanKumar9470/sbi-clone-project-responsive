
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clipboard, ChevronRight, PiggyBank } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const SavingsAccounts = () => {
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
              <span>Savings Accounts</span>
            </div>
          </div>
        </div>
        
        {/* Page Header */}
        <div className="bg-sbi-blue text-white py-8">
          <div className="container">
            <div className="flex items-center">
              <PiggyBank className="h-12 w-12 mr-4" />
              <div>
                <h1 className="text-3xl font-bold">Savings Accounts</h1>
                <p className="opacity-90 mt-1">Smart ways to save and grow your money</p>
              </div>
            </div>
          </div>
        </div>

        {/* Account Types */}
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Regular Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <p className="text-xl font-semibold text-blue-600">3.5% p.a.</p>
                  <p className="text-sm text-gray-500">Interest Rate</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Minimum balance: ₹1,000</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Free digital banking</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Free debit card</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Open Account</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Premium Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <p className="text-xl font-semibold text-blue-600">4.25% p.a.</p>
                  <p className="text-sm text-gray-500">Interest Rate</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Minimum balance: ₹25,000</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Priority banking services</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Free premium debit card</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Open Account</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Student Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <p className="text-xl font-semibold text-blue-600">4.00% p.a.</p>
                  <p className="text-sm text-gray-500">Interest Rate</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Zero minimum balance</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Special student offers</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Education loan benefits</span>
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

export default SavingsAccounts;
