# ERC-1155_NFT_creation_demo
how to create NFT's using ERC1155, create different URIs for every NFT and pay out part of provision at NFT sale to third party
## Installation procedure
```shell
git clone git clone https://github.com/matprime/ERC-1155-NFT-demo
cd ERC-1155-NFT-demo
npm install
```
## Compiling smart contract, deployment to blockchain and test
```shell
truffle compile
truffle migrate --reset
truffle test
```
Before deploying smart contracts to blockchain "truffle migrate --reset", you need to make sure that local Ethereum blockchain is running.
Demo was tested with ganache-cli local blockchain, and Matic Mumbai testnet. <br/>
To run tests on local Ethereum blockchain then first run ganache-cli with command "ganache-cli"
and you will get 10 Ethereum test account filled with 100 test Ether to use for testing of demo.
## Starting demo
```shell
npm run start
```
Browser window will open and demo will be started. For use of demo you need to use Metamask wallet,
configure it to work with local blockchain and import one of test accounts which ganache generated.
