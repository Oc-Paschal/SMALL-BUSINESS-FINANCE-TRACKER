import React from "react";

const AddTransactions = () => {
  return (
    <header>
      <div className="text-xl font-semibold">
        <h1>Add Transaction</h1>
      </div>
      <hr />
      <div className="flex gap-3 p-2">
        <div>
          <input
            type="number"
            placeholder="Amount"
            className="border border-1 rounded-md"
          />
        </div>
        <div>
          <select
            name="selectcategory"
            className="border border-1 rounded-md w-46"
          >
            <option selected disabled>
              Select Category
            </option>
            <option value="Income"> Income</option>
            <option value="Expenses">Expenses</option>
          </select>
        </div>
      </div>
      <hr />
      <div className="flex text-center items-center justify-center m-2">
        <button className="bg-green-600 text-white cursor-pointer p-2 hover:bg-green-800 rounded-md">
          Add Transaction
        </button>
      </div>
    </header>
  );
};

export default AddTransactions;
