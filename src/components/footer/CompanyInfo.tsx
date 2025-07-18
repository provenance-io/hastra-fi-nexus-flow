
import FooterLogo from '../FooterLogo';

const CompanyInfo = () => {
  return (
    <div className="space-y-8">
      {/* Logo and Brand */}
      <div className="space-y-6">
        <FooterLogo className="h-16" />
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white leading-tight">
            Building the Future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Financial Infrastructure
            </span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Hastra Protocol pioneers compliant yield-bearing financial products, 
            bridging traditional finance with DeFi innovation on Solana.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Why Choose Hastra?</h3>
        <div className="space-y-3">
          {[
            'SEC-registered stablecoin (YIELD)',
            'Institutional-grade security',
            'Real-world asset backing',
            'Full DeFi composability'
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-300">
              <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
              <span className="text-base">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
