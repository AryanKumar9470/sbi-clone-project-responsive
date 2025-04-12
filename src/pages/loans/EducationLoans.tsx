
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, GraduationCap } from 'lucide-react';
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

const EducationLoans = () => {
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
                  <BreadcrumbPage>Education Loans</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        
        {/* Page Header */}
        <div className="bg-sbi-blue text-white py-8">
          <div className="container">
            <div className="flex items-center">
              <GraduationCap className="h-12 w-12 mr-4" />
              <div>
                <h1 className="text-3xl font-bold">Education Loans</h1>
                <p className="opacity-90 mt-1">Invest in your future with our flexible education financing options</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Loan Types */}
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Domestic Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <p className="text-xl font-semibold text-blue-600">8.00%</p>
                  <p className="text-sm text-gray-500">Interest Rate</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Loans up to ₹10 lakhs</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Repayment after course completion</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>No margin for loans up to ₹4 lakhs</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <p className="text-xl font-semibold text-blue-600">8.50%</p>
                  <p className="text-sm text-gray-500">Interest Rate</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Loans up to ₹50 lakhs</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Covers tuition and living expenses</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Forex services included</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skill Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <p className="text-xl font-semibold text-blue-600">7.50%</p>
                  <p className="text-sm text-gray-500">Interest Rate</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>For vocational and skill courses</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Quick approval process</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                    <span>Flexible repayment options</span>
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

export default EducationLoans;
