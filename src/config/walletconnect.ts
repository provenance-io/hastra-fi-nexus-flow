import { createAppKit } from '@reown/appkit'
import { SolanaAdapter } from '@reown/appkit-adapter-solana'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'

// 1. Get projectId from https://cloud.reown.com
const projectId = '02661e769c8e5bedcf941045cf4ec583' // You'll need to replace this

// 2. Create a metadata object - describe your app
const metadata = {
  name: 'Hastra',
  description: 'Hastra DeFi Protocol',
  url: typeof window !== 'undefined' ? window.location.origin : 'https://hastra.com',
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// 3. Set up Solana Adapter with proper wallet configuration
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [] // Let AppKit auto-detect available wallets
})

// 4. Create the AppKit instance
export const appkit = createAppKit({
  adapters: [solanaWeb3JsAdapter],
  metadata: metadata,
  networks: [solana, solanaTestnet, solanaDevnet],
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})