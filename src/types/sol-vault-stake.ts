export type SolVaultStake = {
    "address": "G9cajZ82LeEpLT9RubWtHR5rixUnBHuJYRMarHKkvnRp",
    "metadata": {
        "name": "solVaultStake",
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
                    "writable": true,
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
                    "name": "vaultTokenAccount",
                    "writable": true
                },
                {
                    "name": "vaultMint"
                },
                {
                    "name": "tokenProgram",
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
                    "name": "vaultMint",
                    "type": "pubkey"
                },
                {
                    "name": "stakeMint",
                    "type": "pubkey"
                },
                {
                    "name": "unbondingPeriod",
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
            "name": "setMintAuthority",
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
                    "name": "userMintTokenAccount",
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
                    "name": "tokenProgram",
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                },
                {
                    "name": "rent",
                    "address": "SysvarRent111111111111111111111111111111111"
                }
            ],
            "args": [
                {
                    "name": "newUnbondingPeriod",
                    "type": "i64"
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
                        "name": "unbondingPeriod",
                        "type": "i64"
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
