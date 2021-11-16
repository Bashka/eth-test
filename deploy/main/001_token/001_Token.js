const BN = require("bignumber.js");
const { migration } = require("../../utils");

module.exports = migration(async ({ getNamedAccounts, utils: { deploy } }) => {
  const { deployer } = await getNamedAccounts();
  const totalSupply = new BN(1000000).multipliedBy(new BN(10).pow(18)).toString(10);

  await deploy("Token", {
    args: ['MyToken', 'T', totalSupply],
  });
});