/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/vault_mint.json`.
 */
export type VaultMint = {
  "address": "9WUyNREiPDMgwMh5Gt81Fd3JpiCKxpjZ5Dpq9Bo1RhMV",
  "metadata": {
    "name": "vaultMint",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Solana Vault Mint Contract for Hastra"
  },
  "instructions": [
    {
      "name": "claimRewards",
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
          "name": "claimRecord",
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
          "name": "mintAuthority",
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
          "name": "userMintTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
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
                "name": "proofNode"
              }
            }
          }
        }
      ]
    },
    {
      "name": "completeRedeem",
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
          "name": "redemptionRequest",
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
          "name": "userMintTokenAccount",
          "writable": true
        },
        {
          "name": "userVaultTokenAccount",
          "writable": true
        },
        {
          "name": "redeemVaultTokenAccount",
          "writable": true
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "redeemVaultAuthority",
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
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "createRewardsEpoch",
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
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u64"
        },
        {
          "name": "merkleRoot",
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
          "name": "vaultTokenAccount",
          "writable": true
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "mintAuthority",
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
          "name": "userVaultTokenAccount",
          "writable": true
        },
        {
          "name": "userMintTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram",
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
      "name": "externalProgramMint",
      "docs": [
        "Allows an external authorized program to mint tokens to a specified account."
      ],
      "discriminator": [
        97,
        91,
        212,
        77,
        203,
        242,
        83,
        216
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
          "name": "externalMintProgramCaller"
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "mintAuthority",
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
          "name": "destination",
          "writable": true
        },
        {
          "name": "tokenProgram",
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
      "name": "freezeTokenAccount",
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
          "name": "tokenAccount",
          "writable": true
        },
        {
          "name": "mint"
        },
        {
          "name": "freezeAuthorityPda",
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
          "name": "tokenProgram",
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
        "- mint: The token users receive when deposit received (e.g., wYLDS)",
        "- freeze_administrators: List of pubkeys authorized to freeze/thaw token accounts",
        "- rewards_administrators: List of pubkeys authorized to create rewards epochs",
        "- allowed_external_mint_program: An external program authorized to mint tokens"
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
          "name": "vaultTokenAccount"
        },
        {
          "name": "redeemVaultAuthority",
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
          "name": "redeemVaultTokenAccount",
          "writable": true
        },
        {
          "name": "vaultTokenMint"
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
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "programData"
        }
      ],
      "args": [
        {
          "name": "vaultTokenMint",
          "type": "pubkey"
        },
        {
          "name": "mint",
          "type": "pubkey"
        },
        {
          "name": "freezeAdministrators",
          "type": {
            "vec": "pubkey"
          }
        },
        {
          "name": "rewardsAdministrators",
          "type": {
            "vec": "pubkey"
          }
        },
        {
          "name": "allowedExternalMintProgram",
          "type": "pubkey"
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
          "name": "programData"
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
      "name": "requestRedeem",
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
          "name": "userMintTokenAccount",
          "writable": true
        },
        {
          "name": "redemptionRequest",
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
          "name": "redeemVaultAuthority",
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
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
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
      "name": "thawTokenAccount",
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
          "name": "tokenAccount",
          "writable": true
        },
        {
          "name": "mint"
        },
        {
          "name": "freezeAuthorityPda",
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
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "updateFreezeAdministrators",
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
          "name": "programData"
        },
        {
          "name": "signer",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "newAdministrators",
          "type": {
            "vec": "pubkey"
          }
        }
      ]
    },
    {
      "name": "updateRewardsAdministrators",
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
          "name": "programData"
        },
        {
          "name": "signer",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "newAdministrators",
          "type": {
            "vec": "pubkey"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "claimRecord",
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
      "name": "config",
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
      "name": "redemptionRequest",
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
      "name": "rewardsEpoch",
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
      "name": "depositEvent",
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
      "name": "externalProgramMintEvent",
      "discriminator": [
        203,
        36,
        160,
        37,
        198,
        195,
        30,
        139
      ]
    },
    {
      "name": "redeemCompleted",
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
      "name": "redemptionRequested",
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
      "name": "rewardsClaimed",
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
      "name": "invalidAmount",
      "msg": "Invalid amount"
    },
    {
      "code": 6002,
      "name": "invalidAuthority",
      "msg": "Invalid authority"
    },
    {
      "code": 6003,
      "name": "insufficientBalance",
      "msg": "Insufficient balance"
    },
    {
      "code": 6004,
      "name": "invalidMint",
      "msg": "Invalid mint provided"
    },
    {
      "code": 6005,
      "name": "invalidVaultMint",
      "msg": "Invalid vault mint provided"
    },
    {
      "code": 6006,
      "name": "invalidMintAuthority",
      "msg": "Invalid mint authority"
    },
    {
      "code": 6007,
      "name": "insufficientVaultBalance",
      "msg": "Insufficient vault balance"
    },
    {
      "code": 6008,
      "name": "invalidVaultAuthority",
      "msg": "Invalid vault authority"
    },
    {
      "code": 6009,
      "name": "invalidFreezeAuthority",
      "msg": "Invalid freeze authority"
    },
    {
      "code": 6010,
      "name": "invalidProgramData",
      "msg": "ProgramData account did not match expected PDA."
    },
    {
      "code": 6011,
      "name": "noUpgradeAuthority",
      "msg": "Program has no upgrade authority (set to None)."
    },
    {
      "code": 6012,
      "name": "invalidUpgradeAuthority",
      "msg": "Signer is not the upgrade authority."
    },
    {
      "code": 6013,
      "name": "missingSigner",
      "msg": "Signer account missing."
    },
    {
      "code": 6014,
      "name": "tooManyAdministrators",
      "msg": "Too many freeze administrators."
    },
    {
      "code": 6015,
      "name": "unauthorizedFreezeAdministrator",
      "msg": "Unauthorized freeze administrator"
    },
    {
      "code": 6016,
      "name": "invalidRewardsEpoch",
      "msg": "Invalid rewards epoch"
    },
    {
      "code": 6017,
      "name": "invalidMerkleProof",
      "msg": "Invalid merkle proof"
    },
    {
      "code": 6018,
      "name": "rewardsAlreadyClaimed",
      "msg": "Rewards already claimed for this epoch"
    },
    {
      "code": 6019,
      "name": "invalidRewardsAdministrator",
      "msg": "Invalid rewards administrator"
    },
    {
      "code": 6020,
      "name": "invalidTokenOwner",
      "msg": "Invalid token owner"
    },
    {
      "code": 6021,
      "name": "alreadyFulfilled",
      "msg": "Redemption request already fulfilled"
    },
    {
      "code": 6022,
      "name": "requestNotFound",
      "msg": "Redemption request not found"
    },
    {
      "code": 6023,
      "name": "insufficientRedeemVaultFunds",
      "msg": "Insufficient lamport funds in redeem vault authority"
    },
    {
      "code": 6024,
      "name": "requestAlreadyExists",
      "msg": "Redeem request already exists"
    },
    {
      "code": 6025,
      "name": "vaultAndMintCannotBeSame",
      "msg": "Vault and mint cannot be the same"
    },
    {
      "code": 6026,
      "name": "protocolPaused",
      "msg": "Protocol is paused"
    },
    {
      "code": 6027,
      "name": "invalidMintProgramCaller",
      "msg": "Invalid program calling mint"
    }
  ],
  "types": [
    {
      "name": "claimRecord",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "config",
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
            "name": "freezeAdministrators",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "rewardsAdministrators",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "vaultAuthority",
            "type": "pubkey"
          },
          {
            "name": "redeemVault",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "paused",
            "type": "bool"
          },
          {
            "name": "allowedExternalMintProgram",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "depositEvent",
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
      "name": "externalProgramMintEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "externalMintProgramCaller",
            "type": "pubkey"
          },
          {
            "name": "destination",
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
      "name": "proofNode",
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
            "name": "isLeft",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "redeemCompleted",
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
      "name": "redemptionRequest",
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
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "redemptionRequested",
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
            "name": "vaultTokenMint",
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
      "name": "rewardsClaimed",
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
      "name": "rewardsEpoch",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "merkleRoot",
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
            "name": "createdTs",
            "type": "i64"
          }
        ]
      }
    }
  ]
};
