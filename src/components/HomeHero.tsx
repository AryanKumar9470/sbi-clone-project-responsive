
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { AlertCircle, ChevronRight } from 'lucide-react';

const HomeHero = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would connect to the backend
    if (username && password) {
      toast({
        title: "Login Attempt",
        description: "This is a demo. In a real app, this would connect to a backend.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter both username and password",
      });
    }
  };
  
  return (
    <div className="bg-gray-100 py-4 md:py-6">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Login Form */}
          <div className="bg-white shadow-md rounded-md p-3 md:p-4">
            <div className="flex bg-gray-900 text-white font-semibold p-1 md:p-2 mb-3 md:mb-4 rounded-t-md text-sm md:text-base">
              <button className="flex-1 py-1 px-1 md:px-2 focus:outline-none border-r border-white/30">
                PERSONAL
              </button>
              <button className="flex-1 py-1 px-1 md:px-2 focus:outline-none opacity-80 hover:opacity-100">
                CORPORATE
              </button>
            </div>
            
            <form onSubmit={handleLogin} className="text-sm md:text-base">
              <div className="mb-2 md:mb-3">
                <input
                  type="text"
                  placeholder="Username"
                  className="login-input text-sm md:text-base"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-2 md:mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="login-input text-sm md:text-base"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center mb-3 md:mb-4">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-xs md:text-sm">Remember Username</label>
              </div>
              <div className="flex justify-between items-center">
                <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black text-xs md:text-sm py-1 px-2 md:py-2 md:px-4 h-auto">
                  LOGIN
                </Button>
                <a href="#" className="text-xs md:text-sm text-yellow-600 hover:underline">Forgot Password?</a>
              </div>
            </form>
            
            <div className="mt-3 pt-3 md:mt-4 md:pt-4 border-t border-gray-200">
              <div className="flex justify-between text-xs md:text-sm">
                <a href="#" className="text-yellow-600 hover:underline">New User? Register</a>
                <a href="#" className="text-yellow-600 hover:underline">Login with OTP</a>
              </div>
            </div>
          </div>
          
          {/* Hero Banners */}
          <div className="md:col-span-2 bg-white shadow-md rounded-md overflow-hidden">
            <div className="relative h-[200px] sm:h-[240px] md:h-full">
              <div className="absolute inset-0 flex items-center bg-black text-white p-4 md:p-8">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4">Welcome to Wealth Wave</h2>
                  <p className="mb-4 md:mb-6 max-w-lg text-sm sm:text-base">Your secure and sophisticated financial partner. Access personalized wealth management, innovative investment solutions, and comprehensive banking services.</p>
                  <Link to="/explore" className="inline-flex items-center bg-yellow-500 text-black px-3 py-1 md:px-4 md:py-2 rounded font-medium hover:bg-yellow-600 text-sm md:text-base">
                    Explore Services <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mt-4 md:mt-6">
          <div className="feature-card flex flex-col items-center text-center p-2 md:p-4">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-yellow-500 text-black mb-1 md:mb-2">A</div>
            <span className="text-xs md:text-sm">Account Statement</span>
          </div>
          <div className="feature-card flex flex-col items-center text-center p-2 md:p-4">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-yellow-500 text-black mb-1 md:mb-2">T</div>
            <span className="text-xs md:text-sm">Fund Transfer</span>
          </div>
          <div className="feature-card flex flex-col items-center text-center p-2 md:p-4">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-yellow-500 text-black mb-1 md:mb-2">B</div>
            <span className="text-xs md:text-sm">Pay Bills</span>
          </div>
          <div className="feature-card flex flex-col items-center text-center p-2 md:p-4">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-yellow-500 text-black mb-1 md:mb-2">C</div>
            <span className="text-xs md:text-sm">Credit Cards</span>
          </div>
          <div className="feature-card flex flex-col items-center text-center p-2 md:p-4">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-yellow-500 text-black mb-1 md:mb-2">D</div>
            <span className="text-xs md:text-sm">Deposits</span>
          </div>
          <div className="feature-card flex flex-col items-center text-center p-2 md:p-4">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-yellow-500 text-black mb-1 md:mb-2">E</div>
            <span className="text-xs md:text-sm">e-Services</span>
          </div>
        </div>
        
        {/* Security Warning */}
        <div className="mt-4 md:mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-3 md:p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
            </div>
            <div className="ml-2 md:ml-3">
              <p className="text-xs sm:text-sm text-yellow-700">
                <strong>Security Alert:</strong> Wealth Wave never asks for your personal information, password, OTP via email/SMS/phone call.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
