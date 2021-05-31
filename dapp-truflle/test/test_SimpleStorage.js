const SimpleStorage = artifacts.require("SimpleStorage");

const {
    BN,
    expectEvent,  // Assertions for emitted events
    expectRevert, // Assertions for transactions that should fail
} = require('@openzeppelin/test-helpers');


contract ("SimpleStorage", function () {
    
    before( async () => {
        this.instance = await SimpleStorage.deployed();
    });
    
    it ('should be failed if the value exceeds the limit', async () => {
        await expectRevert(this.instance.set(20000), "Should be less than 10000");
    });
    
    it ("should change the value", async () => {
        const receipt = await this.instance.set(5000);
        //console.log(receipt);
        const val  = await this.instance.get();
        assert.equal(5000, val, "The value is incorrect");
        
    });
    
    it ("should change the value", async () => {
        const receipt = await this.instance.set(5000);
        //console.log(receipt);
        expectEvent(receipt, 'Change', {message: 'set', newVal: new BN(5000) });
    });
    
    
})
