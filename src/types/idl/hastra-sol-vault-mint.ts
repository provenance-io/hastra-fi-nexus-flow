export const HastraSolVaultMint = {
  "address": "3VkpgDpmazgvT6cLKp1UqyAqHKBM46cfpbHhc5ihYta9",
  "metadata": {
    "name": "hastra_sol_vault_mint",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Vault and Mint Contract for Hastra"
  },
  "instructions": [
    {
      "name": "claim_rewards",
      "docs": [
        "This is the classic “airdrop/claim per epoch” design",
        "High-level idea:",
        "1.\tOff-chain (admin does this each epoch):",
        "•\tCalculate each user’s reward for this epoch.",
        "•\tBuild a Merkle tree of (user, amount, epoch_index).",
        "•\tPublish the Merkle root on-chain with the create_rewards_epoch function above.",
        "",
        "2.\tOn-chain:",
        "•\tStore each epoch’s Merkle root in a PDA.",
        "•\tWhen a user claims, they present (amount, proof) for their pubkey.",
        "•\tThe program verifies the Merkle proof against the root.",
        "•\tIf valid, transfer reward tokens (wYLDS) from the rewards vault to the user's mint token account.",
        "•\tMark the claim as redeemed so they can’t double-claim."
      ],
      "discriminator": [
        4,
        144,
        132,
        71,
        116,
        23,
        151,
        80
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
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "epoch"
        },
        {
          "name": "claim_record",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  108,
                  97,
                  105,
                  109
                ]
              },
              {
                "kind": "account",
                "path": "epoch"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
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
          "name": "user_mint_token_account",
          "writable": true
        },
        {
          "name": "token_program",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
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
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "defined": {
                "name": "ProofNode"
              }
            }
          }
        }
      ]
    },
    {
      "name": "complete_redeem",
      "discriminator": [
        234,
        40,
        26,
        254,
        202,
        90,
        42,
        209
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "user",
          "docs": [
            "The original user (to validate and to receive close rent)",
            "(Not required to be a signer here.)",
            "must be writeable to close the account = user will transfer rent to user"
          ],
          "writable": true
        },
        {
          "name": "redemption_request",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  100,
                  101,
                  109,
                  112,
                  116,
                  105,
                  111,
                  110,
                  95,
                  114,
                  101,
                  113,
                  117,
                  101,
                  115,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "user_mint_token_account",
          "writable": true
        },
        {
          "name": "user_vault_token_account",
          "writable": true
        },
        {
          "name": "redeem_vault_token_account",
          "writable": true
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "redeem_vault_authority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  100,
                  101,
                  101,
                  109,
                  95,
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
          "name": "token_program",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "create_rewards_epoch",
      "discriminator": [
        64,
        195,
        84,
        28,
        247,
        167,
        132,
        46
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
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "epoch",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  112,
                  111,
                  99,
                  104
                ]
              },
              {
                "kind": "arg",
                "path": "index"
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
          "name": "index",
          "type": "u64"
        },
        {
          "name": "merkle_root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "total",
          "type": "u64"
        }
      ]
    },
    {
      "name": "deposit",
      "docs": [
        "Handles user deposits of vault tokens (e.g., USDC):",
        "- Transfers vault tokens to program vault account",
        "- Mints equivalent amount of mint tokens (e.g., wYLDS) to user"
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
      "name": "freeze_token_account",
      "discriminator": [
        138,
        168,
        178,
        109,
        205,
        224,
        209,
        93
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
          "name": "token_account",
          "writable": true
        },
        {
          "name": "mint"
        },
        {
          "name": "freeze_authority_pda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  114,
                  101,
                  101,
                  122,
                  101,
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
          "signer": true
        },
        {
          "name": "token_program",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "initialize",
      "docs": [
        "Initializes the vault program with the required token configurations:",
        "- vault_mint: The token that users deposit (e.g., USDC)",
        "- mint: The token users receive when deposit received (e.g., wYLDS)"
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
          "name": "vault_token_account"
        },
        {
          "name": "redeem_vault_authority",
          "docs": [
            "This PDA will be set as the owner of the redeem_vault_token_account in the config",
            "The redeem vault token account holds the deposited vault tokens (e.g., USDC)",
            "and is controlled by this program via the redeem_vault_authority PDA",
            "This ensures that only this program can move tokens out of the redeem vault",
            "and prevents unauthorized access."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  100,
                  101,
                  101,
                  109,
                  95,
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
          "name": "redeem_vault_token_account",
          "writable": true
        },
        {
          "name": "vault_mint"
        },
        {
          "name": "mint"
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "token_program",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "program_data"
        }
      ],
      "args": [
        {
          "name": "vault_mint",
          "type": "pubkey"
        },
        {
          "name": "mint",
          "type": "pubkey"
        },
        {
          "name": "freeze_administrators",
          "type": {
            "vec": "pubkey"
          }
        },
        {
          "name": "rewards_administrators",
          "type": {
            "vec": "pubkey"
          }
        }
      ]
    },
    {
      "name": "pause",
      "docs": [
        "Pauses or unpauses the program, disabling or enabling deposit and redeem functions."
      ],
      "discriminator": [
        211,
        22,
        221,
        251,
        74,
        121,
        193,
        47
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
          "name": "program_data"
        },
        {
          "name": "signer",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "pause",
          "type": "bool"
        }
      ]
    },
    {
      "name": "request_redeem",
      "docs": [
        "The redeem function allows users to withdraw their original vault tokens:",
        "- Transfers vault tokens from a program vault account to user",
        "- Burns the corresponding amount of mint tokens (e.g., wYLDS) from user"
      ],
      "discriminator": [
        105,
        49,
        44,
        38,
        207,
        241,
        33,
        173
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "user_mint_token_account",
          "writable": true
        },
        {
          "name": "redemption_request",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  100,
                  101,
                  109,
                  112,
                  116,
                  105,
                  111,
                  110,
                  95,
                  114,
                  101,
                  113,
                  117,
                  101,
                  115,
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
          "name": "redeem_vault_authority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  100,
                  101,
                  101,
                  109,
                  95,
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
          "name": "mint"
        },
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
          "name": "system_program",
          "address": "11111111111111111111111111111111"
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
      "name": "thaw_token_account",
      "discriminator": [
        199,
        172,
        96,
        93,
        244,
        252,
        137,
        171
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
          "name": "token_account",
          "writable": true
        },
        {
          "name": "mint"
        },
        {
          "name": "freeze_authority_pda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  114,
                  101,
                  101,
                  122,
                  101,
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
          "signer": true
        },
        {
          "name": "token_program",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "update_freeze_administrators",
      "discriminator": [
        169,
        194,
        112,
        142,
        80,
        94,
        72,
        189
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
          "name": "program_data"
        },
        {
          "name": "signer",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "new_administrators",
          "type": {
            "vec": "pubkey"
          }
        }
      ]
    },
    {
      "name": "update_rewards_administrators",
      "discriminator": [
        152,
        46,
        142,
        129,
        7,
        137,
        219,
        237
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
          "name": "program_data"
        },
        {
          "name": "signer",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "new_administrators",
          "type": {
            "vec": "pubkey"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "ClaimRecord",
      "discriminator": [
        57,
        229,
        0,
        9,
        65,
        62,
        96,
        7
      ]
    },
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
      "name": "RedemptionRequest",
      "discriminator": [
        117,
        157,
        214,
        214,
        64,
        160,
        31,
        58
      ]
    },
    {
      "name": "RewardsEpoch",
      "discriminator": [
        19,
        164,
        140,
        222,
        83,
        245,
        249,
        74
      ]
    }
  ],
  "events": [
    {
      "name": "DepositEvent",
      "discriminator": [
        120,
        248,
        61,
        83,
        31,
        142,
        107,
        144
      ]
    },
    {
      "name": "RedeemCompleted",
      "discriminator": [
        28,
        209,
        89,
        218,
        229,
        197,
        84,
        47
      ]
    },
    {
      "name": "RedemptionRequested",
      "discriminator": [
        245,
        155,
        98,
        131,
        210,
        25,
        137,
        146
      ]
    },
    {
      "name": "RewardsClaimed",
      "discriminator": [
        75,
        98,
        88,
        18,
        219,
        112,
        88,
        121
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
      "name": "InvalidAuthority",
      "msg": "Invalid authority"
    },
    {
      "code": 6003,
      "name": "InsufficientBalance",
      "msg": "Insufficient balance"
    },
    {
      "code": 6004,
      "name": "InvalidMint",
      "msg": "Invalid mint provided"
    },
    {
      "code": 6005,
      "name": "InvalidVaultMint",
      "msg": "Invalid vault mint provided"
    },
    {
      "code": 6006,
      "name": "InvalidMintAuthority",
      "msg": "Invalid mint authority"
    },
    {
      "code": 6007,
      "name": "InsufficientVaultBalance",
      "msg": "Insufficient vault balance"
    },
    {
      "code": 6008,
      "name": "InvalidVaultAuthority",
      "msg": "Invalid vault authority"
    },
    {
      "code": 6009,
      "name": "InvalidFreezeAuthority",
      "msg": "Invalid freeze authority"
    },
    {
      "code": 6010,
      "name": "InvalidProgramData",
      "msg": "ProgramData account did not match expected PDA."
    },
    {
      "code": 6011,
      "name": "NoUpgradeAuthority",
      "msg": "Program has no upgrade authority (set to None)."
    },
    {
      "code": 6012,
      "name": "InvalidUpgradeAuthority",
      "msg": "Signer is not the upgrade authority."
    },
    {
      "code": 6013,
      "name": "MissingSigner",
      "msg": "Signer account missing."
    },
    {
      "code": 6014,
      "name": "TooManyAdministrators",
      "msg": "Too many freeze administrators."
    },
    {
      "code": 6015,
      "name": "UnauthorizedFreezeAdministrator",
      "msg": "Unauthorized freeze administrator"
    },
    {
      "code": 6016,
      "name": "InvalidRewardsEpoch",
      "msg": "Invalid rewards epoch"
    },
    {
      "code": 6017,
      "name": "InvalidMerkleProof",
      "msg": "Invalid merkle proof"
    },
    {
      "code": 6018,
      "name": "RewardsAlreadyClaimed",
      "msg": "Rewards already claimed for this epoch"
    },
    {
      "code": 6019,
      "name": "InvalidRewardsAdministrator",
      "msg": "Invalid rewards administrator"
    },
    {
      "code": 6020,
      "name": "InvalidTokenOwner",
      "msg": "Invalid token owner"
    },
    {
      "code": 6021,
      "name": "AlreadyFulfilled",
      "msg": "Redemption request already fulfilled"
    },
    {
      "code": 6022,
      "name": "RequestNotFound",
      "msg": "Redemption request not found"
    },
    {
      "code": 6023,
      "name": "InsufficientRedeemVaultFunds",
      "msg": "Insufficient lamport funds in redeem vault authority"
    },
    {
      "code": 6024,
      "name": "RequestAlreadyExists",
      "msg": "Redeem request already exists"
    },
    {
      "code": 6025,
      "name": "VaultAndMintCannotBeSame",
      "msg": "Vault and mint cannot be the same"
    },
    {
      "code": 6026,
      "name": "ProtocolPaused",
      "msg": "Protocol is paused"
    }
  ],
  "types": [
    {
      "name": "ClaimRecord",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
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
            "name": "freeze_administrators",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "rewards_administrators",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "vault_authority",
            "type": "pubkey"
          },
          {
            "name": "redeem_vault",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "paused",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "DepositEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "vault",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "ProofNode",
      "docs": [
        "One Merkle proof element."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sibling",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "is_left",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "RedeemCompleted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "vault",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "RedemptionRequest",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "vault_mint",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "RedemptionRequested",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "vault_mint",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "RewardsClaimed",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "epoch",
            "type": "u64"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "vault",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "RewardsEpoch",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "merkle_root",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "total",
            "type": "u64"
          },
          {
            "name": "created_ts",
            "type": "i64"
          }
        ]
      }
    }
  ]
}