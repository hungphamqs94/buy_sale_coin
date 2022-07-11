pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Xgage is ERC20, Ownable  {
    
    constructor() ERC20("Xgage", "XGA") {
        _mint(msg.sender, 100000000*10e18);
    }
}