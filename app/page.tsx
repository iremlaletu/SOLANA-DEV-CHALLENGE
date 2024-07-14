"use client";

import React, { useState } from "react";

interface Transaction {
  signature: string;
  blockTime: number;
  slot: number;
}

export default function BalanceChecker() {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [balance, setBalance] = useState<number | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleCheckBalance = async () => {
    const response = await fetch("/api/balance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ walletAddress }),
    });

    const data = await response.json();
    setBalance(data.balance);

    const transactionResponse = await fetch("/api/transactionHistory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ walletAddress }),
    });

    const transactionData = await transactionResponse.json();
    setTransactions(transactionData.transactions || []);
  };

  const formatBlockTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };

  const handleClear = () => {
    setWalletAddress("");
  };

  return (
    <div className="max-w-md mx-auto flex flex-col items-center justify-center">
      <h1 className="text-2xl text-white font-bold mb-6">
        Solana Wallet Balance Checker
      </h1>

      <div className="mb-6 flex">
        <input
          id="walletAddress"
          type="text"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          className="w-96 px-4 py-3 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500  border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
          placeholder="Search"
        />
        <button
          onClick={handleCheckBalance}
          className="w-40 h-20 flex justify-center items-center text-sky-200 border-2 rounded-l border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
        >
          Check Balance
        </button>
        <button
          onClick={handleClear}
          className="w-40 h-20 flex justify-center items-center text-sky-200 border-2 rounded-l border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_10px_#08f,0_0_20px_#ff00a2]"
        >
          Clear
        </button>
      </div>

      {balance !== null && (
        <div className="mt-8">
          <p className="text-xl font-medium">Wallet Balance:</p>
          <p className="text-4xl font-semibold text-green-600">{balance} SOL</p>
        </div>
      )}

      {transactions.length > 0 && (
        <div className="my-8">
          <p className="text-xl font-medium">Transaction History:</p>
          <table className="w-full table-auto border-collapse border border-gray-500 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Signature</th>
                <th className="px-4 py-2">Block Time</th>
                <th className="px-4 py-2">Slot</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td className="border text-rose-50 px-4 py-2">
                    {transaction.signature}
                  </td>
                  <td className="border text-rose-50 px-4 py-2">
                    {formatBlockTime(transaction.blockTime)}
                  </td>
                  <td className="border text-rose-50 px-4 py-2">
                    {transaction.slot}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
