import React from "react";

const AddTransactions = () => {
  return (
    <header className="flex items-center justify-center">
      <main className="w-3xl">
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
        <div className="flex text-center items-center justify-center rounded-4xl">
        <button className="bg-green-600 text-white cursor-pointer p-3 hover:bg-green-800">Add Transaction</button>
        </div>
      </main>
    </header>
  );
};

export default AddTransactions;
