//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.0;

import "./ECDSA.sol";

contract MyContract {

    using ECDSA for bytes32;
    address[] public admins;

    constructor(address[] memory addressList) {
        admins = addressList;
    }

    function verifyMessage(bytes32 message, bytes memory signature) public view returns (bool) {

        address signer = message.recover(signature);

        for (uint256 i=0; i<admins.length; i++) {
            if (signer == admins[i]) {
                return true;
            }
        }
        return false;
    }

}

