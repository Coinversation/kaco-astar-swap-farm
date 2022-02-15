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
const kacoAddress = "0xb12c13e66ade1f72f71834f2fc5082db8c091358";

const masterChefShidenAddress = "0x293A7824582C56B0842535f94F6E3841888168C8";
const syrupShidenAddress = "0x808764026aDddb9E7dFAAEA846977cCe6425D593";

const kac_sdn = "0x456C0082DE0048EE883881fF61341177FA1FEF40";

async function main() {
  // We get the contract to deploy
  const farm = await ethers.getContractAt("MasterChef", masterChefShidenAddress, await ethers.getSigner(mainAddress));
  // const pid = "6";
  const lp = await ethers.getContractAt("IERC20", kacoAddress, await ethers.getSigner(mainAddress));

  console.log("pool length: ", await farm.poolLength());
  await farm.add(200, "0xe2c19eb0f91c80275cc254f90ed0f18f26650ec5", true);
  await sleep(31000);
  console.log("pool length: ", await farm.poolLength());

// console.log("start block:", await farm.startBlock());

  // console.log("total alloc: ", await farm.totalAllocPoint());
  // await farm.set(pid, "200", true);
  // await sleep(31000);
  // console.log("total alloc: ", await farm.totalAllocPoint());


  // console.log("poolInfo:", await farm.poolInfo(pid));
  // await lp.approve(masterChefShidenAddress, "1000000000000000000000000");
  // await sleep(31000);
  // farm.deposit(pid, "100000000000000000");
  // await sleep(31000);
  // console.log("poolInfo:", await farm.poolInfo(pid));
  // console.log("pending award:", await farm.pendingCake(pid, mainAddress));

  // await farm.updateKacPerBlock("500000000000000000", true);
  // await sleep(31000);

  // await farm.updateAllocBSC("8600", true);
  // await farm.updateAllocShiden("2000", true);
  // await sleep(31000);


  // console.log("supply for masterChef: ", (await lp.balanceOf(masterChefShidenAddress)).toString());

  // console.log("totalAlloc", await farm.totalAllocPoint());
  // console.log("kacPerShidenBlock", await (await farm.kacPerShidenBlock()).toString());
  // console.log("userInfo", await farm.userInfo(pid, mainAddress));
  // console.log("pending award:", await farm.pendingCake(pid, mainAddress));

  // console.log("kacPerBlock", await (await farm.kacPerBlock()).toString());
  // console.log("allocBSC", await (await farm.allocBSC()).toString());
  // console.log("allocShiden", await (await farm.allocShiden()).toString());
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
