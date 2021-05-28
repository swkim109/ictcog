//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.0;

contract MyContract {

    address public owner;
    bool public flag;

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function setFlag(bool _flag) public onlyOwner {
        flag = _flag;
    }

}
