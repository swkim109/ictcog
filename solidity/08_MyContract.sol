//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.0;

contract Callee {

    function increase(uint256 _v) external pure returns (uint256) {
        return _v * 100;
    }
}

contract Caller {

    Callee callee;

    constructor(address _addr) {
        callee = Callee(_addr);
    }

    function f(uint _val) public view returns (uint256) {
        return callee.increase(_val);
    }
}
