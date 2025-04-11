
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, ArrowRightLeft, Building2, Users, CreditCard, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const International = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-16">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">International Banking</h1>
              <p className="text-lg mb-8 opacity-90">Global financial solutions for individuals and businesses operating across borders.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Explore Global Solutions
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Find Global Branches
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container py-10">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-2">
              <TabsTrigger value="personal" className="flex items-center">
                <Users className="mr-2 h-4 w-4" /> Personal
              </TabsTrigger>
              <TabsTrigger value="business" className="flex items-center">
                <Building2 className="mr-2 h-4 w-4" /> Business
              </TabsTrigger>
              <TabsTrigger value="forex" className="flex items-center">
                <ArrowRightLeft className="mr-2 h-4 w-4" /> Forex Services
              </TabsTrigger>
              <TabsTrigger value="travel" className="flex items-center">
                <Globe className="mr-2 h-4 w-4" /> Travel Banking
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">International Personal Banking</h2>
                  <p className="mb-6">Access your finances seamlessly across borders with our comprehensive international personal banking services tailored for global citizens.</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold mr-3 mt-1">1</div>
                      <div>
                        <h3 className="text-lg font-medium">Multi-Currency Accounts</h3>
                        <p className="text-gray-600">Hold, manage, and transfer funds in multiple currencies from a single account.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold mr-3 mt-1">2</div>
                      <div>
                        <h3 className="text-lg font-medium">Global Transfers</h3>
                        <p className="text-gray-600">Send and receive money internationally with competitive exchange rates and low fees.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold mr-3 mt-1">3</div>
                      <div>
                        <h3 className="text-lg font-medium">International Mortgages</h3>
                        <p className="text-gray-600">Finance properties abroad with mortgages designed for international buyers.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold mr-3 mt-1">4</div>
                      <div>
                        <h3 className="text-lg font-medium">Expatriate Services</h3>
                        <p className="text-gray-600">Specialized banking solutions for expatriates living and working abroad.</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    Open International Account
                  </Button>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-6 text-center">Featured International Products</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="border-0 shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Global Access Account</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm">Banking without borders with fee-free international ATM access.</p>
                      </CardContent>
                      <CardFooter>
                        <Button size="sm" variant="outline" className="w-full">Learn More</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="border-0 shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Wealth Passport</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm">Premium banking services for high-net-worth global clients.</p>
                      </CardContent>
                      <CardFooter>
                        <Button size="sm" variant="outline" className="w-full">Learn More</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="border-0 shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Foreign Currency CD</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm">Lock in competitive rates on deposits in foreign currencies.</p>
                      </CardContent>
                      <CardFooter>
                        <Button size="sm" variant="outline" className="w-full">Learn More</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="border-0 shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Global Transfer</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm">Fast, secure international money transfers at competitive rates.</p>
                      </CardContent>
                      <CardFooter>
                        <Button size="sm" variant="outline" className="w-full">Learn More</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="business">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">International Business Banking</h2>
                <p className="mb-6">Comprehensive global banking solutions to help your business thrive in international markets.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <Card>
                  <CardHeader>
                    <CardTitle>Global Treasury Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Multi-currency accounts and cash pooling</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Liquidity management across borders</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Cross-border payment optimization</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Foreign exchange risk management</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Trade Finance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Letters of credit and collections</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Import and export financing</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Supply chain financing</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Trade risk mitigation</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Global Business Expansion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>International banking setup</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Cross-border M&A advisory</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Foreign market entry strategies</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>International business consulting</span>
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
                    <h3 className="text-xl font-semibold mb-4">Ready to Expand Globally?</h3>
                    <p className="mb-4">Our international business specialists can help your company navigate the complexities of global banking and finance.</p>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Schedule Business Consultation</Button>
                  </div>
                  <div className="md:w-1/3 mt-6 md:mt-0">
                    <div className="flex items-center justify-center">
                      <Globe className="h-24 w-24 text-yellow-500" />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="forex">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Foreign Exchange Services</h2>
                <p className="mb-6">Access competitive exchange rates and expert guidance for all your foreign currency needs.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Currency Exchange</CardTitle>
                    <CardDescription>Convert between currencies at competitive rates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Spot Exchange</h4>
                        <p className="text-sm text-gray-600">Immediate exchange of one currency for another at the current market rate.</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Forward Contracts</h4>
                        <p className="text-sm text-gray-600">Lock in exchange rates for future transactions to protect against currency fluctuations.</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Limit Orders</h4>
                        <p className="text-sm text-gray-600">Automatic currency conversion when your target exchange rate is reached.</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Exchange Currency</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Management</CardTitle>
                    <CardDescription>Protect against currency market volatility</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Currency Options</h4>
                        <p className="text-sm text-gray-600">Financial instruments that give you the right to buy or sell currency at a predetermined rate.</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Hedging Strategies</h4>
                        <p className="text-sm text-gray-600">Tailored strategies to minimize risk from adverse currency movements.</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Market Insights</h4>
                        <p className="text-sm text-gray-600">Regular updates and analysis on currency market trends and forecasts.</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Consult with FX Specialist</Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Popular Currency Pairs</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-white shadow rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">EUR/USD</span>
                      <span className="text-green-600">+0.3%</span>
                    </div>
                    <p className="text-2xl mb-2">1.1056</p>
                    <p className="text-xs text-gray-500">Updated: 10:30 AM</p>
                  </div>
                  
                  <div className="p-4 bg-white shadow rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">GBP/USD</span>
                      <span className="text-red-600">-0.1%</span>
                    </div>
                    <p className="text-2xl mb-2">1.2347</p>
                    <p className="text-xs text-gray-500">Updated: 10:30 AM</p>
                  </div>
                  
                  <div className="p-4 bg-white shadow rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">USD/JPY</span>
                      <span className="text-green-600">+0.2%</span>
                    </div>
                    <p className="text-2xl mb-2">110.32</p>
                    <p className="text-xs text-gray-500">Updated: 10:30 AM</p>
                  </div>
                  
                  <div className="p-4 bg-white shadow rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">USD/CAD</span>
                      <span className="text-red-600">-0.15%</span>
                    </div>
                    <p className="text-2xl mb-2">1.2518</p>
                    <p className="text-xs text-gray-500">Updated: 10:30 AM</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Access Full Currency Exchange Platform</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="travel">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Travel Banking Services</h2>
                <p className="mb-6">Banking solutions designed for international travelers, making your global adventures hassle-free.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-5 flex justify-center">
                    <CreditCard className="h-12 w-12 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Travel Cards</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Multi-currency prepaid cards for global spending</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>No foreign transaction fees on purchases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Lock in exchange rates before travel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Contactless payment capability worldwide</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full">Order Travel Card</Button>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-5 flex justify-center">
                    <Wallet className="h-12 w-12 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Travel Cash</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Foreign currency exchange at competitive rates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Over 50 currencies available</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Free delivery for premium customers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Buy back unused currency at favorable rates</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full">Order Foreign Currency</Button>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-5 flex justify-center">
                    <Globe className="h-12 w-12 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Travel Insurance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Comprehensive travel insurance packages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Coverage for medical emergencies abroad</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Trip cancellation and interruption protection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>24/7 emergency assistance hotline</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full">Get Travel Insurance</Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold mb-4">Travel Banking Tips</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Before You Travel</h4>
                    <ul className="space-y-2">
                      <li>• Notify your bank of your travel dates and destinations</li>
                      <li>• Set up travel notifications in your mobile banking app</li>
                      <li>• Order foreign currency 3-5 business days in advance</li>
                      <li>• Check if your bank has partner institutions abroad</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">While Traveling</h4>
                    <ul className="space-y-2">
                      <li>• Use ATMs within bank branches for added security</li>
                      <li>• Pay in local currency when using your card abroad</li>
                      <li>• Keep emergency contact numbers for your bank</li>
                      <li>• Monitor your accounts regularly for suspicious activity</li>
                    </ul>
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

export default International;
