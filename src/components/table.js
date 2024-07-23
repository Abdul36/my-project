import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './TableComponent.css'; // Import CSS file for styling

const TableComponent = () => {
  const [showAll, setShowAll] = useState(false);

  // Function to format amount values
  const formatAmount = (amount) => {
    let amountClass = '';

    if (amount.startsWith('+')) {
      amountClass = 'amount-positive';
    } else if (amount.startsWith('-')) {
      amountClass = 'amount-negative';
    }

    return <span className={amountClass}>{amount}</span>;
  };

  // Function to get the style for each pocket type
  const getPocketClass = (pocket) => {
    switch (pocket) {
      case 'Credit':
        return { color: '#007bff', backgroundColor: '#e7f0ff' }; // Blue text, light blue background
      case 'Dining':
        return { color: '#fd7e14', backgroundColor: '#fff4e5' }; // Orange text, light orange background
      case 'Travel':
        return { color: '#20c997', backgroundColor: '#e6fffa' }; // Teal text, light teal background
      case 'Debit':
        return { color: '#dc3545', backgroundColor: '#f8d7da' }; // Red text, light red background
      default:
        return { color: 'black', backgroundColor: 'transparent' }; // Default styles
    }
  };

  // Sample transactions data
  const transactions = [
    { date: "01-14-2024", moola: "Uber Eats", amount: "+$70.25", pocket: "Credit", account: "Main" },
    { date: "01-14-2024", moola: "Spare Change", amount: "-$70.25", pocket: "Travel", account: "Main" },
    { date: "01-14-2024", moola: "Spare Change Saved!", amount: "+$500.50", pocket: "Debit", account: "Main" },
    { date: "01-14-2024", moola: "Uber Eats", amount: "+$70.25", pocket: "Credit", account: "Main" },
    { date: "01-14-2024", moola: "Spare Change", amount: "-$70.25", pocket: "Travel", account: "Main" },
    { date: "01-14-2024", moola: "Spare Change Saved!", amount: "+$500.50", pocket: "Debit", account: "Main" },
    { date: "01-14-2024", moola: "Uber Eats", amount: "+$70.25", pocket: "Credit", account: "Main" },
    { date: "01-14-2024", moola: "Spare Change", amount: "-$70.25", pocket: "Travel", account: "Main" },
    { date: "01-14-2024", moola: "Spare Change Saved!", amount: "+$500.50", pocket: "Debit", account: "Main" },
    // Add more transactions as needed
  ];

  // Determine which transactions to display based on showAll state
  const displayedTransactions = showAll ? transactions : transactions.slice(0, 6);

  // Define columns for AG Grid
  const columns = [
    { headerName: 'Date', field: 'date' },
    { headerName: 'Moola used for', field: 'moola' },
    {
      headerName: 'Amount',
      field: 'amount',
      cellRendererFramework: (params) => formatAmount(params.value),
    },
    {
      headerName: 'Pocket',
      field: 'pocket',
      cellRendererFramework: (params) => (
        <span className={`pocket-text ${getPocketClass(params.value)}`}>
          <span className="pocket-indicator"></span>
          {params.value}
        </span>
      ),
    },
    { headerName: 'Account', field: 'account' },
  ];

  // Toggle function for showing all transactions
  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold font-clash-display mb-2  ">Recent Transactions</h2>
        </div>
        <div className="font-inter">
          <h4 onClick={handleViewAll} className="cursor-pointer text-[#6200EE]">
            {showAll ? 'View Less' : 'View All'}
          </h4>
        </div>
      </div>
      <div className="ag-theme-alpine table-container font-inter" style={{ height: '34vh', width: '100%' }}>
        <AgGridReact
          rowData={displayedTransactions}
          columnDefs={columns}
          defaultColDef={{
            flex: 1,
            minWidth: 100,
            sortable: true,
            filter: false,
          }}
          pagination={false}
          domLayout="autoHeight"
        />
      </div>
    </div>
  );
};

export default TableComponent;
