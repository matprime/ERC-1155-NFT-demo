const Memes = artifacts.require("Memes");

module.exports = function(deployer) {
  deployer.deploy(Memes);
};
