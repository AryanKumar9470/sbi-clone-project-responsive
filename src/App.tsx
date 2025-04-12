
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Accounts from "./pages/Accounts";
import Cards from "./pages/Cards";
import Support from "./pages/Support";
import Personal from "./pages/Personal";
import Corporate from "./pages/Corporate";
import Public from "./pages/Public";
import Investment from "./pages/Investment";
import International from "./pages/International";
import Quantitative from "./pages/Quantitative";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

// Account subpages
import SavingsAccounts from "./pages/accounts/Savings";
import CurrentAccounts from "./pages/accounts/Current";
import SalaryAccounts from "./pages/accounts/Salary";
import WealthManagement from "./pages/accounts/WealthManagement";

// Cards subpages
import CreditCards from "./pages/cards/CreditCards";
import DebitCards from "./pages/cards/DebitCards";
import PrepaidCards from "./pages/cards/PrepaidCards";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/accounts" element={<ProtectedRoute><Accounts /></ProtectedRoute>} />
            <Route path="/cards" element={<ProtectedRoute><Cards /></ProtectedRoute>} />
            <Route path="/support" element={<Support />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/public" element={<Public />} />
            <Route path="/investment" element={<ProtectedRoute><Investment /></ProtectedRoute>} />
            <Route path="/international" element={<ProtectedRoute><International /></ProtectedRoute>} />
            <Route path="/quantitative" element={<ProtectedRoute><Quantitative /></ProtectedRoute>} />
            
            {/* Account subpages */}
            <Route path="/accounts/savings" element={<ProtectedRoute><SavingsAccounts /></ProtectedRoute>} />
            <Route path="/accounts/current" element={<ProtectedRoute><CurrentAccounts /></ProtectedRoute>} />
            <Route path="/accounts/salary" element={<ProtectedRoute><SalaryAccounts /></ProtectedRoute>} />
            <Route path="/accounts/wealth-management" element={<ProtectedRoute><WealthManagement /></ProtectedRoute>} />
            
            {/* Cards subpages */}
            <Route path="/cards/credit-cards" element={<ProtectedRoute><CreditCards /></ProtectedRoute>} />
            <Route path="/cards/debit-cards" element={<ProtectedRoute><DebitCards /></ProtectedRoute>} />
            <Route path="/cards/prepaid-cards" element={<ProtectedRoute><PrepaidCards /></ProtectedRoute>} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
