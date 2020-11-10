const Meme = artifacts.require('./Meme.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Meme', (accounts) => {
  let contract

  before(async () => {
    contract = await Meme.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = contract.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await contract.name()
      assert.equal(name, 'Meme')
    })

    it('has a symbol', async () => {
      const symbol = await contract.symbol()
      assert.equal(symbol, 'MTD')
    })

  })

  describe('minting', async () => {

    it('creates a new NFT token', async () => {
      const result = await contract.mint('ECEA058EF4523')
      const totalSupply = await contract.totalSupply()
      // SUCCESS
      assert.equal(totalSupply, 1)
      const event = result.logs[0].args
      assert.equal(event.tokenId.toNumber(), 1, 'id is correct')
      assert.equal(event.from, '0x0000000000000000000000000000000000000000', 'from is correct')
      assert.equal(event.to, accounts[0], 'to is correct')

      // FAILURE: cannot mint same hash twice
      await contract.mint('ECEA058EF4523').should.be.rejected;
    })
  })

  describe('indexing', async () => {
    it('lists hashes', async () => {
      // Mint 3 more NFT tokens
      await contract.mint('5386E4EABC345')
      await contract.mint('FFF567EAB5FFF')
      await contract.mint('234AEC00EFFD0')
      const totalSupply = await contract.totalSupply()

      let hash
      let result = []

      for (var i = 1; i <= totalSupply; i++) {
        hash = await contract.hashes(i - 1)
        result.push(hash)
      }

      let expected = ['ECEA058EF4523', '5386E4EABC345', 'FFF567EAB5FFF', '234AEC00EFFD0']
      assert.equal(result.join(','), expected.join(','))
    })
  })

})
