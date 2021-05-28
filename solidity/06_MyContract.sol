//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.0;

contract MyContract {

    mapping(address => uint256) balances;

    constructor() {
        balances[0x5B38Da6a701c568545dCfcB03FcB875f56beddC4] = 1000;
    }

    function balanceOf(address _tokenOwner) public view returns (uint256) {

        return balances[_tokenOwner];
    }

}

