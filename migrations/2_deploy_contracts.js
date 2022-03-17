var Nfts = artifacts.require("./Nfts.sol");

module.exports = function(deployer) {
  deployer.deploy(Nfts);
};
