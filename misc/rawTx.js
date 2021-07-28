const ethers = require("ethers");

const privateKey = "";
const jsonRpcProvider = new ethers.providers.JsonRpcProvider("https://eth-rinkeby.alchemyapi.io/v2/n6XQhLyGF6RW6EQRdCEuQTkOvcrbS3ik");
const fromAddr = "0x547d73355A851079E0395aDB2C647821b74C7eAF";
const toAddr = "0xafc4f9f3ba806dd2f8e47a524ffda2418bbfc08a";

const signer = jsonRpcProvider.getSigner(fromAddr);

signer.getTransactionCount().then((n) => {
    console.log(n);
    const wallet = new ethers.Wallet(privateKey);
    
    // 다음 값들은 모두 필수이다.
    const tx = {
        nonce: ethers.utils.hexlify(n),
        from: fromAddr,
        to: toAddr,
        value: ethers.utils.parseEther("0.001"),
        gasLimit: ethers.utils.hexlify(3000000),
        gasPrice: ethers.utils.hexlify(20e9), // 20 Gwei
        //chainId: 1
    }
    
    wallet.signTransaction(tx).then((rawTx) => console.log(rawTx));
});



