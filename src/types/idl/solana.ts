/**
 * MINT Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/sol_vault_mint.json`.
 */

export const solVaultMintIdl = () => {
  console.dir(import.meta.env);

  if (import.meta.env.VITE_SOLANA_CLUSTER_NAME === "mainnet-beta") {
    return SolVaultMintProd;
  }
  return SolVaultMintDev;
};

export const SolVaultMintDev = {
  address: "3vz4uKCMKxFhb9DPf72Csk3HLT5ST8itiviArMSjqCc4",
  metadata: {
    name: "solVaultMint",
    version: "0.1.0",
    spec: "0.1.0",
    description: "Vault and Mint Contract for Hastra",
  },
  instructions: [
    {
      name: "depositAndMint",
      docs: [
        "Deposit tokens to the vault and mint corresponding tokens to the user.",
        "",
        "This is the main function of the program. Users deposit vault tokens (e.g., USDC)",
        "and receive an equal amount of minted tokens (e.g., PRIME) in return.",
        "The function validates the deposit token, transfers it to the vault,",
        "and mints the corresponding amount using the mint authority PDA.",
        "",
        "# Arguments",
        "",
        "* `amount` - The amount of vault tokens to deposit (must be > 0)",
        "",
        "# Errors",
        "",
        "Returns an error if:",
        "- Amount is zero or negative",
        "- The deposit token is not the expected vault token (USDC)",
        "- The vault account doesn't match the configured vault",
        "- Insufficient balance in the swap token account",
        "- Mint authority PDA is invalid",
        "",
        "# Example",
        "",
        "```rust",
        "// Deposit 100 USDC and receive 100 PRIME",
        "deposit_and_mint(100_000_000)?; // 100 USDC (6 decimals)",
        "```",
      ],
      discriminator: [97, 126, 119, 210, 67, 186, 64, 23],
      accounts: [
        {
          name: "signer",
          docs: [
            "The user who is depositing tokens and receiving minted tokens.",
          ],
          writable: true,
          signer: true,
        },
        {
          name: "swapToken",
          docs: [
            "The user's token account containing the vault tokens to deposit.",
          ],
          writable: true,
        },
        {
          name: "toAccount",
          docs: [
            "The user's token account that will receive the minted tokens.",
            "Must be associated with the configured mint token.",
          ],
          writable: true,
        },
        {
          name: "vault",
          docs: ["The vault account that receives the deposited tokens."],
          writable: true,
        },
        {
          name: "mint",
          docs: [
            "The mint account for the token that will be minted to the user.",
          ],
          writable: true,
        },
        {
          name: "config",
          docs: ["The config account containing vault and mint addresses."],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [99, 111, 110, 102, 105, 103],
              },
            ],
          },
        },
        {
          name: "mintAuthority",
          docs: [
            "The PDA that serves as the mint authority for secure token minting.",
          ],
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  109, 105, 110, 116, 95, 97, 117, 116, 104, 111, 114, 105, 116,
                  121,
                ],
              },
            ],
          },
        },
        {
          name: "tokenProgram",
          docs: ["The SPL Token program for token operations."],
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "initialize",
      docs: [
        "Initialize the program with vault and mint token addresses.",
        "",
        "This function sets up the initial configuration for the vault/mint program.",
        "It creates a Config account that stores the vault token (accepted for deposits)",
        "and mint token (distributed to users) addresses.",
        "",
        "# Arguments",
        "",
        "* `vault_key` - The token address that will be accepted for deposits (e.g., USDC)",
        "* `mint_key` - The token address that will be minted to users (e.g., PRIME)",
        "",
        "# Errors",
        "",
        "Returns an error if:",
        "- The signer is not the upgrade authority",
        "- Invalid token addresses are provided",
        "- The config PDA already exists",
        "",
        "# Example",
        "",
        "```rust",
        "// Initialize with USDC as vault and PRIME as mint",
        "initialize(usdc_mint, yield_mint)?;",
        "```",
      ],
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237],
      accounts: [
        {
          name: "config",
          docs: [
            "The config account that stores vault and mint addresses.",
            "This account is created during initialization.",
          ],
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [99, 111, 110, 102, 105, 103],
              },
            ],
          },
        },
        {
          name: "signer",
          docs: [
            "The signer must be the upgrade authority to initialize the program.",
          ],
          writable: true,
          signer: true,
        },
        {
          name: "systemProgram",
          docs: ["The system program for account creation."],
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "vaultKey",
          type: "pubkey",
        },
        {
          name: "mintKey",
          type: "pubkey",
        },
      ],
    },
    {
      name: "setMintAuthority",
      docs: [
        "Set the mint authority of the specified token to the upgrade authority.",
        "",
        "This function allows the upgrade authority to take control of the mint authority",
        "for the configured mint token. This is useful for administrative purposes",
        "or when the program needs to be upgraded.",
        "",
        "The function uses the mint authority PDA to sign the authority change,",
        "then sets the new authority to the upgrade authority address.",
        "",
        "# Arguments",
        "",
        "None - uses the mint from the config account",
        "",
        "# Errors",
        "",
        "Returns an error if:",
        "- The signer is not the upgrade authority",
        "- The mint authority PDA is invalid",
        "- The mint account doesn't match the configured mint",
        "",
        "# Example",
        "",
        "```rust",
        "// Set mint authority to upgrade authority",
        "set_mint_authority()?;",
        "```",
      ],
      discriminator: [67, 127, 155, 187, 100, 174, 103, 121],
      accounts: [
        {
          name: "config",
          docs: ["The config account containing the mint address."],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [99, 111, 110, 102, 105, 103],
              },
            ],
          },
        },
        {
          name: "mint",
          docs: ["The mint account whose authority will be changed."],
          writable: true,
        },
        {
          name: "signer",
          docs: [
            "The signer must be the upgrade authority to change mint authority.",
          ],
          writable: true,
          signer: true,
        },
        {
          name: "mintAuthority",
          docs: ["The PDA that currently serves as the mint authority."],
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  109, 105, 110, 116, 95, 97, 117, 116, 104, 111, 114, 105, 116,
                  121,
                ],
              },
            ],
          },
        },
        {
          name: "tokenProgram",
          docs: ["The SPL Token program for authority changes."],
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
      ],
      args: [],
    },
    {
      name: "updateConfig",
      docs: [
        "Update the vault and mint configuration.",
        "",
        "This function allows the upgrade authority to change which tokens are accepted",
        "for deposits and which tokens are minted to users. This is useful for",
        "updating the program configuration after deployment.",
        "",
        "# Arguments",
        "",
        "* `new_vault` - The new token address to accept for deposits",
        "* `new_mint` - The new token address to mint to users",
        "",
        "# Errors",
        "",
        "Returns an error if:",
        "- The signer is not the upgrade authority",
        "- The config account doesn't exist",
        "",
        "# Example",
        "",
        "```rust",
        "// Update to use different tokens",
        "update_config(new_vault_token, new_mint_token)?;",
        "```",
      ],
      discriminator: [29, 158, 252, 191, 10, 83, 219, 99],
      accounts: [
        {
          name: "config",
          docs: ["The config account to be updated."],
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [99, 111, 110, 102, 105, 103],
              },
            ],
          },
        },
        {
          name: "signer",
          docs: [
            "The signer must be the upgrade authority to update configuration.",
          ],
          signer: true,
        },
      ],
      args: [
        {
          name: "newVault",
          type: "pubkey",
        },
        {
          name: "newMint",
          type: "pubkey",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "config",
      discriminator: [155, 12, 170, 224, 30, 250, 204, 130],
    },
  ],
  errors: [
    {
      code: 6001,
      name: "invalidAmount",
      msg: "Invalid amount",
    },
    {
      code: 6002,
      name: "invalidTokenReceived",
      msg: "Invalid token received",
    },
    {
      code: 6003,
      name: "invalidVault",
      msg: "Invalid vault",
    },
    {
      code: 6004,
      name: "invalidAuthority",
      msg: "Invalid authority",
    },
  ],
  types: [
    {
      name: "config",
      docs: [
        "Configuration account for the vault/mint program.",
        "",
        "This account stores the vault and mint token addresses that define",
        "which tokens are accepted for deposits and which tokens are minted",
        "to users.",
      ],
      type: {
        kind: "struct",
        fields: [
          {
            name: "vault",
            docs: [
              "The token address that will be accepted for deposits (e.g., USDC).",
            ],
            type: "pubkey",
          },
          {
            name: "mint",
            docs: [
              "The token address that will be minted to users (e.g., PRIME).",
            ],
            type: "pubkey",
          },
        ],
      },
    },
  ],
};

