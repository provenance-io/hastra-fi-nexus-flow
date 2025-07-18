
import { useWallet } from '@/contexts/WalletContext';
import HastraDashboard from './HastraDashboard';

const EnhancedWalletConnection = () => {
  const { isConnected } = useWallet();

  if (isConnected) {
    return (
      <div className="space-y-8">
        <HastraDashboard />
      </div>
    );
  }

  // Don't render anything if wallet is not connected - the dedicated section at bottom handles this
  return null;
};

export default EnhancedWalletConnection;
