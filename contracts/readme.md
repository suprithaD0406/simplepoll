# 🗳 SimplePoll – Blockchain Voting Smart Contract

A beginner-friendly decentralized voting application (DApp) built using **Solidity** and deployed on a blockchain network.  
This project demonstrates how a very simple **Yes/No poll** can operate securely and transparently using smart contract technology.

---

## 📘 Project Description

SimplePoll is a smart contract that allows anyone to vote on a blockchain-stored poll question:

> **“Do you like blockchain?”**

Each wallet address can vote only once, making the poll fair and tamper-proof.  
Smart contracts ensure full transparency — votes are counted on-chain and can be viewed anytime.

---

## ⭐ What It Does

✔ Stores a poll question on the blockchain  
✔ Allows users to vote **YES** or **NO**  
✔ Prevents double voting using wallet address tracking  
✔ Shows real-time vote counts  
✔ Shows the total number of votes cast  

---

## 🚀 Features

| Feature | Description |
|--------|-------------|
| Public Question | Anyone can read the poll question |
| One Vote Per Address | Ensures fairness with a mapping check |
| Transparent Results | On-chain counting visible to everyone |
| Beginner-Friendly | Simple, clean functions and logic |
| Deployable Anywhere | Testnets, local VM, or mainnet |

---

## 🔗 Deployed Smart Contract

You can view & verify the deployment here:

👉 **https://coston2-explorer.flare.network//tx/0xd284a72c343585f553bb22be764ad561339c2eedfd6e2e505b423ae56c87a4e7**

📌 Network: **Coston2 (Flare Testnet)**

---

## 📜 Smart Contract Code (Solidity)

> Replace `//paste your code` with your actual smart contract code

```solidity
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
🛠 Tools Used
Solidity

Remix IDE

MetaMask / Web3 Wallet

Flare Test Network – Coston2

📌 Future Improvements
Allow poll creator to set a custom question

Add voting time limits

Support multiple poll options instead of Yes/No

Add a simple React/HTML UI for users to vote from browser

👩‍💻 Author
Name: XXX
GitHub: XXX
Project Version: 1.0.0

⭐ If you found this useful, give the repo a star!
Blockchain learning made simple 🚀🧠

yaml
Copy code

---

If you'd like, I can:

✨ Add visuals (badges, banners, emojis)
🌐 Create a frontend UI to interact with the poll
🧪 Provide test scripts using Hardhat
🔒 Add admin controls and poll deadlines

Would you like me to create a **GitHub project structure** for you as well?
