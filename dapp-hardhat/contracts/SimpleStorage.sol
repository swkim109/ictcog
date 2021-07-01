//SPDX-License-Identifier:UNLICENSED
pragma solidity 0.8.0;

contract SimpleStorage {

    uint storedData;

    event Change(string message, uint newVal);

    function set(uint x) public {
        require(x < 10000, "Should be less than 10000");
        storedData = x;
        emit Change("set", x);
    }

    function get() public view returns (uint) {
        return storedData;
    }
}
