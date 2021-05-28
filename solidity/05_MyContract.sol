//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.0;

contract MyContract {

    uint256[5] public arr = [1,2,3,4,5];

    function copyRefMemory() public view returns (uint256[5] memory){

        uint256[5] memory arrLocal = arr;

        arrLocal[0] = 100;

        return arrLocal;
    }

    function copyRefStor() public returns (uint256[5] memory){

        uint256[5] storage arr2 = arr;

        arr2[0] = 100;

        return arr2;
    }

}
