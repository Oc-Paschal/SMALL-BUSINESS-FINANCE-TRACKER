import React, { useState } from "react";
import Dashboard from "./Dashboard";

const AddTransactions = ({ setTransactions }) => {
  const [Amount, setAmount] = useState("");
  const [Category, setCategory] = useState("");
  const addTransaction = () => {
    const newTransaction = {
      id: Date.now(),
      amount: Number(Amount),
      category: Category,
      date: new Date().toLocaleDateString(),
    };

    setTransactions((prev) => [...prev, newTransaction]);

    setAmount("");
    setCategory("");
  };
  return (
    <header className="bg-white p-2 mt-3 border border-1 border-gray-300 rounded-md">
      <div className="text-xl font-semibold">
        <h1>Add Transaction</h1>
      </div>
      <hr className=" border border-1 border-gray-200" />
      <div className="flex gap-3 p-2">
        <div>
          <input
            type="number"
            placeholder="Amount"
            className="border border-1 rounded-md"
            value={Amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <select
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-md w-46"
          >
            <option value="" disabled>
              Select Category
            </option>

            <option value="Income">Income</option>
            <option value="Expenses">Expenses</option>
          </select>
        </div>
      </div>
      <hr className=" border border-1 border-gray-200" />
      <div className="flex text-center items-center justify-center m-2">
        <button
          onClick={addTransaction}
          className="bg-green-600 text-white cursor-pointer p-2 hover:bg-green-800 rounded-md"
        >
          Add Transaction
        </button>
      </div>
    </header>
  );
};

export default AddTransactions;
