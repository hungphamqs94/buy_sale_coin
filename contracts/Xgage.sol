pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Xgage is ERC20, Ownable  {
    
    constructor() ERC20("Xgage", "XGE") {
        _mint(msg.sender, 1000000000*10e18);
    }
}