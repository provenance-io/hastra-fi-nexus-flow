
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletProvider } from "@/contexts/WalletContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProvenanceBranding from "@/components/ProvenanceBranding";
import AccessibilityFeatures from "@/components/AccessibilityFeatures";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import WYLDsPage from "./pages/wYLDs";
import HOMESPage from "./pages/HOMES";
import Learn from "./pages/Learn";
import Earn from "./pages/Earn";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <WalletProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5">
            <AccessibilityFeatures />
            <PerformanceOptimizer />
            <Header />
            <main id="main-content" className="flex-grow" role="main">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/earn" element={<Earn />} />
                
                <Route path="/yield" element={<WYLDsPage />} />
                <Route path="/wYLDs" element={<WYLDsPage />} />
                <Route path="/homes" element={<HOMESPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <ProvenanceBranding />
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </WalletProvider>
  </QueryClientProvider>
);

export default App;
