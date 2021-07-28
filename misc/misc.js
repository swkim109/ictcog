/* Remix */
/* eth_call 에 사용 */
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


//const result = web3.eth.abi.decodeParameter("string", "");
//console.log(result);

/* 자바스크립트로 서명한 데이터를 컨트랙트에서 검증하기

const privateKey = "409988a9e7e9097e5a42cb4b273e193958130f8e6a6cf7737307fc4ac5958899";
const data = web3.utils.utf8ToHex("This is a secret message!");
const signedMessage = web3.eth.accounts.sign(data, privateKey);
console.log(signedMessage);
 */

/*
//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "./ECDSA.sol";
contract MyContract {
    
    using ECDSA for bytes32;
    
    function verifyMessage(bytes32 messageHash, bytes memory signature) public pure returns (address) {
        return messageHash.recover(signature);
    }
    
    function foo(uint256 _v) public pure returns (bytes4) {
        return msg.sig;
    }
    //0x2fbebd38 =  foo(uint256)
}

 */
