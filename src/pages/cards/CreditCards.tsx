
import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, ChevronRight, BadgeCheck, ShieldCheck, PiggyBank, TrendingUp } from "lucide-react";
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const CreditCards = () => {
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
        {/* Breadcrumb */}
        <div className="bg-gray-100 py-2 border-b border-gray-200">
          <div className="container">
            <div className="flex items-center text-sm">
              <Link to="/" className="text-sbi-blue hover:underline">Home</Link>
              <ChevronRight size={14} className="mx-1" />
              <Link to="/cards" className="text-sbi-blue hover:underline">Cards</Link>
              <ChevronRight size={14} className="mx-1" />
              <span>Credit Cards</span>
            </div>
          </div>
        </div>
        
        {/* Page Header */}
        <div className="bg-sbi-blue text-white py-8">
          <div className="container">
            <div className="flex items-center">
              <CreditCard className="h-12 w-12 mr-4" />
              <div>
                <h1 className="text-3xl font-bold">Credit Cards</h1>
                <p className="opacity-90 mt-1">Find the perfect card for your lifestyle</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card Types */}
        <div className="container py-8">
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreditCards;
