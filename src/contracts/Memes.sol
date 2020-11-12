// contracts/Memes.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./ERC1155.sol";

contract Memes is ERC1155 {
  uint256 public constant MEME = 0;

  constructor() public ERC1155("") {
    _mint(msg.sender, MEME, 1, "");
  }
}
