import React from 'react';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div>
      <div className="container">
        <h1>{props.title}</h1>
        <h2>{props.date.toISOString()}</h2>
        <h2 className="amount">${props.amount}</h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
