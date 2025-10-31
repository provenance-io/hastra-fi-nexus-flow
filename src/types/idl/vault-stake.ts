export const VaultStake = {
  "address": "97V7JsExNC6yFWu5KjK1FLfVkNVvtMpAFL5QkLWKEGxY",
  "metadata": {
    "name": "vault_stake",
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
          "name": "stake_config",
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
          "name": "stake_config",
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
          "name": "stake_config",
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
          "name": "vault_authority",
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
          "name": "vault_token_account",
          "docs": [
            "The vault token account that should be owned by vault_authority"
          ],
          "writable": true
        },
        {
          "name": "vault_token_mint"
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
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "program_data"
        }
      ],
      "args": [
        {
          "name": "vault_token_mint",
          "type": "pubkey"
        },
        {
          "name": "stake_mint",
          "type": "pubkey"
        },
        {
          "name": "unbonding_period",
          "type": "i64"
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
          "name": "stake_config",
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
      "name": "publish_rewards",
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
          "name": "stake_config",
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
          "name": "mint_config",
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
              "path": "mint_program"
            }
          }
        },
        {
          "name": "this_program"
        },
        {
          "name": "mint_program"
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "rewards_mint",
          "writable": true
        },
        {
          "name": "rewards_mint_authority",
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
              "path": "mint_program"
            }
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
          "name": "stake_config",
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
          "name": "stake_config",
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
          "name": "stake_config",
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
          "name": "user_mint_token_account"
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
          "name": "stake_config",
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
          "name": "program_data"
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
          "name": "new_unbonding_period",
          "type": "i64"
        }
      ]
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
          "name": "stake_config",
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
          "name": "stake_config",
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
      "name": "StakeConfig",
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
      "name": "RedeemEvent",
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
      "name": "RewardsPublished",
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
      "name": "UnbondEvent",
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
      "name": "UnbondingPeriodUpdated",
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
    },
    {
      "code": 6015,
      "name": "InvalidFreezeAuthority",
      "msg": "Invalid freeze authority"
    },
    {
      "code": 6016,
      "name": "InvalidProgramData",
      "msg": "ProgramData account did not match expected PDA."
    },
    {
      "code": 6017,
      "name": "NoUpgradeAuthority",
      "msg": "Program has no upgrade authority (set to None)."
    },
    {
      "code": 6018,
      "name": "InvalidUpgradeAuthority",
      "msg": "Signer is not the upgrade authority."
    },
    {
      "code": 6019,
      "name": "MissingSigner",
      "msg": "Signer account missing."
    },
    {
      "code": 6020,
      "name": "TooManyAdministrators",
      "msg": "Too many freeze administrators."
    },
    {
      "code": 6021,
      "name": "UnauthorizedFreezeAdministrator",
      "msg": "Unauthorized freeze administrator"
    },
    {
      "code": 6025,
      "name": "InvalidRewardsAdministrator",
      "msg": "Invalid rewards administrator"
    },
    {
      "code": 6026,
      "name": "VaultAndMintCannotBeSame",
      "msg": "Vault and mint cannot be the same"
    },
    {
      "code": 6027,
      "name": "ProtocolPaused",
      "msg": "Protocol is paused"
    },
    {
      "code": 6028,
      "name": "InvalidBondingPeriod",
      "msg": "Invalid bonding period"
    },
    {
      "code": 6029,
      "name": "InvalidTokenOwner",
      "msg": "Invalid token owner"
    },
    {
      "code": 6030,
      "name": "InvalidMintProgramOwner",
      "msg": "Invalid mint program owner"
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
          },
          {
            "name": "allowed_external_mint_program",
            "type": "pubkey"
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
            "name": "deposit_amount",
            "type": "u64"
          },
          {
            "name": "minted_amount",
            "type": "u64"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "mint_supply",
            "type": "u64"
          },
          {
            "name": "vault",
            "type": "pubkey"
          },
          {
            "name": "vault_balance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "RedeemEvent",
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
            "name": "requested_mint_amount",
            "type": "u64"
          },
          {
            "name": "mint_supply",
            "type": "u64"
          },
          {
            "name": "vault",
            "type": "pubkey"
          },
          {
            "name": "redeemed_vault_amount",
            "type": "u64"
          },
          {
            "name": "vault_balance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "RewardsPublished",
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
            "name": "mint_program",
            "type": "pubkey"
          },
          {
            "name": "vault_token_account",
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
      "name": "StakeConfig",
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
      "name": "UnbondEvent",
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
      "name": "UnbondingPeriodUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "old_period",
            "type": "i64"
          },
          {
            "name": "new_period",
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
}