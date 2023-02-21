import React from 'react';
import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const buttonHandler = (e) => {
    setTitle('Hello world');
  };
  return (
    <div>
      <div className="wrapper">
        <div className="bg">
          <div className="enclose">
            <div className="container">
              <ExpenseDate date={props.date} />
              <h1>{title}</h1>
              <h2 className="amount">${props.amount}</h2>
              <button onClick={buttonHandler}> Change title</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
