export const HastraSolVaultStake = {
  address: "AixEL5nihPVirtmPki2m1bS2a2eVeMY22hxyihYWXrBL",
  metadata: {
    name: "hastra_sol_vault_stake",
    version: "0.1.0",
    spec: "0.1.0",
    description: "Vault, Mint, and Stake Contract for Hastra",
  },
  instructions: [
    {
      name: "claim_rewards",
      docs: [
        "This is the classic “airdrop/claim per epoch” design",
        "High-level idea:",
        "1.\tOff-chain (admin does this each epoch):",
        "•\tCalculate each user’s reward for this epoch.",
        "•\tBuild a Merkle tree of (user, amount, epoch_index).",
        "•\tPublish the Merkle root on-chain with create_rewards_epoch function above.",
        "",
        "2.\tOn-chain:",
        "•\tStore each epoch’s Merkle root in a PDA.",
        "•\tWhen a user claims, they present (amount, proof) for their pubkey.",
        "•\tThe program verifies the Merkle proof against the root.",
        "•\tIf valid, transfer reward tokens (PRIME) from the rewards vault to the user's staking mint token account.",
        "•\tMark the claim as redeemed so they can’t double-claim.",
      ],
      discriminator: [4, 144, 132, 71, 116, 23, 151, 80],
      accounts: [
        {
          name: "config",
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
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "epoch",
        },
        {
          name: "claim_record",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [99, 108, 97, 105, 109],
              },
              {
                kind: "account",
                path: "epoch",
              },
              {
                kind: "account",
                path: "user",
              },
            ],
          },
        },
        {
          name: "mint",
          writable: true,
        },
        {
          name: "mint_authority",
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
          name: "user_stake_token_account",
          writable: true,
        },
        {
          name: "token_program",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
        {
          name: "proof",
          type: {
            vec: {
              array: ["u8", 32],
            },
          },
        },
      ],
    },
    {
      name: "create_rewards_epoch",
      discriminator: [64, 195, 84, 28, 247, 167, 132, 46],
      accounts: [
        {
          name: "config",
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
          name: "admin",
          writable: true,
          signer: true,
        },
        {
          name: "epoch",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [101, 112, 111, 99, 104],
              },
              {
                kind: "arg",
                path: "index",
              },
            ],
          },
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "index",
          type: "u64",
        },
        {
          name: "merkle_root",
          type: {
            array: ["u8", 32],
          },
        },
        {
          name: "total",
          type: "u64",
        },
      ],
    },
    {
      name: "deposit",
      docs: [
        "Handles user deposits of vault tokens (e.g., wYLDS):",
        "- Transfers vault tokens to program vault account",
        "- Mints equivalent amount of stake tokens (e.g., PRIME) to user",
      ],
      discriminator: [242, 35, 198, 137, 82, 225, 242, 182],
      accounts: [
        {
          name: "config",
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
          name: "vault_token_account",
          writable: true,
        },
        {
          name: "mint",
          writable: true,
        },
        {
          name: "mint_authority",
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
          name: "signer",
          writable: true,
          signer: true,
        },
        {
          name: "user_vault_token_account",
          writable: true,
        },
        {
          name: "user_mint_token_account",
          writable: true,
        },
        {
          name: "token_program",
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
      name: "freeze_token_account",
      discriminator: [138, 168, 178, 109, 205, 224, 209, 93],
      accounts: [
        {
          name: "config",
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
          name: "token_account",
          writable: true,
        },
        {
          name: "mint",
        },
        {
          name: "freeze_authority_pda",
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  102, 114, 101, 101, 122, 101, 95, 97, 117, 116, 104, 111, 114,
                  105, 116, 121,
                ],
              },
            ],
          },
        },
        {
          name: "signer",
          signer: true,
        },
        {
          name: "token_program",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
      ],
      args: [],
    },
    {
      name: "initialize",
      docs: [
        "Initializes the vault program with the required token configurations:",
        "- vault_mint: The token that users deposit (e.g., wYLDS)",
        "- stake_mint: The token users receive when staking (e.g., PRIME)",
        "- unbonding_period: Time in seconds users must wait before redeeming",
      ],
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237],
      accounts: [
        {
          name: "config",
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
          name: "vault_authority",
          docs: [
            "This PDA will be set as the owner of the vault_token_account in the config",
            "The vault token account holds the deposited vault tokens (e.g., wYLDS)",
            "and is controlled by this program via the vault_authority PDA",
            "This ensures that only this program can move tokens out of the vault",
            "and prevents unauthorized access.",
          ],
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  118, 97, 117, 108, 116, 95, 97, 117, 116, 104, 111, 114, 105,
                  116, 121,
                ],
              },
            ],
          },
        },
        {
          name: "vault_token_account",
          docs: [
            "The vault token account that should be owned by vault_authority",
          ],
          writable: true,
        },
        {
          name: "vault_mint",
        },
        {
          name: "mint",
        },
        {
          name: "signer",
          writable: true,
          signer: true,
        },
        {
          name: "token_program",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
        {
          name: "rent",
          address: "SysvarRent111111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "vault_mint",
          type: "pubkey",
        },
        {
          name: "stake_mint",
          type: "pubkey",
        },
        {
          name: "unbonding_period",
          type: "i64",
        },
        {
          name: "freeze_administrators",
          type: {
            vec: "pubkey",
          },
        },
        {
          name: "rewards_administrators",
          type: {
            vec: "pubkey",
          },
        },
      ],
    },
    {
      name: "redeem",
      docs: [
        "Completes the unbonding process after the period expires:",
        "- Burns unbonding tokens (e.g., uPRIME)",
        "- Returns vault tokens (e.g., wYLDS) to user",
      ],
      discriminator: [184, 12, 86, 149, 70, 196, 97, 225],
      accounts: [
        {
          name: "config",
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
          name: "vault_token_account",
          writable: true,
        },
        {
          name: "vault_authority",
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  118, 97, 117, 108, 116, 95, 97, 117, 116, 104, 111, 114, 105,
                  116, 121,
                ],
              },
            ],
          },
        },
        {
          name: "signer",
          writable: true,
          signer: true,
        },
        {
          name: "ticket",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [116, 105, 99, 107, 101, 116],
              },
              {
                kind: "account",
                path: "signer",
              },
            ],
          },
        },
        {
          name: "user_vault_token_account",
          writable: true,
        },
        {
          name: "user_mint_token_account",
          writable: true,
        },
        {
          name: "mint",
          writable: true,
        },
        {
          name: "token_program",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
      ],
      args: [],
    },
    {
      name: "set_mint_authority",
      docs: [
        "Sets the mint authority for a specified token type",
        "Used to configure program control over token minting",
      ],
      discriminator: [67, 127, 155, 187, 100, 174, 103, 121],
      accounts: [
        {
          name: "config",
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
          writable: true,
        },
        {
          name: "program_data",
        },
        {
          name: "mint_authority",
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
          name: "signer",
          signer: true,
        },
        {
          name: "token_program",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
      ],
      args: [
        {
          name: "new_authority",
          type: "pubkey",
        },
      ],
    },
    {
      name: "thaw_token_account",
      discriminator: [199, 172, 96, 93, 244, 252, 137, 171],
      accounts: [
        {
          name: "config",
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
          name: "token_account",
          writable: true,
        },
        {
          name: "mint",
        },
        {
          name: "freeze_authority_pda",
          pda: {
            seeds: [
              {
                kind: "const",
                value: [
                  102, 114, 101, 101, 122, 101, 95, 97, 117, 116, 104, 111, 114,
                  105, 116, 121,
                ],
              },
            ],
          },
        },
        {
          name: "signer",
          signer: true,
        },
        {
          name: "token_program",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
      ],
      args: [],
    },
    {
      name: "unbond",
      docs: [
        "Initiates the unbonding process:",
        "- Burns user's stake tokens (e.g., PRIME)",
        "- Starts unbonding period timer via user ticket",
      ],
      discriminator: [151, 129, 36, 46, 102, 195, 111, 122],
      accounts: [
        {
          name: "config",
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
          writable: true,
          signer: true,
        },
        {
          name: "mint",
          writable: true,
        },
        {
          name: "user_mint_token_account",
          writable: true,
        },
        {
          name: "ticket",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [116, 105, 99, 107, 101, 116],
              },
              {
                kind: "account",
                path: "signer",
              },
            ],
          },
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
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
      name: "update_config",
      docs: [
        "Updates the program configuration with new token addresses:",
        "- new_unbonding_period: New unbonding period in seconds",
      ],
      discriminator: [29, 158, 252, 191, 10, 83, 219, 99],
      accounts: [
        {
          name: "config",
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
          name: "program_data",
        },
        {
          name: "rent",
          address: "SysvarRent111111111111111111111111111111111",
        },
        {
          name: "signer",
          signer: true,
        },
      ],
      args: [
        {
          name: "new_unbonding_period",
          type: "i64",
        },
      ],
    },
    {
      name: "update_freeze_administrators",
      discriminator: [169, 194, 112, 142, 80, 94, 72, 189],
      accounts: [
        {
          name: "config",
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
          name: "program_data",
        },
        {
          name: "signer",
          signer: true,
        },
      ],
      args: [
        {
          name: "new_administrators",
          type: {
            vec: "pubkey",
          },
        },
      ],
    },
    {
      name: "update_rewards_administrators",
      discriminator: [152, 46, 142, 129, 7, 137, 219, 237],
      accounts: [
        {
          name: "config",
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
          name: "program_data",
        },
        {
          name: "signer",
          signer: true,
        },
      ],
      args: [
        {
          name: "new_administrators",
          type: {
            vec: "pubkey",
          },
        },
      ],
    },
  ],
  accounts: [
    {
      name: "ClaimRecord",
      discriminator: [57, 229, 0, 9, 65, 62, 96, 7],
    },
    {
      name: "Config",
      discriminator: [155, 12, 170, 224, 30, 250, 204, 130],
    },
    {
      name: "RewardsEpoch",
      discriminator: [19, 164, 140, 222, 83, 245, 249, 74],
    },
    {
      name: "UnbondingTicket",
      discriminator: [213, 129, 239, 0, 7, 4, 215, 83],
    },
  ],
  errors: [
    {
      code: 6001,
      name: "InvalidAmount",
      msg: "Invalid amount",
    },
    {
      code: 6002,
      name: "InvalidTokenReceived",
      msg: "Invalid token received",
    },
    {
      code: 6003,
      name: "InvalidVault",
      msg: "Invalid vault",
    },
    {
      code: 6004,
      name: "InvalidAuthority",
      msg: "Invalid authority",
    },
    {
      code: 6005,
      name: "InsufficientBalance",
      msg: "Insufficient balance",
    },
    {
      code: 6006,
      name: "UnbondingPeriodNotElapsed",
      msg: "Unbonding period not elapsed",
    },
    {
      code: 6007,
      name: "InsufficientUnbondingBalance",
      msg: "Insufficient unbonding balance",
    },
    {
      code: 6008,
      name: "UnbondingInProgress",
      msg: "Unbonding is currently in progress",
    },
    {
      code: 6009,
      name: "InvalidMint",
      msg: "Invalid mint provided",
    },
    {
      code: 6010,
      name: "InvalidVaultMint",
      msg: "Invalid vault mint provided",
    },
    {
      code: 6011,
      name: "InvalidTicketOwner",
      msg: "Invalid ticket owner",
    },
    {
      code: 6012,
      name: "InvalidMintAuthority",
      msg: "Invalid mint authority",
    },
    {
      code: 6013,
      name: "InsufficientVaultBalance",
      msg: "Insufficient vault balance",
    },
    {
      code: 6014,
      name: "InvalidVaultAuthority",
      msg: "Invalid vault authority",
    },
    {
      code: 6015,
      name: "InvalidFreezeAuthority",
      msg: "Invalid freeze authority",
    },
    {
      code: 6016,
      name: "InvalidProgramData",
      msg: "ProgramData account did not match expected PDA.",
    },
    {
      code: 6017,
      name: "NoUpgradeAuthority",
      msg: "Program has no upgrade authority (set to None).",
    },
    {
      code: 6018,
      name: "InvalidUpgradeAuthority",
      msg: "Signer is not the upgrade authority.",
    },
    {
      code: 6019,
      name: "MissingSigner",
      msg: "Signer account missing.",
    },
    {
      code: 6020,
      name: "TooManyAdministrators",
      msg: "Too many freeze administrators.",
    },
    {
      code: 6021,
      name: "UnauthorizedFreezeAdministrator",
      msg: "Unauthorized freeze administrator",
    },
    {
      code: 6022,
      name: "InvalidRewardsEpoch",
      msg: "Invalid rewards epoch",
    },
    {
      code: 6023,
      name: "InvalidMerkleProof",
      msg: "Invalid merkle proof",
    },
    {
      code: 6024,
      name: "RewardsAlreadyClaimed",
      msg: "Rewards already claimed for this epoch",
    },
    {
      code: 6025,
      name: "InvalidRewardsAdministrator",
      msg: "Invalid rewards administrator",
    },
  ],
  types: [
    {
      name: "ClaimRecord",
      type: {
        kind: "struct",
        fields: [],
      },
    },
    {
      name: "Config",
      type: {
        kind: "struct",
        fields: [
          {
            name: "vault",
            type: "pubkey",
          },
          {
            name: "mint",
            type: "pubkey",
          },
          {
            name: "unbonding_period",
            type: "i64",
          },
          {
            name: "freeze_administrators",
            type: {
              vec: "pubkey",
            },
          },
          {
            name: "rewards_administrators",
            type: {
              vec: "pubkey",
            },
          },
          {
            name: "bump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "RewardsEpoch",
      type: {
        kind: "struct",
        fields: [
          {
            name: "index",
            type: "u64",
          },
          {
            name: "merkle_root",
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "total",
            type: "u64",
          },
          {
            name: "created_ts",
            type: "i64",
          },
        ],
      },
    },
    {
      name: "UnbondingTicket",
      type: {
        kind: "struct",
        fields: [
          {
            name: "owner",
            type: "pubkey",
          },
          {
            name: "requested_amount",
            type: "u64",
          },
          {
            name: "start_balance",
            type: "u64",
          },
          {
            name: "start_ts",
            type: "i64",
          },
        ],
      },
    },
  ],
};
