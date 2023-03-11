import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import ExpenseForm from './NewExpense/ExpenseForm';

function Expenses({ expenses, moreData }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const elementFilter = expenses.filter((items) => {
    return items.date.getFullYear().string() === filteredYear;
  });
  const newExpenseHandler = (data) => {
    const elements = {
      ...data,
      id: Math.floor(Math.random() * 10) + 1,
    };
    moreData(elements);
  };
  return (
    <div className="App">
      <ExpenseForm data={newExpenseHandler} />
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {expenses.map((expe) => (
        <div>
          <ExpenseItem
            key={expe.id}
            title={expe.title}
            date={expe.date}
            amount={expe.amount}
          />
        </div>
      ))}
    </div>
  );
}

export default Expenses;
