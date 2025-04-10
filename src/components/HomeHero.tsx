
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
    <div className="bg-gray-100 py-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Login Form */}
          <div className="bg-white shadow-md rounded-md p-4">
            <div className="flex bg-sbi-blue text-white font-semibold p-2 mb-4 rounded-t-md">
              <button className="flex-1 py-1 px-2 focus:outline-none border-r border-white/30">
                PERSONAL
              </button>
              <button className="flex-1 py-1 px-2 focus:outline-none opacity-80 hover:opacity-100">
                CORPORATE
              </button>
            </div>
            
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Username"
                  className="login-input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="login-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center mb-4">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm">Remember Username</label>
              </div>
              <div className="flex justify-between items-center">
                <Button type="submit" className="bg-sbi-blue text-white hover:bg-sbi-lightBlue">
                  LOGIN
                </Button>
                <a href="#" className="text-sm text-sbi-blue hover:underline">Forgot Password?</a>
              </div>
            </form>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between">
                <a href="#" className="text-sm text-sbi-blue hover:underline">New User? Register</a>
                <a href="#" className="text-sm text-sbi-blue hover:underline">Login with OTP</a>
              </div>
            </div>
          </div>
          
          {/* Hero Banners */}
          <div className="md:col-span-2 bg-white shadow-md rounded-md overflow-hidden">
            <div className="relative h-[280px] md:h-full">
              <div className="absolute inset-0 flex items-center bg-sbi-blue text-white p-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Welcome to Online SBI</h2>
                  <p className="mb-6 max-w-lg">Your secure and convenient banking solution. Access your accounts, make transactions, and manage your finances with ease.</p>
                  <Link to="/explore" className="inline-flex items-center bg-white text-sbi-blue px-4 py-2 rounded font-medium hover:bg-gray-100">
                    Explore Services <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
          <div className="feature-card flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-sbi-blue text-white mb-2">A</div>
            <span className="text-sm">Account Statement</span>
          </div>
          <div className="feature-card flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-sbi-blue text-white mb-2">T</div>
            <span className="text-sm">Fund Transfer</span>
          </div>
          <div className="feature-card flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-sbi-blue text-white mb-2">B</div>
            <span className="text-sm">Pay Bills</span>
          </div>
          <div className="feature-card flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-sbi-blue text-white mb-2">C</div>
            <span className="text-sm">Credit Cards</span>
          </div>
          <div className="feature-card flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-sbi-blue text-white mb-2">D</div>
            <span className="text-sm">Deposits</span>
          </div>
          <div className="feature-card flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-sbi-blue text-white mb-2">E</div>
            <span className="text-sm">e-Services</span>
          </div>
        </div>
        
        {/* Security Warning */}
        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Security Alert:</strong> SBI never asks for your personal information, password, OTP via email/SMS/phone call.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
