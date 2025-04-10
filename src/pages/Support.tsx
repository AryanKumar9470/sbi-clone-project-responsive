
import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, MessageCircle, PhoneCall, Mail, FileQuestion, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      toast({
        title: "Search Initiated",
        description: `Searching for: "${searchQuery}"`,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && subject && message) {
      toast({
        title: "Support Request Submitted",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      toast({
        title: "Incomplete Form",
        description: "Please fill out all fields.",
        variant: "destructive",
      });
    }
  };

  // FAQ data
  const faqItems = [
    {
      question: "How do I reset my internet banking password?",
      answer: "To reset your password, visit the login page and click on 'Forgot Password'. Follow the instructions to verify your identity and set a new password. You'll need your registered mobile number to receive an OTP."
    },
    {
      question: "How can I apply for a new debit card?",
      answer: "You can apply for a new debit card through your internet banking account under the 'Cards' section, or visit your nearest SBI branch with your account details and identification documents."
    },
    {
      question: "What should I do if my card is lost or stolen?",
      answer: "Immediately block your card by calling our 24/7 helpline at 1800-111-111. You can also block your card through internet banking or mobile banking app. After blocking, you can request a replacement card."
    },
    {
      question: "How can I update my mobile number or email address?",
      answer: "For updating contact details, you can visit your nearest SBI branch with your ID proof and account details. Alternatively, if you have access to internet banking, you can update your email address online."
    },
    {
      question: "Are international transactions enabled on my debit card by default?",
      answer: "No, international transactions are not enabled by default. You need to specifically request for international usage activation through your internet banking account or by visiting your branch."
    },
    {
      question: "What are the charges for NEFT/RTGS/IMPS transactions?",
      answer: "NEFT transactions are free when done through internet or mobile banking. RTGS transactions below ₹2 lakhs have a small fee. IMPS transactions have nominal charges based on the transaction amount. Check our website for the latest fee structure."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-sbi-blue py-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Customer Support Center</h1>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              We're here to help. Find answers, get support, or contact our team.
            </p>
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSearch} className="flex gap-2">
                <Input 
                  type="search"
                  placeholder="Search for help topics..." 
                  className="bg-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Support options */}
        <div className="container mx-auto py-12 px-4">
          <h2 className="text-2xl font-bold text-center mb-8">How Can We Help You?</h2>
          
          <Tabs defaultValue="faq" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="faq">
                <FileQuestion className="h-4 w-4 mr-2" />
                Frequently Asked Questions
              </TabsTrigger>
              <TabsTrigger value="contact">
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact Us
              </TabsTrigger>
              <TabsTrigger value="status">
                <Clock className="h-4 w-4 mr-2" />
                Check Request Status
              </TabsTrigger>
            </TabsList>
            
            {/* FAQ Tab */}
            <TabsContent value="faq">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>
                    Find quick answers to common questions about our banking services.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    Can't find what you're looking for? Contact our support team.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Contact Us Tab */}
            <TabsContent value="contact">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <PhoneCall className="h-6 w-6 text-sbi-blue mb-2" />
                    <CardTitle>Call Us</CardTitle>
                    <CardDescription>
                      Speak directly with our customer service representatives
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p><strong>24/7 Helpline:</strong> 1800-111-111 (Toll-free)</p>
                      <p><strong>International:</strong> +91-80-2659-9990</p>
                      <p><strong>Card Related:</strong> 1800-425-3800</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <Mail className="h-6 w-6 text-sbi-blue mb-2" />
                    <CardTitle>Email Us</CardTitle>
                    <CardDescription>
                      Send us your queries, we'll respond within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p><strong>General Queries:</strong> customer.care@sbi.co.in</p>
                    <p><strong>Internet Banking:</strong> onlinesbi@sbi.co.in</p>
                    <p><strong>Card Support:</strong> cardservices@sbi.co.in</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <MessageCircle className="h-6 w-6 text-sbi-blue mb-2" />
                    <CardTitle>Visit Branch</CardTitle>
                    <CardDescription>
                      Visit your nearest SBI branch for in-person assistance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">Find your nearest branch:</p>
                    <Button variant="outline" className="w-full" onClick={() => window.open('/branch-locator', '_blank')}>
                      Branch Locator
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                        <Input 
                          id="name" 
                          placeholder="Enter your name" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Enter your email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Input 
                        id="subject" 
                        placeholder="What is your query about?" 
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea 
                        id="message" 
                        placeholder="Describe your issue in detail" 
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSubmit} className="w-full">Submit Request</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Request Status Tab */}
            <TabsContent value="status">
              <Card>
                <CardHeader>
                  <CardTitle>Check Request Status</CardTitle>
                  <CardDescription>
                    Track the status of your previously submitted support requests
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="reference" className="text-sm font-medium">Reference Number</label>
                      <div className="flex gap-2">
                        <Input id="reference" placeholder="Enter your reference number" className="flex-1" />
                        <Button>Track</Button>
                      </div>
                    </div>
                    
                    <div className="bg-gray-100 p-4 rounded-md">
                      <p className="text-center text-muted-foreground">
                        Enter your reference number to check the status of your request
                      </p>
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="font-medium mb-4">Recent Requests</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white border rounded-md">
                          <div>
                            <p className="font-medium">Card Replacement</p>
                            <p className="text-sm text-muted-foreground">Ref: SBI45678</p>
                          </div>
                          <div className="flex items-center">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              Completed
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white border rounded-md">
                          <div>
                            <p className="font-medium">Account Statement Query</p>
                            <p className="text-sm text-muted-foreground">Ref: SBI78901</p>
                          </div>
                          <div className="flex items-center">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              <Clock className="h-3 w-3 mr-1" />
                              In Progress
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Contact Information Section */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Other Ways to Reach Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Social Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">f</div>
                      <p>@StateBankOfIndia</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded-full bg-sky-500 flex items-center justify-center text-white">t</div>
                      <p>@TheOfficialSBI</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center text-white">y</div>
                      <p>SBI Official</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Banking Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p>Monday - Friday:</p>
                      <p>10:00 AM - 4:00 PM</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Saturday:</p>
                      <p>10:00 AM - 2:00 PM</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Sunday:</p>
                      <p>Closed</p>
                    </div>
                    <div className="mt-4 pt-2 border-t">
                      <p className="text-sm">* Second and fourth Saturday of every month are bank holidays.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Head Office</CardTitle>
                </CardHeader>
                <CardContent>
                  <address className="not-italic">
                    <p>State Bank of India</p>
                    <p>Central Office</p>
                    <p>State Bank Bhavan</p>
                    <p>Madame Cama Road</p>
                    <p>Mumbai 400 021</p>
                    <p>India</p>
                  </address>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
