
import { useState, useEffect } from 'react';
import { BellRing, Info } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const newsData = [
  {
    id: 1,
    title: "SBI reduces MCLR by 5-10 basis points across tenors",
    date: "2025-04-09",
    category: "updates"
  },
  {
    id: 2,
    title: "New mobile banking features released",
    date: "2025-04-07",
    category: "updates"
  },
  {
    id: 3,
    title: "Upcoming maintenance on 15th April from 2-4 AM",
    date: "2025-04-06",
    category: "updates"
  },
  {
    id: 4,
    title: "Beware of phishing attempts requesting bank details",
    date: "2025-04-08",
    category: "alerts"
  },
  {
    id: 5,
    title: "Important: Update your mobile number by April 30th",
    date: "2025-04-05",
    category: "alerts"
  },
  {
    id: 6,
    title: "Warning: Fraudsters posing as bank officials",
    date: "2025-04-04",
    category: "alerts"
  },
  {
    id: 7,
    title: "Special FD rates for senior citizens",
    date: "2025-04-03",
    category: "offers"
  },
  {
    id: 8,
    title: "Zero processing fee on home loans till April 30th",
    date: "2025-04-02",
    category: "offers"
  },
  {
    id: 9,
    title: "Earn 5X reward points on shopping with SBI cards",
    date: "2025-04-01",
    category: "offers"
  }
];

const NewsSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    }) + ' ' + date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true
    });
  };
  
  return (
    <div className="bg-gray-100 py-12">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="flex items-center bg-sbi-blue text-white p-4">
                <BellRing className="mr-2" size={20} />
                <h2 className="text-xl font-semibold">Latest Updates</h2>
              </div>
              
              <Tabs defaultValue="updates" className="p-4">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="updates">Updates</TabsTrigger>
                  <TabsTrigger value="alerts">Alerts</TabsTrigger>
                  <TabsTrigger value="offers">Offers</TabsTrigger>
                </TabsList>
                
                <TabsContent value="updates" className="border rounded-md">
                  {newsData
                    .filter(item => item.category === 'updates')
                    .map(news => (
                      <div key={news.id} className="news-item">
                        <h3 className="font-medium">{news.title}</h3>
                        <div className="text-sm text-gray-500 mt-1">
                          {new Date(news.date).toLocaleDateString('en-US', { 
                            day: 'numeric', 
                            month: 'short', 
                            year: 'numeric' 
                          })}
                        </div>
                      </div>
                    ))}
                </TabsContent>
                
                <TabsContent value="alerts" className="border rounded-md">
                  {newsData
                    .filter(item => item.category === 'alerts')
                    .map(news => (
                      <div key={news.id} className="news-item">
                        <h3 className="font-medium">{news.title}</h3>
                        <div className="text-sm text-gray-500 mt-1">
                          {new Date(news.date).toLocaleDateString('en-US', { 
                            day: 'numeric', 
                            month: 'short', 
                            year: 'numeric' 
                          })}
                        </div>
                      </div>
                    ))}
                </TabsContent>
                
                <TabsContent value="offers" className="border rounded-md">
                  {newsData
                    .filter(item => item.category === 'offers')
                    .map(news => (
                      <div key={news.id} className="news-item">
                        <h3 className="font-medium">{news.title}</h3>
                        <div className="text-sm text-gray-500 mt-1">
                          {new Date(news.date).toLocaleDateString('en-US', { 
                            day: 'numeric', 
                            month: 'short', 
                            year: 'numeric' 
                          })}
                        </div>
                      </div>
                    ))}
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="flex items-center bg-sbi-blue text-white p-4">
                <Info className="mr-2" size={20} />
                <h2 className="text-xl font-semibold">Quick Information</h2>
              </div>
              
              <div className="p-4">
                <div className="text-center mb-4 p-3 border-b">
                  <div className="text-sm text-gray-500">Current Date & Time</div>
                  <div className="font-semibold">{formatDate(currentTime)}</div>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Important Links</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-sbi-blue hover:underline">Download Forms</a></li>
                    <li><a href="#" className="text-sbi-blue hover:underline">Interest Rates</a></li>
                    <li><a href="#" className="text-sbi-blue hover:underline">Service Charges</a></li>
                    <li><a href="#" className="text-sbi-blue hover:underline">Locate ATM/Branch</a></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-md">
                  <h3 className="font-semibold mb-2">Customer Care</h3>
                  <p className="text-gray-600 mb-2">24x7 Helpline</p>
                  <p className="font-bold">1800-425-3800</p>
                  <p className="text-sm text-gray-500 mt-2">Toll-free from any landline or mobile in India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
