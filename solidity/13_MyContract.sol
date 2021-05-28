//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.0;

contract Callee {

    function calc() external pure returns (uint8) {

        uint8 x = 2**8-1;
        uint8 b = x + 1;
        return b;
    }
}


contract Caller {

    Callee callee;
    uint256 public errCode;
    bytes1 public errHex;

    constructor(address _addr) {
        callee = Callee(_addr);
    }

    function get() public returns (uint8, bool) {

        try callee.calc() returns (uint8 v) {
            return (v, true);

        } catch Panic(uint256 _err) {
            errCode = _err;
            errHex = bytes1(uint8(_err));
            return (0, false);
        }
    }
}
