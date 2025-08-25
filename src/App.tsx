
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletProvider } from "@/contexts/WalletContext";
import { SolanaWalletProvider } from "@/contexts/SolanaWalletContext";
import { isFeatureEnabled } from "@/utils/featureFlags";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import AccessibilityFeatures from "@/components/AccessibilityFeatures";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import TestOnlyBadge from "@/components/test/TestOnlyBadge";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import WYLDsPage from "./pages/wYLDs";
import SwYLDSPage from "./pages/swYLDS";
import HOMESPage from "./pages/HOMES";
import SendIt from "./pages/SendIt";
import Learn from "./pages/Learn";
import Earn from "./pages/Earn";
import BrandGuidePage from "./pages/BrandGuide";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import TestDebug from "./pages/TestDebug";
import ComponentPlayground from "./pages/ComponentPlayground";
import AdminFeatureToggle from "./components/admin/AdminFeatureToggle";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SolanaWalletProvider>
      <WalletProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5">
            <AccessibilityFeatures />
            <PerformanceOptimizer />
            <TestOnlyBadge />
            <Header />
            <main id="main-content" className="flex-grow" role="main">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/earn" element={<Earn />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/brand-guide" element={<BrandGuidePage />} />

                <Route path="/yield" element={<WYLDsPage />} />
                <Route path="/swylds" element={<SwYLDSPage />} />
                <Route path="/homes" element={<HOMESPage />} />
                <Route path="/sendit" element={<SendIt />} />
                {isFeatureEnabled('testPagesEnabled') && (
                  <>
                    <Route path="/test-debug" element={<TestDebug />} />
                    <Route path="/components" element={<ComponentPlayground />} />
                  </>
                )}
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <AdminFeatureToggle />
          </div>
        </BrowserRouter>
      </TooltipProvider>
        <ReactQueryDevtools initialIsOpen={false}/>

    </WalletProvider>
  </SolanaWalletProvider>
</QueryClientProvider>
);

export default App;
