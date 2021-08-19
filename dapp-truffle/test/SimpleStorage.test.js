const SimpleStorage = artifacts.require("SimpleStorage");

contract ("SimpleStorage", function () {
    
    before(async () => {
        this.instance = await SimpleStorage.deployed();
    });
    
    it ("should change the value", async () => {
        const receipt = await this.instance.set(5000);
        const val  = await this.instance.get.call();
        assert.equal(5000, val, "The value is incorrect");
    });
    
    it.skip ('should revert when the value exceeds the limit', async () => {
    
        await this.instance.set(20000)
            .catch((error) => {
                const expectedRevertReason = "Reason given: Should be less than 10000.";
                //TODO
                // error.message 에서 expectedRevertReason을 추출하여 v에 넣고 비교한다.
                // indexOf와 substring을 이용한다.
                const v = "";
                expect(v).to.equal(expectedRevertReason);
            });
    });
    
})
