const hre = require("hardhat");
const {expect, assert} = require("chai");

describe ("SimpleStorage", function () {
    
    before(async () => {
        const f = await hre.ethers.getContractFactory("SimpleStorage");
        this.instance = await f.deploy();
    });
    
    
    it("should change the value", async () => {
       
        const tx = await this.instance.set(5000);
        const v  = await this.instance.get();
        assert.equal(v, 5000);
    });
    
    // event
    it("should emit the event", async () => {
        
        const v = 10;
        await expect(this.instance.set(v))
            .to.emit(this.instance, "Change")
            .withArgs("set", v);
    });
    
    // revert
    it("should revert", async () => {
        await expect(this.instance.set(20000))
            .to.be.revertedWith("Should be less than 10000");
        
    });
    
})
