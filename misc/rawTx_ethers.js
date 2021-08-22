const ethers = require("ethers");

const jsonRpcProvider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/");

const privateKey = "4099...8899";
const from = "0x547d73355A851079E0395aDB2C647821b74C7eAF";
const to = "0xAd36301E8C66bB2Af80c63DA5a99BdF2c202c9a1";
const value = ethers.utils.parseEther("0.001");
const gasLimit = ethers.utils.hexlify(21000);
const maxFeePerGas = ethers.utils.hexlify(20000000000); //20 gwei
const maxPriorityFeePerGas = ethers.utils.hexlify(1000000000); //1 gwei

const signer = jsonRpcProvider.getSigner(from);

signer.getTransactionCount().then((n) => {
    console.log(n);
    const wallet = new ethers.Wallet(privateKey);
    
    // 다음 값들은 모두 필수이다.
    const tx = {
        nonce: ethers.utils.hexlify(n),
        from,
        to,
        value,
        gasLimit,
        maxFeePerGas,
        maxPriorityFeePerGas,
        'type': 2,
        'chainId': 4
}
    
    // signer.populateTransaction(tx).then((txReq) => {
    //     //console.log(r)
    //     wallet.signTransaction(txReq).then((rawTx) => console.log(rawTx));
    // });
    
    wallet.signTransaction(tx).then((rawTx) => console.log(rawTx));
});





