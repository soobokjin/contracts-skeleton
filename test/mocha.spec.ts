import { expect } from "chai";
import { ethers } from "hardhat";

describe("Test Token", function () {
  it("Check the balance", async () => {
    const [deployer] = await ethers.getSigners();

    const tokenCls = await ethers.getContractFactory("Tanghulu");
    const token = await tokenCls.deploy();

    expect(await token.name()).to.equal("Tanghulu");
  });
});
