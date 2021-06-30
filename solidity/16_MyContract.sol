//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.0;

import "./ECDSA.sol";

contract MyContract {

    using ECDSA for bytes32;

    function verifyMessage(bytes32 messageHash, bytes memory signature) public pure returns (address) {
        return message.recover(signature);
    }

}

