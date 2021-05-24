/* In Remix */

const n = web3.utils.hexToNumberString("0x1a0");
console.log(n);

const h = web3.utils.numberToHex(250);
console.log(h);


const params = web3.eth.abi.encodeFunctionCall(
    {
        name: 'greet',
        type: 'function',
        inputs: []
    },
    []
);

console.log(params);


const result = web3.eth.abi.decodeParameter("string", "");
console.log(result);
