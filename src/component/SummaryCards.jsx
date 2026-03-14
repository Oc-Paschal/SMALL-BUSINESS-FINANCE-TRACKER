import React from "react";
import { FaMoneyBillWave, FaCreditCard, FaChartLine } from "react-icons/fa";

const SummaryCards = () => {
  return (
    <section className="flex items-center justify-center">
      <main className="w-3xl">
        <div className="text-center p-4">
          <h1 className="text-3xl font-bold font-serif">
            SMALL BUSINESS FINANCE TRACKER
          </h1>
        </div>
        <div className="grid grid-cols-3 text-white gap-8 ">
          <div className=" flex bg-green-600 gap-3 rounded-md p-2 ">
            <div>
              <FaMoneyBillWave className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-bold">TOTAL INCOME</h1>
              <p className="font-semibold">N150,000</p>
            </div>
          </div>
          <div className=" flex bg-red-600 gap-3 rounded-md p-2">
            <div>
              <FaCreditCard className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-bold">TOTAL EXPENSES</h1>
              <p className="font-semibold">N80,000</p>
            </div>
          </div>
          <div className=" flex bg-blue-600 gap-3 rounded-md p-2">
            <div>
              <FaChartLine className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-bold">TOTAL PROFIT</h1>
              <p className="font-semibold">N70,000</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default SummaryCards;
