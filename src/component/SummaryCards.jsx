import React from "react";
import { FaMoneyBillWave, FaCreditCard, FaChartLine } from "react-icons/fa";

const SummaryCards = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.category === "Income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.category === "Expenses")
    .reduce((acc, t) => acc + t.amount, 0);

  const profit = income - expenses;

  return (
    <section>
      <div className="text-center p-4">
        <h1 className="text-3xl font-bold font-serif">
          SMALL BUSINESS FINANCE TRACKER
        </h1>
      </div>

      <div className="grid grid-cols-3 text-white gap-8">
        <div className="flex bg-green-600 gap-3 rounded-md p-4 items-center">
          <FaMoneyBillWave className="w-8 h-8" />
          <div>
            <h1 className="font-bold">TOTAL INCOME</h1>
            <p className="font-semibold">₦{income}</p>
          </div>
        </div>

        <div className="flex bg-red-600 gap-3 rounded-md p-4 items-center">
          <FaCreditCard className="w-8 h-8" />
          <div>
            <h1 className="font-bold">TOTAL EXPENSES</h1>
            <p className="font-semibold">₦{expenses}</p>
          </div>
        </div>

        <div className="flex bg-blue-600 gap-3 rounded-md p-4 items-center">
          <FaChartLine className="w-8 h-8" />
          <div>
            <h1 className="font-bold">TOTAL PROFIT</h1>
            <p className="font-semibold">₦{profit}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummaryCards;
