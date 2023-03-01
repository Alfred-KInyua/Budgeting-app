import React from 'react';

function ExpenseFilter({ selected, onChangeFilter }) {
  const dropdownChnageHandler = (e) => {
    onChangeFilter(e.target.value);
  };
  return (
    <div>
      <label>Filter by year </label>
      <select value={selected} onChange={dropdownChnageHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
