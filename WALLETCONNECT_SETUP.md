# WalletConnect AppKit Setup Instructions

## Step 1: Get Your Project ID

1. Go to [https://cloud.reown.com](https://cloud.reown.com)
2. Sign up or log in to your account
3. Create a new project
4. Copy your Project ID

## Step 2: Update Configuration

1. Open `src/config/walletconnect.ts`
2. Replace `'YOUR_PROJECT_ID'` with your actual Project ID from Step 1

## Step 3: Test the Integration

1. Click the "CONNECT WALLET" button in the app
2. The WalletConnect modal should open showing various wallet options
3. Select your preferred Solana wallet (Phantom, Solflare, etc.)
4. Follow the connection prompts

## Features Included

- ✅ Multi-wallet support (Phantom, Solflare, and more)
- ✅ Automatic wallet detection
- ✅ Connection state management
- ✅ Toast notifications for connection status
- ✅ Proper disconnect functionality
- ✅ Integration with existing wallet context

## Next Steps

Once you have your Project ID configured, the wallet connection will work with real wallets instead of the mock connection that was previously in place.

The WalletConnect AppKit provides a much better user experience with:
- Beautiful wallet selection modal
- Support for many Solana wallets
- QR code scanning for mobile wallets
- Automatic wallet detection
- Better error handling

## Troubleshooting

If you encounter any issues:
1. Make sure your Project ID is correctly set
2. Check that you're on a supported network (Solana mainnet/testnet/devnet)
3. Ensure your wallet extension is installed and unlocked
4. Check the browser console for any error messages