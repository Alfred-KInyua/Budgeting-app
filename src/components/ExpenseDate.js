import React from 'react';
import './ExpenseDate.css';

function ExpenseDate({ date }) {
  const month = date.toLocaleString('en', { month: 'long' });
  const year = date.getFullYear();
  const day = date.toLocaleString('en', { day: '2-digit' });

  return (
    <>
      <div className="date">
        <div className="month">{month}</div>
        <div className="year">{year}</div>
        <div className="day">{day}</div>
      </div>
    </>
  );
}

export default ExpenseDate;
