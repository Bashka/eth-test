require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");
require("dotenv").config();

function maybeAccount(account) {
  return account ? [account] : [];
}

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      blockGasLimit: 10000000,
      accounts: {
        mnemonic: process.env.ETH_MNEMONIC || "",
      },
    },
    avaxTest: {
      url: process.env.AVAX_TEST_NODE || "http://127.0.0.1:8545",
      chainId: 43113,
      gasPrice: 25_000_000_000,
      blockGasLimit: 8_000_000,
      accounts: [...maybeAccount(process.env.AVAX_TEST_DEPLOYER)],
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      43114: 0,
    },
  },
};
