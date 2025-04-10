
import { useState } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  return (
    <header className="w-full">
      {/* Top navigation bar */}
      <div className="bg-gray-100 py-1 border-b border-gray-300">
        <div className="container flex justify-between items-center">
          <div className="hidden sm:flex space-x-1">
            <a href="#" className="top-nav-link">Personal Banking</a>
            <a href="#" className="top-nav-link">Corporate Banking</a>
            <a href="#" className="top-nav-link">NRI Banking</a>
            <a href="#" className="top-nav-link">About Us</a>
          </div>
          <div className="hidden sm:flex space-x-1">
            <a href="#" className="top-nav-link">Contact</a>
            <a href="#" className="top-nav-link">Help</a>
            <a href="#" className="top-nav-link">Sitemap</a>
          </div>
          {/* Only shown on mobile */}
          <button 
            className="sm:hidden text-sbi-blue p-1"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Logo and search bar */}
      <div className="bg-white py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="mr-4">
              <img 
                src="https://via.placeholder.com/150x50?text=SBI+Logo" 
                alt="State Bank of India" 
                className="h-10"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md ml-auto">
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full border border-gray-300 rounded py-1 px-3 pr-10"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                <Search size={16} />
              </button>
            </div>
            <select className="border border-gray-300 rounded py-1 px-3">
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="bg-sbi-blue">
        <div className="container">
          <nav className="hidden md:flex">
            <a href="#" className="main-nav-link font-medium">Home</a>
            <a href="#" className="main-nav-link font-medium">Accounts</a>
            <a href="#" className="main-nav-link font-medium">Cards</a>
            <a href="#" className="main-nav-link font-medium">Loans</a>
            <a href="#" className="main-nav-link font-medium">Investments</a>
            <a href="#" className="main-nav-link font-medium">Services</a>
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-50">
          <div className="py-2 px-4 flex items-center border-b">
            <input 
              type="text" 
              placeholder="Search..." 
              className="flex-1 border border-gray-300 rounded py-1 px-3"
            />
            <button className="ml-2 text-gray-500">
              <Search size={16} />
            </button>
          </div>
          <nav className="py-2">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Home</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Personal Banking</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Corporate Banking</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">NRI Banking</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Accounts</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Cards</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Loans</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Investments</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Services</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">About Us</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Contact</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Help</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
