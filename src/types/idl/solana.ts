/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/sol_vault_mint.json`.
 */

export const solVaultMintIdl = () => {
  if (import.meta.env.PROD) {
    return SolVaultMintProd;
  }
  return SolVaultMintDev;
};

export const solVaultStakeIdl = () => {
  if (import.meta.env.PROD) {
    return SolVaultStake;  //TODO need two of these?
  }
  return SolVaultStake;
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
        "and receive an equal amount of minted tokens (e.g., sYLDS) in return.",
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
        "// Deposit 100 USDC and receive 100 sYLDS",
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
        "* `mint_key` - The token address that will be minted to users (e.g., sYLDS)",
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
        "// Initialize with USDC as vault and sYLDS as mint",
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
              "The token address that will be minted to users (e.g., sYLDS).",
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
        "and receive an equal amount of minted tokens (e.g., sYLDS) in return.",
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
        "// Deposit 100 USDC and receive 100 sYLDS",
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
        "* `mint_key` - The token address that will be minted to users (e.g., sYLDS)",
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
        "// Initialize with USDC as vault and sYLDS as mint",
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
              "The token address that will be minted to users (e.g., sYLDS).",
            ],
            type: "pubkey",
          },
        ],
      },
    },
  ],
};

/**
 *
 * SOL Vault and Stake IDL
 *
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/sol_vault_stake.json`.
 */
/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/sol_vault_stake.json`.
 */
export const SolVaultStake = {
  "address": "G9cajZ82LeEpLT9RubWtHR5rixUnBHuJYRMarHKkvnRp",
  "metadata": {
    "name": "sol_vault_stake",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Vault, Mint, and Stake Contract for Hastra"
  },
  "instructions": [
    {
      "name": "deposit",
      "docs": [
        "Handles user deposits of vault tokens (e.g., wYLDS):",
        "- Transfers vault tokens to program vault account",
        "- Mints equivalent amount of stake tokens (e.g., sYLDS) to user"
      ],
      "discriminator": [
        242,
        35,
        198,
        137,
        82,
        225,
        242,
        182
      ],
      "accounts": [
        {
          "name": "config",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "vault_token_account",
          "writable": true
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "mint_authority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "user_vault_token_account",
          "writable": true
        },
        {
          "name": "user_mint_token_account",
          "writable": true
        },
        {
          "name": "token_program",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initialize",
      "docs": [
        "Initializes the vault program with the required token configurations:",
        "- vault_mint: The token that users deposit (e.g., wYLDS)",
        "- stake_mint: The token users receive when staking (e.g., sYLDS)",
        "- unbonding_period: Time in seconds users must wait before redeeming"
      ],
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true
        },
        {
          "name": "vault_authority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "vault_token_account",
          "writable": true
        },
        {
          "name": "vault_mint"
        },
        {
          "name": "token_program",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "signer",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "vault_mint",
          "type": "pubkey"
        },
        {
          "name": "stake_mint",
          "type": "pubkey"
        },
        {
          "name": "unbonding_period",
          "type": "i64"
        }
      ]
    },
    {
      "name": "redeem",
      "docs": [
        "Completes the unbonding process after period expires:",
        "- Burns unbonding tokens (e.g., uwYLDS)",
        "- Returns vault tokens (e.g., wYLDS) to user"
      ],
      "discriminator": [
        184,
        12,
        86,
        149,
        70,
        196,
        97,
        225
      ],
      "accounts": [
        {
          "name": "config",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "vault_token_account",
          "writable": true
        },
        {
          "name": "vault_authority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "ticket",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  105,
                  99,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "user_vault_token_account",
          "writable": true
        },
        {
          "name": "user_mint_token_account",
          "writable": true
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "token_program",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "set_mint_authority",
      "docs": [
        "Sets the mint authority for a specified token type",
        "Used to configure program control over token minting"
      ],
      "discriminator": [
        67,
        127,
        155,
        187,
        100,
        174,
        103,
        121
      ],
      "accounts": [
        {
          "name": "config",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "mint_authority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "token_program",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "unbond",
      "docs": [
        "Initiates the unbonding process:",
        "- Burns user's stake tokens (e.g., sYLDS)",
        "- Starts unbonding period timer via user ticket"
      ],
      "discriminator": [
        151,
        129,
        36,
        46,
        102,
        195,
        111,
        122
      ],
      "accounts": [
        {
          "name": "config",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "user_mint_token_account",
          "writable": true
        },
        {
          "name": "ticket",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  105,
                  99,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "update_config",
      "docs": [
        "Updates the program configuration with new token addresses:",
        "- new_unbonding_period: New unbonding period in seconds"
      ],
      "discriminator": [
        29,
        158,
        252,
        191,
        10,
        83,
        219,
        99
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "token_program",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "new_unbonding_period",
          "type": "i64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "Config",
      "discriminator": [
        155,
        12,
        170,
        224,
        30,
        250,
        204,
        130
      ]
    },
    {
      "name": "UnbondingTicket",
      "discriminator": [
        213,
        129,
        239,
        0,
        7,
        4,
        215,
        83
      ]
    }
  ],
  "errors": [
    {
      "code": 6001,
      "name": "InvalidAmount",
      "msg": "Invalid amount"
    },
    {
      "code": 6002,
      "name": "InvalidTokenReceived",
      "msg": "Invalid token received"
    },
    {
      "code": 6003,
      "name": "InvalidVault",
      "msg": "Invalid vault"
    },
    {
      "code": 6004,
      "name": "InvalidAuthority",
      "msg": "Invalid authority"
    },
    {
      "code": 6005,
      "name": "InsufficientBalance",
      "msg": "Insufficient balance"
    },
    {
      "code": 6006,
      "name": "UnbondingPeriodNotElapsed",
      "msg": "Unbonding period not elapsed"
    },
    {
      "code": 6007,
      "name": "InsufficientUnbondingBalance",
      "msg": "Insufficient unbonding balance"
    },
    {
      "code": 6008,
      "name": "UnbondingInProgress",
      "msg": "Unbonding is currently in progress"
    },
    {
      "code": 6009,
      "name": "InvalidMint",
      "msg": "Invalid mint provided"
    },
    {
      "code": 6010,
      "name": "InvalidVaultMint",
      "msg": "Invalid vault mint provided"
    },
    {
      "code": 6011,
      "name": "InvalidTicketOwner",
      "msg": "Invalid ticket owner"
    },
    {
      "code": 6012,
      "name": "InvalidMintAuthority",
      "msg": "Invalid mint authority"
    },
    {
      "code": 6013,
      "name": "InsufficientVaultBalance",
      "msg": "Insufficient vault balance"
    },
    {
      "code": 6014,
      "name": "InvalidVaultAuthority",
      "msg": "Invalid vault authority"
    }
  ],
  "types": [
    {
      "name": "Config",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vault",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "unbonding_period",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "UnbondingTicket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "requested_amount",
            "type": "u64"
          },
          {
            "name": "start_balance",
            "type": "u64"
          },
          {
            "name": "start_ts",
            "type": "i64"
          }
        ]
      }
    }
  ]
};
