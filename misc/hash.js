const ethers = require("ethers");

const text = "Hello, World!";
const privateKey = "";


const signer = new ethers.Wallet(privateKey);

const hexString = ethers.utils.toUtf8Bytes(text);
const textHash = ethers.utils.keccak256(hexString);

console.log(textHash);

// 솔리디티
//bytes32 hash = keccak256(bytes(text));
//0xacaf3289d7b601cbd114fb36c4d29c85bbfd5e133f14cb355c3fd8d99367964f
