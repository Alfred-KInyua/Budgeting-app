import React, { useState } from 'react';
import './NewExpense.css';

function ExpenseForm() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  const AmountHandler = (e) => {
    setAmount(e.target.value);
  };
  return (
    <form>
      <div className="outercontainer">
        <div className="wrapperform">
          <div className="titlecontrol">
            <label>{title}</label>
            <br />
            <input type="text" onChange={titleHandler} />
          </div>
          <div className="titlecontrol">
            <label>{date}</label> <br />
            <input
              type="date"
              min="2019-1-1"
              max="2023-12-31"
              onChange={dateHandler}
            />
          </div>
          <div className="amountcontrol">
            <label>{amount}</label> <br />
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={AmountHandler}
            />
          </div>
          <div className="amountcontrol">
            <button>Add Expense</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
