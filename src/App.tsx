
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
import PrototypeBanner from "./components/PrototypeBanner";

// Create a prototype QueryClient with no retries for faster feedback
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/accounts" element={<>
            <PrototypeBanner />
            <Accounts />
          </>} />
          <Route path="/cards" element={<>
            <PrototypeBanner />
            <Cards />
          </>} />
          <Route path="/support" element={<>
            <PrototypeBanner />
            <Support />
          </>} />
          <Route path="/personal" element={<>
            <PrototypeBanner />
            <Personal />
          </>} />
          <Route path="/corporate" element={<>
            <PrototypeBanner />
            <Corporate />
          </>} />
          <Route path="/public" element={<>
            <PrototypeBanner />
            <Public />
          </>} />
          <Route path="/investment" element={<>
            <PrototypeBanner />
            <Investment />
          </>} />
          <Route path="/international" element={<>
            <PrototypeBanner />
            <International />
          </>} />
          <Route path="/quantitative" element={<>
            <PrototypeBanner />
            <Quantitative />
          </>} />
          <Route path="*" element={<>
            <PrototypeBanner />
            <NotFound />
          </>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
