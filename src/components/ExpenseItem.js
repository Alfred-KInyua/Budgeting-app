import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date();
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 345;
  return (
    <div>
      <div className="container">
        <h1>{expenseDate.toISOString()}</h1>
        <h2>{expenseTitle}</h2>
        <h2 className="amount">${expenseAmount}</h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
