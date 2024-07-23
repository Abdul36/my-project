import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './TableComponent.css'; // Import CSS file for styling

const TableComponent = () => {
  const [showAll, setShowAll] = useState(false);

  // Function to format amount values
  const formatAmount = (amount) => {
    if (amount.startsWith('+')) {
      return <span style={{ color: 'green' }}>{amount}</span>;
    } else if (amount.startsWith('-')) {
      return <span style={{ color: 'red' }}>{amount}</span>;
    }
    return <span>{amount}</span>; // Ensure consistent styling
  };

  // Function to get the CSS class for each pocket type
  const getPocketClass = (pocket) => {
    switch (pocket) {
      case 'Credit':
        return 'pocket-credit';
      case 'Dining':
        return 'pocket-dining';
      case 'Travel':
        return 'pocket-travel';
      case 'Debit':
        return 'pocket-debit';
      default:
        return '';
    }
  };

  // Sample transactions data
  const transactions = [
    {
      date: "01-14-2024",
      moola: "Spare Change",
      amount: "-$70.25",
      pocket: "Travel",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change Saved!",
      amount: "-$500.50",
      pocket: "Debit",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change",
      amount: "-$70.25",
      pocket: "Travel",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change Saved!",
      amount: "-$500.50",
      pocket: "Debit",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change",
      amount: "-$70.25",
      pocket: "Travel",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change Saved!",
      amount: "-$500.50",
      pocket: "Debit",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change",
      amount: "-$70.25",
      pocket: "Travel",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change Saved!",
      amount: "-$500.50",
      pocket: "Debit",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change",
      amount: "-$70.25",
      pocket: "Travel",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change Saved!",
      amount: "-$500.50",
      pocket: "Debit",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change",
      amount: "-$70.25",
      pocket: "Travel",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change Saved!",
      amount: "-$500.50",
      pocket: "Debit",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change",
      amount: "-$70.25",
      pocket: "Travel",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change Saved!",
      amount: "-$500.50",
      pocket: "Debit",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change",
      amount: "-$70.25",
      pocket: "Travel",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change Saved!",
      amount: "-$500.50",
      pocket: "Debit",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change",
      amount: "-$70.25",
      pocket: "Travel",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change Saved!",
      amount: "-$500.50",
      pocket: "Debit",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change",
      amount: "-$70.25",
      pocket: "Travel",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change Saved!",
      amount: "-$500.50",
      pocket: "Debit",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change",
      amount: "-$70.25",
      pocket: "Travel",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change Saved!",
      amount: "-$500.50",
      pocket: "Debit",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change",
      amount: "-$70.25",
      pocket: "Travel",
      account: "Main",
    },
    {
      date: "01-14-2024",
      moola: "Spare Change Saved!",
      amount: "-$500.50",
      pocket: "Debit",
      account: "Main",
    },
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
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-lg font-bold font-clash-display">Recent Transactions</h2>
        </div>
        <div className="font-inter">
          <h4 onClick={handleViewAll} className="cursor-pointer text-[#6200EE]">
            {showAll ? 'View Less' : 'View All'}
          </h4>
        </div>
      </div>
      <div className="ag-theme-alpine table-container" style={{ width: '100%' }}>
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
