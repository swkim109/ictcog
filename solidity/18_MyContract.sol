//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.4;

contract MyContract {

    error IndexOutOfBound(uint256 index);

    uint[5] arr;

    constructor () {
        arr = [10,20,30,40,50];
    }

    function print(uint _index) public view returns (uint) {
        if (_index >= arr.length) {
            revert IndexOutOfBound(_index);
        }
        return arr[_index];
    }
}
