// e2e/utils/mock-phantom.ts
import {
  Keypair,
  PublicKey,
  Transaction,
  VersionedTransaction,
} from "@solana/web3.js";
import bs58 from "bs58";
import nacl from "tweetnacl";

/**
 * Creates a mock Phantom wallet object that can be injected into the browser
 * This simulates wallet connection and transaction signing
 */
export function createMockPhantom(keypair: Keypair) {
  const publicKey = keypair.publicKey;

  return {
    isPhantom: true,
    publicKey: {
      toString: () => publicKey.toBase58(),
      toBase58: () => publicKey.toBase58(),
      toBytes: () => publicKey.toBytes(),
      equals: (other: PublicKey) => publicKey.equals(other),
    },

    isConnected: false,

    connect: async ({ onlyIfTrusted = false } = {}) => {
      console.log("[MOCK] Phantom: connect called");
      this.isConnected = true;
      return { publicKey: this.publicKey };
    },

    disconnect: async () => {
      console.log("[MOCK] Phantom: disconnect called");
      this.isConnected = false;
    },

    signTransaction: async (
      transaction: Transaction | VersionedTransaction
    ) => {
      console.log("[MOCK] Phantom: signing transaction");

      if (transaction instanceof Transaction) {
        transaction.partialSign(keypair);
      } else {
        // For VersionedTransaction
        transaction.sign([keypair]);
      }

      return transaction;
    },

    signAllTransactions: async (
      transactions: (Transaction | VersionedTransaction)[]
    ) => {
      console.log(
        `[MOCK] Phantom: signing ${transactions.length} transactions`
      );

      return transactions.map((tx) => {
        if (tx instanceof Transaction) {
          tx.partialSign(keypair);
        } else {
          tx.sign([keypair]);
        }
        return tx;
      });
    },

    signMessage: async (message: Uint8Array) => {
      console.log("[MOCK] Phantom: signing message");
      // Use tweetnacl to sign the message with the keypair's secret key
      const signature = nacl.sign.detached(message, keypair.secretKey);
      return { signature };
    },

    signAndSendTransaction: async (
      transaction: Transaction | VersionedTransaction
    ) => {
      console.log(
        "[MOCK] Phantom: signAndSendTransaction - not typically used with wallet-adapter"
      );
      // Sign the transaction
      if (transaction instanceof Transaction) {
        transaction.partialSign(keypair);
      } else {
        transaction.sign([keypair]);
      }
      return { signature: "mock-signature" };
    },

    // Event listener support for wallet-adapter
    on: (event: string) => {
      console.log("[MOCK] Phantom: listener added for event:", event);
    },

    off: (event: string) => {
      console.log("[MOCK] Phantom: listener removed for event:", event);
    },
  };
}

/**
 * Browser script to inject mock Phantom wallet
 * This should be evaluated in the page context via page.addInitScript()
 */
export function getPhantomInjectionScript(secretKey: string) {
  return `
    (function() {
      console.log('[MOCK] Injecting Phantom wallet...');
      
      // Base58 decoding utilities
      const bs58Alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
      
      function bs58Decode(str) {
        const bytes = [0];
        for (let i = 0; i < str.length; i++) {
          const c = str[i];
          const value = bs58Alphabet.indexOf(c);
          if (value === -1) throw new Error('Invalid character');
          
          for (let j = 0; j < bytes.length; j++) {
            bytes[j] *= 58;
          }
          bytes[0] += value;
          
          let carry = 0;
          for (let j = 0; j < bytes.length; j++) {
            bytes[j] += carry;
            carry = bytes[j] >> 8;
            bytes[j] &= 0xff;
          }
          while (carry > 0) {
            bytes.push(carry & 0xff);
            carry >>= 8;
          }
        }
        
        for (let i = 0; i < str.length && str[i] === '1'; i++) {
          bytes.push(0);
        }
        
        return new Uint8Array(bytes.reverse());
      }
      
      function bs58Encode(bytes) {
        let num = BigInt('0x' + Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join(''));
        let encoded = '';
        
        while (num > 0n) {
          encoded = bs58Alphabet[Number(num % 58n)] + encoded;
          num = num / 58n;
        }
        
        for (let i = 0; i < bytes.length && bytes[i] === 0; i++) {
          encoded = '1' + encoded;
        }
        
        return encoded;
      }

      const secretKeyBytes = bs58Decode('${secretKey}');
      const publicKeyBytes = secretKeyBytes.slice(32, 64);
      const publicKeyBase58 = bs58Encode(publicKeyBytes);
      
      console.log('[MOCK] Wallet address:', publicKeyBase58);

      // Create the mock Phantom wallet
      const phantomWallet = {
        isPhantom: true,
        
        publicKey: {
          toBase58: () => publicKeyBase58,
          toString: () => publicKeyBase58,
          toBytes: () => publicKeyBytes,
          toBuffer: () => Buffer.from(publicKeyBytes),
          equals: (other) => {
            if (!other) return false;
            const otherKey = other.toBase58?.() || other.toString?.() || other;
            return publicKeyBase58 === otherKey;
          },
        },
        
        isConnected: false,
        
        connect: async (opts = {}) => {
          console.log('[MOCK] Phantom: connect called');
          phantomWallet.isConnected = true;
          return { publicKey: phantomWallet.publicKey };
        },
        
        disconnect: async () => {
          console.log('[MOCK] Phantom: disconnect called');
          phantomWallet.isConnected = false;
        },
        
        signTransaction: async (transaction) => {
          console.log('[MOCK] Phantom: signing transaction');
          return transaction;
        },
        
        signAllTransactions: async (transactions) => {
          console.log('[MOCK] Phantom: signing', transactions.length, 'transactions');
          return transactions;
        },
        
        signMessage: async (message, display) => {
          console.log('[MOCK] Phantom: signing message');
          return { signature: new Uint8Array(64).fill(0) };
        },
        
        signAndSendTransaction: async (transaction, options) => {
          console.log('[MOCK] Phantom: signAndSendTransaction');
          return { signature: bs58Encode(new Uint8Array(64).fill(1)) };
        },

        // Event listener support
        on: (event, callback) => {
          console.log('[MOCK] Phantom: listener added for event:', event);
        },
        
        off: (event, callback) => {
          console.log('[MOCK] Phantom: listener removed for event:', event);
        },
      };

      // Inject into window
      window.solana = phantomWallet;
      window.phantom = { solana: phantomWallet };
      
      console.log('[MOCK] Phantom wallet injected successfully');
      console.log('[MOCK] window.solana.isPhantom:', window.solana?.isPhantom);
      
      // Dispatch Phantom initialization events
      window.dispatchEvent(new Event('phantom#initialized'));
      
      // Some wallet adapters look for this
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('wallet-standard:register-wallet', {
          detail: phantomWallet
        }));
      }, 100);
      
      console.log('[MOCK] Ready to connect!');
    })();
  `;
}
