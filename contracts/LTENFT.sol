// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract LTENFT is ERC721URIStorage {
    uint public tokenCount;
    constructor() ERC721("LTE NFT", "LNFT"){}

    function _baseURI() internal view override virtual returns (string memory) {
        return "ipfs://";
    }

    function mint(string memory _tokenURI) external returns(uint) {
        tokenCount ++;
        _safeMint(msg.sender, tokenCount);
        _setTokenURI(tokenCount, _tokenURI);
        return(tokenCount);
    }
}