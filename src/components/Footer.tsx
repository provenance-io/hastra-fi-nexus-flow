
import CompanyInfo from './footer/CompanyInfo';
import FooterLinks from './footer/FooterLinks';
import NewsletterSection from './footer/NewsletterSection';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900/95 to-black/95 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 lg:px-10 py-20">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
            
            {/* Company Information - Takes up more space */}
            <div className="lg:col-span-5">
              <CompanyInfo />
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-8 lg:space-y-8">
                <FooterLinks />
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-3">
              <NewsletterSection />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800/50 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              
              {/* Copyright */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400">
                <p className="text-sm">
                  &copy; {new Date().getFullYear()} Hastra Protocol Foundation. All rights reserved.
                </p>
                <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
                <p className="text-sm">
                  Pioneering compliant DeFi solutions
                </p>
              </div>

              {/* Built on Provenance */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm font-medium">Powered by</span>
                <div className="flex items-center gap-3 px-4 py-2 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <img 
                    src="/lovable-uploads/e80568de-0fba-4199-a928-a9d5b3fa9b76.png" 
                    alt="Provenance Blockchain" 
                    className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="text-gray-300 text-sm font-medium">Provenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
