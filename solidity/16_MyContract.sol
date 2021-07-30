//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.0;

import "./ECDSA.sol";

contract MyContract {

    using ECDSA for bytes32;

    //전자서명, 메시지, 공개키를 알면 전자서명된 메시지를 검증할 수 있다.
    function verifyMessage(bytes32 messageHash, bytes memory signature) public pure returns (address) {
        return messageHash.recover(signature);
    }

}