export const SolVaultMintProd = {
  address: "Gbt58GL4jgCfnP1D1efaizJbo3irAADd6Pq1xhEm3zmw",
  metadata: {
    name: "solVaultMint",
    version: "0.1.0",
    spec: "0.1.0",
    description: "Vault and Mint Contract for Hastra",
  },
  instructions: [
    {
      name: "depositAndMint",
      docs: [
        "Deposit tokens to the vault and mint corresponding tokens to the user.",
        "",
        "This is the main function of the program. Users deposit vault tokens (e.g., USDC)",
        "and receive an equal amount of minted tokens (e.g., PRIME) in return.",
        "The function validates the deposit token, transfers it to the vault,",
        "and mints the corresponding amount using the mint authority PDA.",
        "",
        "# Arguments",
        "",
        "* `amount` - The amount of vault tokens to deposit (must be > 0)",
        "",
        "# Errors",
        "",
        "Returns an error if:",
        "- Amount is zero or negative",
        "- The deposit token is not the expected vault token (USDC)",
        "- The vault account doesn't match the configured vault",
        "- Insufficient balance in the swap token account",
        "- Mint authority PDA is invalid",
        "",
        "# Example",
        "",
        "```rust",
        "// Deposit 100 USDC and receive 100 PRIME",
        "deposit_and_mint(100_000_000)?; // 100 USDC (6 decimals)",
        "```",
      ],
      discriminator: [97, 126, 119, 210, 67, 186, 64, 23],
      accounts: [
        {
          name: "signer",
          docs: [
            "The user who is depositing tokens and receiving minted tokens.",
          ],
          writable: true,
          signer: true,
        },
        {
          name: "swapToken",
          docs: [
            "The user's token account containing the vault tokens to deposit.",
          ],
          writable: true,
        },
        {
          name: "toAccount",
          docs: [
            "The user's token account that will receive the minted tokens.",
            "Must be associated with the configured mint token.",
          ],
          writable: true,
        },
        {
          name: "vault",
          docs: ["The vault account that receives the deposited tokens."],
          writable: true,
        },
        {
          name: "mint",
          docs: [
            "The mint account for the token that will be minted to the user.",
          ],
          writable: true,
        },
        {
          name: "config",
          docs: ["The config account containing vault and mint addresses."],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [99, 111, 110, 102, 105, 103],
              },
            ],
          },
        },
        {
          name: "mintAuthority",
          docs: [
            "The PDA that serves as the mint authority for secure token minting.",
          ],
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  109, 105, 110, 116, 95, 97, 117, 116, 104, 111, 114, 105, 116,
                  121,
                ],
              },
            ],
          },
        },
        {
          name: "tokenProgram",
          docs: ["The SPL Token program for token operations."],
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "initialize",
      docs: [
        "Initialize the program with vault and mint token addresses.",
        "",
        "This function sets up the initial configuration for the vault/mint program.",
        "It creates a Config account that stores the vault token (accepted for deposits)",
        "and mint token (distributed to users) addresses.",
        "",
        "# Arguments",
        "",
        "* `vault_key` - The token address that will be accepted for deposits (e.g., USDC)",
        "* `mint_key` - The token address that will be minted to users (e.g., PRIME)",
        "",
        "# Errors",
        "",
        "Returns an error if:",
        "- The signer is not the upgrade authority",
        "- Invalid token addresses are provided",
        "- The config PDA already exists",
        "",
        "# Example",
        "",
        "```rust",
        "// Initialize with USDC as vault and PRIME as mint",
        "initialize(usdc_mint, yield_mint)?;",
        "```",
      ],
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237],
      accounts: [
        {
          name: "config",
          docs: [
            "The config account that stores vault and mint addresses.",
            "This account is created during initialization.",
          ],
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [99, 111, 110, 102, 105, 103],
              },
            ],
          },
        },
        {
          name: "signer",
          docs: [
            "The signer must be the upgrade authority to initialize the program.",
          ],
          writable: true,
          signer: true,
        },
        {
          name: "systemProgram",
          docs: ["The system program for account creation."],
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "vaultKey",
          type: "pubkey",
        },
        {
          name: "mintKey",
          type: "pubkey",
        },
      ],
    },
    {
      name: "setMintAuthority",
      docs: [
        "Set the mint authority of the specified token to the upgrade authority.",
        "",
        "This function allows the upgrade authority to take control of the mint authority",
        "for the configured mint token. This is useful for administrative purposes",
        "or when the program needs to be upgraded.",
        "",
        "The function uses the mint authority PDA to sign the authority change,",
        "then sets the new authority to the upgrade authority address.",
        "",
        "# Arguments",
        "",
        "None - uses the mint from the config account",
        "",
        "# Errors",
        "",
        "Returns an error if:",
        "- The signer is not the upgrade authority",
        "- The mint authority PDA is invalid",
        "- The mint account doesn't match the configured mint",
        "",
        "# Example",
        "",
        "```rust",
        "// Set mint authority to upgrade authority",
        "set_mint_authority()?;",
        "```",
      ],
      discriminator: [67, 127, 155, 187, 100, 174, 103, 121],
      accounts: [
        {
          name: "config",
          docs: ["The config account containing the mint address."],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [99, 111, 110, 102, 105, 103],
              },
            ],
          },
        },
        {
          name: "mint",
          docs: ["The mint account whose authority will be changed."],
          writable: true,
        },
        {
          name: "signer",
          docs: [
            "The signer must be the upgrade authority to change mint authority.",
          ],
          writable: true,
          signer: true,
        },
        {
          name: "mintAuthority",
          docs: ["The PDA that currently serves as the mint authority."],
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  109, 105, 110, 116, 95, 97, 117, 116, 104, 111, 114, 105, 116,
                  121,
                ],
              },
            ],
          },
        },
        {
          name: "tokenProgram",
          docs: ["The SPL Token program for authority changes."],
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
      ],
      args: [],
    },
    {
      name: "updateConfig",
      docs: [
        "Update the vault and mint configuration.",
        "",
        "This function allows the upgrade authority to change which tokens are accepted",
        "for deposits and which tokens are minted to users. This is useful for",
        "updating the program configuration after deployment.",
        "",
        "# Arguments",
        "",
        "* `new_vault` - The new token address to accept for deposits",
        "* `new_mint` - The new token address to mint to users",
        "",
        "# Errors",
        "",
        "Returns an error if:",
        "- The signer is not the upgrade authority",
        "- The config account doesn't exist",
        "",
        "# Example",
        "",
        "```rust",
        "// Update to use different tokens",
        "update_config(new_vault_token, new_mint_token)?;",
        "```",
      ],
      discriminator: [29, 158, 252, 191, 10, 83, 219, 99],
      accounts: [
        {
          name: "config",
          docs: ["The config account to be updated."],
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [99, 111, 110, 102, 105, 103],
              },
            ],
          },
        },
        {
          name: "signer",
          docs: [
            "The signer must be the upgrade authority to update configuration.",
          ],
          signer: true,
        },
      ],
      args: [
        {
          name: "newVault",
          type: "pubkey",
        },
        {
          name: "newMint",
          type: "pubkey",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "config",
      discriminator: [155, 12, 170, 224, 30, 250, 204, 130],
    },
  ],
  errors: [
    {
      code: 6001,
      name: "invalidAmount",
      msg: "Invalid amount",
    },
    {
      code: 6002,
      name: "invalidTokenReceived",
      msg: "Invalid token received",
    },
    {
      code: 6003,
      name: "invalidVault",
      msg: "Invalid vault",
    },
    {
      code: 6004,
      name: "invalidAuthority",
      msg: "Invalid authority",
    },
  ],
  types: [
    {
      name: "config",
      docs: [
        "Configuration account for the vault/mint program.",
        "",
        "This account stores the vault and mint token addresses that define",
        "which tokens are accepted for deposits and which tokens are minted",
        "to users.",
      ],
      type: {
        kind: "struct",
        fields: [
          {
            name: "vault",
            docs: [
              "The token address that will be accepted for deposits (e.g., USDC).",
            ],
            type: "pubkey",
          },
          {
            name: "mint",
            docs: [
              "The token address that will be minted to users (e.g., PRIME).",
            ],
            type: "pubkey",
          },
        ],
      },
    },
  ],
};
