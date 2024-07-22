import React, { useState } from "react";
import "./TableComponent.css"; // Import your CSS file if using a separate stylesheet

const TableComponent = () => {
  const [showAll, setShowAll] = useState(false);

  const formatAmount = (amount) => {
    if (amount.startsWith("+")) {
      return <span className="positive-value">{amount}</span>;
    } else if (amount.startsWith("-")) {
      return <span className="negative-value">{amount}</span>;
    }
    return amount;
  };

  const getPocketClass = (pocket) => {
    switch (pocket) {
      case "Credit":
        return "pocket-credit pocket-credit-shaded";
      case "Dining":
        return "pocket-dining pocket-dining-shaded";
      case "Travel":
        return "pocket-travel pocket-travel-shaded";
      case "Debit":
        return "pocket-debit pocket-debit-shaded";
      default:
        return "";
    }
  };

  const transactions = [
    { date: "01-14-2024", moola: "Uber Eats", amount: "+$1,400.77", pocket: "Credit", account: "Main" },
    { date: "01-14-2024", moola: "Spare Change", amount: "-$100.67", pocket: "Dining", account: "Main" },
    { date: "01-14-2024", moola: "Spare Change Saved!", amount: "+$350.06", pocket: "Credit", account: "Main" },
    { date: "01-14-2024", moola: "Uber Eats", amount: "-$150.00", pocket: "Debit", account: "Main" },
    { date: "01-14-2024", moola: "Spare Change", amount: "-$70.25", pocket: "Travel", account: "Main" },
    { date: "01-14-2024", moola: "Spare Change Saved!", amount: "-$500.50", pocket: "Credit", account: "Main" },
    { date: "01-14-2024", moola: "Uber Eats", amount: "+$1,400.77", pocket: "Credit", account: "Main" },
    { date: "01-14-2024", moola: "Spare Change", amount: "-$100.67", pocket: "Dining", account: "Main" },
    { date: "01-14-2024", moola: "Spare Change Saved!", amount: "+$350.06", pocket: "Credit", account: "Main" },
    { date: "01-14-2024", moola: "Uber Eats", amount: "-$150.00", pocket: "Debit", account: "Main" },
  ];

  const displayedTransactions = showAll ? transactions : transactions.slice(0, 5);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-lg font-bold">Recent Transactions</h2>
        </div>
        <div>
          <h4 onClick={() => setShowAll(!showAll)} className="cursor-pointer text-blue-500">
            {showAll ? "View Less" : "View All"}
          </h4>
        </div>
      </div>
      <div className="overflow-auto h-80 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <table className="styled-table min-w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th>Moola used for</th>
              <th>Amount</th>
              <th>Pocket</th>
              <th>Account</th>
            </tr>
          </thead>
          <tbody>
            {displayedTransactions.map((transaction, index) => (
              <tr key={index}>
                <td className="date-column">{transaction.date}</td>
                <td className="moola-column">{transaction.moola}</td>
                <td>{formatAmount(transaction.amount)}</td>
                <td>
                  <span className={`pocket-text ${getPocketClass(transaction.pocket)}`}>
                    <span className={`pocket-indicator pocket-${transaction.pocket.toLowerCase()}`}></span>
                    {transaction.pocket}
                  </span>
                </td>
                <td className="account-column">{transaction.account}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
