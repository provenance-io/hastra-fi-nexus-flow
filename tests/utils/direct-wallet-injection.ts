// e2e/utils/direct-wallet-injection.ts
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Inject a test keypair directly into the browser
 * Loads a plain JavaScript file for maximum compatibility
 */
export function getDirectKeypairInjection(secretKey: string): string {
  const scriptPath = join(
    __dirname,
    "..",
    "scripts",
    "inject-wallet-browser.js"
  );

  try {
    const browserScript = readFileSync(scriptPath, "utf-8");

    return `
      window.__TEST_SECRET_KEY__ = '${secretKey}';
      ${browserScript}
    `;
  } catch (error) {
    console.error("Failed to read inject-wallet-browser.js from:", scriptPath);
    console.error("Error:", error);
    throw error;
  }
}

/**
 * Export wallet secret key as base58 for browser injection
 */
export function exportWalletForBrowser(keypair: Keypair): string {
  return bs58.encode(keypair.secretKey);
}
