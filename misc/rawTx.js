const ethers = require("ethers");

const privateKey = "";
const jsonRpcProvider = new ethers.providers.JsonRpcProvider("");
const fromAddr = "";
const toAddr = "";

const signer = jsonRpcProvider.getSigner(fromAddr);

signer.getTransactionCount().then((n) => {
    console.log(n);
    const wallet = new ethers.Wallet(privateKey);
    
    const tx = {
        nonce: ethers.utils.hexlify(n),
        from: fromAddr,
        to: toAddr,
        value: ethers.utils.parseEther("0.2"),
        gasLimit: ethers.utils.hexlify(3000000),
        gasPrice: ethers.utils.hexlify(20e9), // 20 Gwei
    }
    
    wallet.signTransaction(tx).then((rawTx) => console.log(rawTx));
});
