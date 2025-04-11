
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/support" element={<Support />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/public" element={<Public />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/international" element={<International />} />
          <Route path="/quantitative" element={<Quantitative />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
