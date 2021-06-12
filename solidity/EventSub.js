const provider = 'wss://';
const contract = '0xB5f33FF21488B9df6f1F808A173b88F4F2Db0699';

const callback = (log) => {
    
    const result = web3.eth.abi.decodeLog(
        [{type: 'address', name: '_from'}, {type: 'uint256', name: '_value'}],
        log.data,
        []
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
