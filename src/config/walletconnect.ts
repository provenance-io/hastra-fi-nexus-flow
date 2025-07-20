import { createAppKit } from '@reown/appkit'
import { SolanaAdapter } from '@reown/appkit-adapter-solana'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'

// 1. Get projectId from https://cloud.reown.com
const projectId = 'YOUR_PROJECT_ID' // You'll need to replace this

// 2. Create a metadata object - describe your app
const metadata = {
  name: 'Hastra',
  description: 'Hastra DeFi Protocol',
  url: 'https://hastra.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// 3. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: []
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