
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
