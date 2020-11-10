pragma solidity ^0.6.0;

import "./ERC721Full.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Memes is ERC1155 {

}

contract Meme is ERC721Full {
  string[] public hashes;
  mapping(string => bool) _hashExists;

  constructor() ERC721Full("Meme", "MTD") public {
  }

  // E.G. hash = "QmWERhD123RLQQ"
  function mint(string memory _hash) public {
    require(!_hashExists[_hash]);
    uint _id = hashes.push(_hash);
    _mint(msg.sender, _id);
    _hashExists[_hash] = true;
  }

}
