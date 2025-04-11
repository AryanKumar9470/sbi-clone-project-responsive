
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Briefcase, Globe, BarChart, CheckCheck, CreditCard, ArrowRightCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Corporate = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-16">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Corporate Banking</h1>
              <p className="text-lg opacity-90 mb-8">Comprehensive financial solutions for businesses of all sizes, from small enterprises to global corporations.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Explore Corporate Solutions
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Contact a Relationship Manager
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container py-10">
          <Tabs defaultValue="treasury" className="w-full">
            <TabsList className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-2">
              <TabsTrigger value="treasury" className="flex items-center">
                <Briefcase className="mr-2 h-4 w-4" /> Treasury Services
              </TabsTrigger>
              <TabsTrigger value="lending" className="flex items-center">
                <Building2 className="mr-2 h-4 w-4" /> Corporate Lending
              </TabsTrigger>
              <TabsTrigger value="trade" className="flex items-center">
                <Globe className="mr-2 h-4 w-4" /> Trade Finance
              </TabsTrigger>
              <TabsTrigger value="markets" className="flex items-center">
                <BarChart className="mr-2 h-4 w-4" /> Capital Markets
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="treasury" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Treasury Management Solutions</h2>
                  <p className="mb-6">Optimize your company's cash flow, maximize interest income, and streamline payment processing with our comprehensive treasury management services.</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <ArrowRightCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Cash Management</h3>
                        <p className="text-sm text-gray-600">Comprehensive solutions to help your business manage daily cash flow more efficiently.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <ArrowRightCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Payables & Receivables</h3>
                        <p className="text-sm text-gray-600">Streamline and automate your payment and collection processes to improve efficiency.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <ArrowRightCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Liquidity Management</h3>
                        <p className="text-sm text-gray-600">Optimize your company's liquidity position with sophisticated pooling structures.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <ArrowRightCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Fraud Protection</h3>
                        <p className="text-sm text-gray-600">Advanced security measures to safeguard your business against financial fraud.</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    Explore Treasury Services
                  </Button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Featured Solutions</h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <Card className="border-0 shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <CheckCheck className="h-5 w-5 mr-2 text-yellow-600" />
                          Digital Payment Platform
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Comprehensive digital payment solutions supporting multiple payment methods and currencies with real-time tracking and reconciliation.</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm">Learn More</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="border-0 shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <CheckCheck className="h-5 w-5 mr-2 text-yellow-600" />
                          Cash Flow Forecasting
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">AI-powered cash flow forecasting tools that provide accurate predictions and insights to optimize your working capital.</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm">Learn More</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="border-0 shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <CheckCheck className="h-5 w-5 mr-2 text-yellow-600" />
                          Virtual Accounts
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Simplify receivables management with virtual accounts that streamline reconciliation and improve cash application.</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm">Learn More</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="lending">
              <h2 className="text-2xl font-semibold mb-4">Corporate Lending</h2>
              <p className="mb-8">Flexible financing solutions to support your business growth, operational needs, and strategic initiatives.</p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <Card>
                  <CardHeader>
                    <CardTitle>Working Capital</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Revolving credit facilities</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Overdraft facilities</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Short-term loans</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Receivables financing</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Supply chain finance</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Term Financing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Equipment financing</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Commercial real estate loans</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Expansion capital</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Infrastructure financing</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Project finance</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Specialized Financing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Acquisition financing</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Leveraged buyouts</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Mezzanine financing</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Structured finance</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Syndicated loans</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="bg-gray-900 text-white p-8 rounded-lg">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-2/3 md:pr-6">
                    <h3 className="text-xl font-semibold mb-4">Tailored Financing Solutions</h3>
                    <p className="mb-4">Our team of experienced corporate bankers work closely with you to understand your business needs and provide customized financing solutions to support your growth objectives.</p>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                      Request Financing Consultation
                    </Button>
                  </div>
                  <div className="md:w-1/3 mt-6 md:mt-0">
                    <div className="flex items-center justify-center">
                      <Briefcase className="h-24 w-24 text-yellow-500" />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="trade">
              <h2 className="text-2xl font-semibold mb-4">Trade Finance Solutions</h2>
              <p className="mb-8">Comprehensive trade finance solutions to facilitate international trade and mitigate risks for importers and exporters.</p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Import Solutions</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold mr-3 mt-1">1</div>
                      <div>
                        <h4 className="font-medium">Letters of Credit</h4>
                        <p className="text-sm text-gray-600">Secure payment mechanism that provides assurance to both importers and exporters in international trade transactions.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold mr-3 mt-1">2</div>
                      <div>
                        <h4 className="font-medium">Import Financing</h4>
                        <p className="text-sm text-gray-600">Short-term financing solutions to help importers manage cash flow by bridging the gap between payment to suppliers and collection from customers.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold mr-3 mt-1">3</div>
                      <div>
                        <h4 className="font-medium">Import Collections</h4>
                        <p className="text-sm text-gray-600">Banking service that facilitates the secure exchange of documents against payment or acceptance of draft.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold mr-3 mt-1">4</div>
                      <div>
                        <h4 className="font-medium">Guarantees & Standby LCs</h4>
                        <p className="text-sm text-gray-600">Financial instruments that provide assurance of payment or performance in international trade transactions.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Export Solutions</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold mr-3 mt-1">1</div>
                      <div>
                        <h4 className="font-medium">Export Letters of Credit</h4>
                        <p className="text-sm text-gray-600">Confirmation and advising services for export letters of credit, providing additional security to exporters.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold mr-3 mt-1">2</div>
                      <div>
                        <h4 className="font-medium">Export Financing</h4>
                        <p className="text-sm text-gray-600">Pre and post-shipment financing solutions to help exporters manage working capital needs throughout the export cycle.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold mr-3 mt-1">3</div>
                      <div>
                        <h4 className="font-medium">Receivables Discounting</h4>
                        <p className="text-sm text-gray-600">Convert export receivables into immediate cash flow by selling them at a discount to the bank.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold mr-3 mt-1">4</div>
                      <div>
                        <h4 className="font-medium">Export Credit Insurance</h4>
                        <p className="text-sm text-gray-600">Protect your business against non-payment risks associated with international trade.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                    <h3 className="text-xl font-semibold mb-2">Supply Chain Finance</h3>
                    <p className="mb-4">Our innovative supply chain finance solutions help optimize working capital for both buyers and suppliers, strengthening your entire supply chain ecosystem.</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center">
                        <CheckCheck className="h-5 w-5 text-yellow-600 mr-2" />
                        <span>Supplier financing programs</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCheck className="h-5 w-5 text-yellow-600 mr-2" />
                        <span>Distributor financing</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCheck className="h-5 w-5 text-yellow-600 mr-2" />
                        <span>Inventory financing solutions</span>
                      </li>
                    </ul>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                      Explore Supply Chain Finance
                    </Button>
                  </div>
                  <div className="md:w-1/3">
                    <div className="flex items-center justify-center">
                      <Globe className="h-24 w-24 text-yellow-500" />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="markets">
              <h2 className="text-2xl font-semibold mb-4">Capital Markets Solutions</h2>
              <p className="mb-8">Strategic advisory and execution services to help your company access capital markets and optimize your financial structure.</p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-5 flex justify-center">
                    <BarChart className="h-12 w-12 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Debt Capital Markets</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Bond issuance and underwriting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Commercial paper programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Private placements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Structured notes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Medium-term note programs</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-5 flex justify-center">
                    <CreditCard className="h-12 w-12 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Equity Capital Markets</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Initial public offerings (IPOs)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Follow-on offerings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Rights issues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Private equity placements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Convertible securities</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-5 flex justify-center">
                    <Building2 className="h-12 w-12 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Advisory Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Mergers & acquisitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Corporate restructuring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Balance sheet optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Capital structure advisory</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Risk management solutions</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Market Insights and Research</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Industry Research</h4>
                    <p className="text-sm text-gray-600 mb-4">Access in-depth research reports on industry trends, competitive landscapes, and market dynamics to inform your strategic decisions.</p>
                    <Button size="sm" variant="outline">Access Research Portal</Button>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Market Trends and Analysis</h4>
                    <p className="text-sm text-gray-600 mb-4">Stay informed with our regular updates on market trends, economic indicators, and financial market developments.</p>
                    <Button size="sm" variant="outline">Subscribe to Market Updates</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Corporate;
