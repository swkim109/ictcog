//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.0;

contract Ownable {

    address private owner;

    modifier onlyOwner() {
        require(isOwner(), "Ownable: caller is not the owner");
        _;
    }

    constructor () {
        owner = msg.sender;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function isOwner() public view returns (bool) {
        return msg.sender == owner;
    }

}

contract MyContract is Ownable {

    uint v = 1000;

    function getValue() public view onlyOwner returns (uint256) {
        return v;
    }
}

