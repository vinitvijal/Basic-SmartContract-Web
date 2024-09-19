// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

contract MyMath{


    function addNumbers(uint a, uint b) public pure returns (uint){
        return a+b;
    }

    function mulNumbers(uint a, uint b) public pure returns (uint){
        return a*b;
    }

    function divNumbers(uint a, uint b) public pure returns (uint){
        return a/b;
    }

}