import React, { useState, useEffect } from "react";
import Header from "../components/Header";

import Web3 from "web3";
import axios from "axios";

function BudgetAllocation() {
  const [account, setAccount] = useState("");
  const [balanceInETH, setBalanceInETH] = useState(0);
  const [ethPriceInUSD, setEthPriceInUSD] = useState(0);

  useEffect(() => {
    async function loadWeb3() {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable(); // Request user permission to access their accounts
        const accounts = await window.web3.eth.getAccounts();
        setAccount(accounts[0]);
        const weiBalance = await window.web3.eth.getBalance(accounts[0]);
        const etherBalance = window.web3.utils.fromWei(weiBalance, "ether");
        setBalanceInETH(parseFloat(etherBalance));
      } else {
        console.log("Metamask is not installed!");
      }
    }
    loadWeb3();
  }, []);

  useEffect(() => {
    async function fetchData() {
      // Initialize Web3.js and fetch account and balance as before
      // ...

      // Fetch ETH price in USD from CoinGecko
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        );
        const ethPrice = response.data.ethereum.usd;
        setEthPriceInUSD(ethPrice);
      } catch (error) {
        console.error("Error fetching ETH price:", error);
      }
    }
    fetchData();
  }, []);

  // State to manage individual project budgets in USD
  const [budgetsInUSD, setBudgetsInUSD] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [projectBudgetInUSD, setProjectBudgetInUSD] = useState("");
  const [completionDate, setCompletionDate] = useState("");

  // Calculate the total budget in ETH
  const totalBudgetInETH = budgetsInUSD.reduce(
    (acc, budget) => acc + budget.amount / ethPriceInUSD,
    0
  );

  // Handle adding a new project budget in USD
  const handleAddBudget = () => {
    if (projectName && projectBudgetInUSD && completionDate) {
      // Convert the budget from USD to ETH
      const budgetInETH = parseFloat(projectBudgetInUSD) / ethPriceInUSD;

      // Deduct the budget from the balance in ETH
      setBalanceInETH(balanceInETH - budgetInETH);

      // Add the project budget in USD along with the completion date
      setBudgetsInUSD([
        ...budgetsInUSD,
        {
          name: projectName,
          amount: parseFloat(projectBudgetInUSD),
          completionDate: completionDate,
        },
      ]);

      setProjectName("");
      setProjectBudgetInUSD("");
      setCompletionDate("");
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 pt-[100px] text-center">
        <h1>Your Metamask Account: {account}</h1>
        <h1 className="text-2xl font-semibold mb-4">Budget Allocation</h1>
        <section action="none" className="w-[50%] mx-auto shadow-lg p-5">
          <div className="mb-4">
            <label className="block mb-2">Project Name:</label>
            <input
              type="text"
              className="border rounded-md p-2 w-full dark:bg-transparent"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Budget Amount (in USD):</label>
            <input
              type="number"
              className="border rounded-md p-2 w-full dark:bg-transparent"
              value={projectBudgetInUSD}
              onChange={(e) => setProjectBudgetInUSD(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Date of Completion:</label>
            <input
              type="date"
              className="border rounded-md p-2 w-full dark:bg-transparent"
              value={completionDate}
              onChange={(e) => setCompletionDate(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 mx-auto py-2 rounded-md"
            onClick={handleAddBudget}
          >
            Add Budget
          </button>
        </section>
        <div className="mt-8">
          <h2>Total Balance (in ETH): {balanceInETH.toFixed(2)} ETH</h2>
          <h2>
            Total Balance in USD: ${(balanceInETH * ethPriceInUSD).toFixed(2)}
          </h2>
          <h2>Total Budget (in ETH): {totalBudgetInETH.toFixed(2)} ETH</h2>
        </div>
      </div>
      <div className="projects container mx-auto text-center">
        <h2 className="text-xl font-semibold mb-2">
          Project Budgets (in USD):
        </h2>
        <div className="flex flex-wrap gap-2">
            {budgetsInUSD.map((budget, index) => (
              <div
                key={index}
                className="border w-[20%] rounded-md p-3 mb-4 flex flex-col items-center"
              >
                <h1>{budget.name}</h1>
                <h2>Estimated Budget : {budget.amount}</h2>
                <strong>Date of Completion:</strong> {budget.completionDate}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default BudgetAllocation;
