//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.0;

contract MyContract {

    function calc() public pure returns (uint8) {

        uint8 x = 2**8-1; //256-1=255
        uint8 b = x + 1; //255+1
        return b;
    }
}
