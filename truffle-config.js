require('dotenv').config();
const { API_URL, API_URL_RINKEBY, PRIVATE_KEY, PRIVATE_KEY_RINKEBY } = process.env;
const path = require("path");
var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(PRIVATE_KEY, API_URL)
      },
      network_id: 3,
      gas: 3000000      //make sure this gas allocation isn't over 4M, which is the max
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          PRIVATE_KEY_RINKEBY,
          API_URL_RINKEBY
        ),
      network_id: 4, // Rinkeby's id
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
};
