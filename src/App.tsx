import * as solanaWeb3 from "@solana/web3.js";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletProvider } from "@/contexts/WalletContext";
import { SolanaWalletProvider } from "@/contexts/SolanaWalletContext";
import { isFeatureEnabled } from "@/utils/featureFlags";
import ScrollToTop from "@/components/ScrollToTop";
import { Footer } from "@/components/new/navigation/footer";
import AccessibilityFeatures from "@/components/AccessibilityFeatures";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import WyldsPage from "./pages/Wylds";
import PRIMEPage from "./pages/PRIME";
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
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NewHome } from "./pages/new-home";
import { NewHeader } from "./components/new/navigation/new-header";
import { NewAbout } from "./pages/new-about";
import { NewEarn } from "./pages/new-earn";
import { NewWYLDS } from "./pages/new-wylds";
import { NewLearn } from "./pages/new-learn";

// For testing, to expose solana/web3.js
if (import.meta.env.DEV || import.meta.env.MODE === "test") {
  (
    window as unknown as Window & {
      __SOLANA_WEB3__: undefined | typeof solanaWeb3;
    }
  ).__SOLANA_WEB3__ = solanaWeb3;
  console.log("[APP] Exposed @solana/web3.js for testing");
}

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
            <div className="flex flex-col min-h-screen bg-brand-background">
              <AccessibilityFeatures />
              <PerformanceOptimizer />
              {/* <TestOnlyBadge /> */}
              <NewHeader />
              <main id="main-content" className="flex-grow" role="main">
                <Routes>
                  <Route path="/" element={<NewHome />} />
                  <Route path="/product" element={<NewWYLDS />} />
                  <Route path="/about" element={<NewAbout />} />
                  <Route path="/earn" element={<NewEarn />} />
                  <Route path="/learn" element={<NewLearn />} />
                  {/* <Route path="/" element={<Index />} /> */}
                  {/* <Route path="/about" element={<About />} /> */}
                  {/* <Route path="/learn" element={<Learn />} /> */}
                  {/* <Route path="/earn" element={<Earn />} /> */}
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/brand-guide" element={<BrandGuidePage />} />

                  {/* <Route path="/wylds" element={<WyldsPage />} /> */}
                  <Route path="/prime" element={<PRIMEPage />} />
                  <Route path="/homes" element={<HOMESPage />} />
                  <Route path="/sendit" element={<SendIt />} />
                  {isFeatureEnabled("testPagesEnabled") && (
                    <>
                      <Route path="/test-debug" element={<TestDebug />} />
                      <Route
                        path="/components"
                        element={<ComponentPlayground />}
                      />
                    </>
                  )}
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              {/* <Footer /> */}
              <Footer />
              <AdminFeatureToggle />
            </div>
          </BrowserRouter>
        </TooltipProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </WalletProvider>
    </SolanaWalletProvider>
  </QueryClientProvider>
);

export default App;
