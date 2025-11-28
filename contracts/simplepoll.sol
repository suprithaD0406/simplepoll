// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// A very simple Yes/No voting poll on blockchain
contract SimplePoll {

    // The poll question that everyone will vote on
    string public question = "Do you like blockchain?";

    // Vote counters
    uint public yesCount = 0;
    uint public noCount = 0;

    // To track if a person has already voted
    mapping(address => bool) public voted;

    // Function to cast a vote
    // true = Yes vote
    // false = No vote
    function vote(bool answer) public {

        // Prevent double voting
        require(voted[msg.sender] == false, "You already voted!");

        // Mark user as voted
        voted[msg.sender] = true;

        // Increase vote count
        if (answer == true) {
            yesCount++;
        } else {
            noCount++;
        }
    }

    // Returns total votes received so far
    function totalVotes() public view returns (uint) {
        return yesCount + noCount;
    }
}
