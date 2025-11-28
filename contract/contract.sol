// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleVoting {
    // List of candidates (fixed, no input at deployment)
    string[] public candidates;

    // candidateId (index in array) => number of votes
    mapping(uint256 => uint256) public votes;

    // Address => has voted or not
    mapping(address => bool) public hasVoted;

    // Owner of the contract (deployer)
    address public owner;

    constructor() {
        owner = msg.sender;

        // Hardcoded candidates
        candidates.push("Alice");
        candidates.push("Bob");
        candidates.push("Charlie");
    }

    // Get number of candidates
    function getCandidatesCount() public view returns (uint256) {
        return candidates.length;
    }

    // Vote for a candidate by index: 0, 1, 2, ...
    function vote(uint256 candidateId) public {
        require(!hasVoted[msg.sender], "You have already voted");
        require(candidateId < candidates.length, "Invalid candidate");

        hasVoted[msg.sender] = true;
        votes[candidateId] += 1;
    }

    // Get votes for a specific candidate
    function getVotes(uint256 candidateId) public view returns (uint256) {
        require(candidateId < candidates.length, "Invalid candidate");
        return votes[candidateId];
    }

    // Get the current winner (returns index and vote count)
    function getWinner() public view returns (uint256 winnerId, uint256 winnerVotes) {
        uint256 maxVotes = 0;
        uint256 winningCandidate = 0;

        for (uint256 i = 0; i < candidates.length; i++) {
            if (votes[i] > maxVotes) {
                maxVotes = votes[i];
                winningCandidate = i;
            }
        }

        return (winningCandidate, maxVotes);
    }
}