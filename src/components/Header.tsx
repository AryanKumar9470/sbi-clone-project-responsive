
import { useState } from 'react';
import { Menu, X, ChevronDown, Search, Home, CreditCard, Briefcase, Clipboard, ShieldCheck, Headphones, HelpCircle, User, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  return (
    <header className="w-full">
      {/* Top navigation bar */}
      <div className="bg-gray-100 py-1 border-b border-gray-300">
        <div className="container flex justify-between items-center">
          <div className="hidden sm:flex space-x-1">
            <Link to="/personal" className="top-nav-link flex items-center"><User size={14} className="mr-1" /> Personal Banking</Link>
            <Link to="/corporate" className="top-nav-link flex items-center"><Briefcase size={14} className="mr-1" /> Corporate Banking</Link>
            <Link to="/nri" className="top-nav-link flex items-center"><Globe size={14} className="mr-1" /> NRI Banking</Link>
            <Link to="/about" className="top-nav-link flex items-center">About Us</Link>
          </div>
          <div className="hidden sm:flex space-x-1">
            <Link to="/contact" className="top-nav-link flex items-center">Contact</Link>
            <Link to="/help" className="top-nav-link flex items-center"><HelpCircle size={14} className="mr-1" /> Help</Link>
            <Link to="/sitemap" className="top-nav-link flex items-center">Sitemap</Link>
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
          {!isMobile ? (
            <NavigationMenu className="w-full">
              <NavigationMenuList className="flex justify-start w-full gap-0 h-auto">
                <NavigationMenuItem>
                  <Link to="/">
                    <div className="main-nav-link flex items-center">
                      <Home size={16} className="mr-2" />
                      <span>Home</span>
                    </div>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="main-nav-link px-0 bg-transparent hover:bg-transparent data-[state=open]:bg-sbi-lightBlue data-[state=open]:text-white h-auto">
                    <div className="flex items-center">
                      <Clipboard size={16} className="mr-2" />
                      <span>Accounts</span>
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white shadow-md rounded-b-md">
                    <ul className="grid w-[300px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/accounts/savings" className="block px-3 py-2 hover:bg-gray-100 rounded">Savings Accounts</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/accounts/current" className="block px-3 py-2 hover:bg-gray-100 rounded">Current Accounts</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/accounts/salary" className="block px-3 py-2 hover:bg-gray-100 rounded">Salary Accounts</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="main-nav-link px-0 bg-transparent hover:bg-transparent data-[state=open]:bg-sbi-lightBlue data-[state=open]:text-white h-auto">
                    <div className="flex items-center">
                      <CreditCard size={16} className="mr-2" />
                      <span>Cards</span>
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white shadow-md rounded-b-md">
                    <ul className="grid w-[300px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/cards/credit-cards" className="block px-3 py-2 hover:bg-gray-100 rounded">Credit Cards</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/cards/debit-cards" className="block px-3 py-2 hover:bg-gray-100 rounded">Debit Cards</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/cards/prepaid-cards" className="block px-3 py-2 hover:bg-gray-100 rounded">Prepaid Cards</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="main-nav-link px-0 bg-transparent hover:bg-transparent data-[state=open]:bg-sbi-lightBlue data-[state=open]:text-white h-auto">
                    <div className="flex items-center">
                      <Home size={16} className="mr-2" />
                      <span>Loans</span>
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white shadow-md rounded-b-md">
                    <ul className="grid w-[300px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/loans/home-loans" className="block px-3 py-2 hover:bg-gray-100 rounded">Home Loans</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/loans/personal-loans" className="block px-3 py-2 hover:bg-gray-100 rounded">Personal Loans</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/loans/car-loans" className="block px-3 py-2 hover:bg-gray-100 rounded">Car Loans</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="main-nav-link px-0 bg-transparent hover:bg-transparent data-[state=open]:bg-sbi-lightBlue data-[state=open]:text-white h-auto">
                    <div className="flex items-center">
                      <Briefcase size={16} className="mr-2" />
                      <span>Investments</span>
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white shadow-md rounded-b-md">
                    <ul className="grid w-[300px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/investments/mutual-funds" className="block px-3 py-2 hover:bg-gray-100 rounded">Mutual Funds</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/investments/fixed-deposits" className="block px-3 py-2 hover:bg-gray-100 rounded">Fixed Deposits</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/investments/sip" className="block px-3 py-2 hover:bg-gray-100 rounded">SIP Investments</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="main-nav-link px-0 bg-transparent hover:bg-transparent data-[state=open]:bg-sbi-lightBlue data-[state=open]:text-white h-auto">
                    <div className="flex items-center">
                      <ShieldCheck size={16} className="mr-2" />
                      <span>Insurance</span>
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white shadow-md rounded-b-md">
                    <ul className="grid w-[300px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/insurance/life" className="block px-3 py-2 hover:bg-gray-100 rounded">Life Insurance</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/insurance/health" className="block px-3 py-2 hover:bg-gray-100 rounded">Health Insurance</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/insurance/vehicle" className="block px-3 py-2 hover:bg-gray-100 rounded">Vehicle Insurance</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/support">
                    <div className="main-nav-link flex items-center">
                      <Headphones size={16} className="mr-2" />
                      <span>Support</span>
                    </div>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ) : (
            <nav className="flex">
              <Link to="/" className="main-nav-link flex items-center flex-1 justify-center">
                <Home size={16} className="mr-2" />
                <span>Home</span>
              </Link>
              <Link to="/accounts" className="main-nav-link flex items-center flex-1 justify-center">
                <Clipboard size={16} className="mr-2" />
                <span>Accounts</span>
              </Link>
              <Link to="/cards" className="main-nav-link flex items-center flex-1 justify-center">
                <CreditCard size={16} className="mr-2" />
                <span>Cards</span>
              </Link>
              <Link to="/support" className="main-nav-link flex items-center flex-1 justify-center">
                <Headphones size={16} className="mr-2" />
                <span>Support</span>
              </Link>
            </nav>
          )}
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
            <Link to="/" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
              <Home size={16} className="mr-2 text-sbi-blue" /> Home
            </Link>
            <Link to="/personal" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
              <User size={16} className="mr-2 text-sbi-blue" /> Personal Banking
            </Link>
            <Link to="/corporate" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
              <Briefcase size={16} className="mr-2 text-sbi-blue" /> Corporate Banking
            </Link>
            <Link to="/nri" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
              <Globe size={16} className="mr-2 text-sbi-blue" /> NRI Banking
            </Link>
            <Link to="/accounts" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
              <Clipboard size={16} className="mr-2 text-sbi-blue" /> Accounts
            </Link>
            <Link to="/cards" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
              <CreditCard size={16} className="mr-2 text-sbi-blue" /> Cards
            </Link>
            <Link to="/loans" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
              <Home size={16} className="mr-2 text-sbi-blue" /> Loans
            </Link>
            <Link to="/investments" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
              <Briefcase size={16} className="mr-2 text-sbi-blue" /> Investments
            </Link>
            <Link to="/insurance" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
              <ShieldCheck size={16} className="mr-2 text-sbi-blue" /> Insurance
            </Link>
            <Link to="/services" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
              <Headphones size={16} className="mr-2 text-sbi-blue" /> Services
            </Link>
            <Link to="/about" className="block px-4 py-2 hover:bg-gray-100 flex items-center">About Us</Link>
            <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100 flex items-center">Contact</Link>
            <Link to="/help" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
              <HelpCircle size={16} className="mr-2 text-sbi-blue" /> Help
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
