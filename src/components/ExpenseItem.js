import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem({ title, date, amount }) {
  return (
    <div>
      <div className="wrapper">
        <div className="bg">
          <div className="enclose">
            <div className="container">
              <ExpenseDate date={date} />

              <h1>{title}</h1>
              <h2 className="amount">${amount}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
