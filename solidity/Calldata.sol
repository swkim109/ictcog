//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.0;

contract MyContract {

    function makeCallData() public pure returns (bytes memory) {
        return abi.encodeWithSelector(bytes4(keccak256(bytes("set(string)"))), "Hello, World!");
    }


}
