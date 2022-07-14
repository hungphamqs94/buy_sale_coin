pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract TokenSale {
    
    IERC20 public tokenContract;  // the token being sold
    uint256 public priceAngleRound;
    uint256 public pricePrivate;              // the price, in wei, per token
    uint256 public pricePublic;
    uint256 public priceSeedRound;
    address owner;
    uint256 public tokensSold;
    event Sold(address buyer, uint256 amount);

    constructor(IERC20 _tokenContract, uint256 _priceSeedRound, uint256 _priceAngleRound, uint256 _pricePrivate, uint256 _pricePublic) public {
        owner = msg.sender;
        tokenContract = _tokenContract;
        pricePrivate = _pricePrivate;
        pricePublic = _pricePublic;
        priceSeedRound = _priceSeedRound;
        priceAngleRound = _priceAngleRound;
    }

    // Guards against integer overflows
    function safeMultiply(uint256 a, uint256 b) internal pure returns (uint256) {
        if (a == 0) {
            return 0;
        } else {
            uint256 c = a * b;
            assert(c / a == b);
            return c;
        }
    }

    function buyTokensSeedRound(uint256 value) public payable {
        require(value > 0, "You must buy with amount bigger than 0");

        uint256 numberOfTokens = value * 100 / priceSeedRound * 10e18;

        require(tokenContract.balanceOf(owner) >= numberOfTokens, "Not enough tokens");

        emit Sold(msg.sender, numberOfTokens);
        
        tokensSold += numberOfTokens;

        require(tokenContract.transferFrom(owner, msg.sender, numberOfTokens));
    }

    function buyTokensAngleRound(uint256 value) public payable {
        require(value > 0, "You must buy with amount bigger than 0");

        uint256 numberOfTokens = value * 100 / priceAngleRound * 10e18;

        require(tokenContract.balanceOf(owner) >= numberOfTokens, "Not enough tokens");

        emit Sold(msg.sender, numberOfTokens);
        
        tokensSold += numberOfTokens;

        require(tokenContract.transferFrom(owner, msg.sender, numberOfTokens));
    }

    function buyTokensPrivate(uint256 value) public payable {

        require(value > 0, "You must buy with amount bigger than 0");

        uint256 numberOfTokens = value * 100 / pricePrivate * 10e18;

        require(tokenContract.balanceOf(owner) >= numberOfTokens, "Not enough tokens");

        emit Sold(msg.sender, numberOfTokens);
        
        tokensSold += numberOfTokens;

        require(tokenContract.transferFrom(owner, msg.sender, numberOfTokens));
    }

    function buyTokensPublic(uint256 value) public payable {

        require(value > 0, "You must buy with amount bigger than 0");

        uint256 numberOfTokens = value * 100 / pricePublic * 10e18;

        require(tokenContract.balanceOf(owner) >= numberOfTokens, "Not enough tokens");

        emit Sold(msg.sender, numberOfTokens);
        
        tokensSold += numberOfTokens;

        require(tokenContract.transferFrom(owner, msg.sender, numberOfTokens));
    }
}