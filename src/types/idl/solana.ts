/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/sol_vault_mint.json`.
 */

export const solVaultMintIdl = () => {
    if(import.meta.env.PROD) {
        return SolVaultMintProd;
    }
    return SolVaultMintDev;
}

export const SolVaultMintDev = {
    "address": "3vz4uKCMKxFhb9DPf72Csk3HLT5ST8itiviArMSjqCc4",
    "metadata": {
        "name": "solVaultMint",
        "version": "0.1.0",
        "spec": "0.1.0",
        "description": "Vault and Mint Contract for Hastra"
    },
    "instructions": [
        {
            "name": "depositAndMint",
            "discriminator": [
                97,
                126,
                119,
                210,
                67,
                186,
                64,
                23
            ],
            "accounts": [
                {
                    "name": "signer",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "swapToken",
                    "writable": true
                },
                {
                    "name": "toAccount",
                    "writable": true
                },
                {
                    "name": "vault",
                    "writable": true
                },
                {
                    "name": "mint",
                    "writable": true
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
                    "name": "mintAuthority",
                    "writable": true,
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
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "initialize",
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
                    "name": "signer",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": [
                {
                    "name": "vaultKey",
                    "type": "pubkey"
                },
                {
                    "name": "mintKey",
                    "type": "pubkey"
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
                    }
                ]
            }
        }
    ]
};

export const SolVaultMintProd = {
    "address": "3vz4uKCMKxFhb9DPf72Csk3HLT5ST8itiviArMSjqCc4",
    "metadata": {
        "name": "solVaultMint",
        "version": "0.1.0",
        "spec": "0.1.0",
        "description": "Vault and Mint Contract for Hastra"
    },
    "instructions": [
        {
            "name": "depositAndMint",
            "discriminator": [
                97,
                126,
                119,
                210,
                67,
                186,
                64,
                23
            ],
            "accounts": [
                {
                    "name": "signer",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "swapToken",
                    "writable": true
                },
                {
                    "name": "toAccount",
                    "writable": true
                },
                {
                    "name": "vault",
                    "writable": true
                },
                {
                    "name": "mint",
                    "writable": true
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
                    "name": "mintAuthority",
                    "writable": true,
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
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "initialize",
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
                    "name": "signer",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": [
                {
                    "name": "vaultKey",
                    "type": "pubkey"
                },
                {
                    "name": "mintKey",
                    "type": "pubkey"
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
                    }
                ]
            }
        }
    ]
};
