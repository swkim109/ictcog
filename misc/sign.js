const ethers = require("ethers");

const text = "Hello, World!";
const privateKey = "";


const signer = new ethers.Wallet(privateKey);
const message = "\x19Ethereum Signed Message:\n" + text.length + text;

const messageHash = ethers.utils.solidityKeccak256(["string"], [message]);
console.log(messageHash);

signer.signMessage(text).then((sig) => console.log(sig));

