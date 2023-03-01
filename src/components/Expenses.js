import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import ExpenseForm from './NewExpense/ExpenseForm';

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div className="App">
      <ExpenseForm />
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {expenses.map((expe) => (
        <div key={expe.id}>
          <ExpenseItem
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
