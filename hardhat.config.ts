import { HardhatUserConfig } from "hardhat/types";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-ganache";

import deployContracts from "./tasks/deploy";
import deployContractsV2 from "./tasks/deploy-v2";
import voteTask from "./tasks/vote";

// Setup Task
deployContracts();
deployContractsV2();
voteTask();

const ALCHEMY_API_KEY = "";
const DEPLOYER_PRIVATE_KEY = "";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    hardhat: {
      accounts: [
        {
          privateKey: DEPLOYER_PRIVATE_KEY,
          balance: "2000000000000000000000",
        },
      ],
      forking: {
        url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
        blockNumber: 17000000,
      },
      mining: {
        mempool: {
          order: "fifo",
        },
      },
      chainId: 1337,
    },
    localhost: {
      url: "http://0.0.0.0:8545",
      accounts: [""],
    },
  },
};

export default config;
