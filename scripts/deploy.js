const hre = require("hardhat");
const { ethers, run } = require("hardhat");
async function main() {
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  const simpleStorage = await SimpleStorage.deploy();

  await simpleStorage.waitForDeployment();

  console.log("SimpleStorage deployed to:", simpleStorage.target);
  //.target returns the address of the deployed contract

  const currentValue = await simpleStorage.retrieve();
  console.log("Current Value:", currentValue.toString());
  const transactionResponse = await simpleStorage.store(42);
  await transactionResponse.wait(1);
  const updatedValue = await simpleStorage.retrieve();
  console.log("Updated Value:", updatedValue.toString());

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

async function verify(contractAddress, args) {
  console.log("Verifying contract...");
  try {
    await hre.run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!");
    } else {
      console.error(e);
    }
  }
}