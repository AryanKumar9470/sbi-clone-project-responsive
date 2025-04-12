
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Briefcase } from 'lucide-react';
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

const BusinessLoans = () => {
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
                    <Link to="/loans">Loans</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Business Loans</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        
        {/* Page Header */}
        <div className="bg-sbi-blue text-white py-8">
          <div className="container">
            <div className="flex items-center">
              <Briefcase className="h-12 w-12 mr-4" />
              <div>
                <h1 className="text-3xl font-bold">Business Loans</h1>
                <p className="opacity-90 mt-1">Growth capital solutions for your business needs</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Loan Types */}
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Working Capital Loan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <p className="text-xl font-semibold text-blue-600">9.75%</p>
                  <p className="text-sm text-gray-500">Interest Rate</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Fund day-to-day operations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Flexible repayment options</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Overdraft facility available</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Term Loan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <p className="text-xl font-semibold text-blue-600">10.50%</p>
                  <p className="text-sm text-gray-500">Interest Rate</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>For long-term business expansion</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Loan up to ₹2 crore</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Tenure up to 10 years</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>MSME Loan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <p className="text-xl font-semibold text-blue-600">8.50%</p>
                  <p className="text-sm text-gray-500">Interest Rate</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Specialized for small businesses</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Collateral-free options available</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Quick approval process</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessLoans;
