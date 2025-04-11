
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart as AreaChartIcon, BarChart as BarChartIcon, LineChart as LineChartIcon, PieChart as PieChartIcon, Clock, Database, FileCog, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Legend,
  Bar,
  Area,
  LineChart
} from 'recharts';

const data = [
  { name: 'Jan', value: 400, profit: 240, risk: 20 },
  { name: 'Feb', value: 300, profit: 138, risk: 18 },
  { name: 'Mar', value: 520, profit: 290, risk: 25 },
  { name: 'Apr', value: 270, profit: 148, risk: 15 },
  { name: 'May', value: 500, profit: 300, risk: 22 },
  { name: 'Jun', value: 650, profit: 380, risk: 28 },
  { name: 'Jul', value: 480, profit: 270, risk: 20 },
];

const Quantitative = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="bg-black text-white py-16">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Quantitative Investment Solutions</h1>
              <p className="text-lg opacity-90 mb-8">Advanced data-driven investment strategies using mathematical models, statistical analysis, and computational algorithms.</p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Explore Quantitative Solutions
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container py-10">
          <Tabs defaultValue="strategies" className="w-full">
            <TabsList className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-2">
              <TabsTrigger value="strategies" className="flex items-center">
                <LineChartIcon className="mr-2 h-4 w-4" /> Strategies
              </TabsTrigger>
              <TabsTrigger value="research" className="flex items-center">
                <Brain className="mr-2 h-4 w-4" /> Research
              </TabsTrigger>
              <TabsTrigger value="technology" className="flex items-center">
                <Database className="mr-2 h-4 w-4" /> Technology
              </TabsTrigger>
              <TabsTrigger value="performance" className="flex items-center">
                <AreaChartIcon className="mr-2 h-4 w-4" /> Performance
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="strategies" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Quantitative Investment Strategies</h2>
                  <p className="mb-6">Our quantitative investment approaches utilize mathematical models, statistical analysis, and computational algorithms to identify investment opportunities and execute trades with precision.</p>
                  
                  <div className="space-y-4 mb-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          Algorithmic Trading
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>Computer algorithms execute trades at optimal prices and speeds, capturing market opportunities faster than manual trading.</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <BarChartIcon className="h-4 w-4 mr-2" />
                          Statistical Arbitrage
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>Exploiting price inefficiencies between related securities through mathematical modeling and quick execution.</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <PieChartIcon className="h-4 w-4 mr-2" />
                          Factor-Based Investing
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>Targeting specific return drivers like value, momentum, quality, and low volatility across diversified portfolios.</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <FileCog className="h-4 w-4 mr-2" />
                          Machine Learning Models
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>Advanced algorithms that learn from market data to identify patterns and make predictive investment decisions.</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    Schedule Strategy Consultation
                  </Button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Performance Comparison</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="value" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="profit" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="risk" stroke="#ff7300" />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="outline" size="sm">View Detailed Analytics</Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 text-white p-8 rounded-lg">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Risk Management</h3>
                    <p className="text-sm opacity-80 mb-4">Our quantitative models incorporate sophisticated risk management techniques to protect your capital during market volatility.</p>
                    <ul className="text-sm space-y-2 opacity-80">
                      <li>• Dynamic position sizing</li>
                      <li>• Correlation analysis</li>
                      <li>• Volatility forecasting</li>
                      <li>• Drawdown controls</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Market Neutrality</h3>
                    <p className="text-sm opacity-80 mb-4">Deploy strategies designed to generate returns regardless of broader market direction through balanced long and short positions.</p>
                    <ul className="text-sm space-y-2 opacity-80">
                      <li>• Long-short equity</li>
                      <li>• Beta neutralization</li>
                      <li>• Sector balancing</li>
                      <li>• Pair trading</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Systematic Execution</h3>
                    <p className="text-sm opacity-80 mb-4">Eliminate emotional biases from investment decisions through disciplined, rules-based trading systems.</p>
                    <ul className="text-sm space-y-2 opacity-80">
                      <li>• Trend following models</li>
                      <li>• Mean reversion strategies</li>
                      <li>• Breakout detection</li>
                      <li>• Multi-factor ranking systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="research">
              <h2 className="text-2xl font-semibold mb-4">Quantitative Research</h2>
              <p className="mb-8">Our team of PhDs, mathematicians, and financial experts conduct cutting-edge research to develop innovative investment strategies.</p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <Card>
                  <CardHeader>
                    <CardTitle>Research Focus Areas</CardTitle>
                    <CardDescription>Current areas of investigation and development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-1 h-4 bg-yellow-500 mr-2"></div>
                        <span>Alternative data integration</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1 h-4 bg-yellow-500 mr-2"></div>
                        <span>Natural language processing applications</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1 h-4 bg-yellow-500 mr-2"></div>
                        <span>Reinforcement learning trading systems</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1 h-4 bg-yellow-500 mr-2"></div>
                        <span>Quantum computing for portfolio optimization</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1 h-4 bg-yellow-500 mr-2"></div>
                        <span>High-frequency market microstructure</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Research Insights</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Academic Partnerships</CardTitle>
                    <CardDescription>Collaborations with leading institutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-1">MIT Financial Engineering Lab</h4>
                        <p className="text-sm text-gray-600">Researching advanced portfolio construction techniques.</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Stanford AI in Finance Initiative</h4>
                        <p className="text-sm text-gray-600">Developing next-generation machine learning models.</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Princeton Quant Trading Group</h4>
                        <p className="text-sm text-gray-600">Optimizing execution algorithms for minimal market impact.</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Oxford Mathematical Finance</h4>
                        <p className="text-sm text-gray-600">Stochastic modeling of financial markets.</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Partnership Details</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Research Publications</CardTitle>
                    <CardDescription>Recent papers and findings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-1">Factor Persistence in Global Markets</h4>
                        <p className="text-sm text-gray-600">Published in Journal of Quantitative Finance, 2023</p>
                        <Button variant="link" className="p-0 h-auto text-yellow-600">Read Paper</Button>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Deep Learning in Asset Pricing</h4>
                        <p className="text-sm text-gray-600">Published in Algorithmic Finance Review, 2023</p>
                        <Button variant="link" className="p-0 h-auto text-yellow-600">Read Paper</Button>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">ESG Signals in Quantitative Portfolios</h4>
                        <p className="text-sm text-gray-600">Published in Sustainable Investing Journal, 2022</p>
                        <Button variant="link" className="p-0 h-auto text-yellow-600">Read Paper</Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">All Publications</Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl font-semibold mb-4">Research Symposium</h3>
                <p className="mb-6 max-w-2xl mx-auto">Join our annual Quantitative Investment Research Symposium featuring presentations from our research team and guest speakers from academia and industry.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Register for Next Symposium</Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white/10">View Past Proceedings</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="technology">
              <h2 className="text-2xl font-semibold mb-4">Quantitative Technology</h2>
              <p className="mb-8">Our proprietary technology infrastructure powers sophisticated investment strategies with speed, reliability, and security.</p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Technology Infrastructure</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-gray-900 flex items-center justify-center text-white mr-3 mt-1">
                        <Database className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Big Data Processing</h4>
                        <p className="text-sm text-gray-600">High-performance computing clusters for massive dataset analysis with petabyte-scale storage capabilities.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-gray-900 flex items-center justify-center text-white mr-3 mt-1">
                        <Brain className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">AI & Machine Learning</h4>
                        <p className="text-sm text-gray-600">Sophisticated neural networks and deep learning models trained on vast financial datasets for pattern recognition.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-gray-900 flex items-center justify-center text-white mr-3 mt-1">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Ultra-Low Latency</h4>
                        <p className="text-sm text-gray-600">Optimized execution systems with microsecond response times and direct market connectivity.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-gray-900 flex items-center justify-center text-white mr-3 mt-1">
                        <FileCog className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Simulation Environment</h4>
                        <p className="text-sm text-gray-600">Advanced backtesting frameworks with historical market reconstruction for strategy validation.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Software & Applications</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="border-0 shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">QuantMatrix</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs">Proprietary portfolio optimization engine with multi-factor risk modeling.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-0 shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">AlphaGen</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs">Signal generation platform integrating alternative and traditional data sources.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-0 shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">RiskLens</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs">Real-time risk monitoring and stress testing framework with scenario analysis.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-0 shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">ExecSmart</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs">Intelligent trade execution system with adaptive algorithms and venue analysis.</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mt-6">
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Request Technology Demo</Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Data Sources</h3>
                <p className="mb-6">We integrate diverse data from multiple sources to generate unique investment insights.</p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-medium mb-2">Market Data</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Real-time and historical price feeds</li>
                      <li>• Order book depth and liquidity metrics</li>
                      <li>• Cross-asset correlations and volatility</li>
                      <li>• Exchange-specific microstructure data</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-medium mb-2">Alternative Data</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Satellite imagery and geospatial analytics</li>
                      <li>• Consumer spending patterns</li>
                      <li>• Social media sentiment analysis</li>
                      <li>• Supply chain monitoring signals</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-medium mb-2">Fundamental Data</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Financial statement analysis</li>
                      <li>• Corporate event data</li>
                      <li>• ESG metrics and scoring</li>
                      <li>• Global macroeconomic indicators</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="performance">
              <h2 className="text-2xl font-semibold mb-4">Performance & Results</h2>
              <p className="mb-8">Track record of our quantitative investment strategies across different market conditions.</p>
              
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <p className="text-sm text-gray-600 mb-1">Annualized Return</p>
                  <p className="text-3xl font-bold text-yellow-600">14.2%</p>
                  <p className="text-xs text-gray-500">5-year average</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <p className="text-sm text-gray-600 mb-1">Sharpe Ratio</p>
                  <p className="text-3xl font-bold text-yellow-600">1.8</p>
                  <p className="text-xs text-gray-500">Risk-adjusted return</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <p className="text-sm text-gray-600 mb-1">Max Drawdown</p>
                  <p className="text-3xl font-bold text-yellow-600">-8.5%</p>
                  <p className="text-xs text-gray-500">Historical maximum</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <p className="text-sm text-gray-600 mb-1">Alpha</p>
                  <p className="text-3xl font-bold text-yellow-600">5.2%</p>
                  <p className="text-xs text-gray-500">vs. benchmark</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-4">Strategy Performance</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { month: 'Jan 2022', quant: 100, market: 100 },
                        { month: 'Feb 2022', quant: 103, market: 99 },
                        { month: 'Mar 2022', quant: 107, market: 96 },
                        { month: 'Apr 2022', quant: 112, market: 98 },
                        { month: 'May 2022', quant: 109, market: 95 },
                        { month: 'Jun 2022', quant: 114, market: 94 },
                        { month: 'Jul 2022', quant: 118, market: 96 },
                        { month: 'Aug 2022', quant: 122, market: 99 },
                        { month: 'Sep 2022', quant: 119, market: 97 },
                        { month: 'Oct 2022', quant: 124, market: 100 },
                        { month: 'Nov 2022', quant: 129, market: 102 },
                        { month: 'Dec 2022', quant: 134, market: 105 },
                        { month: 'Jan 2023', quant: 138, market: 103 },
                        { month: 'Feb 2023', quant: 142, market: 107 },
                        { month: 'Mar 2023', quant: 146, market: 109 },
                      ]}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="quant" name="Quant Strategy" stroke="#FFD700" strokeWidth={2} />
                      <Line type="monotone" dataKey="market" name="Market Index" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Strategy Breakdown</CardTitle>
                    <CardDescription>Performance by investment approach</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Trend Following</span>
                        <span className="text-green-600">+16.8%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Statistical Arbitrage</span>
                        <span className="text-green-600">+12.3%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '52%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Factor-Based</span>
                        <span className="text-green-600">+14.5%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '61%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Machine Learning</span>
                        <span className="text-green-600">+18.2%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '73%' }}></div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View Detailed Performance</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Client Testimonials</CardTitle>
                    <CardDescription>What our clients say about our quant solutions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="italic text-sm mb-2">"The risk-adjusted returns from Wealth Wave's quantitative strategies have consistently outperformed our traditional investment approaches."</p>
                      <p className="text-xs font-medium">- James H., Chief Investment Officer, Global Pension Fund</p>
                    </div>
                    
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="italic text-sm mb-2">"Their proprietary technology and research have provided us with a genuine edge in markets where alpha is increasingly difficult to generate."</p>
                      <p className="text-xs font-medium">- Sarah L., Portfolio Manager, Asset Management Firm</p>
                    </div>
                    
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="italic text-sm mb-2">"The transparency and risk controls in Wealth Wave's quantitative strategies gave us confidence during volatile market conditions."</p>
                      <p className="text-xs font-medium">- Michael R., Director of Investments, University Endowment</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                      Schedule Strategy Consultation
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quantitative;
