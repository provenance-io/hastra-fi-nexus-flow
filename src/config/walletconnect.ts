import { createAppKit } from '@reown/appkit'
import { SolanaAdapter } from '@reown/appkit-adapter-solana'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'

// 1. Get projectId from https://cloud.reown.com
const projectId = '02661e769c8e5bedcf941045cf4ec583'

// 2. Create a metadata object - describe your app
const metadata = {
  name: 'Hastra',
  description: 'Hastra DeFi Protocol',
  url: typeof window !== 'undefined' ? window.location.origin : 'https://hastra.com',
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// 3. Set up Solana Adapter with minimal configuration for better compatibility
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: []
})

// 4. Create the AppKit instance with simplified configuration
export const appkit = createAppKit({
  adapters: [solanaWeb3JsAdapter],
  metadata: metadata,
  networks: [solana, solanaDevnet], // Reduce to main networks
  projectId,
  features: {
    analytics: false, // Disable analytics to reduce complexity
    email: false,
    socials: []
  },
  themeMode: 'dark'
})