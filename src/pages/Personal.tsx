
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Wallet, CreditCard, Home, ShieldCheck, PiggyBank, ArrowRightCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Personal = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Personal Banking</h1>
              <p className="text-lg opacity-90 mb-8">Financial solutions designed to meet your individual needs and help you achieve your personal financial goals.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Explore Personal Banking
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Open an Account
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container py-10">
          <Tabs defaultValue="accounts" className="w-full">
            <TabsList className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-2">
              <TabsTrigger value="accounts" className="flex items-center">
                <Wallet className="mr-2 h-4 w-4" /> Accounts
              </TabsTrigger>
              <TabsTrigger value="cards" className="flex items-center">
                <CreditCard className="mr-2 h-4 w-4" /> Cards
              </TabsTrigger>
              <TabsTrigger value="loans" className="flex items-center">
                <Home className="mr-2 h-4 w-4" /> Loans
              </TabsTrigger>
              <TabsTrigger value="investments" className="flex items-center">
                <PiggyBank className="mr-2 h-4 w-4" /> Investments
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="accounts" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Personal Banking Accounts</h2>
                  <p className="mb-6">Find the right banking account to suit your lifestyle needs, from everyday checking to high-interest savings options.</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <ArrowRightCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Everyday Checking</h3>
                        <p className="text-sm text-gray-600">Flexible checking accounts with modern digital banking features for your day-to-day needs.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <ArrowRightCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Savings Solutions</h3>
                        <p className="text-sm text-gray-600">From standard savings to high-yield accounts designed to help your money grow faster.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <ArrowRightCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Premier Banking</h3>
                        <p className="text-sm text-gray-600">Exclusive accounts with premium benefits, dedicated service, and enhanced features.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <ArrowRightCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Youth & Student Accounts</h3>
                        <p className="text-sm text-gray-600">Specially designed banking solutions for young adults and students with no monthly fees.</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    Compare Account Options
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <Badge className="w-fit bg-yellow-500 hover:bg-yellow-600 mb-2">Most Popular</Badge>
                      <CardTitle>Gold Checking</CardTitle>
                      <CardDescription>Premium everyday banking</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>No minimum balance requirement</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>Free ATM withdrawals worldwide</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>Mobile and online banking</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>No foreign transaction fees</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Learn More</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <Badge className="w-fit bg-blue-500 hover:bg-blue-600 mb-2">High Yield</Badge>
                      <CardTitle>Premium Savings</CardTitle>
                      <CardDescription>Maximize your savings</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>Competitive interest rates</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>No monthly maintenance fees</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>Easy funds transfer</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>Goal-based savings features</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Learn More</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-2/3 mb-4 md:mb-0 md:pr-6">
                    <h3 className="text-xl font-semibold mb-2">New Account Special Offer</h3>
                    <p className="mb-4">Open a new checking account today and receive a $200 bonus when you set up direct deposit within 60 days.</p>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                      Get Started Now
                    </Button>
                  </div>
                  <div className="md:w-1/3 text-center">
                    <div className="inline-block bg-yellow-500 text-black rounded-full p-4">
                      <PiggyBank size={48} />
                    </div>
                    <p className="font-bold text-xl mt-2">$200 Bonus</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="cards">
              <h2 className="text-2xl font-semibold mb-4">Personal Cards</h2>
              <p className="mb-8">Discover our range of credit and debit cards designed to fit your personal financial needs.</p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <Card>
                  <CardHeader>
                    <CardTitle>Wealth Wave Gold</CardTitle>
                    <CardDescription>Premium rewards credit card</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-40 rounded-lg mb-4 flex items-center justify-center">
                      <CreditCard className="h-16 w-16 text-white" />
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>2% cashback on all purchases</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>50,000 bonus points after spending $3,000</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>No foreign transaction fees</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Travel insurance and purchase protection</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Wealth Wave Platinum</CardTitle>
                    <CardDescription>Premium travel credit card</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-r from-gray-700 to-gray-900 h-40 rounded-lg mb-4 flex items-center justify-center">
                      <CreditCard className="h-16 w-16 text-white" />
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>3X points on travel and dining</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>75,000 bonus points welcome offer</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Airport lounge access worldwide</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>$300 annual travel credit</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Wealth Wave Debit</CardTitle>
                    <CardDescription>Smart everyday spending</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-40 rounded-lg mb-4 flex items-center justify-center">
                      <CreditCard className="h-16 w-16 text-white" />
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Zero monthly fees</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Worldwide ATM fee reimbursement</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Instant purchase notifications</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                        <span>Enhanced security features</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="bg-gray-900 text-white p-8 rounded-lg">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-2/3 md:pr-6">
                    <h3 className="text-xl font-semibold mb-4">Card Comparison Tool</h3>
                    <p className="mb-4">Not sure which card is right for you? Our interactive comparison tool helps you find the perfect match for your spending habits and lifestyle.</p>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                      Compare Cards
                    </Button>
                  </div>
                  <div className="md:w-1/3 mt-6 md:mt-0">
                    <div className="flex items-center justify-center">
                      <div className="relative">
                        <CreditCard className="h-20 w-20 text-yellow-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="loans">
              <h2 className="text-2xl font-semibold mb-4">Personal Loans</h2>
              <p className="mb-8">Flexible financing solutions to help you achieve your goals, from home ownership to education and beyond.</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-5 text-center">
                    <Home className="h-12 w-12 mx-auto text-yellow-600" />
                    <h3 className="text-xl font-semibold mt-2">Home Loans</h3>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="font-medium">Mortgage Options</h4>
                      <p className="text-sm text-gray-600">Fixed and adjustable rate mortgages with competitive rates and flexible terms.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Home Equity</h4>
                      <p className="text-sm text-gray-600">Access the equity in your home with lines of credit or lump sum loans.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Refinancing</h4>
                      <p className="text-sm text-gray-600">Lower your rate or tap into equity with our refinancing options.</p>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">Explore Home Loans</Button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-5 text-center">
                    <User className="h-12 w-12 mx-auto text-yellow-600" />
                    <h3 className="text-xl font-semibold mt-2">Personal Loans</h3>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="font-medium">Unsecured Loans</h4>
                      <p className="text-sm text-gray-600">Flexible financing for major expenses without requiring collateral.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Debt Consolidation</h4>
                      <p className="text-sm text-gray-600">Combine multiple debts into one simple monthly payment.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Line of Credit</h4>
                      <p className="text-sm text-gray-600">Revolving credit line for ongoing access to funds as needed.</p>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">Explore Personal Loans</Button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-5 text-center">
                    <CreditCard className="h-12 w-12 mx-auto text-yellow-600" />
                    <h3 className="text-xl font-semibold mt-2">Auto & Specialty</h3>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="font-medium">Auto Loans</h4>
                      <p className="text-sm text-gray-600">New and used vehicle financing with competitive rates and terms.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Education Loans</h4>
                      <p className="text-sm text-gray-600">Funding solutions for education expenses at all levels.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Luxury Purchases</h4>
                      <p className="text-sm text-gray-600">Specialized financing for boats, RVs, and other luxury items.</p>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">Explore Specialty Loans</Button>
                </div>
              </div>
              
              <div className="mt-10 bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Loan Calculators</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium mb-2">Mortgage Calculator</h4>
                    <p className="text-sm text-gray-600 mb-3">Estimate your monthly mortgage payments based on loan amount, interest rate, and term.</p>
                    <Button size="sm" variant="outline">Use Calculator</Button>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium mb-2">Auto Loan Calculator</h4>
                    <p className="text-sm text-gray-600 mb-3">Calculate your monthly auto loan payments and see how much vehicle you can afford.</p>
                    <Button size="sm" variant="outline">Use Calculator</Button>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium mb-2">Debt Consolidation Calculator</h4>
                    <p className="text-sm text-gray-600 mb-3">See how much you could save by consolidating your existing debts into one loan.</p>
                    <Button size="sm" variant="outline">Use Calculator</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="investments">
              <h2 className="text-2xl font-semibold mb-4">Personal Investments</h2>
              <p className="mb-8">Build and grow your wealth with our range of investment products and services.</p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Investment Products</h3>
                  
                  <div className="space-y-4 mb-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-base">
                          <PiggyBank className="h-5 w-5 mr-2 text-yellow-600" />
                          Certificates of Deposit
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Secure, fixed-term investments with guaranteed returns, available in terms from 3 months to 5 years.</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-base">
                          <PiggyBank className="h-5 w-5 mr-2 text-yellow-600" />
                          Retirement Accounts
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Tax-advantaged retirement savings options including Traditional IRAs, Roth IRAs, and 401(k) rollovers.</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-base">
                          <PiggyBank className="h-5 w-5 mr-2 text-yellow-600" />
                          Brokerage Accounts
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Self-directed investing in stocks, bonds, ETFs, mutual funds, and more with our easy-to-use online platform.</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-base">
                          <PiggyBank className="h-5 w-5 mr-2 text-yellow-600" />
                          Managed Portfolios
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Professional investment management tailored to your goals and risk tolerance, with ongoing oversight and rebalancing.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Investment Services</h3>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                        <User className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Financial Advisory</h4>
                        <p className="text-sm text-gray-600">Personalized financial guidance from our team of certified advisors.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                        <ShieldCheck className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Estate Planning</h4>
                        <p className="text-sm text-gray-600">Comprehensive estate planning services to protect and transfer your wealth.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                        <PiggyBank className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Retirement Planning</h4>
                        <p className="text-sm text-gray-600">Strategies to build, protect, and distribute your retirement savings.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                        <Home className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Education Funding</h4>
                        <p className="text-sm text-gray-600">College savings plans and education funding strategies.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                      Schedule a Consultation
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl font-semibold mb-3">Ready to Start Investing?</h3>
                <p className="mb-6 max-w-2xl mx-auto">Our investment specialists can help you create a personalized investment strategy aligned with your financial goals.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Open an Investment Account</Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white/10">Learn About Investing</Button>
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

export default Personal;
