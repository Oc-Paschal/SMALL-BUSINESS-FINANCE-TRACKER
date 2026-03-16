import React from "react";

function TransactionTable({ Transactions = [] }) {
  return (
    <div>
      <h2 className="text-sm font-medium  mb-2">Transaction History</h2>
      <table
        border="1"
        cellPadding="10"
        className="w-full border-separate border-spacing-x-2"
      >
        <thead>
          <tr>
            <th className="text-left p-1">Date</th>
            <th className="text-left p-1">Category</th>
            <th className="text-left p-1">Amount</th>
          </tr>
        </thead>

        <tbody>
          {Transactions.map((t) => (
            <tr key={t.id}>
              <td className="p-3">{t.date}</td>
              <td className="p-3">{t.category}</td>
              <td
                className={
                  t.category === "Income"
                    ? "text-green-600 font-semibold p-3"
                    : "text-red-600 font-semibold p-3"
                }
              >
                ₦{t.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
