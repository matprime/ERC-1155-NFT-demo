// contracts/Memes.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./ERC1155.sol";

contract Memes is ERC1155 {
  string[] public hashes;
  mapping(string => bool) _hashExists;

  constructor() public ERC1155("") {
  }

  function mint(string memory _hash) public {
    require(!_hashExists[_hash]);
    hashes.push(_hash);
    uint _id = hashes.length - 1;
    _mint(msg.sender, _id, 1, "");
    _hashExists[_hash] = true;
  }

  function getHashesCount() public view returns(uint count) {
    return hashes.length;
  }
}
