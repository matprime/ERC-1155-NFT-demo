// contracts/Memes.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./ERC1155.sol";

contract Memes is ERC1155 {
  string[] public hashes;
  mapping(string => bool) _hashExists;


  constructor() public ERC1155("") {
    mint("hash1");
    mint("hash2");
  }

  function mint(string memory _hash) public {
    require(!_hashExists[_hash]);
    hashes.push(_hash);
    uint _id = hashes.length - 1;
    _mint(msg.sender, _id, 1, "");
    _hashExists[_hash] = true;
  }

  function getMemesCount() public view returns(uint count) {
    return hashes.length;
  }

  function safeTransferFromWithProvision(
    address payable from,
    address to,
    uint256 id,
    uint256 amount,
    uint256 price
  )
    public
  {
    safeTransferFrom(from, to, id, amount, "0x0");
    from.transfer(price);
  }

}
