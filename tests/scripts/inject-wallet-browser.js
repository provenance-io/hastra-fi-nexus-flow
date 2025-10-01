// e2e/scripts/inject-wallet.browser.js
// This file runs IN THE BROWSER context
// Plain JavaScript for maximum compatibility

(function injectTestWallet() {
  console.log("[DIRECT] Injecting test keypair into app...");

  // Base58 decode function (inline, no external dependencies)
  function base58Decode(str) {
    const ALPHABET =
      "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    let bytes = [0];

    for (let i = 0; i < str.length; i++) {
      const value = ALPHABET.indexOf(str[i]);
      if (value === -1) throw new Error("Invalid base58 character");

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

    // Add leading zeros
    for (let i = 0; i < str.length && str[i] === "1"; i++) {
      bytes.push(0);
    }

    return new Uint8Array(bytes.reverse());
  }

  const checkForWeb3 = setInterval(() => {
    // Check if @solana/web3.js is available
    if (window.__SOLANA_WEB3__) {
      clearInterval(checkForWeb3);
      setupTestWallet(window.__SOLANA_WEB3__);
    } else if (window.solanaWeb3) {
      clearInterval(checkForWeb3);
      setupTestWallet(window.solanaWeb3);
    }
  }, 100);

  function setupTestWallet(Web3) {
    const secretKeyBase58 = window.__TEST_SECRET_KEY__;

    if (!secretKeyBase58) {
      console.error("[DIRECT] No test secret key provided");
      return;
    }

    // Decode using inline base58 function
    const secretKeyBytes = base58Decode(secretKeyBase58);
    const keypair = Web3.Keypair.fromSecretKey(secretKeyBytes);

    console.log("[DIRECT] Created real Keypair:", keypair.publicKey.toBase58());

    // Create Phantom-compatible wallet using real Keypair
    const wallet = {
      isPhantom: true,
      publicKey: keypair.publicKey,
      isConnected: false,

      connect: async () => {
        console.log("[DIRECT] Wallet connected");
        wallet.isConnected = true;
        return { publicKey: keypair.publicKey };
      },

      disconnect: async () => {
        console.log("[DIRECT] Wallet disconnected");
        wallet.isConnected = false;
      },

      signTransaction: async (transaction) => {
        console.log("[DIRECT] Signing with real keypair...");
        transaction.partialSign(keypair);
        console.log("[DIRECT] Signed successfully");
        return transaction;
      },

      signAllTransactions: async (transactions) => {
        console.log("[DIRECT] Signing", transactions.length, "transactions");
        return transactions.map((tx) => {
          tx.partialSign(keypair);
          return tx;
        });
      },

      signMessage: async (message) => {
        console.log("[DIRECT] Sign message called");
        return { signature: new Uint8Array(64) };
      },

      signAndSendTransaction: async (transaction) => {
        console.log("[DIRECT] signAndSendTransaction called");
        transaction.partialSign(keypair);
        return { signature: "mock-sig" };
      },

      on: (event, handler) => {
        console.log("[DIRECT] Event listener added:", event);
      },

      off: (event, handler) => {
        console.log("[DIRECT] Event listener removed:", event);
      },

      removeListener: (event, handler) => {
        console.log("[DIRECT] Event listener removed:", event);
      },
    };

    window.solana = wallet;
    window.phantom = { solana: wallet };

    window.dispatchEvent(new Event("phantom#initialized"));

    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("wallet-standard:register-wallet", {
          detail: wallet,
        })
      );
    }, 100);

    console.log("[DIRECT] Test wallet ready!");
  }

  // Timeout after 5 seconds
  setTimeout(() => {
    if (!window.solana) {
      console.error("[DIRECT] Could not find @solana/web3.js in your app");
      console.error(
        "[DIRECT] Make sure you exposed it: window.__SOLANA_WEB3__ = solanaWeb3"
      );
    }
  }, 5000);
})();
