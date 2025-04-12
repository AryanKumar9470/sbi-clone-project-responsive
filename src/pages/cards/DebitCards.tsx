
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, ChevronRight, BadgeCheck, ShieldCheck, Globe } from "lucide-react";
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const DebitCards = () => {
  const { toast } = useToast();

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
              <span>Debit Cards</span>
            </div>
          </div>
        </div>
        
        {/* Page Header */}
        <div className="bg-sbi-blue text-white py-8">
          <div className="container">
            <div className="flex items-center">
              <CreditCard className="h-12 w-12 mr-4" />
              <div>
                <h1 className="text-3xl font-bold">Debit Cards</h1>
                <p className="opacity-90 mt-1">Access your account with ease and security</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card Types */}
        <div className="container py-8">
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
                  <div className="flex items-start">
                    <Globe className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                    <p className="text-sm">No foreign exchange markup fees</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <div>
                    <p className="text-xs text-muted-foreground">Annual Fee</p>
                    <p className="font-medium">₹299</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Daily Limit</p>
                    <p className="font-medium">₹1,00,000</p>
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
                  <div className="flex items-start">
                    <ShieldCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                    <p className="text-sm">Enhanced security features</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <div>
                    <p className="text-xs text-muted-foreground">Annual Fee</p>
                    <p className="font-medium">₹150</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Daily Limit</p>
                    <p className="font-medium">₹50,000</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleApplyNow('SBI Classic Debit Card')} className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CreditCard className="h-8 w-8 text-sbi-blue" />
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded">Premium</span>
                </div>
                <CardTitle>SBI Platinum Debit Card</CardTitle>
                <CardDescription>Exclusive privileges for premium customers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                    <p className="text-sm">Higher transaction and withdrawal limits</p>
                  </div>
                  <div className="flex items-start">
                    <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                    <p className="text-sm">Airport lounge access in India</p>
                  </div>
                  <div className="flex items-start">
                    <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                    <p className="text-sm">Insurance coverage up to ₹2 lakhs</p>
                  </div>
                  <div className="flex items-start">
                    <ShieldCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                    <p className="text-sm">Advanced fraud protection</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <div>
                    <p className="text-xs text-muted-foreground">Annual Fee</p>
                    <p className="font-medium">₹599</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Daily Limit</p>
                    <p className="font-medium">₹2,00,000</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleApplyNow('SBI Platinum Debit Card')} className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DebitCards;
