const Web3 = require("web3");
const web3 = new Web3("https://rinkeby.infura.io/v3/");

const privateKey = "4099...8899";
const from = "0x547d73355A851079E0395aDB2C647821b74C7eAF";
const to = "0xAd36301E8C66bB2Af80c63DA5a99BdF2c202c9a1";
const value = "1000000000000000"; //0.001 ETH
const gas = "21000";
const maxFeePerGas = "20000000000"; //20 gwei
const maxPriorityFeePerGas = "1000000000" //1 gwei

const tx = {
    from,
    to,
    value,
    gas,
    maxFeePerGas,
    maxPriorityFeePerGas,
    'type': '2'
}

web3.eth.accounts.signTransaction(tx, privateKey).then((obj) => console.log(obj));

