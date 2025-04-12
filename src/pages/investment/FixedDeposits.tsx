
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, TrendingUp, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const FixedDeposits = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-gray-100 py-2 border-b border-gray-200">
          <div className="container">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/investment">Investment</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Fixed Deposits</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        
        {/* Page Header */}
        <div className="bg-sbi-blue text-white py-8">
          <div className="container">
            <div className="flex items-center">
              <Landmark className="h-12 w-12 mr-4" />
              <div>
                <h1 className="text-3xl font-bold">Fixed Deposits</h1>
                <p className="opacity-90 mt-1">Secure and guaranteed returns on your investments</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Deposit Types */}
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Regular Fixed Deposit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <p className="text-xl font-semibold text-blue-600">7.25%</p>
                  <p className="text-sm text-gray-500">Interest Rate</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Tenures from 7 days to 10 years</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Minimum deposit ₹1,000</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Quarterly interest payouts</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Invest Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Senior Citizen FD</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <p className="text-xl font-semibold text-blue-600">7.75%</p>
                  <p className="text-sm text-gray-500">Interest Rate</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Additional 0.50% for senior citizens</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Monthly interest payout option</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Doorstep banking services</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Invest Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tax Saver FD</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <p className="text-xl font-semibold text-blue-600">7.15%</p>
                  <p className="text-sm text-gray-500">Interest Rate</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Tax benefits under Section 80C</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>5-year lock-in period</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Maximum investment ₹1.5 lakhs</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Invest Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FixedDeposits;
