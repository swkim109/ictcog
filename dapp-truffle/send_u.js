// truffle exec ./send_u.js --network ganache
// 메타마스크 계정
const MM = "0x547d73355A851079E0395aDB2C647821b74C7eAF";

module.exports = function(callback) {

    web3.eth.getAccounts().then((accounts) => {
        web3.eth.sendTransaction(
            {from:accounts[2], to: MM, value:web3.utils.toWei("10", "ether")}, callback);
    });
}
