//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.0;

contract MyContract {

    uint a;
    uint b;

    constructor () {
        a = 100;
        b = 200;
    }


    function sum() public view returns (uint) {
        return a+b;
    }

    function multiply() public returns (uint) {
        a *= 10;
        b *= 10;
        return a+b;
    }

    function minus() internal view returns (uint) {
        if (a > b) {
            return a - b;

        } else {
            return 0;

        }
    }

}
