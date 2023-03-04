import React, { useState } from 'react';
import './NewExpense.css';

function ExpenseForm({ data }) {
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
  const submitHandler = (e) => {
    e.preventDefault();
    const dataElements = {
      title: title,
      date: new Date(date),
      amount: amount,
    };
    data(dataElements);
    setAmount('');
    setDate('');
    setTitle('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="outercontainer plus">
        <div className="wrapperform">
          <div className="titlecontrol">
            <label>title</label>
            <br />
            <input type="text" value={title} onChange={titleHandler} />
          </div>
          <div className="titlecontrol myTitle">
            <label>date</label> <br />
            <input
              type="date"
              min="2019-1-1"
              max="2023-12-31"
              value={date}
              onChange={dateHandler}
            />
          </div>
          <div className="amountcontrol">
            <label>amount</label> <br />
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={AmountHandler}
            />
          </div>
          <div className="amountcontrol">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
