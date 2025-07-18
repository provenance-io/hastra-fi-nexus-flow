
import { useWallet } from '@/contexts/WalletContext';
import { Skeleton } from '@/components/ui/skeleton';
import WalletOverview from './WalletOverview';
import TokenBalanceCard from './TokenBalanceCard';
import ActionCard from './ActionCard';
import { 
  PlusCircle, 
  ArrowLeftRight, 
  TrendingUp, 
  Send 
} from 'lucide-react';

const HastraDashboard = () => {
  const { balance, isConnected } = useWallet();

  if (!isConnected) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-hastra-gradient mb-2">
            HASTRA Dashboard
          </h1>
          <p className="text-muted-foreground">
            Your decentralized finance command center
          </p>
        </div>

        {/* Portfolio Summary Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-foreground">
            Portfolio Summary
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Wallet Overview */}
            <div className="lg:col-span-2">
              <WalletOverview />
            </div>
            
            {/* Token Balance Cards */}
            <div className="space-y-4">
              <TokenBalanceCard 
                token="YIELD"
                amount={850.25}
                value={850.25}
                apy={8.0}
                change={5.2}
                icon="/lovable-uploads/08452a7b-6782-4b0a-900e-0f0c99a4fc4e.png"
              />
              <TokenBalanceCard 
                token="sHASH"
                amount={127.43}
                value={400.20}
                apy={12.5}
                change={-2.1}
                icon="sH"
              />
            </div>
          </div>
        </div>

        {/* Action Cards Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-foreground">
            Quick Actions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ActionCard
              title="Buy YIELD"
              description="Purchase YIELD tokens to start earning yield"
              icon={<PlusCircle className="w-6 h-6" />}
              action={() => window.open('https://app.kamino.finance', '_blank')}
              variant="primary"
            />
            
            <ActionCard
              title="Trade"
              description="Swap tokens and optimize your portfolio"
              icon={<ArrowLeftRight className="w-6 h-6" />}
              action={() => window.open('https://raydium.io', '_blank')}
              variant="secondary"
            />
            
            <ActionCard
              title="Lend"
              description="Earn interest by lending your crypto assets"
              icon={<TrendingUp className="w-6 h-6" />}
              action={() => window.open('https://app.kamino.finance', '_blank')}
              variant="secondary"
            />
            
            <ActionCard
              title="Send"
              description="Transfer tokens to other wallets"
              icon={<Send className="w-6 h-6" />}
              action={() => console.log('Send action')}
              variant="secondary"
            />
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center text-muted-foreground">
          <p className="text-sm">
            Powered by Solana blockchain • Always verify transactions before confirming
          </p>
        </div>
      </div>
    </div>
  );
};

export default HastraDashboard;
