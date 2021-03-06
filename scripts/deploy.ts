// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import hre from "hardhat";

const mainAddress = "0xFB83a67784F110dC658B19515308A7a95c2bA33A";
const bridgeAddress = "0xE7929a6f19B685A6F2C3Fa962054a82B79DC999F";

const kacoBSCAddress = "0xf96429A7aE52dA7d07E60BE95A3ece8B042016fB";
const kacoShidenAddress = "0xb12c13e66ade1f72f71834f2fc5082db8c091358";
const kacoAstarAddress = "0x2bF9b864cdc97b08B6D79ad4663e71B8aB65c45c";

const syrupShidenAddress = "0x808764026aDddb9E7dFAAEA846977cCe6425D593";
const syrupAstarAddress = "0xB44A8AEb4805a5404a8d20A1294a61C95Ae6F256";

async function main() {
  // We get the contract to deploy
  const MasterChef = await ethers.getContractFactory("MasterChef", await ethers.getSigner(mainAddress));
  const farm = await MasterChef.deploy(kacoAstarAddress, syrupAstarAddress, 420000, "500000000000000000", 500, 300); // 557110 2021-10-23 13:00:00, 

  await farm.deployed();

  console.log("farm deployed to:", farm.address);


  // const SyrupBar = await ethers.getContractFactory("SyrupBar", await ethers.getSigner(mainAddress));
  // const syrup = await SyrupBar.deploy(kacoAstarAddress);

  // await syrup.deployed();

  // console.log("syrup deployed to:", syrup.address);


  // const TagCoin = await ethers.getContractFactory("TagCoin", await ethers.getSigner(mainAddress));
  // const tag = await TagCoin.deploy("Kac Bridge Tag Coin", "KSTAG", "100000000000000000000");

  // await tag.deployed();

  // console.log("tag deployed to:", tag.address);


  // const KacShidenBridge = await ethers.getContractFactory("KacShidenBridge", await ethers.getSigner(bridgeAddress));
  // const bridge = await KacShidenBridge.deploy(kacoBSCAddress, "0xfC39bA6baAE9E56807803d2Db755502a21ba8927", "0x81b71D0bC2De38e37978E6701C342d0b7AA67D59", "0x47e0fb3B4AD7cB0212E09960AbF8376f2eaa60b6", 21, "7000000000000000000", "1300000000000000000000000");

  // await bridge.deployed();

  // console.log("bridge deployed to:", bridge.address);


  // await sleep(60000);

  // await hre.run("verify:verify", {
  //   address: bridge.address,
  //   contract: "contracts/KacShidenBridge.sol:KacShidenBridge",
  //   constructorArguments: [kacoBSCAddress, "0xfC39bA6baAE9E56807803d2Db755502a21ba8927", "0x81b71D0bC2De38e37978E6701C342d0b7AA67D59", "0x47e0fb3B4AD7cB0212E09960AbF8376f2eaa60b6", 21, "7000000000000000000", "1300000000000000000000000"]
  // });
}

function sleep(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
