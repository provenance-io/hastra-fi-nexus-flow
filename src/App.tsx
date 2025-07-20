
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletProvider } from "@/contexts/WalletContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityFeatures from "@/components/AccessibilityFeatures";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import WYLDsPage from "./pages/wYLDs";
import HOMESPage from "./pages/HOMES";
import Learn from "./pages/Learn";
import Earn from "./pages/Earn";
import BrandGuidePage from "./pages/BrandGuide";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <WalletProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-gradient-to-br from-hastra-gradient-start/80 via-hastra-gradient-mid/30 to-hastra-gradient-end/10">
            <AccessibilityFeatures />
            <PerformanceOptimizer />
            <Header />
            <main id="main-content" className="flex-grow" role="main">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/earn" element={<Earn />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/brand-guide" element={<BrandGuidePage />} />
                
                <Route path="/yield" element={<WYLDsPage />} />
                <Route path="/homes" element={<HOMESPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </WalletProvider>
  </QueryClientProvider>
);

export default App;
