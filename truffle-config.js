require('babel-register');
require('babel-polyfill');
const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
var networkId = process.env.npm_package_config_ganache_networkId;
var gasPrice = process.env.npm_package_config_ganache_gasPrice;
var gasLimit = process.env.npm_package_config_ganache_gasLimit;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    matic: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.matic.today`),
        network_id: 80001,
        confirmations: 2,
        timeoutBlocks: 200,
        skipDryRun: true
      },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "^0.6.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
