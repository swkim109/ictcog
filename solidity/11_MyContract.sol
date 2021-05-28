//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.0;

contract MyContract {

    uint[5] arr;

    constructor () {
        arr = [10,20,30,40,50];
    }

    function print(uint _index) public view returns (uint) {
        require(_index < arr.length, "index out of bound");
        return arr[_index];
    }

}

