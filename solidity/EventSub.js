const provider = 'wss://rinkeby.infura.io/ws/v3/...';
const contract = '0xd3F30D1b6a173112aC231b52ed0a66Fd50FCA49b';

const callback = (log) => {
    
    const result = web3.eth.abi.decodeLog(
        [{type: 'address', name: '_from'}, {type: 'uint256', name: '_value', indexed: true}],
        log.data,
        [log.topics[1]]
    );
    
    console.log(`FROM=${result._from}, VALUE=${result._value}`);
}

(async () => {
    
    //const accounts = await web3.eth.getAccounts();
    //console.log(accounts);
    
    web3.setProvider(new Web3.providers.WebsocketProvider(provider));
    
    const subscription = web3.eth.subscribe('logs', {address: contract})
        .on('data', callback)
        .on('error', (err)=>console.log(err.message));
    
})();
