import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense({ someData }) {
  const onsavedata = (receivedData) => {
    const elements = {
      ...receivedData,
      id: Math.floor(Math.random() * 10) + 1,
    };
    someData(elements);
  };
  return (
    <>
      <ExpenseForm data={onsavedata} />
    </>
  );
}

export default NewExpense;
