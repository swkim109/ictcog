// eth_sign 의 결과를 검증하기

const messageHex = "";
const signature = "";
const result = web3.eth.accounts.recover(messageHex, signature);
console.log(result);
