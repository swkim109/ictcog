const Accounts = require('web3-eth-accounts');
const accounts = new Accounts('https://eth-rinkeby.alchemyapi.io/v2/n6XQhLyGF6RW6EQRdCEuQTkOvcrbS3ik');

const privateKey = "";
const n = "0x33";
const fromAddr = "0x547d73355A851079E0395aDB2C647821b74C7eAF";
const toAddr = "0xAd36301E8C66bB2Af80c63DA5a99BdF2c202c9a1";
const v = "7000000000000000";
const gasLimit = "3000000";
const gasPrice = "20000000000";

// Passing in the eth or web3 package is necessary to allow retrieving chainId, gasPrice and nonce automatically
// for accounts.signTransaction().
const tx = {
    //'nonce': n,
    'from': fromAddr,
    'to': toAddr,
    'value': v,
    'gas': gasLimit,
    //'gasPrice': gasPrice,
    //'chain': 'rinkeby',
    //'hardfork': 'berlin'
    
}

// 거래메시지 + 개인키로 전자서명을 생성
accounts.signTransaction(tx, privateKey).then(result => console.log(result));


