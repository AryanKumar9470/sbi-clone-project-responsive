
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Landmark, Building, WalletCards, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Public = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="bg-black text-white py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Public Banking Solutions</h1>
            <p className="text-lg max-w-2xl mb-6">Comprehensive financial services tailored for government entities, public institutions, and non-profit organizations.</p>
          </div>
        </div>
        
        <div className="container py-8">
          <Tabs defaultValue="government" className="w-full">
            <TabsList className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-2">
              <TabsTrigger value="government" className="flex items-center">
                <Landmark className="mr-2 h-4 w-4" /> Government
              </TabsTrigger>
              <TabsTrigger value="institutions" className="flex items-center">
                <Building className="mr-2 h-4 w-4" /> Institutions
              </TabsTrigger>
              <TabsTrigger value="municipal" className="flex items-center">
                <WalletCards className="mr-2 h-4 w-4" /> Municipal
              </TabsTrigger>
              <TabsTrigger value="non-profit" className="flex items-center">
                <Briefcase className="mr-2 h-4 w-4" /> Non-Profit
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="government" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Government Sector Banking</h2>
                  <p className="mb-4">Our government banking solutions are designed to meet the unique financial needs of federal, state, and local government agencies.</p>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>Treasury management and cash flow optimization</li>
                    <li>Public fund investments with competitive returns</li>
                    <li>Electronic payment and collection systems</li>
                    <li>Specialized government credit facilities</li>
                    <li>Digital banking platforms for public sector</li>
                  </ul>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Request Consultation</Button>
                </div>
                <div className="bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <Landmark size={64} className="mx-auto mb-4 text-yellow-600" />
                    <h3 className="text-xl font-semibold mb-2">Government Banking Solutions</h3>
                    <p>Specialized financial services for the public sector</p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Treasury Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Comprehensive treasury management services for government entities, including cash management, investments, and payment solutions.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Learn More</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Public Fund Deposits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Secure, flexible deposit solutions for public funds with competitive interest rates and collateralization options.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Learn More</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Government Lending</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Financing solutions for government agencies, including bonds, notes, and specialized credit facilities.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Learn More</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="institutions">
              <h2 className="text-2xl font-semibold mb-4">Public Institutions Banking</h2>
              <p className="mb-4">Financial solutions tailored for educational institutions, healthcare providers, and other public service organizations.</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Educational Institutions</h3>
                  <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li>Tuition payment processing</li>
                    <li>Endowment management</li>
                    <li>Student banking programs</li>
                    <li>Campus card solutions</li>
                  </ul>
                  <Button size="sm">Explore Solutions</Button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Healthcare Organizations</h3>
                  <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li>Revenue cycle management</li>
                    <li>Healthcare payment solutions</li>
                    <li>Capital financing</li>
                    <li>Equipment leasing</li>
                  </ul>
                  <Button size="sm">Explore Solutions</Button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Public Utilities</h3>
                  <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li>Utility payment processing</li>
                    <li>Infrastructure financing</li>
                    <li>Cash flow management</li>
                    <li>Investment solutions</li>
                  </ul>
                  <Button size="sm">Explore Solutions</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="municipal">
              <h2 className="text-2xl font-semibold mb-4">Municipal Banking Solutions</h2>
              <p>Specialized financial services for cities, counties, and local government agencies.</p>
              
              <div className="mt-6">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Featured Municipal Solutions</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-lg mb-2">Municipal Bonds & Financing</h4>
                      <p className="mb-4">Comprehensive solutions for municipal debt issuance, including general obligation bonds, revenue bonds, and short-term notes.</p>
                      <Button size="sm" variant="outline">Learn More</Button>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-2">Treasury Management</h4>
                      <p className="mb-4">Efficient cash management solutions to help municipal entities optimize their working capital and streamline their financial operations.</p>
                      <Button size="sm" variant="outline">Learn More</Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="non-profit">
              <h2 className="text-2xl font-semibold mb-4">Non-Profit Banking</h2>
              <p className="mb-6">Tailored financial solutions for non-profit organizations, foundations, and charitable institutions.</p>
              
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-3">Why Choose Wealth Wave for Non-Profits?</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold mb-2">Specialized Expertise</h4>
                    <p className="text-sm">Dedicated team with deep understanding of non-profit financial needs</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold mb-2">Fee Reductions</h4>
                    <p className="text-sm">Reduced or waived fees for qualifying non-profit organizations</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold mb-2">Digital Solutions</h4>
                    <p className="text-sm">Modern banking technology tailored for non-profit operations</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Schedule a Consultation</Button>
                <Button variant="outline">Download Non-Profit Banking Guide</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Public;
