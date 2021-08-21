//ethers.js
const ethers = require("ethers");

const text = "This is a secret message!";
const privateKey = "5de6abc8439867acc2d5cf7fa9d5f0e8ebce2222b643926704ecca1641b5fd9f";

const signer = new ethers.Wallet(privateKey);
const message = "\x19Ethereum Signed Message:\n" + text.length + text;

const messageHash = ethers.utils.solidityKeccak256(["string"], [message]);
console.log(messageHash);

signer.signMessage(text).then((sig) => console.log(sig));


// web3.js (Remix)
// web3.js에서는 메시지를 16진수로 변경해서 그대로 전달
/*
const messageHex = web3.utils.utf8ToHex(text);
const signedMessage = web3.eth.accounts.sign(messageHex, privateKey);

console.log(signedMessage.messageHash);
console.log(signedMessage.signature);

*/

