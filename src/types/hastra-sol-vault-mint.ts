/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/hastra_sol_vault_mint.json`.
 */
export type HastraSolVaultMint = {
  address: "DyB1GKA83V8byG11QfwxZWdysbvVo5ySqjvwGZ471rqs";
  metadata: {
    name: "hastraSolVaultMint";
    version: "0.1.0";
    spec: "0.1.0";
    description: "Vault and Mint Contract for Hastra";
  };
  instructions: [
    {
      name: "claimRewards";
      docs: [
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
      ];
      discriminator: [4, 144, 132, 71, 116, 23, 151, 80];
      accounts: [
        {
          name: "config";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: "user";
          writable: true;
          signer: true;
        },
        {
          name: "epoch";
        },
        {
          name: "claimRecord";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 108, 97, 105, 109];
              },
              {
                kind: "account";
                path: "epoch";
              },
              {
                kind: "account";
                path: "user";
              }
            ];
          };
        },
        {
          name: "mint";
          writable: true;
        },
        {
          name: "mintAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
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
                ];
              }
            ];
          };
        },
        {
          name: "userMintTokenAccount";
          writable: true;
        },
        {
          name: "tokenProgram";
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        },
        {
          name: "proof";
          type: {
            vec: {
              array: ["u8", 32];
            };
          };
        }
      ];
    },
    {
      name: "createRewardsEpoch";
      discriminator: [64, 195, 84, 28, 247, 167, 132, 46];
      accounts: [
        {
          name: "config";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: "admin";
          writable: true;
          signer: true;
        },
        {
          name: "epoch";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [101, 112, 111, 99, 104];
              },
              {
                kind: "arg";
                path: "index";
              }
            ];
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "index";
          type: "u64";
        },
        {
          name: "merkleRoot";
          type: {
            array: ["u8", 32];
          };
        },
        {
          name: "total";
          type: "u64";
        }
      ];
    },
    {
      name: "deposit";
      docs: [
        "Handles user deposits of vault tokens (e.g., USDC):",
        "- Transfers vault tokens to program vault account",
        "- Mints equivalent amount of mint tokens (e.g., wYLDS) to user"
      ];
      discriminator: [242, 35, 198, 137, 82, 225, 242, 182];
      accounts: [
        {
          name: "config";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: "vaultTokenAccount";
          writable: true;
        },
        {
          name: "mint";
          writable: true;
        },
        {
          name: "mintAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
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
                ];
              }
            ];
          };
        },
        {
          name: "signer";
          writable: true;
          signer: true;
        },
        {
          name: "userVaultTokenAccount";
          writable: true;
        },
        {
          name: "userMintTokenAccount";
          writable: true;
        },
        {
          name: "tokenProgram";
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "freezeTokenAccount";
      discriminator: [138, 168, 178, 109, 205, 224, 209, 93];
      accounts: [
        {
          name: "config";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: "tokenAccount";
          writable: true;
        },
        {
          name: "mint";
        },
        {
          name: "freezeAuthorityPda";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
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
                ];
              }
            ];
          };
        },
        {
          name: "signer";
          signer: true;
        },
        {
          name: "tokenProgram";
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
        }
      ];
      args: [];
    },
    {
      name: "initialize";
      docs: [
        "Initializes the vault program with the required token configurations:",
        "- vault_mint: The token that users deposit (e.g., USDC)",
        "- mint: The token users receive when deposit received (e.g., wYLDS)"
      ];
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237];
      accounts: [
        {
          name: "config";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: "vaultTokenAccount";
          writable: true;
        },
        {
          name: "vaultMint";
        },
        {
          name: "mint";
        },
        {
          name: "signer";
          writable: true;
          signer: true;
        },
        {
          name: "tokenProgram";
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
        {
          name: "rent";
          address: "SysvarRent111111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "vaultMint";
          type: "pubkey";
        },
        {
          name: "mint";
          type: "pubkey";
        },
        {
          name: "freezeAdministrators";
          type: {
            vec: "pubkey";
          };
        },
        {
          name: "rewardsAdministrators";
          type: {
            vec: "pubkey";
          };
        }
      ];
    },
    {
      name: "redeem";
      docs: [
        "The redeem function allows users to withdraw their original vault tokens:",
        "- Transfers vault tokens from a program vault account to user",
        "- Burns the corresponding amount of mint tokens (e.g., wYLDS) from user"
      ];
      discriminator: [184, 12, 86, 149, 70, 196, 97, 225];
      accounts: [
        {
          name: "config";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: "vaultTokenAccount";
          writable: true;
        },
        {
          name: "vaultAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
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
                ];
              }
            ];
          };
        },
        {
          name: "signer";
          writable: true;
          signer: true;
        },
        {
          name: "userVaultTokenAccount";
          writable: true;
        },
        {
          name: "userMintTokenAccount";
          writable: true;
        },
        {
          name: "mint";
          writable: true;
        },
        {
          name: "tokenProgram";
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "setMintAuthority";
      docs: [
        "Sets the mint authority for a specified token type",
        "Used to configure program control over token minting"
      ];
      discriminator: [67, 127, 155, 187, 100, 174, 103, 121];
      accounts: [
        {
          name: "config";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: "mint";
          writable: true;
        },
        {
          name: "programData";
        },
        {
          name: "mintAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
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
                ];
              }
            ];
          };
        },
        {
          name: "signer";
          signer: true;
        },
        {
          name: "tokenProgram";
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
        }
      ];
      args: [
        {
          name: "newAuthority";
          type: "pubkey";
        }
      ];
    },
    {
      name: "thawTokenAccount";
      discriminator: [199, 172, 96, 93, 244, 252, 137, 171];
      accounts: [
        {
          name: "config";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: "tokenAccount";
          writable: true;
        },
        {
          name: "mint";
        },
        {
          name: "freezeAuthorityPda";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
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
                ];
              }
            ];
          };
        },
        {
          name: "signer";
          signer: true;
        },
        {
          name: "tokenProgram";
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
        }
      ];
      args: [];
    },
    {
      name: "updateFreezeAdministrators";
      discriminator: [169, 194, 112, 142, 80, 94, 72, 189];
      accounts: [
        {
          name: "config";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: "programData";
        },
        {
          name: "signer";
          signer: true;
        }
      ];
      args: [
        {
          name: "newAdministrators";
          type: {
            vec: "pubkey";
          };
        }
      ];
    },
    {
      name: "updateRewardsAdministrators";
      discriminator: [152, 46, 142, 129, 7, 137, 219, 237];
      accounts: [
        {
          name: "config";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: "programData";
        },
        {
          name: "signer";
          signer: true;
        }
      ];
      args: [
        {
          name: "newAdministrators";
          type: {
            vec: "pubkey";
          };
        }
      ];
    }
  ];
  accounts: [
    {
      name: "claimRecord";
      discriminator: [57, 229, 0, 9, 65, 62, 96, 7];
    },
    {
      name: "config";
      discriminator: [155, 12, 170, 224, 30, 250, 204, 130];
    },
    {
      name: "rewardsEpoch";
      discriminator: [19, 164, 140, 222, 83, 245, 249, 74];
    }
  ];
  errors: [
    {
      code: 6001;
      name: "invalidAmount";
      msg: "Invalid amount";
    },
    {
      code: 6002;
      name: "invalidAuthority";
      msg: "Invalid authority";
    },
    {
      code: 6003;
      name: "insufficientBalance";
      msg: "Insufficient balance";
    },
    {
      code: 6004;
      name: "invalidMint";
      msg: "Invalid mint provided";
    },
    {
      code: 6005;
      name: "invalidVaultMint";
      msg: "Invalid vault mint provided";
    },
    {
      code: 6006;
      name: "invalidMintAuthority";
      msg: "Invalid mint authority";
    },
    {
      code: 6007;
      name: "insufficientVaultBalance";
      msg: "Insufficient vault balance";
    },
    {
      code: 6008;
      name: "invalidVaultAuthority";
      msg: "Invalid vault authority";
    },
    {
      code: 6009;
      name: "invalidFreezeAuthority";
      msg: "Invalid freeze authority";
    },
    {
      code: 6010;
      name: "invalidProgramData";
      msg: "ProgramData account did not match expected PDA.";
    },
    {
      code: 6011;
      name: "noUpgradeAuthority";
      msg: "Program has no upgrade authority (set to None).";
    },
    {
      code: 6012;
      name: "invalidUpgradeAuthority";
      msg: "Signer is not the upgrade authority.";
    },
    {
      code: 6013;
      name: "missingSigner";
      msg: "Signer account missing.";
    },
    {
      code: 6014;
      name: "tooManyAdministrators";
      msg: "Too many freeze administrators.";
    },
    {
      code: 6015;
      name: "unauthorizedFreezeAdministrator";
      msg: "Unauthorized freeze administrator";
    },
    {
      code: 6016;
      name: "invalidRewardsEpoch";
      msg: "Invalid rewards epoch";
    },
    {
      code: 6017;
      name: "invalidMerkleProof";
      msg: "Invalid merkle proof";
    },
    {
      code: 6018;
      name: "rewardsAlreadyClaimed";
      msg: "Rewards already claimed for this epoch";
    },
    {
      code: 6019;
      name: "invalidRewardsAdministrator";
      msg: "Invalid rewards administrator";
    }
  ];
  types: [
    {
      name: "claimRecord";
      type: {
        kind: "struct";
        fields: [];
      };
    },
    {
      name: "config";
      type: {
        kind: "struct";
        fields: [
          {
            name: "vault";
            type: "pubkey";
          },
          {
            name: "mint";
            type: "pubkey";
          },
          {
            name: "freezeAdministrators";
            type: {
              vec: "pubkey";
            };
          },
          {
            name: "rewardsAdministrators";
            type: {
              vec: "pubkey";
            };
          },
          {
            name: "bump";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "rewardsEpoch";
      type: {
        kind: "struct";
        fields: [
          {
            name: "index";
            type: "u64";
          },
          {
            name: "merkleRoot";
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "total";
            type: "u64";
          },
          {
            name: "createdTs";
            type: "i64";
          }
        ];
      };
    }
  ];
};
