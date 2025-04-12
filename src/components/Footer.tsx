
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Our Story</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Leadership Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Investor Relations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Community Impact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Banking</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Personal Banking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Corporate Banking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">International Banking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Expat Banking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Rural Banking</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Accounts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Cards</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Loans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Deposits</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Investments</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Youtube size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Linkedin size={20} /></a>
            </div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="text-gray-300">1-800-WEALTH-WAVE (1-800-932-5849)</p>
            <p className="text-gray-300">contact@wealthwave.com</p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} Wealth Wave Financial Services. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap space-x-4">
              <a href="#" className="text-sm text-gray-400 hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-gray-300">Terms of Use</a>
              <a href="#" className="text-sm text-gray-400 hover:text-gray-300">Disclaimer</a>
              <a href="#" className="text-sm text-gray-400 hover:text-gray-300">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
