require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("./tasks/block-number");
require("hardhat-gas-reporter");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    rinkby:{
      url: "https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID",
    },
    localhost:{
      url: "http://127.0.0.1:8545/",
      //accounts are automatically detected by hardhat
      chainId: 31337,
    }
  },
  solidity: "0.8.28",
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    // currency: "USD",
    // coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    // token: "ETH",
  },
};
