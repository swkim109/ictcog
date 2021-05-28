//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.0;

contract MyContract {

    uint256 public a;
    address public addr = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;

    function setValue(uint256 _a) public {
        a = _a;
    }

    function getBalance() public view returns (uint256) {
        return addr.balance;
    }

}
