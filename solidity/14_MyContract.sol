//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.0;

contract MyContract {

    event Deposit(address _from, uint _value);

    receive() external payable {
        emit Deposit(msg.sender, msg.value);
    }
}
