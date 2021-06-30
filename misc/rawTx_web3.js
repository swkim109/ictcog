const privateKey = "";
const n = "0x24";
const fromAddr = "0x547d73355A851079E0395aDB2C647821b74C7eAF";
const toAddr = "0xAd36301E8C66bB2Af80c63DA5a99BdF2c202c9a1";
const v = "0x18de76816d8000";
const gL = web3.utils.numberToHex(3000000);
const gP = web3.utils.numberToHex(20e9); // 20gwei

const tx = {
    nonce: n,
    from: fromAddr,
    to: toAddr,
    value: v,
    gasLimit: gL,
    gasPrice: gP
}

//console.log(tx);
web3.eth.accounts.signTransaction(tx, privateKey, console.log);

//const s = "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000112248656c6c6f2c204943542d434f472122000000000000000000000000000000";
//const result = web3.eth.abi.decodeParameter("string", s);
//console.log(result);
