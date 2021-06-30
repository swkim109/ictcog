const hre = require("hardhat");

async function main() {

  const f = await hre.ethers.getContractFactory("SimpleStorage");
  const SimpleStorage = await f.deploy();

  console.log("SimpleStorage deployed to:", SimpleStorage.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
