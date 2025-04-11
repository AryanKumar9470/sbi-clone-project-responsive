
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, BarChart4, PieChart, Briefcase, ArrowRightCircle, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Investment = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Investment Solutions</h1>
              <p className="text-lg opacity-90 mb-8">Discover strategic investment opportunities tailored to your financial goals and risk tolerance.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Explore Investment Options</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container py-10">
          <Tabs defaultValue="wealth-management" className="w-full">
            <TabsList className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-2">
              <TabsTrigger value="wealth-management" className="flex items-center">
                <Briefcase className="mr-2 h-4 w-4" /> Wealth Management
              </TabsTrigger>
              <TabsTrigger value="portfolio" className="flex items-center">
                <PieChart className="mr-2 h-4 w-4" /> Portfolio Services
              </TabsTrigger>
              <TabsTrigger value="market-insights" className="flex items-center">
                <BarChart4 className="mr-2 h-4 w-4" /> Market Insights
              </TabsTrigger>
              <TabsTrigger value="advisory" className="flex items-center">
                <TrendingUp className="mr-2 h-4 w-4" /> Advisory Services
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="wealth-management" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Wealth Management Solutions</h2>
                  <p className="mb-6">Our wealth management services provide comprehensive financial strategies tailored to your unique needs and goals. Our expert advisors create personalized plans to help you build, preserve, and transfer your wealth.</p>
                  
                  <h3 className="text-xl font-medium mb-3">Our Approach</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <ArrowRightCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <span>Comprehensive financial assessment and goal setting</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <span>Customized investment strategies aligned with your risk profile</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <span>Regular portfolio reviews and rebalancing</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <span>Estate planning and wealth transfer strategies</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <span>Tax optimization frameworks</span>
                    </li>
                  </ul>
                  
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    Connect With a Wealth Advisor
                  </Button>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">Investment Solutions</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Conservative Strategy</span>
                        <span>25% Return Potential</span>
                      </div>
                      <Progress value={25} className="h-2 bg-gray-200" />
                      <p className="text-sm mt-2 text-gray-600">Lower risk, stable returns focused on capital preservation</p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Balanced Strategy</span>
                        <span>45% Return Potential</span>
                      </div>
                      <Progress value={45} className="h-2 bg-gray-200" />
                      <p className="text-sm mt-2 text-gray-600">Moderate risk with balanced growth and income focus</p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Growth Strategy</span>
                        <span>75% Return Potential</span>
                      </div>
                      <Progress value={75} className="h-2 bg-gray-200" />
                      <p className="text-sm mt-2 text-gray-600">Higher risk with focus on capital appreciation</p>
                    </div>
                    
                    <div className="pt-4 mt-4 border-t border-gray-200">
                      <Button variant="outline" className="w-full">View Detailed Performance Data</Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <Card>
                  <CardHeader>
                    <DollarSign className="h-8 w-8 text-yellow-500 mb-2" />
                    <CardTitle>Private Banking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Exclusive banking services designed for high-net-worth individuals with personalized attention and premium benefits.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <Briefcase className="h-8 w-8 text-yellow-500 mb-2" />
                    <CardTitle>Trust Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Comprehensive trust and estate planning solutions to protect and transfer your wealth according to your wishes.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <BarChart4 className="h-8 w-8 text-yellow-500 mb-2" />
                    <CardTitle>Investment Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Professional management of investment portfolios with strategic asset allocation and diversification.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="portfolio">
              <h2 className="text-2xl font-semibold mb-4">Portfolio Services</h2>
              <p className="mb-8">Our portfolio services offer comprehensive investment solutions designed to meet your financial objectives through strategic asset allocation and diversification.</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Managed Portfolios</CardTitle>
                    <CardDescription>Professional investment management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Our team of experienced investment professionals carefully constructs and manages portfolios based on your risk profile and financial goals.</p>
                    <ul className="space-y-2 text-sm">
                      <li>• Strategic and tactical asset allocation</li>
                      <li>• Continuous portfolio monitoring</li>
                      <li>• Regular rebalancing to maintain optimal asset mix</li>
                      <li>• Comprehensive performance reporting</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Explore Managed Portfolios</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Self-Directed Trading</CardTitle>
                    <CardDescription>Take control of your investments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">For experienced investors who prefer a hands-on approach, our self-directed trading platform provides the tools and resources you need to make informed investment decisions.</p>
                    <ul className="space-y-2 text-sm">
                      <li>• Advanced trading platform with real-time data</li>
                      <li>• Access to global markets</li>
                      <li>• Competitive commission rates</li>
                      <li>• Comprehensive research and analysis tools</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Open Trading Account</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Robo-Advisory</CardTitle>
                    <CardDescription>Automated investment solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Our digital investment platform uses advanced algorithms to create and manage a diversified portfolio tailored to your goals and risk tolerance.</p>
                    <ul className="space-y-2 text-sm">
                      <li>• Low minimum investment requirements</li>
                      <li>• Automated portfolio rebalancing</li>
                      <li>• Lower management fees</li>
                      <li>• User-friendly digital interface</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Get Started</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="market-insights">
              <h2 className="text-2xl font-semibold mb-4">Market Insights</h2>
              <p className="mb-6">Stay informed with our latest market analyses, economic forecasts, and investment strategies.</p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Market Outlook</h3>
                  <p className="mb-4">Our team of analysts provides regular updates on market trends, economic indicators, and potential investment opportunities.</p>
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <h4 className="font-medium">Q2 2023 Market Review</h4>
                      <p className="text-sm text-gray-600">Analysis of market performance and key economic factors.</p>
                      <Button variant="link" className="p-0 h-auto text-yellow-600">Read More</Button>
                    </div>
                    <div className="border-b pb-3">
                      <h4 className="font-medium">Emerging Markets: Opportunities and Risks</h4>
                      <p className="text-sm text-gray-600">In-depth analysis of investment potential in emerging economies.</p>
                      <Button variant="link" className="p-0 h-auto text-yellow-600">Read More</Button>
                    </div>
                    <div>
                      <h4 className="font-medium">Interest Rate Impact on Investment Strategies</h4>
                      <p className="text-sm text-gray-600">How changing interest rates affect different asset classes.</p>
                      <Button variant="link" className="p-0 h-auto text-yellow-600">Read More</Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Research & Analysis</h3>
                  <p className="mb-4">Access our comprehensive research reports and industry analyses to make informed investment decisions.</p>
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <h4 className="font-medium">Technology Sector Analysis</h4>
                      <p className="text-sm text-gray-600">In-depth report on tech industry trends and investment opportunities.</p>
                      <Button variant="link" className="p-0 h-auto text-yellow-600">Download Report</Button>
                    </div>
                    <div className="border-b pb-3">
                      <h4 className="font-medium">ESG Investing in 2023</h4>
                      <p className="text-sm text-gray-600">How environmental, social, and governance factors are shaping investment strategies.</p>
                      <Button variant="link" className="p-0 h-auto text-yellow-600">Download Report</Button>
                    </div>
                    <div>
                      <h4 className="font-medium">Alternative Investments Guide</h4>
                      <p className="text-sm text-gray-600">Exploring opportunities in real estate, private equity, and hedge funds.</p>
                      <Button variant="link" className="p-0 h-auto text-yellow-600">Download Report</Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Subscribe to Our Market Updates</h3>
                <p className="mb-4">Receive regular updates on market trends, investment opportunities, and economic forecasts.</p>
                <div className="flex flex-col md:flex-row gap-3">
                  <input type="email" placeholder="Your Email Address" className="flex-grow p-2 border border-gray-300 rounded" />
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Subscribe</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="advisory">
              <h2 className="text-2xl font-semibold mb-4">Advisory Services</h2>
              <p className="mb-8">Our experienced advisors provide personalized financial guidance to help you achieve your investment objectives and build long-term wealth.</p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <Card>
                  <CardHeader className="bg-gray-100">
                    <CardTitle>Financial Planning</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-5 w-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</div>
                        <span>Comprehensive financial assessment</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</div>
                        <span>Retirement planning strategies</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</div>
                        <span>Education funding plans</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</div>
                        <span>Cash flow management</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Schedule Consultation</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="bg-gray-100">
                    <CardTitle>Investment Advisory</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-5 w-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</div>
                        <span>Portfolio construction and management</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</div>
                        <span>Asset allocation strategies</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</div>
                        <span>Risk management solutions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</div>
                        <span>Performance monitoring and reporting</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Schedule Consultation</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="bg-gray-100">
                    <CardTitle>Estate Planning</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-5 w-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</div>
                        <span>Wealth transfer strategies</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</div>
                        <span>Trust creation and management</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</div>
                        <span>Tax-efficient inheritance planning</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</div>
                        <span>Charitable giving planning</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Schedule Consultation</Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl font-semibold mb-3">Ready to Take the Next Step?</h3>
                <p className="mb-6 max-w-2xl mx-auto">Our expert advisors are ready to help you create a personalized investment strategy aligned with your financial goals.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Meet Our Advisors</Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white/10">Schedule Appointment</Button>
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

export default Investment;
