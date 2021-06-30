const ethers = require("ethers");

const text = "Hello, World!";
const privateKey = "";

const signer = new ethers.Wallet(privateKey);
const message = "\x19Ethereum Signed Message:\n" + text.length + text;

const messageHash = ethers.utils.solidityKeccak256(["string"], [message]);
console.log(messageHash);

signer.signMessage(text).then((sig) => console.log(sig));

// web3.js
/*
const privateKey = "";
const data = web3.utils.utf8ToHex("This is a secret message!");
const signedMessage = web3.eth.accounts.sign(data, privateKey);

console.log(signedMessage);

//0x557808589afdf61728d513d867d85aa270277d69f980a75dfb1bf01c5afbf880
//0x9e643c9a9ad317c4a3a72d91ffe0f82b0302d94cc259c262032302bbdc463f2531cf4c9b1cd15725c02ea2f68936d2869bc2488f4e2d4fc02bed00dbcc9765391b

 */
