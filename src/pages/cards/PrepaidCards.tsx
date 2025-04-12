
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, ChevronRight, BadgeCheck, ShieldCheck, Plane, Gift } from "lucide-react";
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const PrepaidCards = () => {
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
              <span>Prepaid Cards</span>
            </div>
          </div>
        </div>
        
        {/* Page Header */}
        <div className="bg-sbi-blue text-white py-8">
          <div className="container">
            <div className="flex items-center">
              <CreditCard className="h-12 w-12 mr-4" />
              <div>
                <h1 className="text-3xl font-bold">Prepaid Cards</h1>
                <p className="opacity-90 mt-1">Convenient, secure, and flexible payment options</p>
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
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded">Travel</span>
                </div>
                <CardTitle>SBI Travel Card</CardTitle>
                <CardDescription>Your perfect travel companion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <Plane className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
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
                  <div className="flex items-start">
                    <ShieldCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                    <p className="text-sm">24/7 global customer support</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <div>
                    <p className="text-xs text-muted-foreground">Issuance Fee</p>
                    <p className="font-medium">₹250</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Validity</p>
                    <p className="font-medium">5 Years</p>
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
                    <Gift className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
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
                  <div className="flex items-start">
                    <ShieldCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                    <p className="text-sm">Accepted everywhere Visa is accepted</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <div>
                    <p className="text-xs text-muted-foreground">Issuance Fee</p>
                    <p className="font-medium">₹100</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Validity</p>
                    <p className="font-medium">3 Years</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleApplyNow('SBI Gift Card')} className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CreditCard className="h-8 w-8 text-sbi-blue" />
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">General</span>
                </div>
                <CardTitle>SBI eZ-Pay Card</CardTitle>
                <CardDescription>For everyday shopping and payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                    <p className="text-sm">Easily reloadable</p>
                  </div>
                  <div className="flex items-start">
                    <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                    <p className="text-sm">No KYC required for basic variant</p>
                  </div>
                  <div className="flex items-start">
                    <BadgeCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                    <p className="text-sm">Online and in-store payments</p>
                  </div>
                  <div className="flex items-start">
                    <ShieldCheck className="h-4 w-4 text-sbi-blue mr-2 mt-1" />
                    <p className="text-sm">PIN protection and transaction alerts</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <div>
                    <p className="text-xs text-muted-foreground">Issuance Fee</p>
                    <p className="font-medium">₹99</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Max Load</p>
                    <p className="font-medium">₹10,000</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleApplyNow('SBI eZ-Pay Card')} className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrepaidCards;
