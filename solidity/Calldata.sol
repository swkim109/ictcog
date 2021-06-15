//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.0;

contract MyContract {

    function makeCallData() public pure returns (bytes memory) {
        return abi.encodeWithSelector(bytes4(keccak256(bytes("set(string)"))), "Hello, World!");
    }

    function f() public pure returns (bytes4) {
        
        return HelloWorld.set.selector;
    }
    
    function g() public pure returns (bytes memory) {
        return abi.encode("Hello, Crypto!");
    }
    
    function h() public pure returns (bytes memory) {
        return abi.encodeWithSelector(bytes4(keccak256(bytes("set(string)"))), "Hello, Crypto!");        
    }
}



interface HelloWorld {
    function set(string memory _s) external;
}