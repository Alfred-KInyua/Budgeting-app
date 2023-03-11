import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses';
const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 885.23,
    date: new Date(2019, 2, 4),
  },
  {
    id: 'e2',
    title: 'Car insurance',
    amount: 85.89,
    date: new Date(2020, 2, 6),
  },
  {
    id: 'e3',
    title: 'Sugar Cane',
    amount: 59.53,
    date: new Date(2021, 2, 20),
  },
  {
    id: 'e4',
    title: 'Demio Mazda',
    amount: 45.77,
    date: new Date(2022, 2, 6),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  const appHandler = (data) => {
    setExpenses((prevExpense) => [data, ...prevExpense]);
  };
  return (
    <>
      <h1>App file</h1>

      <Expenses expenses={expenses} moreData={appHandler} />
    </>
  );
}
export default App;
