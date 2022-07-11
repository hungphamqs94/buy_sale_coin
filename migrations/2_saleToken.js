const TokenSale = artifacts.require("TokenSale");
const XGAGE = artifacts.require("Xgage");
module.exports = function (deployer) {
    deployer.deploy(TokenSale, XGAGE.address, 1, 2, 4);
};
