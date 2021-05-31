//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SimpleStorage2 {

    uint storedData;

    event Change(string message, uint newVal);

    function set(uint x) public {
        console.log(x);
        require(x < 10000, "Should be less than 10000");
        storedData = x;
        emit Change("set", x);
    }

    function get() public view returns (uint) {
        return storedData;
    }
}
