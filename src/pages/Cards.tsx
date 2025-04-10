
import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, BadgeCheck, ShieldCheck, PiggyBank, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Cards = () => {
  const { toast } = useToast();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleApplyNow = (cardType: string) => {
    toast({
      title: "Application Started",
      description: `You've initiated an application for the ${cardType}. This is a demo.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-sbi-blue py-12 px-4 md:px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">SBI Card Solutions</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Discover the perfect card for your lifestyle. From premium rewards to everyday cashback,
              find the card that suits your needs.
            </p>
          </div>
        </div>

        {/* Card tabs */}
        <div className="container mx-auto py-8 px-4">
          <Tabs defaultValue="credit" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="credit">Credit Cards</TabsTrigger>
              <TabsTrigger value="debit">Debit Cards</TabsTrigger>
              <TabsTrigger value="prepaid">Prepaid Cards</TabsTrigger>
            </TabsList>

            {/* Credit Cards Section */}
            <TabsContent value="credit" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Premium Card */}
                <Card className={`transition-all ${selectedCard === 'premium' ? 'ring-2 ring-sbi-blue' : ''}`} 
                      onClick={() => setSelectedCard('premium')}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CreditCard className="h-8 w-8 text-sbi-blue" />
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">Premium</span>
                    </div>
                    <CardTitle>SBI Elite Card</CardTitle>
                    <CardDescription>For the discerning customer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">5X reward points on travel, dining, and entertainment</p>
                      </div>
                      <div className="flex items-start">
                        <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">Complimentary airport lounge access</p>
                      </div>
                      <div className="flex items-start">
                        <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">Concierge services for travel and dining</p>
                      </div>
                      <div className="flex items-start">
                        <ShieldCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">Zero liability on unauthorized transactions</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t">
                      <div>
                        <p className="text-xs text-muted-foreground">Annual Fee</p>
                        <p className="font-medium">₹4,999</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Interest Rate</p>
                        <p className="font-medium">3.5% p.m.</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => handleApplyNow('SBI Elite Card')} className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>

                {/* Cashback Card */}
                <Card className={`transition-all ${selectedCard === 'cashback' ? 'ring-2 ring-sbi-blue' : ''}`} 
                      onClick={() => setSelectedCard('cashback')}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CreditCard className="h-8 w-8 text-sbi-blue" />
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">Cashback</span>
                    </div>
                    <CardTitle>SBI Cashback Card</CardTitle>
                    <CardDescription>Earn as you spend</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <PiggyBank className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">2% cashback on all online transactions</p>
                      </div>
                      <div className="flex items-start">
                        <PiggyBank className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">5% cashback on utility bills</p>
                      </div>
                      <div className="flex items-start">
                        <PiggyBank className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">1% cashback on all other purchases</p>
                      </div>
                      <div className="flex items-start">
                        <ShieldCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">Secure chip and pin technology</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t">
                      <div>
                        <p className="text-xs text-muted-foreground">Annual Fee</p>
                        <p className="font-medium">₹499</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Interest Rate</p>
                        <p className="font-medium">3.3% p.m.</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => handleApplyNow('SBI Cashback Card')} className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>

                {/* Lifestyle Card */}
                <Card className={`transition-all ${selectedCard === 'lifestyle' ? 'ring-2 ring-sbi-blue' : ''}`} 
                      onClick={() => setSelectedCard('lifestyle')}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CreditCard className="h-8 w-8 text-sbi-blue" />
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded">Lifestyle</span>
                    </div>
                    <CardTitle>SBI Lifestyle Card</CardTitle>
                    <CardDescription>For shopping and entertainment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <TrendingUp className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">3X rewards on shopping and entertainment</p>
                      </div>
                      <div className="flex items-start">
                        <TrendingUp className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">Buy 1 Get 1 movie ticket offers</p>
                      </div>
                      <div className="flex items-start">
                        <TrendingUp className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">Special discounts at partner restaurants</p>
                      </div>
                      <div className="flex items-start">
                        <ShieldCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">EMI conversion facility</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t">
                      <div>
                        <p className="text-xs text-muted-foreground">Annual Fee</p>
                        <p className="font-medium">₹999</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Interest Rate</p>
                        <p className="font-medium">3.4% p.m.</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => handleApplyNow('SBI Lifestyle Card')} className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Debit Cards Section */}
            <TabsContent value="debit" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CreditCard className="h-8 w-8 text-sbi-blue" />
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">Standard</span>
                    </div>
                    <CardTitle>SBI Global Debit Card</CardTitle>
                    <CardDescription>International transactions made easy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">Worldwide acceptance at all Visa merchants</p>
                      </div>
                      <div className="flex items-start">
                        <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">Higher daily transaction limits</p>
                      </div>
                      <div className="flex items-start">
                        <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">Emergency cash assistance abroad</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => handleApplyNow('SBI Global Debit Card')} className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CreditCard className="h-8 w-8 text-sbi-blue" />
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">Classic</span>
                    </div>
                    <CardTitle>SBI Classic Debit Card</CardTitle>
                    <CardDescription>For everyday banking needs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">Free ATM transactions at SBI ATMs</p>
                      </div>
                      <div className="flex items-start">
                        <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">Merchant discounts at select outlets</p>
                      </div>
                      <div className="flex items-start">
                        <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">24/7 customer support</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => handleApplyNow('SBI Classic Debit Card')} className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Prepaid Cards Section */}
            <TabsContent value="prepaid" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CreditCard className="h-8 w-8 text-sbi-blue" />
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded">Travel</span>
                    </div>
                    <CardTitle>SBI Travel Card</CardTitle>
                    <CardDescription>Your perfect travel companion</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">Available in multiple currencies</p>
                      </div>
                      <div className="flex items-start">
                        <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">No forex markup fees</p>
                      </div>
                      <div className="flex items-start">
                        <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">Emergency card replacement overseas</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => handleApplyNow('SBI Travel Card')} className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CreditCard className="h-8 w-8 text-sbi-blue" />
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">Gift</span>
                    </div>
                    <CardTitle>SBI Gift Card</CardTitle>
                    <CardDescription>The perfect gift for any occasion</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">Customizable card designs</p>
                      </div>
                      <div className="flex items-start">
                        <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">Available in multiple denominations</p>
                      </div>
                      <div className="flex items-start">
                        <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                        <p className="text-sm">Valid for up to 3 years</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => handleApplyNow('SBI Gift Card')} className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* How to apply section */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">How to Apply</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-sbi-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold text-lg mb-2">Choose Your Card</h3>
                <p className="text-gray-600">Select the card that best matches your lifestyle and requirements.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-sbi-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold text-lg mb-2">Fill Application</h3>
                <p className="text-gray-600">Complete the online application form with your personal and financial details.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-sbi-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold text-lg mb-2">Get Approved</h3>
                <p className="text-gray-600">Receive your card within 7-10 business days after approval.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cards;
