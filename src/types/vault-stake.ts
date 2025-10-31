/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/vault_stake.json`.
 */
export type VaultStake = {
  "address": "97V7JsExNC6yFWu5KjK1FLfVkNVvtMpAFL5QkLWKEGxY",
  "metadata": {
    "name": "vaultStake",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Solana Vault Stake Contract for Hastra"
  },
  "instructions": [
    {
      "name": "deposit",
      "docs": [
        "Handles user deposits of vault tokens (e.g., wYLDS):",
        "- Transfers vault tokens to program vault account",
        "- Mints equivalent amount of stake tokens (e.g., PRIME) to user"
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
          "name": "stakeConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  95,
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
          "name": "vaultAuthority",
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
          "name": "stakeConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  95,
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
        "- vault_mint: The token that users deposit (e.g., wYLDS)",
        "- stake_mint: The token users receive when staking (e.g., PRIME)",
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
          "name": "stakeConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  95,
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
          "name": "vaultAuthority",
          "docs": [
            "This PDA will be set as the owner of the vault_token_account in the config",
            "The vault token account holds the deposited vault tokens (e.g., wYLDS)",
            "and is controlled by this program via the vault_authority PDA",
            "This ensures that only this program can move tokens out of the vault",
            "and prevents unauthorized access."
          ],
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
          "name": "vaultTokenAccount",
          "docs": [
            "The vault token account that should be owned by vault_authority"
          ],
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
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
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
          "name": "stakeMint",
          "type": "pubkey"
        },
        {
          "name": "unbondingPeriod",
          "type": "i64"
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
        }
      ]
    },
    {
      "name": "pause",
      "docs": [
        "Pauses or unpauses the protocol operations:",
        "- pause: true to pause, false to unpause"
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
          "name": "stakeConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  95,
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
      "name": "publishRewards",
      "discriminator": [
        200,
        232,
        166,
        158,
        160,
        127,
        250,
        43
      ],
      "accounts": [
        {
          "name": "stakeConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  95,
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
          "name": "mintConfig",
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
            ],
            "program": {
              "kind": "account",
              "path": "mintProgram"
            }
          }
        },
        {
          "name": "thisProgram"
        },
        {
          "name": "mintProgram"
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "rewardsMint",
          "writable": true
        },
        {
          "name": "rewardsMintAuthority",
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
            ],
            "program": {
              "kind": "account",
              "path": "mintProgram"
            }
          }
        },
        {
          "name": "vaultTokenAccount",
          "writable": true
        },
        {
          "name": "vaultAuthority",
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
      "name": "redeem",
      "docs": [
        "Completes the unbonding process after the period expires:",
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
          "name": "stakeConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  95,
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
          "name": "vaultAuthority",
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
          "name": "userVaultTokenAccount",
          "writable": true
        },
        {
          "name": "userMintTokenAccount",
          "writable": true
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
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
          "name": "stakeConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  95,
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
      "name": "unbond",
      "docs": [
        "Initiates the unbonding process:",
        "- Burns user's stake tokens (e.g., PRIME)",
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
          "name": "stakeConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  95,
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
          "name": "mint"
        },
        {
          "name": "userMintTokenAccount"
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
          "name": "systemProgram",
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
      "name": "updateConfig",
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
          "name": "stakeConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  95,
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
          "name": "newUnbondingPeriod",
          "type": "i64"
        }
      ]
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
          "name": "stakeConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  95,
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
          "name": "stakeConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  95,
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
      "name": "stakeConfig",
      "discriminator": [
        238,
        151,
        43,
        3,
        11,
        151,
        63,
        176
      ]
    },
    {
      "name": "unbondingTicket",
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
      "name": "redeemEvent",
      "discriminator": [
        90,
        114,
        83,
        146,
        212,
        26,
        217,
        59
      ]
    },
    {
      "name": "rewardsPublished",
      "discriminator": [
        98,
        168,
        196,
        9,
        93,
        12,
        123,
        82
      ]
    },
    {
      "name": "unbondEvent",
      "discriminator": [
        123,
        188,
        223,
        76,
        174,
        70,
        46,
        123
      ]
    },
    {
      "name": "unbondingPeriodUpdated",
      "discriminator": [
        124,
        81,
        241,
        240,
        54,
        118,
        249,
        182
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
      "name": "invalidTokenReceived",
      "msg": "Invalid token received"
    },
    {
      "code": 6003,
      "name": "invalidVault",
      "msg": "Invalid vault"
    },
    {
      "code": 6004,
      "name": "invalidAuthority",
      "msg": "Invalid authority"
    },
    {
      "code": 6005,
      "name": "insufficientBalance",
      "msg": "Insufficient balance"
    },
    {
      "code": 6006,
      "name": "unbondingPeriodNotElapsed",
      "msg": "Unbonding period not elapsed"
    },
    {
      "code": 6007,
      "name": "insufficientUnbondingBalance",
      "msg": "Insufficient unbonding balance"
    },
    {
      "code": 6008,
      "name": "unbondingInProgress",
      "msg": "Unbonding is currently in progress"
    },
    {
      "code": 6009,
      "name": "invalidMint",
      "msg": "Invalid mint provided"
    },
    {
      "code": 6010,
      "name": "invalidVaultMint",
      "msg": "Invalid vault mint provided"
    },
    {
      "code": 6011,
      "name": "invalidTicketOwner",
      "msg": "Invalid ticket owner"
    },
    {
      "code": 6012,
      "name": "invalidMintAuthority",
      "msg": "Invalid mint authority"
    },
    {
      "code": 6013,
      "name": "insufficientVaultBalance",
      "msg": "Insufficient vault balance"
    },
    {
      "code": 6014,
      "name": "invalidVaultAuthority",
      "msg": "Invalid vault authority"
    },
    {
      "code": 6015,
      "name": "invalidFreezeAuthority",
      "msg": "Invalid freeze authority"
    },
    {
      "code": 6016,
      "name": "invalidProgramData",
      "msg": "ProgramData account did not match expected PDA."
    },
    {
      "code": 6017,
      "name": "noUpgradeAuthority",
      "msg": "Program has no upgrade authority (set to None)."
    },
    {
      "code": 6018,
      "name": "invalidUpgradeAuthority",
      "msg": "Signer is not the upgrade authority."
    },
    {
      "code": 6019,
      "name": "missingSigner",
      "msg": "Signer account missing."
    },
    {
      "code": 6020,
      "name": "tooManyAdministrators",
      "msg": "Too many freeze administrators."
    },
    {
      "code": 6021,
      "name": "unauthorizedFreezeAdministrator",
      "msg": "Unauthorized freeze administrator"
    },
    {
      "code": 6025,
      "name": "invalidRewardsAdministrator",
      "msg": "Invalid rewards administrator"
    },
    {
      "code": 6026,
      "name": "vaultAndMintCannotBeSame",
      "msg": "Vault and mint cannot be the same"
    },
    {
      "code": 6027,
      "name": "protocolPaused",
      "msg": "Protocol is paused"
    },
    {
      "code": 6028,
      "name": "invalidBondingPeriod",
      "msg": "Invalid bonding period"
    },
    {
      "code": 6029,
      "name": "invalidTokenOwner",
      "msg": "Invalid token owner"
    },
    {
      "code": 6030,
      "name": "invalidMintProgramOwner",
      "msg": "Invalid mint program owner"
    }
  ],
  "types": [
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
            "name": "depositAmount",
            "type": "u64"
          },
          {
            "name": "mintedAmount",
            "type": "u64"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "mintSupply",
            "type": "u64"
          },
          {
            "name": "vault",
            "type": "pubkey"
          },
          {
            "name": "vaultBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "redeemEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "requestedMintAmount",
            "type": "u64"
          },
          {
            "name": "mintSupply",
            "type": "u64"
          },
          {
            "name": "vault",
            "type": "pubkey"
          },
          {
            "name": "redeemedVaultAmount",
            "type": "u64"
          },
          {
            "name": "vaultBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "rewardsPublished",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "mintProgram",
            "type": "pubkey"
          },
          {
            "name": "vaultTokenAccount",
            "type": "pubkey"
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
      "name": "stakeConfig",
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
            "name": "unbondingPeriod",
            "type": "i64"
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
      "name": "unbondEvent",
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
      "name": "unbondingPeriodUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "oldPeriod",
            "type": "i64"
          },
          {
            "name": "newPeriod",
            "type": "i64"
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
      "name": "unbondingTicket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "requestedAmount",
            "type": "u64"
          },
          {
            "name": "startBalance",
            "type": "u64"
          },
          {
            "name": "startTs",
            "type": "i64"
          }
        ]
      }
    }
  ]
};
