# ERC-721_NFT_creation_demo
how to create NFT's and populate them with additional attributes
## Installation procedure
```shell
git clone https://github.com/ERC-721_NFT_creation_demo
cd ERC-721_NFT_creation_demo
npm install
```
## Compiling smart contract, deployment to blockchain and test
```shell
truffle compile
truffle migrate --reset
truffle test
```
Before deploying smart contracts to blockchain "truffle migrate --reset", you need to make sure that local Ethereum blockchain is running.
Demo was tested with ganache-cli local blockchain, after installation of ganache-cli run it with command "ganache-cli"
and you will get 10 Ethereum test account with test Ether to use for testing of demo.
## Starting demo
```shell
npm run start
```
Browser window will open and demo will be started. For use of demo you need to use Metamask wallet,
configure it to work with local blockchain and import one of test accounts which ganache generated.
