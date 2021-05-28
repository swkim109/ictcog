//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.0;

contract MyContract {

    receive() external payable {

    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
